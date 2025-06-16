import Hero from "@/components/Hero";
import CulturalNavigation from "@/components/CulturalNavigation";
import GameMechanics from "@/components/GameMechanics";
import EducationalTools from "@/components/EducationalTools";
import SocialFeatures from "@/components/SocialFeatures";
import MultimediaGallery from "@/components/MultimediaGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Hero />
      <CulturalNavigation />
      <GameMechanics />
      <EducationalTools />
      <SocialFeatures />
      <MultimediaGallery />
    </div>
  );
};

export default Index;
