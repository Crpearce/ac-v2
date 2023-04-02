import "./hamburger.styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Modal from "../modal/modal.component";

const Hamburger = ({ tabs }) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(null);

  const showNavHandler = () => {
    setHamburgerMenu(true);
  };

  const hideNavHandler = () => {
    setHamburgerMenu(false);
  };

  return (
    <>
      {hamburgerMenu === true ? (
        <Modal hamLinks={tabs} hideNavHandler={hideNavHandler}/>
      ) : (
        <section className="hamburger-container">
          <GiHamburgerMenu
            className="hamburger-icon"
            onClick={showNavHandler}
          />
          )
        </section>
      )}
    </>
  );
};

export default Hamburger;
