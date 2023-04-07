import "./areas.styles.css";
import Banner from "../../components/banner/banner.component";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Areas = ({ serviceAreas }) => {
  useEffect(() => {
    AOS.init({ duration: 1800 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="service-areas-wrapper">
      <Banner sectionName="Service Areas" />
      <div className="service-area-container">
        <p className="areas-text">
          At Alignment Construction we can tackle a wide variety of construction
          projects. Get in contact today for structural wall installations,
          load-bearing beam installations, concrete flatwork services, home
          additions, home remodeling and more! We are based in Littleton, CO and
          serve all surrounding areas.
        </p>
        <ul className="service-areas-list">
          {serviceAreas.map((city) => (
            <li key={city.id} className="city-name">
              {city.city}
            </li>
          ))}
        </ul>
      </div>
      <iframe
        title="google map service location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d466718.41588733596!2d-104.60019083246868!3d39.77811802865113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c813e194fd859%3A0x10fa5acd7d19f057!2sAlignment%20Construction%20LLC!5e0!3m2!1sen!2sus!4v1679942858374!5m2!1sen!2sus"
        loading="lazy"
        className="google-map"
      ></iframe>
      <Link to="/contact">
        <button className="concrete-services-link-button">Contact Us</button>
      </Link>
    </section>
  );
};

export default Areas;
