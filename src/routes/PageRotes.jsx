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

const PageRotes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="construction" element={<Construction />} />

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
