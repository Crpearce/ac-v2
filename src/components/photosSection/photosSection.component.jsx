import "./photosSection.styles.css";

const PhotosSection = ({photos}) => {
    console.log(photos)
  return (
    <div>
        <h5 className="photo-location">{photos[0].location}</h5>
      {photos.map((photo) => (
        <div key={photo.id} className="photo-container">
          <img
            src={photo.photo}
            alt="project gallery"
            className="gallery-photo"
          />
          <span>{photo.desc}</span>
        </div>
      ))}
    </div>
  );
};

export default PhotosSection;
