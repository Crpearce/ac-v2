import { useEffect } from "react";
import { Link } from "react-router-dom";
import blueprint from "../../assets/blueprint.webp";
import concrete2 from "../../assets/concrete2.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.styles.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="projects-wrapper">
      <Link
        to='/home-additions'
        className="additions-link-container"
        data-aos="zoom-in-up"
        data-aos-anchor-placement="bottom-bottom"
        style={{
          backgroundImage: `url(${blueprint})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <span className="additions-link-title">ADDITIONS</span>
        <span className="additions-link-text">
          BOOST THE SQUARE FOOTAGE OF YOUR HOME BY GETTING IN TOUCH WITH US NOW.
        </span>
      </Link>
      <Link
        to='/concrete'
        className="concrete-link-container"
        data-aos="zoom-in-up"
        data-aos-anchor-placement="top-bottom"
        style={{
          backgroundImage: `url(${concrete2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <span className="concrete-link-title">CONCRETE</span>
        <span className="concrete-link-text">
          RELY ON OUR TEAM TO INSTALL CONCRETE DRIVEWAYS, FOUNDATIONS, AND
          PATIOS.
        </span>
      </Link>
    </div>
  );
};

export default Projects;
