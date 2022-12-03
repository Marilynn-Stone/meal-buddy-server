const router = require("express").Router();
const bcrypt = require("bcryptjs");
const getRecipeRenderObject = require("../../helperFunctions/getRecipeRenderObject");
const axios = require("axios");
const { getSpoonacularAccount, getMenu } = require("../../helperFunctions/apiCallFormatters");

require("dotenv").config();

module.exports = (db) => {

  router.post("/weekly_menu", (req, res) => {
    console.log("user ID: ", req.body.user_id);
    db.query(
      `SELECT meals.id, spoonacular_id, day, category, title AS name FROM meals JOIN menus ON menu_id = menus.id JOIN users ON menus.user_id = users.id WHERE users.id = $1;`,
      [req.body.user_id])
        .then((data) => {
          console.log("menu data BD:", data.rows);
          if (data.rows.length !== 0) {
            res.send(data.rows.reverse());
          } else {
              db.query(
              `SELECT * FROM users WHERE id = $1`, [req.body.user_id]
              ).then(async(dbres)=> {
                  console.log("user details: ", dbres.rows[0]);
                  const accountDetails = await getSpoonacularAccount(dbres.rows[0]);
                  return accountDetails;
                })
                  .then(async(accountDetails) => {
                    const userDiet = await db.query(`SELECT * FROM user_diets WHERE user_id = $1`, [req.body.user_id]);
                    console.log(userDiet);
                    const menuData = await getMenu(userDiet.rows[0], accountDetails);
                    console.log(menuData);
                    })
          }
        }).catch((err) => {
            console.log(err);
        });
      });


  router.get("/meal/:id", (req, res) => {
    axios.get(`https://api.spoonacular.com/recipes/${req.params.id}/information`)
      .then((data) => {
        res.send(getRecipeRenderObject(data))
      })
      .catch((err) => {
        console.log(err);
      })
  });

  return router;
};

// db.query(
//   `INSERT INTO menus (user_id) VALUES ('${req.body.user_id}') RETURNING id;`
//   ).then((data) => {
//     const menu_id = data;