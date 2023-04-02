import "./homeAdvisor.styles.css";
import { Link } from "react-router-dom";
import homeAdvisor from "../../assets/homeAdvisor.png";
import { SiHomeadvisor } from "react-icons/si";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsYelp } from "react-icons/bs";




const HomeAdvisor = () => {
  return (
    <div className="home-advisor-container">
      <Link to="https://www.homeadvisor.com/rated.AlignmentConstruction.101362260.html">
        <img
          src={homeAdvisor}
          alt="home advisor approved stamp"
          className="home-advisor-logo"
        />
      </Link>
      <h4 className="home-advisor-header">
        WE HAVE HIGH STANDARDS IN ALL WE DO
      </h4>
      <p className="home-advisor-text">
        At Alignment Construction, LLC, we specialize in both commerical &
        residential projects and no job is too big or small. We look forward to
        working with you and establishing a long-term relationship as your go-to
        contractor in the Denver Metro Area. We have a strong reputation for
        delivering quality construction service at affordable prices.
      </p>
      <p className="home-advisor-text">
        Whether you are looking for home remodeling, structural beam
        installation, or concrete work, our quality of work is backed by our
        customer satisfaction guarantee.
      </p>
      <div>
        <Link to="https://www.homeadvisor.com/rated.AlignmentConstruction.101362260.html">
          <SiHomeadvisor
            alt="home advisor review icon"
            className="advisor-icon"
          />
        </Link>
        <Link to='https://g.co/kgs/9fgnMg'>
          <AiFillGoogleCircle alt='google reviews icon' className="google-icon"/>
        </Link>
        <Link to='https://www.yelp.com/biz/alignment-construction-littleton'>
          <BsYelp alt='yelp reviews icon' className="yelp-icon"/>
        </Link>
      </div>
    </div>
  );
};

export default HomeAdvisor;
