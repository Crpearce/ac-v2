import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import logo from "../../assets/logo.webp";
import homeBg from "../../assets/homeBg.webp";
import "./greeting.styles.css";
import "aos/dist/aos.css";

const Greeting = () => {

  useEffect(() => {
    AOS.init({ duration: 2250 });
  }, []);
  
  return (
    <div
      className="greeting-container"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <img
        src={logo}
        alt="alignment construction"
        className="greeting-logo"
        data-aos="zoom-in"
      />
      <h3 className="trust">TRUST OUR TEAM TO MODERNIZE YOUR HOME</h3>
      <p className="intro">
        Look to our home remodeling contractor in Littleton & Aurora, CO
      </p>
      <Link to="/contact">
        <button>CONTACT US</button>
      </Link>
    </div>
  );
};

export default Greeting;
