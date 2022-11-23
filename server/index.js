// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const corsOptions = {
  origin: ["http://localhost:3000"],
  exposedHeaders: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["fantasticMrFox"],
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
const homeRoutes = require("./routes/home");
// const navigationRoutes = require("./routes/navigation");
// const menuRoutes = require("./routes/menu.js");

// Mount all resource routes
// app.use("/api/menu", menuRoutes(db));
// app.use("/api/navigation", navigationRoutes(db));
app.use("/api/users", userRoutes(db));
app.use("/api/home", homeRoutes(db));

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/api", (req, res) => {
  res.send({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
