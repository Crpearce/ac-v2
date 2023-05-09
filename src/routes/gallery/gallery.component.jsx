// import { useState } from "react";
import Banner from "../../components/banner/banner.component";
import PhotosSection from "../../components/photosSection/photosSection.component";
import "./gallery.styles.css";

const Gallery = ({ projectPhotos }) => {

  return (
    <section>
      <Banner sectionName="Gallery" />
      <div className="gallery-wrapper">
        <PhotosSection photos={projectPhotos} />
      </div>
    </section>
  );
};

export default Gallery;
