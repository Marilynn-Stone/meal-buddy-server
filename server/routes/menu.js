const router = require("express").Router();
const bcrypt = require("bcryptjs");


require("dotenv").config();

  router.get("/menu", (req, res) => {
    
  });

module.exports = (db) => {
  // if menu exists in DB, call DB
  // else call spoonacular API
  router.get("/menu/:meal", (req, res) => {
    console.log(req.body);
    db.query(`SELECT * FROM menu WHERE user_id = $1;`, [
      req.params.user.id,
    ]).then((data) => {
      // res.send( "data.rows"?? );
    });
  });
  return router;
};
