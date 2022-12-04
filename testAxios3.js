const axios = require("axios");
require("dotenv").config();

const user = {
  id: 5,
  first_name: 'jane',
  last_name: 'test',
  email: 'jane@gmail.com',
  password: '$2a$10$aAxZSUAYSnvub8rUmNZ5GuIgF5/CzSFB1yO81GP2W1eKcefXV9kg6',
  cellphone_number: '9053341165',
  spoonacular_username: 'janetest12',
  spoonacular_hash: '9d5300a9ad2588e93fef0bfca0010bcd2c6270f6',
  user_id: 5,
  caloric_target: 2000,
  dietary_category: '',
  gluten: false,
  lactose: false,
  peanut: true,
  fish: false,
  egg: false,
  shellfish: true,
  tree_nuts: false,
  soy: false,
  sesame: false
}

const headers = { 
  headers: {
    "x-api-key": "efbb269880b24a5e8db3716408b96b6f",
    "Accept-Encoding": "application/json",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

const data = {
  "username": user.first_name + user.last_name,
  "firstName": user.first_name,
  "lastName": user.last_name,
  "email": user.email
}

let restrictionsString = "";
for (key of Object.keys(user)) {
  if (user[key] === true) {
    restrictionsString += `${key}, `
  }
}
if (restrictionsString) {
  restrictionsString = "&exclude=" + restrictionsString.slice(0, -2);
}  

let dietString = "";
if (user.dietary_category) {
  dietString = `&diet=${user.dietary_category}`;
};

axios.post(`https://api.spoonacular.com/users/connect`, data, headers)
  .then(data => {
    console.log(data.data);
    const userName = data.data.username;
    const hash = data.data.hash;
    const headers = {
      "Accept-Encoding": "application/json",
      "Content-Type": "application/json",
      "Accept": "application/json"
    }  
    const params = {
      parameters: {
        "username": userName,
        "hash": hash
      }
    }
    axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.SPOONACULARAPIKEY}&timeFrame=week&targetCalories=${user.caloric_target}${dietString}${restrictionsString}`, {params, headers})
    .then(data => console.log(data.data))
    .catch(err=> console.log(err));
  })
  .catch(err=> console.log(err));


  