// require("dotenv").config();
// const axios = require("axios");

// const getSpoonacularAccount = function(userDetails) {
  
// console.log("userDetails in function: ", userDetails);

//   const headers = { 
//     headers: {
//       "x-api-key": process.env.SPOONACULARAPIKEY,
//       "Accept-Encoding": "application/json",
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     }
//   }

//   const data = {
//     "username": userDetails.first_name + userDetails.last_name,
//     "firstName": userDetails.first_name,
//     "lastName": userDetails.last_name,
//     "email": userDetails.email
//   }

//   return axios.post(`https://api.spoonacular.com/users/connect`, data, headers)
//   .then((data) => {
//     console.log("spoonacular user response", data.data)
//     return data.data;
//   });
// }

// const getMenu = function(dietPreferences, accountDetails) {
  
//   console.log("accountDetails :", accountDetails)
  
//   const headers = {
//     "Accept-Encoding": "application/json",
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   }  
//   const params = {
//     parameters: {
//       "username": accountDetails.username,
//       "hash": accountDetails.hash
//     }
//   }    

//   let restrictionsString = "";
//   for (key of Object.keys(dietPreferences)) {
//     if (dietPreferences[key] === true) {
//       restrictionsString += `${key}, `
//     }
//   }
//   restrictionsString = "&exclude=" + restrictionsString.slice(0, -2);
  
//   let dietString = "";
//   if (dietPreferences.dietary_category != "none") {
//     dietString = `&diet=${dietPreferences.dietary_category}`;
//   } else {
//     dietString = "";
//   };

//   axios.get(`https://api.spoonacular.com/mealplanner/generate?x-api-key=${process.env.SPOONACULARAPIKEY}&timeFrame=week&targetCalories=${dietPreferences.caloric_target}${dietString}${restrictionsString}`, {params, headers})
//   .then(data => { 
//     console.log("RESPONSE IN FUNCTION: ", data.data)
//     return (data.data)
//   })
//   .catch(err=> console.log(err));
// }

// module.exports = { getSpoonacularAccount, getMenu };