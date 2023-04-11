import { useEffect, useState } from "react";
import Banner from "../../components/banner/banner.component";
import PhotosSection from "../../components/photosSection/photosSection.component";
import "./gallery.styles.css";

const Gallery = ({ boulderPhotos, briggsPhotos }) => {
    const [activeJob, setActiveJob] = useState(true);

  return (
    <section>
      <Banner sectionName="Gallery" />
      <div className="gallery-wrapper">
        {/* {activeJob &&  */}
        <PhotosSection photos={boulderPhotos}/>
        <PhotosSection photos={briggsPhotos}/>

        {/* } */}
      </div>
    </section>
  );
};

export default Gallery;
