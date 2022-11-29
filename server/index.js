// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const app = express();

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect(console.log("Database is connected"));

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
app.use(morgan("dev"));

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.cookie_secret],
  })
);

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
const navigationRoutes = require("./routes/navigation");
const menuRoutes = require("./routes/menu.js");

// Mount all resource routes
app.use("/menu", menuRoutes(db));
app.use("/navigation", navigationRoutes(db));
app.use("/users", userRoutes(db));

app.get("/", (req, res) => {
  const user = req.session.userID;
  if (user) {
    res.send("Authorized user.");
  } else {
    res.send("Please log in.");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
