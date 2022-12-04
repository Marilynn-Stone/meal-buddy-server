const createWeeklyMenuArray = function(weeklyDiet) {

  const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  const meals = ["Breakfast", "Lunch", "Dinner"];
  
  const mealRenderArray = [];
  
  console.log(weeklyDiet);

  let count = 1

  for (let day of weekDays) {
      for (let x = 0; x < 3; x ++) {
          // console.log(day);
          // console.log(meals[x]);
          // console.log(weeklyDiet.week[day].meals[x].title);
          // console.log(weeklyDiet.week[day].meals[x].sourceUrl);
          let mealObject = {}
          mealObject.id = count
          mealObject.spoonacular_id = weeklyDiet.week[day].meals[x].id;
          mealObject.day = day;
          mealObject.meal = meals[x];
          mealObject.title = weeklyDiet.week[day].meals[x].title;
          mealObject.servings = weeklyDiet.week[day].meals[x].servings;
          mealObject.link = weeklyDiet.week[day].meals[x].sourceUrl;
          // console.log(mealObject);
          mealRenderArray.push(mealObject);
          count += 1;
      }
  }

  return mealRenderArray;
}



// console.log(createWeeklyMenuArray(weeklyDiet));

module.exports = createWeeklyMenuArray;