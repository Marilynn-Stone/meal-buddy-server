const router = require("express").Router();
const bcrypt = require("bcryptjs");
const getRecipeRenderObject = require("../../helperFunctions/getRecipeRenderObject");

require("dotenv").config();

module.exports = (db) => {

  router.post("/weekly_menu", (req, res) => {
    console.log(req.body);
    db.query(
      `SELECT spoonacular_id, day, category, title AS name FROM meals JOIN menus ON menu_id = menus.id JOIN users ON menus.user_id = users.id WHERE users.id = $1;`,
      [req.body.user_id]
    )
      .then((data) => {
        console.log(JSON.stringify(data.rows.reverse()));
        if (data.rows !== []) {
          res.send(data.rows);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // router.post("/meal/:id", (req, res) => {
  //   console.log(req.params);
  //   app.get(`https://api.spoonacular.com/recipes/${req.params.id}/information`)
  //   }).then((data) => {
  //     res.send(getRecipeRenderObject(data));
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  return router;
};

