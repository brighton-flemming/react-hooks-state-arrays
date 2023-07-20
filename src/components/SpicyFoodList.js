import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods((prevFoods) => [...prevFoods, newFood]);
    console.log(newFood);
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>  
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}{" "}
      <button onClick={() => updateHeatLevel(food.id, food.heatLevel + 1)}> Increase Heat</button>
    </li>
  ));
  
  function updateHeatLevel(foodId, newHeatLevel) {
    setFoods((prevFoods) =>
      prevFoods.map((food) =>
      food.id === foodId ? {...food, heatLevel: newHeatLevel } : food
      )
    );
  }


  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
