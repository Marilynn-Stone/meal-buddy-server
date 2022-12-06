const axios = require("axios");

const header = { 
  header: {
    "Accept-Encoding": "application/json",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}



axios.post(`https://api.spoonacular.com/mealplanner/sarahtest/shopping-list/2022-12-11/2022-12-18?hash=28932f3356b2ba81d61276db71caf15bf4c97a00&apiKey=efbb269880b24a5e8db3716408b96b6f`, header)
  .then(data => {
    console.log(data);
  })
  .catch(err=> console.log(err));
  
  