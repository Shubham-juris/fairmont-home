import React from "react";
import { HeroSection } from "../components/construction/HeroSection";
import { QualityMaterials } from "../components/construction/QualityMaterials";
import { ModernTech } from "../components/construction/ModernTech";
import { SafetyCompliance } from "../components/construction/SafetyCompliance";
import { BuildProcess } from "../components/construction/BuildProcess";

const Construction = () => {
  return (
    <>
      <HeroSection />
      <BuildProcess />
      <ModernTech />
      <QualityMaterials />
      <SafetyCompliance/>
    </>
  );
};

export default Construction;
