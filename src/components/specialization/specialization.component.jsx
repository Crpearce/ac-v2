import "./specialization.styles.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import beam3 from '../../assets/beam3.png';

const Specialization = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div className="special-container">
      <p className="special-text" data-aos="fade-right">
        We specialize in beam installation as well as bathroom and kitchen
        remodels, but also offer a wide range of expertise for a variety of
        other Home Improvement projects. We are a bilingual company, and are
        happy to serve both our English and Spanish Speaking communities!
      </p>
      <img src={beam3} alt='remodeled living room' className="special-image"/>
    </div>
  );
};

export default Specialization;
