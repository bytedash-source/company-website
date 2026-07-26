import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { ServiceIndex } from "@/components/ui/service-index";
import { services } from "@/content/services";

export function ServicesSection() {
  const items = services.map((service) => ({
    index: service.index,
    title: service.previewTitle,
    description: service.previewDescription,
  }));

  return (
    <section data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-32">
      <Container>
        <SectionLabel>What we make</SectionLabel>
        <h2 className="mt-6 max-w-2xl text-4xl leading-[1.1] font-medium sm:text-5xl">
          Built around the work your business needs to move.
        </h2>

        <div className="mt-12">
          <ServiceIndex items={items} />
        </div>

        <CtaLink href="/services" className="mt-10">
          Explore services
        </CtaLink>
      </Container>
    </section>
  );
}
