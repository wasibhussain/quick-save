import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection';
import { WhyQuickSaveSection } from '@/components/sections/WhyQuickSaveSection';
import { DeveloperSection } from '@/components/sections/DeveloperSection';

// Enforce static generation for this page
export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ScreenshotsSection />
        <WhyQuickSaveSection />
        <DeveloperSection />
      </main>
      <Footer />
    </div>
  );
}
