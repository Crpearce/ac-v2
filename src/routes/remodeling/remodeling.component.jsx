import { Link } from "react-router-dom";
import Banner from "../../components/banner/banner.component";
import "./remodeling.styles.css";
import { useEffect } from "react";
import RemodelingServices from "../../components/remodelingServices/remodelingServices.component";

const Remodeling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="remodeling-wrapper">
      <Banner sectionName='Remodeling'/>
      <div className="remodeling-container" >
        <h2 className="remodeling-ready">READY TO UPDATE YOUR HOME?</h2>
        <span className="remodeling-reach">
          {" "}
          TURN TO OUR HOME REMODELING CONTRACTOR TODAY!
        </span>
        <p className="remodeling-types">
          If you haven't remodeled your home in years, it might need some
          upgrades. Alignment Construction LLC is a home remodeling contractor
          that can help. You can count on us to enhance the appearance,
          functionality and value of your home.
        </p>
        <p className="remodeling-types">
          You can't even go to the kitchen without bumping into one of your
          family members. By remodeling, you can build equity in your existing
          home. Boost your home's square footage by hiring Alignment
          Construction LLC to install home additions. We'll make sure you and
          your family can live comfortably in your home.
        </p>
        <p className="remodeling-types">
          We can also install new plumbing fixtures, electrical features and
          flooring. Our team can even paint your walls while we're at it. If you
          have specific designs in mind, you can count on us to bring your
          vision to life.
        </p>
        <Link to='/contact'>
          <button className="contact-button">Contact Us</button>
        </Link>
      </div>
      <RemodelingServices />
    </section>
  );
};

export default Remodeling;
