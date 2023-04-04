import "./modal.styles.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillCloseSquare } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ hamLinks, hideNavHandler }) => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);
  return (
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
        <AiFillCloseSquare className="close-button" onClick={hideNavHandler}/>
      </div>

  );
};

export default Modal;
