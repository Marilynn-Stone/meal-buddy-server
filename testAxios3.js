const axios = require("axios");

const headers = { 
  headers: {
    "x-api-key": "efbb269880b24a5e8db3716408b96b6f",
    "Accept-Encoding": "application/json",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

const data = {
  "username": "trevorfunk",
  "firstName": "Trevor",
  "lastName": "Funk",
  "email": "trevor@gmail.com"
}

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
    axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=efbb269880b24a5e8db3716408b96b6f&timeFrame=week&targetCalories=2300&exclude=gluten, peanut`, {params, headers})
    .then(data => console.log(data.data))
    .catch(err=> console.log(err));
  })
  .catch(err=> console.log(err));


  