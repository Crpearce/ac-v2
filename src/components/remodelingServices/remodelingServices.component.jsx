import { useEffect } from "react";
import basement from "../../assets/basementRemodel.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./remodelingServices.styles.css";



const RemodelingServices = () => {
    useEffect(() => {
      AOS.init({ duration: 1250 });
    }, []);
  return (
    <div className="remodeling-services-wrapper">
      <div className="remodeling-services-container" data-aos="fade-right">
        <h2 className="services-header">SERVICES WE OFFER</h2>
        <p className="remodeling-details">
          Once we're done with our remodeling services, you'll love the way your
          place looks. Trust our team to remodel your:
        </p>
        <ul className="remodeling-list">
          <li>Bathroom</li>
          <li>Kitchen</li>
          <li>'Zoom' Room</li>
          <li>Garage</li>
          <li>Farm</li>
          <li>Basement</li>
          <li>Workshop</li>
        </ul>
        <p className="remodeling-details">
          We can turn your basement into a home theater, an extra bedroom or a
          mother-in-law suite. Looking for remodeling services? Get in touch
          with Alignment Construction in Littleton, CO now.
        </p>
      </div>
      <div className="remodeling-services-photo" data-aos="fade-left">
        <img src={basement} alt='remodeled apartment basement' className="apartment-basement"/>
      </div>
    </div>
  );
};

export default RemodelingServices;
