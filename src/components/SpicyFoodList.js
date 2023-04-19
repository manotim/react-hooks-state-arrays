import React, { useState } from 'react'
import { spicyFoods, getNewRandomSpicyFood } from '../data'

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods)

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood()
    console.log(newFood)
    setFoods([...foods, newFood])
  }

  function handleLiClick(id) {
    const updatedFoods = foods.filter((food) => food.id !== id)
    setFoods(updatedFoods)
  }

  function handleUpdateClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        }
      } else {
        return food
      }
    })
    setFoods(newFoodArray)
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      <button onClick={() => handleLiClick(food.id)}>delete</button>
      <button onClick={() => handleUpdateClick(food.id)}>update</button>
    </li>
  ))

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  )
}

export default SpicyFoodList
