import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    title: "Performance",
    description: "ระบบที่รวดเร็ว เชื่อถือได้ และพร้อมขยาย",
  },
  {
    title: "User-Centric Design",
    description: "ทุกการตัดสินใจเริ่มจากผู้ใช้และบริบทธุรกิจ",
  },
  {
    title: "Quality",
    description: "ใส่ใจมาตรฐานตั้งแต่แนวคิดจนถึง deployment",
  },
];

export function WhyByteDashSection() {
  return (
    <section data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
      <Container>
        <h2>
          <MicroLabel className="text-ink/50">Why BYTE DASH</MicroLabel>
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delayMs={i * 80} className="bg-ivory p-8 sm:p-10">
              <h3 className="text-2xl font-medium sm:text-3xl">{pillar.title}</h3>
              <p className="mt-3 text-ink/65">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
