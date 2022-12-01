const router = require("express").Router();
const bcrypt = require("bcryptjs");


require("dotenv").config();

  router.get("/menu", (req, res) => {
    
  });

module.exports = (db) => {
  // if menu exists in DB, call DB
  // else call spoonacular API
  router.get("/menu/getmeal", (req, res) => {
    //? req.body.mealid?
    axios.post(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=efbb269880b24a5e8db3716408b96b6f`)
    .then((response) => {
     renderData = getRecipeRenderObject(response);
    res.send(renderData);
    }).catch((err) => {
      console.log(err)
    })
  });
  
  
  return router;
};
