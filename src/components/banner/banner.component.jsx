import "./banner.styles.css";
import banner from "../../assets/banner.png";

const Banner = ({ sectionName }) => {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="banner-header">
        
        {sectionName}
        </h1>
    </div>
  );
};

export default Banner;
