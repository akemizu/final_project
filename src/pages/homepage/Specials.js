import "./specials.css";
import MealCard from '../../components/ui/card/MealCard';
import { HashLink } from "react-router-hash-link";
import greekSalad from '../../assets/greeksalad.jpg';
import bruschetta from '../../assets/bruschetta.jpg';
import lemonDessert from '../../assets/lemondessert.jpg';

const meals = [
  {
    name: "Greek Salad",
    image: greekSalad,
    price: "$8.00",
    description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: bruschetta,
    price: "$6.99",
    description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessert,
    price: "$7.49",
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const Specials = () => {
  return (
    <section className="container grid specials" id="menu">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <HashLink className="button-primary" to="/#menu">
          Online Menu
        </HashLink>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default Specials;
