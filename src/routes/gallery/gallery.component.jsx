import "./gallery.styles.css";
import Banner from "../../components/banner/banner.component";
import PhotosSection from "../../components/photosSection/photosSection.component";

const Gallery = ({ boulderPhotos }) => {

  return (
    <section>
      <Banner sectionName="Gallery" />
      <div className="gallery-wrapper">
        <PhotosSection photos={boulderPhotos}/>
      </div>
    </section>
  );
};

export default Gallery;
