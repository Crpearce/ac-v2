import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./serveBar.styles.css";

const ServeBar = () => {
  useEffect(() => {
    AOS.init({ duration: 2250 });
  }, []);
  return (
    <div className="serve-container" data-aos="fade-in">
      <h3 className="serve-header">WE ARE READY TO SERVE YOU TODAY</h3>
      <span className="satisfaction">100% SATISFACTION GUARANTEED</span>
      <Link>
        <button className="grey-button">Get Quote</button>
      </Link>
    </div>
  );
};

export default ServeBar;
