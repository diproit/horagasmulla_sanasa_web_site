export type Award = {
  id: string;
  year: number | null;
  category: "Cricket" | "Netball & Volleyball" | "Drama";
  title: string;
  description: string;
  imageKey: string;
  imageAlt: string;
};

export const awards: Award[] = [
  {
    id: "award-1",
    year: 2026,
    category: "Cricket",
    title: "Men's Champions & Women's Runners-up",
    description:
      "Men's Championship and Women's Runners-up title at the 2026 cricket tournament organized by Panadura SANASA.",
    imageKey: "award-1",
    imageAlt: "Trophy won at the 2026 cricket tournament organized by Panadura SANASA",
  },
  {
    id: "award-2",
    year: 2025,
    category: "Cricket",
    title: "Women's Champions & Men's Third Place",
    description:
      "Women's Championship and Men's Third Place at the 2025 cricket tournament organized by Panadura SANASA.",
    imageKey: "award-2",
    imageAlt: "Trophies won at the 2025 cricket tournament organized by Panadura SANASA",
  },
  {
    id: "award-3",
    year: 2024,
    category: "Cricket",
    title: "Cricket Tournament Champions",
    description:
      "Championship of the 2024 cricket tournament organized by Panadura SANASA.",
    imageKey: "award-3",
    imageAlt: "Trophy won at the 2024 cricket tournament organized by Panadura SANASA",
  },
  {
    id: "award-4",
    year: 2018,
    category: "Cricket",
    title: "Soma Mathararachchi Memorial Cricket Champions",
    description:
      "Championship of the Soma Mathararachchi Memorial Cricket Tournament organized by the Gunathilakawatta SANASA Society in 2018.",
    imageKey: "award-4",
    imageAlt:
      "Trophy won at the 2018 Soma Mathararachchi Memorial Cricket Tournament",
  },
  {
    id: "award-5",
    year: 2018,
    category: "Drama",
    title: "National Children's Festival, Drama: Third Place",
    description:
      "Third place in the drama category at the National Children's Festival organized by the SANASA Federation in 2018.",
    imageKey: "award-5",
    imageAlt:
      "Award plaque for third place in drama at the 2018 National Children's Festival",
  },
  {
    id: "award-6",
    year: 2017,
    category: "Netball & Volleyball",
    title: "Netball & Volleyball Titles, 95th Cooperative Day",
    description:
      "Women's Netball Championship, Women's Volleyball Championship, and Men's Volleyball Runners-up title, won in conjunction with the 95th Cooperative Day celebrations held in 2017.",
    imageKey: "award-6",
    imageAlt:
      "Trophies won for Netball and Volleyball at the 95th Cooperative Day celebrations in 2017",
  },
  // TODO: confirm the year, then reorder.
  {
    id: "award-7",
    year: null,
    category: "Cricket",
    title: "Kalutara District Cricket Champions (Men & Women)",
    description:
      "Men's and Women's championships at the cricket tournament organized by the Kalutara District Cooperative Board Limited, held in conjunction with the 97th International Day of Cooperatives.",
    imageKey: "award-7",
    imageAlt:
      "Trophies won at the Kalutara District Cooperative Board cricket tournament",
  },
];

export const totalTrophies = awards.length;
