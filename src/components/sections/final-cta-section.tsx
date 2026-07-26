import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { siteInfo } from "@/content/site";

export function FinalCtaSection() {
  return (
    <section id="contact" data-surface="dark" className="bg-graphite py-24 text-ivory sm:py-36">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-4xl leading-[1.1] font-medium sm:text-6xl">
            มีไอเดียที่อยากทำให้เกิดขึ้นจริงไหม?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ivory/70">
            เล่าโจทย์ของคุณให้เราฟัง แล้วมาร่วมกันสร้างผลิตภัณฑ์ที่มีความหมาย
          </p>

          <a
            href={`mailto:${siteInfo.email}`}
            className="mt-10 inline-block text-3xl font-medium text-accent underline decoration-1 underline-offset-8 transition-opacity hover:opacity-80 sm:text-4xl"
          >
            {siteInfo.email}
          </a>

          <div className="mt-16 border-t border-ivory/15 pt-8">
            <MicroLabel className="text-ivory/45">
              {siteInfo.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </MicroLabel>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
