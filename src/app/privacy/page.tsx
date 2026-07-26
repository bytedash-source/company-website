import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy policy for BYTE DASH. This page is a placeholder pending legal review and approval.",
};

const sectionHeadings = [
  "Information collected",
  "How information is used",
  "Cookies and analytics",
  "Data retention",
  "Third-party services",
  "Your rights",
  "Contact",
];

export default function PrivacyPage() {
  return (
    <section data-surface="dark" className="bg-graphite pt-32 pb-24 text-ivory sm:pt-40 sm:pb-32">
      <Container>
        <MicroLabel className="text-ivory/50">Privacy</MicroLabel>
        <h1 className="mt-6 text-4xl font-medium sm:text-5xl">Privacy policy</h1>

        <p className="mt-8 max-w-xl border-l-2 border-accent pl-6 text-lg text-ivory/70">
          This page is a structural placeholder. The content of BYTE
          DASH&apos;s privacy policy must be reviewed and formally approved
          by BYTE DASH, ideally with legal input, before publication. Nothing
          below should be treated as a final or legally binding policy.
        </p>

        <ol className="mt-16 max-w-2xl divide-y divide-ivory/15 border-y border-ivory/15">
          {sectionHeadings.map((heading, i) => (
            <li key={heading} className="flex items-baseline gap-6 py-6">
              <MicroLabel className="text-accent">
                {String(i + 1).padStart(2, "0")}
              </MicroLabel>
              <div>
                <h2 className="text-xl font-medium">{heading}</h2>
                <p className="mt-1 text-sm text-ivory/45">
                  Content pending legal review.
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
