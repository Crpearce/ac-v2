import "./modal.styles.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ hamLinks, hideNavHandler }) => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);
  return (
    <div className="modal-wrapper">
      <div className="close-button-container">
        <AiFillCloseCircle className="close-button" />
      </div>
      <div className="modal-container" data-aos="fade-right">
        {hamLinks.map((category) => (
          <li key={category.id} className="ham-links">
            <NavLink
              onClick={hideNavHandler}
              className="ham-tab"
              to={`/${category.link}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <span className="ham-tab">{category.title}</span>
            </NavLink>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Modal;
