import { useEffect } from "react";
import { Link } from "react-router-dom";
import walkway from "../../assets/walkway.png";
import driveway from "../../assets/driveway.png";
import patio from "../../assets/patio.png";
import retaining from "../../assets/retaining.png";
import foundation from "../../assets/foundation.png";
import concrete from '../../assets/concrete.png'

import AOS from "aos";
import "./concrete.styles.css";
import "aos/dist/aos.css";

const Concrete = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home-additions-wrapper">
        <div className="home-details-container">
          <h4 className="home-additions-header" data-aos="fade-right">
            Concrete
          </h4>
          <p className="home-additions-text" data-aos="fade-right">
            Looking for a new retaining wall, concrete patio, sidewalk,
            foundation, firepit, walkway or driveway? You can look to us for
            both commercial and residential projects. Reach out now for concrete
            driveway installation in Littleton & Aurora, CO.
          </p>
          <Link
            to="/contact"
            className="concrete-contact-button"
            data-aos="fade-right"
          >
            <button>Contact Us</button>
          </Link>
        </div>
        <div
          className="home-images-container"
          style={{
            backgroundImage: `url(${concrete})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            src={walkway}
            data-aos="fade-left"
            className="addition-image"
            alt="concrete block walkway"
          />
        </div>
      </div>
      <div className="home-additions-types-container">
        <div className="popular-addition-container">
          <h2 className="popular-additions-header">
            POPULAR CONCRETE SERVICES
          </h2>
          <p className="popular-additions-text">
            We offer extensive concrete services to best meet your needs. You
            can count on us to install:
          </p>
        </div>
        <ul className="popular-addition-options-container">
          <li className="additions-list" data-aos="fade-in">
            Retaining walls
          </li>
          <li className="additions-list" data-aos="fade-in">
            Concrete patio to boost your outdoor living space
          </li>
          <li className="additions-list" data-aos="fade-in">
            Sidewalks
          </li>
          <li className="additions-list" data-aos="fade-in">
            Concrete foundation to start your next building project
          </li>
          <li className="additions-list" data-aos="fade-in">
            Concrete walkway to enhance your home's appearance
          </li>
          <li className="additions-list" data-aos="fade-in">
            Fire Pits
          </li>
        </ul>
      </div>
      <div className="concrete-project-types-container">
        <div className="concrete-type-driveway">
          <h2 className="concrete-additions-header1" data-aos="flip-up">
            DRIVEWAYS
          </h2>
          <h6 className="pitch">
            RELY ON US FOR A TOP-OF-THE-LINE DRIVEWAY INSTALLATION
          </h6>
          <div className="concrete-additions-info-container1">
            <p className="concrete-additions-info1" data-aos="fade-right">
              Driveways aren't just for parking - they also affect your home's
              curb appeal. Does your driveway have cracks, potholes, drainage
              problems or an overall rough look? A new driveway can increase
              your property's value between 5 and 10 percent. That's why you
              should hire Alignment Construction LLC for concrete driveway
              installations. Our team of experts will install an elegant
              driveway that will last for years to come.
            </p>
            <img
              src={driveway}
              className="concrete-additions-photo"
              alt="concrete project"
            />
          </div>
        </div>
        <div className="concrete-type-patio">
          <h2 className="concrete-additions-header2" data-aos="flip-up">
            PATIOS
          </h2>
          <h5 className="pitch">
            WE OFFER PLENTY OF DECORATIVE CONCRETE PATIO OPTIONS TO GIVE YOU THE
            EXACT LOOK YOU'RE GOING FOR
          </h5>
          <div className="concrete-additions-info-container2">
            <img
              src={patio}
              className="concrete-additions-photo"
              alt="concrete project"
            />
            <p className="concrete-additions-info2" data-aos="fade-left">
              Do you want the perfect spot to sit and enjoy the weather? A
              decorative concrete patio can make your property more attractive
              while adding a new space to your home. Alignment Construction in
              will complete your concrete patio installation correctly. We'll
              add a stain-resistant sealing to make this the perfect choice for
              pool decks or barbecue spaces. A concrete patio installation will
              benefit your home by increasing your property value, boosting your
              curb appeal, and giving you a chance to customize your yard.
            </p>
          </div>
        </div>
        <div className="concrete-type-retaining">
          <h2 className="concrete-additions-header1" data-aos="flip-up">
            RETAINING WALLS
          </h2>
          <h6 className="pitch">
            A NEW RETAINING WALL WILL HELP PREVENT EROSION AND MAKE YOUR YARD
            LOOK BEAUTIFUL
          </h6>
          <div className="concrete-additions-info-container1">
            <p className="concrete-additions-info1" data-aos="fade-right">
              If your property is on a slope, it will erode more easily. Protect
              your landscape by getting a retaining wall from Alignment
              Construction. We offer retaining wall installation services for
              clients in Littleton & Aurora, CO. We can build retaining walls
              out of brick, concrete blocks or poured concrete. Your concrete
              contractor will use top-of-the-line tools and materials to create
              your retaining wall.
            </p>
            <img
              src={retaining}
              className="concrete-additions-photo"
              alt="concrete project"
            />
          </div>
        </div>
        <div className="concrete-type-foundation">
          <h2 className="concrete-additions-header2" data-aos="flip-up">
            FOUNDATIONS
          </h2>
          <h5 className="pitch">
            A STRONG BUILD STARTS WITH THE RIGHT FOUNDATION
          </h5>
          <div className="concrete-additions-info-container2">
            <img
              src={foundation}
              className="concrete-additions-photo"
              alt="concrete project"
            />
            <p className="concrete-additions-info2" data-aos="fade-left">
              Your new home or commercial build is a huge investment. When the
              time comes to pour the foundation at your new construction
              project, contact Alignment Construction. With over 15 years
              experience of concrete foundation experience, we should be your
              top choice for the job. You can trust us to form, pour, and set a
              durable foundation that's built to last.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concrete;
