// load .env data into process.env
require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 3001;
const cors = require("cors");
const morgan = require("morgan");

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const { UserInstance } = require("twilio/lib/rest/conversations/v1/user");
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
  db.query(
    `SELECT * FROM users
      WHERE email = $1`, [req.body.email])
      .then((response) => {
        //console.log(response.rows);
        // console.log('res.rows[0].password ', response.rows[0].password)
        // console.log(bcrypt.hashSync(req.body.password, salt));
        if (bcrypt.compareSync(req.body.password, response.rows[0].password)) {
          res.send(response.rows[0]);
        } else {
          res.send("passwords do not match");
        };
      }).catch((err) => console.log(err))
  // res.send("received");
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
