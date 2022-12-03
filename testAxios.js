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
    "username": "johnSmith",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@gmail.com"
  }

axios.post(`https://api.spoonacular.com/users/connect`, data, headers)
  .then(data => {
    console.log(data);
    // const userName = data.data.username;
    // const spoonPassword = data.data.spoonacularPassword;
    // const hash = data.data.hash;
    // console.log("username: ", userName);
    // console.log("spoonPassword: ", spoonPassword);
    // console.log("hash: ", hash);
  })
  .catch(err=> console.log(err));
  
  