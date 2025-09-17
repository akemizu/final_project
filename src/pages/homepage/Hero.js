import { HashLink } from "react-router-hash-link";
import "./hero.css";

const Hero = () => {
    const restaurantFood = './assets/restaurantfood.jpg'
    return (
        <section className="hero">
            <div className="container grid">
                <div className="hero-information">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <HashLink className="button-primary" to="/reservations">
                        Reserve a table
                    </HashLink>
                </div>
                <img
                    className="hero-image"
                    src={restaurantFood}
                    alt="Restaurant food"
                />
            </div>
        </section>
    );
};

export default Hero;