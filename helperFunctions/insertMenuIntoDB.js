const router = require("express").Router();

const insertMenuIntoDB = function(menu_id, menuArray) {
  for (meal of menuArray) {
    db.query(`INSERT INTO meals (menu_id, spoonacular_id, title, day, category) VALUES ($1, $2, $3, $4, $5);`, [menu_id, meal.spoonacular_id, meal.title, meal.day, meal.meal])
  }
  console.log('DB update complete')
};

module.exports = insertMenuIntoDB;