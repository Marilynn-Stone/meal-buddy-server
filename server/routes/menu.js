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
      // console.log("database result: ", JSON.stringify(data.rows.reverse()));
      if (data.rows.length !== 0) {
        res.send(data.rows.reverse());
      } else {
        db.query(
          `INSERT INTO menus (user_id) VALUES ('${req.body.user_id}') RETURNING id;`
          ).then((data) => {
            const menu_id = data;
            db.query(
              `SELECT * FROM user_diets WHERE user_id = $1`, [req.body.user_id]
            ).then((data)=> {
              const dietPreferences = data.rows[0];
              // console.log("database: ", dietPreferences);
              // console.log("keys: ", Object.keys(dietPreferences));
              let restrictionsString = "";
              for (key of Object.keys(dietPreferences)) {
                // console.log(key);
                // console.log(dietPreferences[key]);
                // console.log(typeof dietPreferences[key])
                if (dietPreferences[key] === true) {
                  restrictionsString += `${key}, `
                }
              }
              restrictionsString = "&exclude=" + restrictionsString.slice(0, -2);
              console.log(restrictionsString);
              console.log("checking object mapping: ", dietPreferences.dietary_category);
              const dietString = "";
              if (dietPreferences.dietary_category != "none") {
                dietString = `&diet=${dietPreferences.dietary_category}`;
              }
              console.log(dietString);
              axios.get(`https://api.spoonacular.com/mealplanner/generate?x-api-key=efbb269880b24a5e8db3716408b96b6f&timeFrame=week&targetCalories=${dietPreferences.caloric_target}${dietString}${restrictionsString}`)
            })
          })
      }
    })
    .catch((err) => {
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

