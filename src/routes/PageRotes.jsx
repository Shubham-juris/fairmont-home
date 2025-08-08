import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Construction from "../pages/Construction";
import { DroneMonitoringPage } from "../components/construction/pages/DroneMonitoringPage";
import { SmartConstructionToolsPage } from "../components/construction/pages/SmartConstructionToolsPage";
import { ThreeDModelingPage } from "../components/construction/pages/ThreeDModelingPage";
import { CedarModernPage } from "../components/homecomponents/homespages/CedarModernPage";
import { PineSignaturePage } from "../components/homecomponents/homespages/PineSignaturePage";
import { MapleClassicPage } from "../components/homecomponents/homespages/MapleClassicPage";
import { ScrollToTop } from "../components/scrolltotop/ScrollToTop";
import GalleryPage from "../pages/GalleryPage";
import AboutPage from "../pages/AboutPage";
import CarrerPage from "../pages/CarrerPage";
import Contact from "../components/contactUs/Contact";

const PageRotes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="construction" element={<Construction />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="carrer" element={<CarrerPage />} />
        <Route path="contact" element={<Contact/>}/>

        <Route path="drone" element={<DroneMonitoringPage />} />
        <Route path="tools" element={<SmartConstructionToolsPage />} />
        <Route path="3d" element={<ThreeDModelingPage />} />

        <Route path="cedar" element={<CedarModernPage />} />
        <Route path="maple" element={<MapleClassicPage />} />
        <Route path="pine" element={<PineSignaturePage />} />
      </Routes>
    </>
  );
};

export default PageRotes;
