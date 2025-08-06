import React from "react";
import AboutHeroSection from "../components/About/Herosection";
import CompanyOverviewSection from "../components/About/CompanyOverviewSection";
import OurValuesSection from "../components/About/OurValuesSection";
import WhyChooseUsSection from "../components/About/WhyChooseUsSection";
import AchievementsSection from "../components/About/AchievementsSection";

const AboutPage = () => {
  return (
    <>
      <AboutHeroSection />
      <CompanyOverviewSection />
      <OurValuesSection />
      <AchievementsSection />
      <WhyChooseUsSection />
    </>
  );
};

export default AboutPage;
