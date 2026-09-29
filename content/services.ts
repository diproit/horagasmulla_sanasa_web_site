export interface SavingsScheme {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  features: string[];
}

export interface LoanScheme {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  features: string[];
}

export interface WelfareProject {
  id: string;
  title: string;
  caption: string;
  description: string;
  imageKey: string;
}

export interface ServicesPageContent {
  banner: {
    title: string;
    subText: string;
  };
  savings: {
    heading: string;
    subText: string;
    intro?: string;
    schemes: SavingsScheme[];
  };
  loans: {
    heading: string;
    subText: string;
    subHeading: string;
    schemes: LoanScheme[];
  };
  welfare: {
    heading: string;
    subText: string;
    subHeading: string;
    paragraph: string;
    projects: WelfareProject[];
  };
}

export const servicesContent: ServicesPageContent = {
  banner: {
    title: "Our Services",
    subText: "Customized financial schemes and community welfare programs for you",
  },
  savings: {
    heading: "Savings Accounts & Deposits",
    subText: "Secure plans with attractive interest rates to grow your wealth",
    schemes: [
      {
        id: "children-savings",
        title: "Children's Savings Accounts",
        tagline: "Building solid foundations for the younger generation",
        description:
          "Secures a child's education and future through attractive interest rates and rewarding annual gifts, nurturing disciplined savings habits from an early age.",
        features: [
          "Special higher interest earnings designed for long-term growth",
          "Annual educational gifts and milestone rewards",
          "Encourages financial discipline from early childhood",
        ],
      },
      {
        id: "womens-savings",
        title: "Women's Savings Schemes",
        tagline: "Empowering rural women with economic self-reliance",
        description:
          "Supports local women with safe, rewarding deposit plans and convenient access to emergency micro-credit, strengthening household financial resilience.",
        features: [
          "Dedicated savings circles for rural self-reliance",
          "Direct linkage to low-interest emergency micro-credit",
          "Flexible deposit frequencies tailored to household budgets",
        ],
      },
      {
        id: "senior-citizens-savings",
        title: "Senior Citizens' Accounts",
        tagline: "Honoring life-long dedication with premium returns",
        description:
          "Special deposit packages offering high interest yields alongside prioritized customer care and personalized assistance in our banking hall.",
        features: [
          "Premium interest rates for retirement peace of mind",
          "Priority counter service in our modern banking lobby",
          "Eligibility for dedicated annual welfare programs",
        ],
      },
    ],
  },
  loans: {
    heading: "Loans & Credit Solutions",
    subText: "Flexible credit portfolios supporting rural business & agriculture",
    subHeading: "Supportive Loan Schemes",
    schemes: [
      {
        id: "agricultural-loans",
        title: "Agricultural Loans",
        tagline: "Nurturing local harvests and agrarian enterprise",
        description:
          "Low-interest loans engineered specifically for farmers to purchase high-quality fertilizer, seeds, farming tools, and modern agricultural equipment without excessive burdens.",
        features: [
          "Affordable, concessionary interest rates for farmers",
          "Flexible repayment schedules aligned with harvest cycles",
          "Fast processing through local zonal recommendation",
        ],
      },
      {
        id: "housing-loans",
        title: "Housing & Renovation Loans",
        tagline: "Building durable homes for every cooperative family",
        description:
          "Construct, purchase, or extend your family home with manageable long-term repayment programs tailored to rural household incomes.",
        features: [
          "Structured long-term repayment periods",
          "Financing for construction, repair, and land expansion",
          "Transparent processing with no hidden overheads",
        ],
      },
      {
        id: "business-development-loans",
        title: "Business Development Loans",
        tagline: "Fueling micro-enterprises and local cottage industries",
        description:
          "Targeted microfinance and working-capital facilities designed for village retail stores, traditional handicraft workshops, and independent self-employed members.",
        features: [
          "Working capital support for micro-enterprises and shops",
          "Accessible collateral requirements based on cooperative trust",
          "Promotes sustained entrepreneurship in Dodangoda",
        ],
      },
    ],
  },
  welfare: {
    heading: "Community Welfare & Social Responsibility",
    subText: "Active local participation beyond traditional banking",
    subHeading: "Social Upliftment Programs",
    paragraph:
      "The society directs resources back into the village through free seedling distribution, religious programs during Wesak, children's savings events, and dry-ration distribution for vulnerable elder members.",
    projects: [
      {
        id: "plant-distribution",
        title: "Plant Distribution",
        caption: "Green village home initiative",
        description:
          "Distributing fruit saplings and useful plants to households to support community environmental health and home gardening.",
        imageKey: "welfare-plants",
      },
      {
        id: "welfare-charity",
        title: "Welfare Charity",
        caption: "Supporting elder members in need",
        description:
          "Providing vital dry rations, health supplies, and emergency financial support for disadvantaged and elder village residents.",
        imageKey: "welfare-charity",
      },
      {
        id: "wesak-ceremony",
        title: "Wesak Ceremony",
        caption: "Dhamma sermons and lights festival",
        description:
          "Organizing spiritual Dhamma sermons, illumination lanterns, and traditional community gatherings during sacred religious festivals.",
        imageKey: "welfare-wesak",
      },
      {
        id: "senior-appreciation",
        title: "Senior Appreciation",
        caption: "Honoring our founding senior members",
        description:
          "Special ceremonies honoring the pioneer senior members whose decades of trust built our society's enduring strength.",
        imageKey: "welfare-senior",
      },
    ],
  },
};
