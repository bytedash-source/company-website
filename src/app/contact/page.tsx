import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/ui/contact-form";
import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with BYTE DASH to talk about a mobile app, web application, or UX/UI design project. Based in Bangkok and Nonthaburi, Thailand.",
};

export default function ContactPage() {
  return (
    <section data-surface="dark" className="bg-graphite pt-32 pb-24 text-ivory sm:pt-40 sm:pb-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <MicroLabel className="text-ivory/50">Contact</MicroLabel>
            <h1 className="mt-6 text-4xl leading-[1.1] font-medium sm:text-5xl">
              Let&apos;s make the next move clearer.
            </h1>
            <p className="mt-6 max-w-md text-lg text-ivory/70">
              Whether you are exploring a new product, improving an existing
              platform, or working through a complex operational challenge,
              tell us where you are starting from.
            </p>

            <div className="mt-14 border-t border-ivory/15 pt-8">
              <SectionLabel>Email</SectionLabel>
              <a
                href={`mailto:${siteInfo.email}`}
                className="mt-3 block text-2xl font-medium text-accent underline decoration-1 underline-offset-8 transition-opacity hover:opacity-80"
              >
                {siteInfo.email}
              </a>
            </div>

            <div className="mt-10 border-t border-ivory/15 pt-8">
              <SectionLabel>Address</SectionLabel>
              <address className="mt-3 max-w-xs text-ivory/60 not-italic">
                {siteInfo.name}
                {siteInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <p className="mt-10 max-w-sm text-sm text-ivory/45">
              No project is too early to talk about — if you&apos;re still
              shaping the idea, we&apos;re happy to help think it through.
            </p>
          </div>

          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
