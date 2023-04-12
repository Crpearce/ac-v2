import { useState } from "react";
import Banner from "../../components/banner/banner.component";
import PhotosSection from "../../components/photosSection/photosSection.component";
import "./gallery.styles.css";

const Gallery = ({ boulderPhotos, briggsPhotos, menu }) => {
  const [activeJob, setActiveJob] = useState('Boulder Remodel');

  const handleClick = (event) => setActiveJob(event.target.className);

  return (
    <section>
      <Banner sectionName="Gallery" />
      <div className="gallery-wrapper">
        <div className="gallery-nav">
          {menu.map((project) => (
            <span className={project.location} onClick={handleClick} key={project.id}>
              {project.location}
            </span>
          ))}
        </div>
        {activeJob === 'Boulder Remodel' && (
          <PhotosSection photos={boulderPhotos} trigger="boulderPhotos" />
        )}
        {activeJob === 'Briggs Beam Installation' && (
          <PhotosSection photos={briggsPhotos} trigger="briggsPhotos" />
        )}
      </div>
    </section>
  );
};

export default Gallery;
