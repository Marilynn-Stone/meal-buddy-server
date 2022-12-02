const router = require("express").Router();
const bcrypt = require("bcryptjs");

require("dotenv").config();

module.exports = (db) => {

  router.post("/weekly_menu", (req, res) => {
    console.log(req.body);
    db.query(`SELECT spoonacular_id, title, day, category FROM meals JOIN menus ON menu_id = menus.id JOIN users ON menus.user_id = users.id WHERE users.id = $1;`, [req.body.user_id,])
      .then((data) => {
        if (data.rows !== []) {
        res.send(data.rows);
        }
      }).catch((err) => {
         console.log(err);
      });
    });

  return router;

};
