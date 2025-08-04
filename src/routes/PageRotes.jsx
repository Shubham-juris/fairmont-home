import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Construction from "../pages/Construction";
import { DroneMonitoringPage } from "../components/construction/pages/DroneMonitoringPage";
import { SmartConstructionToolsPage } from "../components/construction/pages/SmartConstructionToolsPage";
import { ThreeDModelingPage } from "../components/construction/pages/ThreeDModelingPage";

const PageRotes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="construction" element={<Construction />} />

        <Route path="drone" element={<DroneMonitoringPage />} />
        <Route path="tools" element={<SmartConstructionToolsPage />} />
        <Route path="3d" element={<ThreeDModelingPage />} />
      </Routes>
    </>
  );
};

export default PageRotes;
