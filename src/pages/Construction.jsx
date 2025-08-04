import React from "react";
import { HeroSection } from "../components/construction/HeroSection";
import { BuildProcess } from "../components/homecomponents/BuildProcess";
import { QualityMaterials } from "../components/construction/QualityMaterials";
import { ModernTech } from "../components/construction/ModernTech";
import { SafetyCompliance } from "../components/construction/SafetyCompliance";

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
