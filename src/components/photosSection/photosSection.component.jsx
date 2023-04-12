import "./photosSection.styles.css";

const PhotosSection = ({ photos }) => {

  return (
    <>
      <h5 className="photo-location">{photos[0].location}</h5>
    <div className="photo-section-container">
      {photos.map((photo) => (
          <div key={photo.id} className="photo-container">
          <img
            src={photo.photo}
            alt="project gallery"
            className="gallery-photo"
            />
          <span className="gallery-photo-description">{photo.desc}</span>
        </div>
      ))}
    </div>
      </>
  );
};

export default PhotosSection;
