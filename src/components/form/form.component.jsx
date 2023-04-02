import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.styles.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rl3595u",
        "template_hkengpm",
        form.current,
        "K5L2gpIrwMWUdwH2B"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
        );
        e.target.reset()
  };
  return (
    <div className="form-wrapper">
      <h2 className="email-us">Email Us</h2>
      <form className="form-container" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Full Name"
          name="user_name"
          required
        ></input>
        <input
          type="email"
          placeholder="Email address"
          name="user_email"
          required
        ></input>
        <input
          type="tel"
          placeholder="Phone number"
          name="user_number"
          required
        ></input>
        <textarea name="message" cols="30" rows="10" className="message"></textarea>
        <button className="send-email-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
