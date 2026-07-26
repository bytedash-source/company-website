export type Principle = {
  title: string;
  description: string;
};

/** Shared by the home page "Core principles" section and the About page. */
export const corePrinciples: Principle[] = [
  {
    title: "Performance",
    description:
      "Built to stay fast, reliable, and useful as the work grows.",
  },
  {
    title: "User-centred design",
    description:
      "Designed around the people, decisions, and moments that matter most.",
  },
  {
    title: "Quality",
    description:
      "Considered from the first conversation to the details that shape launch.",
  },
];
