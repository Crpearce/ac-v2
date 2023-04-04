import concrete from "../../assets/concrete.webp";
import { Link } from "react-router-dom";
import "./concreteServices.styles.css";

const ConcreteServices = () => {
  return (
    <div
      className="concrete-services-link-container"
      style={{
        backgroundImage: `url(${concrete})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <h3 className="concrete-services-link-header">
        BEAUTIFY YOUR PLACE WITH NEW CONCRETE FEATURES
      </h3>
      <p className="concrete-services-link-schedule">
        SCHEDULE CONCRETE FLATWORK SERVICES TODAY
      </p>
      <Link to="/contact">
        <button className="concrete-services-link-button">CONTACT US</button>
      </Link>
    </div>
  );
};

export default ConcreteServices;
