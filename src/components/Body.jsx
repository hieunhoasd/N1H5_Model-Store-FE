import HeroSection from "./HeroSection";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import CollectorCorner from "./CollectorCorner";
import ShowcaseBanner from "./ShowcaseBanner";
import BrandPartners from "./BrandPartners";
import DioramaSection from "./DioramaSection";
import CommunitySection from "./CommunitySection";
import BrandMarquee from "./BrandMarquee";

export default function Body() {
  return (
    <main className="w-full pt-20 bg-primary-container min-h-screen">
      <div className="flex flex-col w-full">
        <HeroSection />
        <CategoryFilter />
        <ProductGrid />
        <CollectorCorner />
        <ShowcaseBanner />
        <BrandPartners />
        <DioramaSection />
        <CommunitySection />
        <BrandMarquee />
      </div>
    </main>
  );
}
