import Navigation from "./navigation";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <>
      <div className=" hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OURSHOES.
          </p>


          <Link className="hero-btn" to="/Menu">
            <button>Shop Now</button>

            <button className="secondary-btn">category</button>
          </Link>

          <div classname="shopping">
            <p>Also available on</p>

            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
              {/* alt=means alternate text */}
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="shoe-logo" />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
