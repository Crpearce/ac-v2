import StructuralServices from '../../components/structuralServices/structuralServices.component';
import Banner from '../../components/banner/banner.component';
import './structural.styles.css';
import { useEffect } from 'react';

const Structural = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="structural-wrapper">
      <Banner sectionName='Structural Services'/>
      <div className="structural-container">
        <h2 className="structural-ready">
          LET THE EXPERTS INSTALL YOUR LOAD-BEARING WALL
        </h2>
        <span className="structural-reach">
          {" "}
          TAKE ADVANTAGE OF OUR STRUCTURAL INSTALLATION SERVICES IN LITTLETON &
          AURORA, CO
        </span>
        <p className="structural-types">
          If you haven't remodeled your home in years, it might need some
          upgrades. Alignment Construction LLC is a home remodeling contractor
          that can help. You can count on us to enhance the appearance,
          functionality and value of your home.
        </p>
      </div>
      <StructuralServices />
    </section>
  );
};

export default Structural;
