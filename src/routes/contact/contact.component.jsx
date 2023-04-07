import Hours from "../../components/hours/hours.component";
import Form from "../../components/form/form.component";
import Banner from "../../components/banner/banner.component";
import { Link } from "react-router-dom";
import logo2 from '../../assets/logo2.webp';
import { useEffect } from "react";
import "./contact.styles.css";
import ServeBar from "../../components/serveBar/serveBar.component";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="contact-wrapper">
      <Banner sectionName="Contact" />
      <div className="contact-form-container">
        <Form />
        <Hours />
      </div>
      <div className="contact-details-container">
      <Link to={'/'} aria-label="link to home" className="logo2-container">
        <img src={logo2} alt="alignment construction logo" className="logo2" />
      </Link>
        <p className="contact-intro">
          Our team in Littleton, CO has over 15 years of experience. We
          specialize in structural wall installation, home addition, concrete
          and remodeling services.
        </p>
        <span className="contact-info">
          Call{" "}
          <a
            href="tel:(720)282-1210"
            data-icon="A"
            title="(720)282-1210"
            className="contact-number"
          >
            (720) 282-1210
          </a>{" "}
          or fill out the form below to learn more about our services today.
        </span>
      </div>
      <ServeBar />
    </section>
  );
};

export default Contact;
