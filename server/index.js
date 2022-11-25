// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
// const cookieSession = require("cookie-session");
const app = express();

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Add cors options
const corsOptions = {
  origin: ["http://localhost:3000"],
  exposedHeaders: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "process.env.session_secret",
    resave: false,
    saveUninitialized: false,
  })
);

// app.use(
//   cookieSession({
//     name: "session",
//     keys: process.env.cookie_secret,
//   })
// );

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

// Separated Routes for each Resource

const userRoutes = require("./routes/users");
const homeRoutes = require("./routes/home");
// const navigationRoutes = require("./routes/navigation");
// const menuRoutes = require("./routes/menu.js");

// Mount all resource routes
// app.use("/api/menu", menuRoutes(db));
// app.use("/api/navigation", navigationRoutes(db));
app.use("/api/users", userRoutes(db));
app.use("/api/home", homeRoutes(db));

// Home page
app.get("/", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/api/home");
  // } else {
  //   res.redirect("/api/users/login");

  res.sendFile("index.html", {
    root: path.join(__dirname, "../../meal-buddy-client/public"),
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
