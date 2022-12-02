const router = require("express").Router();
const bcrypt = require("bcryptjs");
const getRecipeRenderObject = require("../../helperFunctions/getRecipeRenderObject");
const axios = require("axios");

require("dotenv").config();

module.exports = (db) => {

  router.post("/weekly_menu", (req, res) => {
    console.log("user ID: ", req.body.user_id);
    db.query(
      `SELECT meals.id, spoonacular_id, day, category, title AS name FROM meals JOIN menus ON menu_id = menus.id JOIN users ON menus.user_id = users.id WHERE users.id = $1;`,
      [req.body.user_id]
    )
    .then((data) => {
      console.log("database result: ", JSON.stringify(data.rows.reverse()));
      if (data.rows.length !== 0) {
        res.send(data.rows.reverse());
      } else {
        db.query(
          `INSERT INTO menus (user_id) VALUES ('${req.body.user_id}') RETURNING id;`
          ).then((data) => {
            const menu_id = data;
            axios.
          })
      }
    })
    .catch((err) => {
      console.log(err);
    });
  });

  router.get("/meal/:id", (req, res) => {
    axios.got(`https://api.spoonacular.com/recipes/${req.params.id}/information`)
      .then((data) => {
        res.send(getRecipeRenderObject(data))
      })
      .catch((err) => {
        console.log(err);
      })
  });

  return router;
};

