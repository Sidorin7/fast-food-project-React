
import "./foodCard.css";

const FoodCard = ({ title, img, text}) => {
  return (
    <div className="food-list__card">
      <img src={img} alt={title} className="food-list__img" />
      <div className="food-list__text-wrapper">
        <h4 className="food-list__title">{title}</h4>
        <p className="food-list__desc">{text}</p>
      </div>
    </div>
  );
};

export default FoodCard;
