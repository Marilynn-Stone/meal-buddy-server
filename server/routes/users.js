const router = require("express").Router();
const bcrypt = require("bcryptjs");
const axios = require("axios");

require("dotenv").config();

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
  router.post("/accountInfo", (req, res) => {
    const userID = req.get("userID");
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);
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
    console.log("CONSOLE LOGGING", req.body);
    return db
      .query(
        `UPDATE users
      SET
      email = '${email}',
      password = '${password}',
      first_name = '${first_name}',
      last_name = '${last_name}',
      cellphone_number = '${phone_number}'
       WHERE id = ${userID};`
      )
      .then(() => {
        return db.query(
          `UPDATE user_diets
        set
        caloric_target = '${caloricTarget}',
        dietary_category = '${dietCategory}',
        gluten = '${gluten}',
        lactose = '${lactose}',
        peanut = '${peanut}',
        fish = '${fish}',
        egg = '${egg}',
        shellfish = '${shellfish}',
        tree_nuts = '${tree_nuts}',
        soy = '${soy}',
        sesame = '${sesame}'
        WHERE user_id = ${userID}`
        );
      });
  });

  //-----------------------------------------------------------------------------

  router.get("/accountInfo", (req, res) => {
    console.log("req.body", req.body);
    const userID = req.get("userID");
    return db
      .query(
        `SELECT * FROM users LEFT JOIN user_diets ON users.id = user_diets.user_id WHERE users.id = ${userID}`
      )
      .then((result) => {
        console.log("result", result);
        res.send(result.rows[0]);
      });
  });

  router.get("/:userID", (req, res) => {
    console.log("req.params", req.params);
    const userID = req.params.userID;
    return db
      .query(`SELECT * FROM users WHERE id = ${userID}`)
      .then((result) => {
        console.log("result", result);
        res.send(result.rows[0]);
      });
  });

  //-----------------------------------------------------------------------------
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //-----------------------------------------------------------------------------
  router.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);
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
    //---------------------------------------------------------
    const getUserByEmail = (email) => {
      return db
        .query(`SELECT * FROM users WHERE email = $1`, [email])
        .then((result) => {
          return result.rows;
        })

        .catch((err) => console.log(err.message));
    };
    //---------------------------------------------------------
    function containsSpecialChars(str) {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }
    //---------------------------------------------------------
    // console.log(req.body);
    getUserByEmail(email).then((result) => {
      console.log("THIS IS THE RESULT", result[0]);
      const user = result[0];

      if (user) {
        return res
          .status(403)
          .send("An account with this email already exists");
      } else if (
        !first_name ||
        !last_name ||
        !email ||
        !password ||
        !phone_number
      ) {
        return res
          .status(403)
          .send(
            "All fields are mandatory. Please complete the form and resubmit."
          );
      } else if (
        req.body.password.length < 8 ||
        !containsSpecialChars(req.body.password)
      ) {
        return res.send(
          "please enter a password of 8 or more characters and include a special character"
        );
      } else {
        const headers = {
          headers: {
            "x-api-key": process.env.SPOONACULARAPIKEY,
            "Accept-Encoding": "application/json",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
        const data = {
          username: first_name + last_name,
          firstName: first_name,
          lastName: last_name,
          email: email,
        };

        return axios
          .post(`https://api.spoonacular.com/users/connect`, data, headers)
          .then((data) => {
            console.log("spoonacular user response", data.data);
            return data.data;
          })
          .then((data) => {
            return db.query(
              "INSERT INTO users (first_name, last_name, email, password, cellphone_number, spoonacular_username, spoonacular_hash) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
              [
                first_name,
                last_name,
                email,
                password,
                phone_number,
                data.username,
                data.hash,
              ]
            );
          })
          .then((data) => {
            const user_id = data.rows[0].id;
            res.status(200).send({ user: data.rows[0].id });
            return db.query(
              "INSERT INTO user_diets (user_id, caloric_target, dietary_category, gluten, lactose, peanut, fish, egg, shellfish, tree_nuts, soy, sesame) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;",
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
          });
      }
    });
  });

  // router.get("/login", (req, res) => {

  // });

  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      res.status(400).send("Please enter Username and Password!");
    }
    db.query(`SELECT * FROM users WHERE email = $1;`, [email]).then((data) => {
      console.log("login post data:", data.rows[0]);
      if (data.rows.length === 0) {
        res.status(400).send("User does not exist. Please sign up.");
      }
      if (!bcrypt.compareSync(password, data.rows[0].password)) {
        res.status(400).send("Incorrect Username and/or Password!");
      }
      req.session.userID = data.rows[0].user_id;
      console.log("req.session.userID:", data.rows[0].id);
      res.status(200).send({ user: data.rows[0].id });
    });
  });

  return router;
};
