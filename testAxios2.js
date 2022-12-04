const axios = require("axios");

const headers = {
    "Accept-Encoding": "application/json",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }

const params = {
  parameters: {
    "username": "johnsmith8",
    "hash": "f111a78485c1e62884998e656828c8000c92c9e8"
  }
}

console.log(params.parameters.username);

axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=efbb269880b24a5e8db3716408b96b6f&timeFrame=day`, {params, headers})
  .then(data => console.log(data.data))
  .catch(err=> console.log(err));