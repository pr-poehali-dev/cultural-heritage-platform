import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";

// Ленивая загрузка компонентов
const CulturalNavigation = lazy(
  () => import("@/components/CulturalNavigation"),
);
const GameMechanics = lazy(() => import("@/components/GameMechanics"));
const EducationalTools = lazy(() => import("@/components/EducationalTools"));
const SocialFeatures = lazy(() => import("@/components/SocialFeatures"));
const MultimediaGallery = lazy(() => import("@/components/MultimediaGallery"));

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Hero />
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <CulturalNavigation />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <GameMechanics />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <EducationalTools />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <SocialFeatures />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <MultimediaGallery />
      </Suspense>
    </div>
  );
};

export default Index;
