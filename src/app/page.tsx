import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { WhyByteDashSection } from "@/components/sections/why-bytedash-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-ivory"
      >
        ข้ามไปเนื้อหาหลัก
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <HeroSection />
        <ManifestoSection />
        <ServicesSection />
        <ProcessSection />
        <SelectedWorkSection />
        <WhyByteDashSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
