import "./photosSection.styles.css";

const PhotosSection = ({ photos }) => {
  return (
    <>
      <div className="photo-section-container">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-container">
            <img
              src={photo.photo}
              alt="project gallery"
              className="gallery-photo"
            />
            <h6 className="photo-location">{photo.location}</h6>
            <span className="gallery-photo-description">{photo.desc}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotosSection;
