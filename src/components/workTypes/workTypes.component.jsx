import { useEffect } from "react";
import { Link } from "react-router-dom";

import kitchen from "../../assets/remodeling.png";
import construction from "../../assets/structural.png";

import "./workTypes.styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkTypes = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="work-type-wrapper">
      <Link
        to='/remodeling'
        className="remodeling-link-container"
        data-aos="fade-right"
        style={{
          backgroundImage: `url(${kitchen})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h4 className="remodeling-link-header">REMODELING</h4>
        <span className="remodeling-link-text">
          IF YOU WANT TO UPDATE YOUR PLACE, HIRE OUR HOME REMODELING CONTRACTOR.
        </span>
      </Link>
      <Link
        to='/structural'
        className="structural-link-container"
        data-aos="fade-left"
        style={{
          backgroundImage: `url(${construction})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h4 className="structural-link-header">STRUCTURAL SERVICES</h4>
        <span className="structural-link-text">
          YOU CAN COUNT ON US TO IMPROVE THE STRUCTURAL INTEGRITY OF YOUR
          PROPERTY.
        </span>
      </Link>
    </div>
  );
};

export default WorkTypes;
