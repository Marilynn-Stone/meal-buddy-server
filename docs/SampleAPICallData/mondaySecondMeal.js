// get recipe informaiton

// https://api.spoonacular.com/recipes/472111/information

const mondayLunch = {
  "vegetarian": true,
  "vegan": true,
  "glutenFree": true,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": true,
  "weightWatcherSmartPoints": 37,
  "gaps": "no",
  "preparationMinutes": 5,
  "cookingMinutes": 20,
  "aggregateLikes": 3,
  "healthScore": 23,
  "creditsText": "Nourished Kitchen",
  "sourceName": "Nourished Kitchen",
  "pricePerServing": 189.09,
  "extendedIngredients": [
      {
          "id": 12061,
          "aisle": "Nuts",
          "image": "almonds.jpg",
          "consistency": "SOLID",
          "name": "almonds",
          "nameClean": "almonds",
          "original": "2 cups almonds, cashews, pecans, walnuts, pumpkin seeds (preferably sprouted), roughly chopped (buy sprouted nuts here)",
          "originalName": "almonds, cashews, pecans, walnuts, pumpkin seeds (preferably sprouted), roughly chopped (buy sprouted nuts here)",
          "amount": 2.0,
          "unit": "cups",
          "meta": [
              "roughly chopped",
              "(preferably sprouted)",
              "(buy sprouted nuts here)"
          ],
          "measures": {
              "us": {
                  "amount": 2.0,
                  "unitShort": "cups",
                  "unitLong": "cups"
              },
              "metric": {
                  "amount": 473.176,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
              }
          }
      },
      {
          "id": 93784,
          "aisle": "Health Foods;Baking",
          "image": "corn-syrup.png",
          "consistency": "SOLID",
          "name": "brown rice syrup",
          "nameClean": "brown rice syrup",
          "original": "3 tablespoons brown rice syrup (available here)",
          "originalName": "brown rice syrup (available here)",
          "amount": 3.0,
          "unit": "tablespoons",
          "meta": [
              "(available here)"
          ],
          "measures": {
              "us": {
                  "amount": 3.0,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
              },
              "metric": {
                  "amount": 3.0,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
              }
          }
      },
      {
          "id": 12006,
          "aisle": "Health Foods",
          "image": "chia-seeds.jpg",
          "consistency": "SOLID",
          "name": "chia seeds",
          "nameClean": "chia seeds",
          "original": "2 tablespoons chia seeds (available here)",
          "originalName": "chia seeds (available here)",
          "amount": 2.0,
          "unit": "tablespoons",
          "meta": [
              "(available here)"
          ],
          "measures": {
              "us": {
                  "amount": 2.0,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
              },
              "metric": {
                  "amount": 2.0,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
              }
          }
      },
      {
          "id": 4047,
          "aisle": "Health Foods;Baking",
          "image": "oil-coconut.jpg",
          "consistency": "LIQUID",
          "name": "coconut oil",
          "nameClean": "coconut oil",
          "original": "5-7 tablespoons coconut oil or butter, melted",
          "originalName": "coconut oil or butter, melted",
          "amount": 5.0,
          "unit": "tablespoons",
          "meta": [
              "melted"
          ],
          "measures": {
              "us": {
                  "amount": 5.0,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
              },
              "metric": {
                  "amount": 5.0,
                  "unitShort": "Tbsps",
                  "unitLong": "Tbsps"
              }
          }
      },
      {
          "id": 1012010,
          "aisle": "Spices and Seasonings",
          "image": "cinnamon.jpg",
          "consistency": "SOLID",
          "name": "ground cinnamon",
          "nameClean": "ground cinnamon",
          "original": "1 teaspoon ground cinnamon",
          "originalName": "ground cinnamon",
          "amount": 1.0,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
              "us": {
                  "amount": 1.0,
                  "unitShort": "tsp",
                  "unitLong": "teaspoon"
              },
              "metric": {
                  "amount": 1.0,
                  "unitShort": "tsp",
                  "unitLong": "teaspoon"
              }
          }
      },
      {
          "id": 12108,
          "aisle": "Baking",
          "image": "shredded-coconut.jpg",
          "consistency": "SOLID",
          "name": "unsweetened coconut flakes",
          "nameClean": "unsweetened coconut",
          "original": "3 cups unsweetened coconut flakes (available here)",
          "originalName": "unsweetened coconut flakes (available here)",
          "amount": 3.0,
          "unit": "cups",
          "meta": [
              "unsweetened",
              "(available here)"
          ],
          "measures": {
              "us": {
                  "amount": 3.0,
                  "unitShort": "cups",
                  "unitLong": "cups"
              },
              "metric": {
                  "amount": 709.764,
                  "unitShort": "ml",
                  "unitLong": "milliliters"
              }
          }
      }
  ],
  "id": 472111,
  "title": "Coco-Nutty Granola from I Quit Sugar",
  "readyInMinutes": 25,
  "servings": 5,
  "sourceUrl": "http://nourishedkitchen.com/coco-nutty-granola/",
  "image": "https://spoonacular.com/recipeImages/472111-556x370.jpg",
  "imageType": "jpg",
  "summary": "Coco-Nutty Granola from I Quit Sugar is a <b>gluten free, fodmap friendly, and vegan</b> morn meal. This recipe serves 5. One portion of this dish contains approximately <b>17g of protein</b>, <b>77g of fat</b>, and a total of <b>844 calories</b>. For <b>$1.89 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. A mixture of almonds, ground cinnamon, coconut flakes, and a handful of other ingredients are all it takes to make this recipe so scrumptious. This recipe is liked by 3 foodies and cooks. From preparation to the plate, this recipe takes about <b>25 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 72%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/dark-chocolate-coco-nutty-granola-549760\">Dark Chocolate Coco-Nutty Granola</a>, <a href=\"https://spoonacular.com/recipes/coco-nutty-caramel-popcorn-686579\">Coco Nutty Caramel Popcorn</a>, and <a href=\"https://spoonacular.com/recipes/yummy-coco-nutty-pavlova-log-320321\">Yummy Coco-Nutty Pavlova Log</a> for similar recipes.",
  "cuisines": [],
  "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
  ],
  "diets": [
      "gluten free",
      "dairy free",
      "lacto ovo vegetarian",
      "fodmap friendly",
      "vegan"
  ],
  "occasions": [],
  "winePairing": {},
  "instructions": "Preheat the oven to 250 degrees F and line a baking tray with baking paper. Combine all the ingredients, then spread evenly on a tray. Bake for 15-20 minutes, until golden, turning halfway through the cooking time. I like to bake mine until quite dark—the darker it is, the crunchier. Remove from the oven and allow to cool, then eat while it's still crispy.",
  "analyzedInstructions": [
      {
          "name": "",
          "steps": [
              {
                  "number": 1,
                  "step": "Preheat the oven to 250 degrees F and line a baking tray with baking paper.",
                  "ingredients": [],
                  "equipment": [
                      {
                          "id": 404770,
                          "name": "baking paper",
                          "localizedName": "baking paper",
                          "image": "baking-paper.jpg"
                      },
                      {
                          "id": 404646,
                          "name": "baking pan",
                          "localizedName": "baking pan",
                          "image": "roasting-pan.jpg"
                      },
                      {
                          "id": 404784,
                          "name": "oven",
                          "localizedName": "oven",
                          "image": "oven.jpg",
                          "temperature": {
                              "number": 250.0,
                              "unit": "Fahrenheit"
                          }
                      }
                  ]
              },
              {
                  "number": 2,
                  "step": "Combine all the ingredients, then spread evenly on a tray.",
                  "ingredients": [
                      {
                          "id": 0,
                          "name": "spread",
                          "localizedName": "spread",
                          "image": ""
                      }
                  ],
                  "equipment": []
              },
              {
                  "number": 3,
                  "step": "Bake for 15-20 minutes, until golden, turning halfway through the cooking time. I like to bake mine until quite dark—the darker it is, the crunchier.",
                  "ingredients": [],
                  "equipment": [
                      {
                          "id": 404784,
                          "name": "oven",
                          "localizedName": "oven",
                          "image": "oven.jpg"
                      }
                  ],
                  "length": {
                      "number": 20,
                      "unit": "minutes"
                  }
              },
              {
                  "number": 4,
                  "step": "Remove from the oven and allow to cool, then eat while it's still crispy.",
                  "ingredients": [],
                  "equipment": [
                      {
                          "id": 404784,
                          "name": "oven",
                          "localizedName": "oven",
                          "image": "oven.jpg"
                      }
                  ]
              }
          ]
      }
  ],
  "originalId": null
}

module.exports = mondayLunch;