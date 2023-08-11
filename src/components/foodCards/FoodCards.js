import FoodCard from "../foodCard/FoodCard";

import { foodList } from "./../helpers/productList";

import "./foodCards.css";

const FoodCards = () => {
  return (
    <section className="food-list">
      <div className="container">
        {foodList.map((foodCard, index) => {
          return (
            <FoodCard
              key={index}
              title={foodCard.title}
              text={foodCard.text}
              img={foodCard.img}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FoodCards;
