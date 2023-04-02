import Hours from "../../components/hours/hours.component";
import Form from "../../components/form/form.component";
import Banner from "../../components/banner/banner.component";
import { useEffect } from "react";
import "./contact.styles.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-wrapper">
      <Banner sectionName="Contact" />
      <div className="contact-details-container">
        <p className="contact-intro">
          Our team in Littleton, CO has over 15 years of experience. We
          specialize in structural wall installation, home addition, concrete
          and remodeling services.
        </p>
        <span>
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
      <div className="contact-form-container">
        <Form />
        <Hours />
      </div>
    </div>
  );
};

export default Contact;
