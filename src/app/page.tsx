import { HeroSection } from "@/components/sections/hero-section";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { CorePrinciplesSection } from "@/components/sections/core-principles-section";
import { ServicesSection } from "@/components/sections/services-section";
import { EnterprisePreviewSection } from "@/components/sections/enterprise-preview-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <CorePrinciplesSection />
      <ServicesSection />
      <EnterprisePreviewSection />
      <ProcessSection />
      <SelectedWorkSection />
      <FinalCtaSection />
    </>
  );
}
