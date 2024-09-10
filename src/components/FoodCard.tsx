// react
import React from "react"

const FoodCard = ({ food }) => {
  return (
    <div className="border border-black p-2">
      <div key={food.id}>{food.name} | {food.kind}</div>
      {
        food.seasonality.map((season, index) => (
          <div key={`${food.id}-season-${index}`}>
            • {season}
          </div>
        ))
      }
    </div>
  )
}

export default FoodCard