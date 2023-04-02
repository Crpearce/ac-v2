import { NavLink } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import "aos/dist/aos.css";
import "./navigation.styles.css";

const Navigation = ({ tabs }) => {
  return (
    <div className="navigation-wrapper">
      <aside className="phone-container">
        <ul>
          <li>
            <a
              href="tel:(720)282-1210"
              data-icon="A"
              title="(720)282-1210"
              className="phone"
            >
              <BsFillTelephoneOutboundFill className="phone-icon" />
              <span className="phone-number"> (720) 282-1210</span>
            </a>
          </li>
        </ul>
      </aside>
      <div className="nav-sections-container">
        <ul className="nav-menu">
          {tabs.map((category) => (
            <li key={category.id} className="nav-links">
              <NavLink
                className='section-tab'
                to={`/${category.link}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <span className='section-tab'>{category.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
