import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { EditorialPhotoPlaceholder } from "@/components/media/editorial-photo-placeholder";

export function ManifestoSection() {
  return (
    <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <SectionLabel tone="light">What we believe</SectionLabel>
            <h2 className="mt-6 text-4xl leading-[1.1] font-medium sm:text-5xl">
              Technology should feel human.
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink/70">
              The best digital products do more than function. They make
              information easier to understand, decisions easier to make, and
              everyday work easier to move forward.
            </p>
            <p className="mt-4 max-w-md text-lg text-ink/70">
              BYTE DASH brings product thinking, design, and engineering into
              one process, turning complex requirements into focused
              experiences built for real use.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 lg:col-span-6 lg:mt-16 lg:gap-6">
            <Reveal delayMs={100} className="col-span-2 sm:col-span-1">
              <EditorialPhotoPlaceholder aspectRatio="portrait" variant="graphite" />
            </Reveal>
            <Reveal
              delayMs={200}
              className="col-span-2 mt-8 sm:col-span-1 sm:mt-16"
            >
              <EditorialPhotoPlaceholder aspectRatio="square" variant="graphite" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
