// get recipe informaiton

// https://api.spoonacular.com/recipes/346591/information

const mondayBreakfast = {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 17,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 0,
    "healthScore": 36,
    "creditsText": "My Recipes",
    "sourceName": "My Recipes",
    "pricePerServing": 495.11,
    "extendedIngredients": [
        {
            "id": 1002030,
            "aisle": "Spices and Seasonings",
            "image": "pepper.jpg",
            "consistency": "SOLID",
            "name": "black pepper",
            "nameClean": "black pepper",
            "original": "1/4 teaspoon freshly ground black pepper",
            "originalName": "freshly ground black pepper",
            "amount": 0.25,
            "unit": "teaspoon",
            "meta": [
                "black",
                "freshly ground"
            ],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 1002024,
            "aisle": "Spices and Seasonings",
            "image": "dry-mustard.jpg",
            "consistency": "SOLID",
            "name": "dry mustard",
            "nameClean": "mustard powder",
            "original": "1/2 teaspoon dry mustard",
            "originalName": "dry mustard",
            "amount": 0.5,
            "unit": "teaspoon",
            "meta": [
                "dry"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.5,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 1124,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg-white.jpg",
            "consistency": "SOLID",
            "name": "egg whites",
            "nameClean": "egg whites",
            "original": "8 large egg whites",
            "originalName": "egg whites",
            "amount": 8.0,
            "unit": "large",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 8.0,
                    "unitShort": "large",
                    "unitLong": "larges"
                },
                "metric": {
                    "amount": 8.0,
                    "unitShort": "large",
                    "unitLong": "larges"
                }
            }
        },
        {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "SOLID",
            "name": "eggs",
            "nameClean": "egg",
            "original": "4 large eggs",
            "originalName": "eggs",
            "amount": 4.0,
            "unit": "large",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "large",
                    "unitLong": "larges"
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "large",
                    "unitLong": "larges"
                }
            }
        },
        {
            "id": 11291,
            "aisle": "Produce",
            "image": "spring-onions.jpg",
            "consistency": "SOLID",
            "name": "green onions",
            "nameClean": "spring onions",
            "original": "1/2 cup chopped green onions",
            "originalName": "chopped green onions",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1082,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "milk.png",
            "consistency": "LIQUID",
            "name": "low fat milk",
            "nameClean": "1 percent milk",
            "original": "2 cups 2% reduced-fat milk",
            "originalName": "2% reduced-fat milk",
            "amount": 2.0,
            "unit": "cups",
            "meta": [
                "2%",
                "reduced-fat"
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
            "id": 1001168,
            "aisle": "Cheese",
            "image": "shredded-cheddar.jpg",
            "consistency": "LIQUID",
            "name": "low fat shredded cheddar cheese",
            "nameClean": "low fat shredded cheddar",
            "original": "1 cup (4 ounces) shredded reduced-fat cheddar cheese, divided",
            "originalName": "cup shredded reduced-fat cheddar cheese, divided",
            "amount": 4.0,
            "unit": "ounces",
            "meta": [
                "shredded",
                "divided",
                "reduced-fat"
            ],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 113.398,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 98971,
            "aisle": "Frozen",
            "image": "no.jpg",
            "consistency": "SOLID",
            "name": "meatless sausage",
            "nameClean": "veggie sausage",
            "original": "14 ounces meatless fat-free sausage, crumbled (such as Gimme Lean!)",
            "originalName": "meatless fat-free sausage, crumbled (such as Gimme Lean!)",
            "amount": 14.0,
            "unit": "ounces",
            "meta": [
                "fat-free",
                "crumbled",
                "(such as Gimme Lean!)"
            ],
            "measures": {
                "us": {
                    "amount": 14.0,
                    "unitShort": "oz",
                    "unitLong": "ounces"
                },
                "metric": {
                    "amount": 396.893,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 2047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "1/4 teaspoon salt",
            "originalName": "salt",
            "amount": 0.25,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                },
                "metric": {
                    "amount": 0.25,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                }
            }
        },
        {
            "id": 18069,
            "aisle": "Gluten Free",
            "image": "white-bread.jpg",
            "consistency": "SOLID",
            "name": "white bread",
            "nameClean": "white bread",
            "original": "4 cups (1/2-inch) cubed white bread (about 4 1/2 ounces)",
            "originalName": "(1/2-inch) cubed white bread (about 4 1/2 ounces)",
            "amount": 4.0,
            "unit": "cups",
            "meta": [
                "white",
                "cubed",
                "()",
                "( 4 1/2 ounces)"
            ],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 946.352,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        }
    ],
    "id": 346591,
    "title": "Savory Breakfast Casserole",
    "readyInMinutes": 45,
    "servings": 3,
    "sourceUrl": "http://www.myrecipes.com/recipe/savory-breakfast-casserole-10000000698655/",
    "image": "https://spoonacular.com/recipeImages/346591-556x370.jpg",
    "imageType": "jpg",
    "summary": "You can never have too many main course recipes, so give Savory Breakfast Casserole a try. This recipe makes 3 servings with <b>670 calories</b>, <b>63g of protein</b>, and <b>22g of fat</b> each. For <b>$4.81 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up pepper, milk, egg whites, and a few other things to make it today. To use up the egg whites you could follow this main course with the <a href=\"https://spoonacular.com/recipes/apple-turnovers-recipe-48175\">Apple Turnovers Recipe</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 1 person has tried and liked this recipe. It is a good option if you're following a <b>vegetarian</b> diet. It will be a hit at your <b>Christmas</b> event. All things considered, we decided this recipe <b>deserves a spoonacular score of 69%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/paleo-savory-breakfast-casserole-509753\">Paleo Savory Breakfast Casserole</a>, <a href=\"https://spoonacular.com/recipes/savory-hash-brown-breakfast-casserole-680841\">Savory Hash Brown Breakfast Casserole</a>, and <a href=\"https://spoonacular.com/recipes/savory-breakfast-casserole-with-eggs-ham-mushrooms-tomatoes-and-chard-530851\">Savory Breakfast Casserole with Eggs, Ham, Mushrooms, Tomatoes and Chard</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
        "morning meal",
        "brunch",
        "breakfast"
    ],
    "diets": [
        "lacto ovo vegetarian"
    ],
    "occasions": [
        "fall",
        "winter",
        "christmas"
    ],
    "winePairing": {},
    "instructions": "Preheat oven to 350.                                                                                                Combine the milk, 1/2 cup cheddar cheese, green onions, and next 5 ingredients (green onions through eggs), stirring with a whisk.                                                                                                Divide sausage and bread evenly between 2 (8 x 4-inch) loaf pans coated with cooking spray. Pour egg mixture evenly between pans. Top each pan with 1/4 cup cheese.                                                                                                Cover each pan with foil. Bake at 350 for 20 minutes. Uncover and bake an additional 40 minutes or until a wooden pick inserted in center comes out clean.                                                                                                To freeze unbaked casserole: Prepare through Step  Cover with plastic wrap, pressing to remove as much air as possible. Wrap with heavy-duty foil. Store in freezer for up to 2 months.                                                                                                To prepare frozen unbaked casserole: Thaw completely in refrigerator (about 24 hours). Preheat oven to 350. Remove foil; reserve foil. Remove plastic wrap; discard wrap. Cover casserole with reserved foil; bake at 350 for 40 minutes. Uncover and bake an additional 50 minutes or until bubbly.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Preheat oven to 35",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404784,
                            "name": "oven",
                            "localizedName": "oven",
                            "image": "oven.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Combine the milk, 1/2 cup cheddar cheese, green onions, and next 5 ingredients (green onions through eggs), stirring with a whisk.",
                    "ingredients": [
                        {
                            "id": 1009,
                            "name": "cheddar cheese",
                            "localizedName": "cheddar cheese",
                            "image": "cheddar-cheese.png"
                        },
                        {
                            "id": 11291,
                            "name": "green onions",
                            "localizedName": "green onions",
                            "image": "spring-onions.jpg"
                        },
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        },
                        {
                            "id": 1077,
                            "name": "milk",
                            "localizedName": "milk",
                            "image": "milk.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404661,
                            "name": "whisk",
                            "localizedName": "whisk",
                            "image": "whisk.png"
                        }
                    ]
                },
                {
                    "number": 3,
                    "step": "Divide sausage and bread evenly between 2 (8 x 4-inch) loaf pans coated with cooking spray.",
                    "ingredients": [
                        {
                            "id": 4679,
                            "name": "cooking spray",
                            "localizedName": "cooking spray",
                            "image": "cooking-spray.png"
                        },
                        {
                            "id": 1017063,
                            "name": "sausage",
                            "localizedName": "sausage",
                            "image": "raw-pork-sausage.png"
                        },
                        {
                            "id": 18064,
                            "name": "bread",
                            "localizedName": "bread",
                            "image": "white-bread.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404715,
                            "name": "loaf pan",
                            "localizedName": "loaf pan",
                            "image": "loaf-pan.png"
                        }
                    ]
                },
                {
                    "number": 4,
                    "step": "Pour egg mixture evenly between pans. Top each pan with 1/4 cup cheese.",
                    "ingredients": [
                        {
                            "id": 1041009,
                            "name": "cheese",
                            "localizedName": "cheese",
                            "image": "cheddar-cheese.png"
                        },
                        {
                            "id": 1123,
                            "name": "egg",
                            "localizedName": "egg",
                            "image": "egg.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        }
                    ]
                },
                {
                    "number": 5,
                    "step": "Cover each pan with foil.",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404765,
                            "name": "aluminum foil",
                            "localizedName": "aluminum foil",
                            "image": "aluminum-foil.png"
                        },
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        }
                    ]
                },
                {
                    "number": 6,
                    "step": "Bake at 350 for 20 minutes. Uncover and bake an additional 40 minutes or until a wooden pick inserted in center comes out clean.",
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
                        "number": 60,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 7,
                    "step": "To freeze unbaked casserole: Prepare through Step  Cover with plastic wrap, pressing to remove as much air as possible. Wrap with heavy-duty foil. Store in freezer for up to 2 months.",
                    "ingredients": [
                        {
                            "id": 10018364,
                            "name": "wrap",
                            "localizedName": "wrap",
                            "image": "flour-tortilla.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404730,
                            "name": "plastic wrap",
                            "localizedName": "plastic wrap",
                            "image": "plastic-wrap.jpg"
                        },
                        {
                            "id": 404765,
                            "name": "aluminum foil",
                            "localizedName": "aluminum foil",
                            "image": "aluminum-foil.png"
                        }
                    ]
                },
                {
                    "number": 8,
                    "step": "To prepare frozen unbaked casserole: Thaw completely in refrigerator (about 24 hours). Preheat oven to 35",
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
                        "number": 1440,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 9,
                    "step": "Remove foil; reserve foil.",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404765,
                            "name": "aluminum foil",
                            "localizedName": "aluminum foil",
                            "image": "aluminum-foil.png"
                        }
                    ]
                },
                {
                    "number": 10,
                    "step": "Remove plastic wrap; discard wrap. Cover casserole with reserved foil; bake at 350 for 40 minutes. Uncover and bake an additional 50 minutes or until bubbly.",
                    "ingredients": [
                        {
                            "id": 10018364,
                            "name": "wrap",
                            "localizedName": "wrap",
                            "image": "flour-tortilla.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404730,
                            "name": "plastic wrap",
                            "localizedName": "plastic wrap",
                            "image": "plastic-wrap.jpg"
                        },
                        {
                            "id": 404784,
                            "name": "oven",
                            "localizedName": "oven",
                            "image": "oven.jpg"
                        },
                        {
                            "id": 404765,
                            "name": "aluminum foil",
                            "localizedName": "aluminum foil",
                            "image": "aluminum-foil.png"
                        }
                    ],
                    "length": {
                        "number": 90,
                        "unit": "minutes"
                    }
                }
            ]
        }
    ],
    "originalId": null
}

module.exports = mondayBreakfast;

// console.log(mondayBreakfast.id);
// console.log(mondayBreakfast.title);
// console.log(mondayBreakfast.image);

