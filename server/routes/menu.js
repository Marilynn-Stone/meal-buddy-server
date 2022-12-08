const router = require("express").Router();
const bcrypt = require("bcryptjs");
const getRecipeRenderObject = require("../../helperFunctions/getRecipeRenderObject");
const createWeeklyMenuArray = require("../../helperFunctions/getMenuRenderArray");
const getRecipeTextMessage = require("../../helperFunctions/getRecipeTextMessage");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTHTOKEN;
const client = require("twilio")(accountSid, authToken);
const axios = require("axios");

require("dotenv").config();

module.exports = (db) => {

  const insertMenuIntoDB = function(menu_id, menuArray) {
    for (let meal of menuArray) {
      // console.log(meal)
      db.query(`INSERT INTO meals (menu_id, spoonacular_id, title, day, category, order_by) VALUES ($1, $2, $3, $4, $5, $6);`, [menu_id, meal.spoonacular_id, meal.title, meal.day, meal.meal, meal.id])
    }
    console.log('DB update complete')
  };

  const textMessage = function (message, number) {
    client.messages
      .create({
        body: message,
        from: "+16479055250",
        to: number,
      })
      .then((message) => console.log(message.sid));
  };

  router.post("/weekly_menu", (req, res) => {
    // console.log("user ID: ", req.body.user_id);
    db.query(
      `SELECT meals.id, spoonacular_id, day, category as meal, title, order_by FROM meals JOIN menus ON menu_id = menus.id JOIN users ON menus.user_id = users.id WHERE users.id = $1 ORDER BY order_by;`,
      [req.body.user_id])
        .then((data) => {
          console.log(data)
          if (data.rows.length !== 0) {
            res.send(data.rows);
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
                    console.log("user ID: ", req.body.user_id);
                    const menuID = await db.query(`INSERT INTO menus (user_id) VALUES ($1) RETURNING id;`, [req.body.user_id]);
                    console.log("menuID: ", menuID.rows[0].id); 
                    insertMenuIntoDB(menuID.rows[0].id, menuArray)
                    res.send(menuArray);
                  })
                })
                .catch((err) => {
                  console.log(err.data);
                });
          };
        })
    });

  router.post("/replace_weekly_menu", (req, res) => {
    console.log("user ID: ", req.body.user_id);
    db.query(
      `DELETE FROM menus WHERE user_id = $1 RETURNING *;`, [req.body.user_id])
      .then((user) => {
      console.log("Deleted Menu Details: ", user.rows[0]);
      db.query(
        `SELECT * FROM users JOIN user_diets ON users.id = user_diets.user_id WHERE users.id = $1`,
        [req.body.user_id])
        .then((user) => {
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
            console.log(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.SPOONACULARAPIKEY}&timeFrame=week&targetCalories=${userDetails.caloric_target}${dietString}${restrictionsString}`, {headers})
            console.log("___________________REPLACEMENT MENU___________________ ", data.data)
            return await createWeeklyMenuArray(data.data);
          }).then(async (menuArray) => {
            // console.log("about to send to DB for insert: ", menuArray);
            // console.log("length: ", menuArray.length)
            // console.log("user ID: ", req.body.user_id);
            const menuID = await db.query(`INSERT INTO menus (user_id) VALUES ($1) RETURNING id;`, [req.body.user_id]);
            console.log("menuID: ", menuID.rows[0].id); 
            insertMenuIntoDB(menuID.rows[0].id, menuArray)
            res.send(menuArray);
          })
        })
        .catch((err) => {
          console.log(err.data);
        });
      })
  });
    
  router.post("/textMessage", (req, res) => {
    console.log(req.body);
    const userMessage = getRecipeTextMessage(req.body);
    db.query(`SELECT cellphone_number FROM users WHERE id = $1`, [
      req.body.userId,
    ]).then((data) => {
      const number = data.rows[0].cellphone_number;
      console.log(number, userMessage);
      textMessage(userMessage, number);
      res.send("message successfully sent!");
    });
  });

  router.get("/meal/:id", (req, res) => {
    const headers = {
      "Accept-Encoding": "application/json",
      "Content-Type": "application/json",
      "Accept": "application/json"
    }  
    axios.get(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${process.env.SPOONACULARAPIKEY}`, {headers})
      .then(async(data) => {
        console.log(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${process.env.SPOONACULARAPIKEY}`, {headers})
        console.log(data.data)
        const recipe = await getRecipeRenderObject(data.data);
        console.log("RECIPE:", recipe)
        res.send(recipe);
      })
      .catch((err) => {
        console.log(err);

      })
  });

  return router;

};
