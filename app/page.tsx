import AboutParallax from "@/components/RoofingSite/AboutParallax";
import ParallaxSection from "@/components/RoofingSite/ParallaxSection";
import ProjectSection from "@/components/RoofingSite/ProjectSection";
import QualitySection from "@/components/RoofingSite/QualitySection";
import QuestionInfo from "@/components/RoofingSite/QuestionInfo";
import RoofingAbout from "@/components/RoofingSite/RoofingAbout";
import RoofingEstimate from "@/components/RoofingSite/RoofingEstimate";
import RoofingFooter from "@/components/RoofingSite/RoofingFooter";
import RoofingNav from "@/components/RoofingSite/RoofingNav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <RoofingNav />
      <RoofingEstimate />
      <RoofingAbout />
      <AboutParallax />
      <QualitySection />
      <ParallaxSection />
      <ProjectSection />
      <QuestionInfo />
      <RoofingFooter />
    </>
  );
}
