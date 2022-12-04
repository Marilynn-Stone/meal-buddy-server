const router = require("express").Router();
const bcrypt = require("bcryptjs");
const getRecipeRenderObject = require("../../helperFunctions/getRecipeRenderObject");
const createWeeklyMenuArray = require("../../helperFunctions/getMenuRenderArray");
const insertMenuIntoDB = require("../../helperFunctions/insertMenuIntoDB")
const axios = require("axios");
// const { getSpoonacularAccount, getMenu } = require("../../helperFunctions/apiCallFormatters");

require("dotenv").config();

module.exports = (db) => {

  router.post("/weekly_menu", (req, res) => {
    console.log("user ID: ", req.body.user_id);
    db.query(
      `SELECT meals.id, spoonacular_id, day, category, title AS name FROM meals JOIN menus ON menu_id = menus.id JOIN users ON menus.user_id = users.id WHERE users.id = $1;`,
      [req.body.user_id])
        .then((data) => {
          if (data.rows.length !== 0) {
            res.send(data.rows.reverse());
          } else {
              db.query(
              `SELECT * FROM users JOIN user_diets ON users.id = user_diets.user_id WHERE users.id = $1`, [req.body.user_id])
                .then((user) => {
                  console.log("DBUser details: ", user.rows[0]);
                  const userDetails = user.rows[0];
                  const headers = {
                    "Accept-Encoding": "application/json",
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  }  
                  const params = {
                    parameters: {
                      "username": userDetails.spoonacular_username,
                      "hash": userDetails.spoonacular_hash
                    }
                  }    
                
                  let restrictionsString = "";
                  for (key of Object.keys(userDetails)) {
                    if (userDetails[key] === true) {
                      restrictionsString += `${key}, `
                    }
                  }
                  if (restrictionsString) {
                    restrictionsString = "&exclude=" + restrictionsString.slice(0, -2);
                  }  
                  
                  let dietString = "";
                  if (userDetails.dietary_category) {
                    dietString = `&diet=${userDetails.dietary_category}`;
                  };
                
                  axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.SPOONACULARAPIKEY}&timeFrame=week&targetCalories=${userDetails.caloric_target}${dietString}${restrictionsString}`, {params, headers})
                  .then(async(data) => { 
                    console.log(data.data.meals)
                    return await createWeeklyMenuArray(data.data);
                  }).then(async (menuArray) => {
                    console.log("menuArray: ", menuArray);
                    console.log("length: ", menuArray.length)
                    // const menuID = await db.query(`INSERT INTO menus (user_id) VALUES $1 RETURNING id`, [req.body.user_id]);
                    // insertMenuIntoDB(menuID, menuArray)
                    res.send(menuArray);
                  })
                })
                .catch((err) => {
                  console.log(err.data);
                });
          };
        })
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