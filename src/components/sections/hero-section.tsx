import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { MicroLabel } from "@/components/ui/micro-label";
import { AbstractSystemVisual } from "@/components/media/abstract-system-visual";

export function HeroSection() {
  return (
    <section data-surface="dark" className="bg-graphite pt-32 pb-20 text-ivory sm:pt-40 sm:pb-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <MicroLabel className="text-ivory/50">
              Digital Product Studio — Bangkok
            </MicroLabel>

            <h1 className="mt-6 text-5xl leading-[1.08] font-medium sm:text-6xl lg:text-6xl xl:text-7xl">
              สร้างประสบการณ์ดิจิทัล
              <br />
              ที่ใช้งานได้จริง และรู้สึกใช่
            </h1>

            <p className="mt-8 max-w-lg text-lg text-ivory/70">
              BYTE DASH ออกแบบและพัฒนา Mobile, Web และ UX/UI systems
              สำหรับธุรกิจที่ต้องการผลิตภัณฑ์ดิจิทัลที่รวดเร็ว ใช้งานง่าย
              และเติบโตได้
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <CtaLink href="#work" variant="framed">
                ดูผลงาน
              </CtaLink>
              <CtaLink href="#contact" variant="text">
                เริ่มต้นโปรเจกต์
              </CtaLink>
            </div>
          </div>

          <AbstractSystemVisual className="max-w-md justify-self-center lg:max-w-none lg:justify-self-end" />
        </div>
      </Container>
    </section>
  );
}
