function displayType(foods) {   //use of data attribute
    var foodsType = foods.getAttribute("data-favorite-foods");
    alert (foodsType + " comes in " + foods.innerHTML + " in my top 3 favorites!");
}