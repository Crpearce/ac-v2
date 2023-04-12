import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { sections, reasons, cities, reviews, boulderGallery, briggsGallery, galleryMenu, jensenGallery } from "./data";
import Navigation from "../components/navigation/navigation.component";
import Hamburger from "../components/hamburger/hamburger.component";
import Home from "../routes/home/home.component";
import About from "../routes/about/about.component";
import Contact from "../routes/contact/contact.component";
import Remodeling from "../routes/remodeling/remodeling.component";
import Structural from "../routes/structural/structural.component";
import HomeAdditions from "../routes/homeAdditions/homeAdditions.component";
import Gallery from "../routes/gallery/gallery.component";
import Concrete from "../routes/concrete/concrete.component";
import Areas from "../routes/areas/areas.component";
import Reviews from "../routes/reviews/reviews.component";
import Footer from "../components/footer/footer.component";

function App() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowDimension > 1024;
  
  return (
    <>
      {isDesktop ? <Navigation tabs={sections} /> : <Hamburger tabs={sections}/>}
      <Routes className="App">
        <Route path="/" element={<Home justification={reasons} />} />
        <Route path="/about" element={<About />} />
        <Route path="/structural" element={<Structural />} />
        <Route path="/remodeling" element={<Remodeling />} />
        <Route path="/concrete" element={<Concrete />} />
        <Route path="/home-additions" element={<HomeAdditions />} />
        <Route path="/gallery" element={<Gallery  boulderPhotos={boulderGallery} briggsPhotos={briggsGallery} jensenPhotos={jensenGallery} menu={galleryMenu}/>} />
        <Route path="/areas" element={<Areas serviceAreas={cities} />} />
        <Route path="/reviews" element={<Reviews reviews={reviews}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
