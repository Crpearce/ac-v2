import "./footer.styles.css";
import logo from  '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="/" aria-label="link to home" className="logo-container">
        <img src={logo} alt="alignment construction logo" className="logo" />
      </a>
      <span className="copyright">Copyright © 2023 Alignment Contruction LLC, all rights reserved.</span>
      <span className="copyright-address">Littleton, CO 80121 (720) 282-1210</span>
    </div>
  );
};

export default Footer;
