// const recipe = {
//   id: 640965,
//   mealName: 'Crushed Lentil Soup- Granola Style',
//   cookTimeInMinutes: '45 minutes',
//   servings: 1,
//   imageURL: 'https://spoonacular.com/recipeImages/640965-556x370.jpg',
//   summaryDescription: `Crushed Lentil Soup- Granola Style might be just the breakfast you are searching for. One portion of this dish contains roughly <b>10g of protein</b>, <b>43g of fat</b>, and a total of <b>830 calories</b>. For <b>$2.05 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. 1 person has tried and liked this recipe. If you have olive oil, carrot, onion, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Foodista. Overall, this recipe earns an <b>outstanding spoonacular score of 81%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/italian-style-lentil-soup-378444">Italian-Style Lentil Soup</a>, <a href="https://spoonacular.com/recipes/colombian-style-lentil-soup-sopa-de-lentejas-226151">COLOMBIAN-STYLE LENTIL SOUP (SOPA DE LENTEJAS)</a>, and <a href="https://spoonacular.com/recipes/thai-style-creamy-coconut-lentil-mushroom-soup-619100">Thai-Style Creamy Coconut Lentil Mushroom Soup</a>.`,
//   ingredients: {
//     '1': '3 tablespoons olive oil',
//     '2': '1/8 cup chopped garlic',
//     '3': '1 small onion chopped',
//     '4': '1 cup chopped carrot',
//     '5': '10 cups broth or water (broth can be chicken',
//     '6': '1/2 cup long grain rice',
//     '7': '1/4 cup fresh lemon juice',
//     '8': '1/4 teaspoon black pepper',
//     '9': '1/8 teaspoon red pepper flakes',
//     '10': 'Chopped cilantro and sumac as a garnish'
//   },
//   steps: {
//     '1': 'In an enamel 5 quart dutch oven (or large soup pot) drizzle olive oil and heat.',
//     '2': 'Add the chopped garlic and fry until it browns and becomes very fragment.',
//     '3': 'Add the chopped onion and carrots- saut until tender.',
//     '4': 'Add 6 cups of broth and red lentils. Stir, put on lid, and simmer for about 20 minutes or until the lentils are tender.',
//     '5': 'Add fresh lemon juice, 2 additional cups of broth and 1/2 cup of rice. Simmer until the rice is tender. The time will vary based on the variety of rice.',
//     '6': 'Feel free to the remaining liquid, more if necessary, until the soup is the consistency desired.',
//     '7': 'I added two additional cups of liquid after the soup was done cooking so it was too thick. In an effort to reduce sodium I purchase the lowest sodium chicken broth and use about two cups of water. If the soup seems to need additional flavor or salt I add chicken bouillon to taste.',
//     '8': 'Serve with chopped cilantro and sumac.'
//   }
// }



const getRecipeTextMessage = function(recipe) {
  let message = "Thanks for using MealBuddy! \nHere's your recipe ingredients: \n"
  message += recipe.mealName;
  for (let ingredient in recipe.ingredients) {
    message += `, \n` + "- " + recipe.ingredients[ingredient];
  }
  console.log(message);
  return message;
}

module.exports = getRecipeTextMessage;