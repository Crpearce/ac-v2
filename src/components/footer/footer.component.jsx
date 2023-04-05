import "./footer.styles.css";
import {Link} from 'react-router-dom'
import logo from  '../../assets/logo.webp';

const Footer = () => {
  return (
    <div className="footer-container">
      <Link to={'/'} aria-label="link to home" className="logo-container">
        <img src={logo} alt="alignment construction logo" className="footer-logo" />
      </Link>
      <span className="copyright">Copyright © 2023 Alignment Contruction LLC, all rights reserved.</span>
      <span className="copyright-address">Littleton, CO 80121 (720) 282-1210</span>
    </div>
  );
};

export default Footer;
