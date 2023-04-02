import { useEffect } from "react";
import "./transform.styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Transform = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="transform-wrapper" data-aos="zoom-in">
      <h2 className="transform-intro">WANT TO TRANSFORM YOUR HOME'S APPEARANCE?</h2>
      <span className="transform-reach">
        {" "}
        REACH OUT TODAY TO SCHEDULE OUR SERVICES
      </span>
      <p className="transform-types">
        You're reminded how shabby your place looks every time you come home.
        Luckily, the experts at Alignment Construction LLC in Littleton, CO are
        here to help. Our home remodeler will enhance your property's appearance
        and functionality. Whether you want to update your kitchen, bathroom or
        basement, we have you covered.
      </p>
      <a
        href="tel:(720)282-1210"
        data-icon="A"
        title="(720)282-1210"
        className="transform-link-number"
      >
        Call (720) 282-1210
      </a>
    </div>
  );
};

export default Transform;
