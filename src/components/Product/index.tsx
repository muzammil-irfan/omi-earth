import CommonContainer from "../shared/CommonContainer";
import DescriptionSection from "./DescriptionSection";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import OurMission from "./OurMission";
import ServiceSection from "./ServiceSection";
import SupportSection from "./SupportSection";
import WhySection from "./WhySection";

export default function ProductPage() {
  return (
    <>
      <HeroSection />
      <CommonContainer>
        <DescriptionSection />
        <ServiceSection />
      </CommonContainer>
      <FeaturesSection />
      <WhySection />
      <SupportSection />
      <CommonContainer>
        <OurMission />
      </CommonContainer>
    </>
  );
}
