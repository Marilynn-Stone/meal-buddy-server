// const mondayBreakfast = require("../docs/SampleAPICallData/mondayFirstMeal");
// const mondayLunch = require("../docs/SampleAPICallData/mondaySecondMeal");
// const mondayDinner = require("../docs/SampleAPICallData/mondayThirdMeal");
// const tuesdayBreakfast = require("../docs/SampleAPICallData/tuesdayFirstMeal");
// const tuesdayLunch = require("../docs/SampleAPICallData/tuesdaySecondMeal");


const getRecipeRenderObject = function(mealAPIObjectResponse) {
  const meal = mealAPIObjectResponse
  const recipeRenderObject = {};
  recipeRenderObject.id = meal.id
  recipeRenderObject.mealName = meal.title;
  recipeRenderObject.cookTimeInMinutes = meal.readyInMinutes + " minutes";
  recipeRenderObject.servings = meal.servings;
  recipeRenderObject.imageURL = meal.image;
  recipeRenderObject.summaryDescription = meal.summary;
  recipeRenderObject.ingredients={};
  for (let x = 0; x < meal.extendedIngredients.length; x++) {
    recipeRenderObject.ingredients[x+1] = meal.extendedIngredients[x].original;
  }

  recipeRenderObject.steps = {};
  for (let x = 0; x < meal.analyzedInstructions[0].steps.length; x++) {
    recipeRenderObject.steps[x+1] = meal.analyzedInstructions[0].steps[x].step;
  }

  recipeRenderObject.shoppingList = {};
  for (let x = 0; x < meal.extendedIngredients.length; x++) {
    recipeRenderObject.shoppingList[x+1] = meal.extendedIngredients[x].name;
  }


  console.log(`object: ${JSON.stringify(recipeRenderObject)}`);
  return recipeRenderObject;



}
  

// getRecipeRenderObject(tuesdayLunch); 

module.exports = getRecipeRenderObject;