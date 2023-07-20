import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";
// import { ALL } from "dns";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFilter] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods((prevFoods) => [...prevFoods, newFood]);
    console.log(newFood);
  }

  const filteredFoods =
    filter === "All" ? foods : foods.filter((food) => food.cuisine === filter);

  const foodList = filteredFoods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}{" "}
      <button onClick={() => updateHeatLevel(food.id, food.heatLevel + 1)}>
        {" "}
        Increase Heat
      </button>
    </li>
  ));

  function updateHeatLevel(foodId, newHeatLevel) {
    setFoods((prevFoods) =>
      prevFoods.map((food) =>
        food.id === foodId ? { ...food, heatLevel: newHeatLevel } : food
      )
    );
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select
        value={filter}
        name="filter"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>

      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
