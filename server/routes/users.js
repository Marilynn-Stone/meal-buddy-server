/*
consider all of this pseudo for now
*/

const router = require("express").Router();
const bcrypt = require("bcryptjs");

require("dotenv").config();
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTHTOKEN;
// const client = require("twilio")(accountSid, authToken);

module.exports = (db) => {
  // sends a text to a registered user when their order is complete.
  // const textMessage = function (req) {
  //   if (req.session.customerCookie.cellphone_number) {
  //     client.messages
  //       .create({
  //         body: `Here's your shopping list, ${req.session.customerCookie.first_name}!`,
  //         from: "+16479055250",
  //         to: req.session.customerCookie.cellphone_number,
  //       })
  //       .then((message) => console.log(message.sid));
  //   }
  // };

  // psuedo code guess at DB query for 28 items in a full week menu
  // const getMenu = function (userId) {
  //   return db.query(
  //     `SELECT id, meal_name, description, image FROM menu
  //     WHERE user.id = $1
  //     GROUP BY id, orders.id;`,
  //     [userId]
  //   );
  // };

  // psuedo code guess at DB query for single item complete details
  // const getMeal = function (mealId) {
  //   return db.query(
  //     `SELECT id, meal_name, description, image, recipe?, cooking_directions?  FROM menus
  //   WHERE id = $1;`,
  //     [mealId]
  //   );
  // };

  // accepts data and writes new user data to the DB. Checks if email address exists before adding new user.
  // when registration is accepted, places a customerCookie and auto-logs in the new user.
  // Hashes all passwords. (code heavily borrowed from previous projects)
  // router.post("/signup", (req, res) => {
  //   const hashedPassword = bcrypt.hashSync(req.body.password_input, 10);
  //   const first_name = req.body.first_name;
  //   const last_name = req.body.last_name;
  //   const email = req.body.email;
  //   const cellphone_number = "+1" + req.body.cellphone_number;
  //   const insertArray = [
  //     first_name,
  //     last_name,
  //     email,
  //     hashedPassword,
  //     cellphone_number,
  //   ];
  //   if (
  //     !first_name ||
  //     !last_name ||
  //     !email ||
  //     !req.body.password_input ||
  //     !cellphone_number
  //   ) {
  //     res.send(
  //       "Error 400: All fields are mandatory. Please complete the form and resubmit."
  //     );
  //   }
  //   db.query(`SELECT email FROM customers WHERE email = $1;`, [email]).then(
  //     (data) => {
  //       if (data.rows.length === 0) {
  //         // console.log('no data.rows');
  //         db.query(
  //           `INSERT INTO users (first_name, last_name, email, password, cellphone_number) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
  //           insertArray
  //         )
  //           .then((data) => {
  //             req.session.customerCookie = data.rows[0];
  //             res.redirect("/home?"); //**** need location of redirect */
  //           })
  //           .catch((err) => {
  //             res.send(err.message);
  //           });
  //       } else {
  //         res.send("user already exists, please login.");
  //       }
  //     }
  //   );
  // });

  // standard login. places customerCookie object with all relevent customer details.
  // router.post("/login", (req, res) => {
  //   //From Paul
  //   console.log(req.body);
  //   res.send("received");

  // res.send({
  //   token: "test123",
  // });
  // });

  router.get("/login", (req, res) => {
    // const user = users[req.session.userID];
    // const email = req.param.email;
    // const password = req.params.password;
  });

  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      res.status(400).send("Please enter Username and Password!");
    }

    db.query(`SELECT * FROM users WHERE email = $1;`, [email]).then((data) => {
      if (data.rows.length === 0) {
        res.send("Incorrect Username and/or Password!");
      } else if (bcrypt.compareSync(password, data.rows[0].password)) {
        req.session.userID = data.rows[0].user_id;
        res.json(data);
      } else {
        res.status(400).send("Password does not match. Please try again.");
      }
    });
  });

  return router;
};
