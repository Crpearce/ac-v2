import { Link } from "react-router-dom";
import { useEffect } from "react";
import HomeAdvisor from "../../components/homeAdvisor/homeAdvisor.component";
import ServeBar from "../../components/serveBar/serveBar.component";
import Specialization from "../../components/specialization/specialization.component";
import "./about.styles.css";
import Banner from "../../components/banner/banner.component";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="about-wrapper">
      <Banner sectionName='About Us'/>
      <HomeAdvisor />
      <ServeBar />
      <Specialization />
      <div className="about-container">
        <h2 className="about-ready">
          TURN TO YOUR TRUSTED, LOCAL CONTRACTOR TODAY!
        </h2>
        <p className="about-types">
          With over 10 years of experience, Alignment Construction LLC and our
          team of highly skilled professionals strive for perfection and
          satisfied customers. We are a locally owned and operated company in
          Littleton, CO, but also serve the rest of Colorado. Our team takes
          pride in our solid workmanship, excellent customer service, honest &
          competitive prices and premium materials.
        </p>
        <Link to="/contact">
          <button className="concrete-services-link-button">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default About;
