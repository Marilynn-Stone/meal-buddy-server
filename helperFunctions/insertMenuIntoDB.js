const router = require("express").Router();

const insertMenuIntoDB = function(menu_id, menuArray) {
  for (let meal of menuArray) {
    // console.log(meal)
    db.query(`INSERT INTO meals (menu_id, spoonacular_id, title, day, category, order_by) VALUES ($1, $2, $3, $4, $5, $6);`, [menu_id, meal.spoonacular_id, meal.title, meal.day, meal.meal, meal.id])
  }
  console.log('DB update complete')
};

module.exports = insertMenuIntoDB;