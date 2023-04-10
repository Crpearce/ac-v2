import "./gallery.styles.css";
import Banner from "../../components/banner/banner.component";

const Gallery = ({ photos }) => {
  return (
    <section>
      <Banner sectionName="Gallery" />
      <div className="gallery-wrapper">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-container">
            <h1 className="photo-location">{photo.location}</h1>
            <img
              src={photo.photo}
              alt="project gallery"
              className="gallery-photo"
            />
            <span>{photo.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
