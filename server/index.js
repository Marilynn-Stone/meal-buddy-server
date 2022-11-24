// load .env data into process.env
require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 3001;
const cors = require("cors");
const morgan = require("morgan");
const cookieSession = require('cookie-session')

const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSaltSync(10);


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

app.use(cookieSession({
  name: 'session',
  keys: ['fantasticMrFox'],

  // Cookie Options
  maxAge: 60 * 1000 // 1 hour (24h format was 24 * 60 * 60 * 1000)
}))


app.get("/", (req, res) => {
  res.send("message: Hello from server!");
});

app.post("/login", (req, res) => {
  db.query(
    `SELECT * FROM users
      WHERE email = $1`, [req.body.email])
      .then((dbres) => {
        if (!dbres.rowCount) {
          res.send("User does not exist. Please create a profile.");
        } else if (bcrypt.compareSync(req.body.password, dbres.rows[0].password)) {
            res.send(dbres.rows[0]);
        } else {
            res.send("Passwords do not match, please try again");
        };
      }).catch((err) => console.log(err))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
