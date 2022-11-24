// load .env data into process.env
require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 3001;
const cors = require("cors");
const morgan = require("morgan");


// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("message: Hello from server!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("received");
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
