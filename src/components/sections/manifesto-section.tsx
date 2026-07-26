import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { EditorialPhotoPlaceholder } from "@/components/media/editorial-photo-placeholder";

export function ManifestoSection() {
  return (
    <section id="about" data-surface="light" className="bg-ivory py-24 text-ink sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <MicroLabel className="text-ink/50">About</MicroLabel>
            <h2 className="mt-6 text-4xl leading-[1.1] font-medium sm:text-5xl">
              เทคโนโลยีที่ดี
              <br />
              ควรเข้าใจมนุษย์
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink/70">
              เราเชื่อว่าผลิตภัณฑ์ดิจิทัลที่ดีไม่ได้วัดจากเทคโนโลยีเพียงอย่างเดียว
              แต่ต้องตอบโจทย์ธุรกิจ เข้าใจผู้ใช้
              และเปลี่ยนความซับซ้อนให้กลายเป็นประสบการณ์ที่ชัดเจน
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 lg:mt-16 lg:gap-6">
            <Reveal delayMs={100} className="col-span-2 sm:col-span-1">
              <EditorialPhotoPlaceholder aspect="portrait" tone="graphite" />
            </Reveal>
            <Reveal
              delayMs={200}
              className="col-span-2 mt-8 sm:col-span-1 sm:mt-16"
            >
              <EditorialPhotoPlaceholder aspect="square" tone="graphite" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
