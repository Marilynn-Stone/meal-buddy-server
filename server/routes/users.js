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

  // router.post("/signUp", (req, res) => {
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
  //     res
  //       .status(403)
  //       .send(
  //         "All fields are mandatory. Please complete the form and resubmit."
  //       );
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
  //         res.send("User already exists, please login.");
  //       }
  //     }
  //   );
  //   users[id] = newUser;
  //   res.cookie("userID", `${id}`);
  //   res.json();
  // });

  router.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const phone_number = req.body.phoneNumber;

    const caloricTarget = req.body.caloricTarget;
    const dietCategory = req.body.dietCategory;
    const gluten = req.body.gluten;
    const lactose = req.body.lactose;
    const peanut = req.body.peanut;
    const fish = req.body.fish;
    const egg = req.body.egg;
    const shellfish = req.body.shellfish;
    const tree_nuts = req.body.treeNuts;
    const soy = req.body.soy;
    const sesame = req.body.sesame;

    console.log(req.body);
    return db
      .query(
        "INSERT INTO users (first_name, last_name, email, password, cellphone_number) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
        [first_name, last_name, email, password, phone_number]
      )
      .then((data) => {
        const user_id = data.rows[0].id;
        return db.query(
          "INSERT INTO diet (user_id, caloric_target, dietary_category, gluten, lactose, peanut, fish, egg, shellfish, tree_nuts, soy, sesame) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);",
          [
            user_id,
            caloricTarget,
            dietCategory,
            gluten,
            lactose,
            peanut,
            fish,
            egg,
            shellfish,
            tree_nuts,
            soy,
            sesame,
          ]
        );
      })
      .then(() => {
        res.send("success");
      });
  });

  // standard login. places customerCookie object with all relevent customer details.
  // router.post("/login", (req, res) => {
  //   //From Paul
  //   console.log(req.body);
  //   res.send("received");

  router.get("/login", (req, res) => {
    res.send("GET login");
  });

  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      res.status(400).send("Please enter Username and Password!");
    }
    db.query(`SELECT * FROM users WHERE email = $1;`, [email]).then((data) => {
      console.log(data.rows[0]);
      if (data.rows.length === 0) {
        res.status(403).send("User does not exist. Please sign up.");
      } else if (bcrypt.compareSync(password, data.rows[0].password)) {
        req.session.userID = data.rows[0].id;
        res.json(req.session.userID);
      } else {
        res.status(403).send("Incorrect Username and/or Password!");
      }
    });
  });

  return router;
};
