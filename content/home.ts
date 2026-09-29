export interface HeroContent {
  headline: string;
  tagline: string;
  subHeadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  imageCaption: string;
}

export interface WelcomeContent {
  heading: string;
  subHeading: string;
  paragraphs: string[];
}

export interface FeaturedServiceCard {
  title: string;
  summary: string;
  href: string;
  iconName: string;
}

export interface HomeAwardsContent {
  heading: string;
  subHeading: string;
  featureSubHeading: string;
  paragraph: string;
  centenaryAward: {
    title: string;
    description: string;
  };
  cooperativeDayAward: {
    title: string;
    description: string;
  };
  viewMoreLink: {
    label: string;
    href: string;
  };
}

export interface HomeContent {
  hero: HeroContent;
  welcome: WelcomeContent;
  featuredServices: {
    heading: string;
    subHeading: string;
    cards: FeaturedServiceCard[];
  };
  awards: HomeAwardsContent;
  closingQuote: {
    quote: string;
    subText?: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    headline: "Your Trusted Cooperative Banking Partner in Dodangoda",
    tagline: "Save today for a better tomorrow",
    subHeadline:
      "Empowering the community with secure savings, low-interest agricultural and microfinance loans, and welfare projects, building sustainable growth and financial strength for every family.",
    primaryCta: {
      label: "Our Story",
      href: "/about-us",
    },
    secondaryCta: {
      label: "Our Services",
      href: "/services",
    },
    imageCaption: "Dodangoda Horagasmulla SANASA Bank",
  },
  welcome: {
    heading: "Welcome to Dodangoda Horagasmulla SANASA Bank",
    // Typo corrected: "Communities"
    subHeading: "Uplifting Rural Lives & Communities",
    paragraphs: [
      "The society was founded as a local thrift and credit cooperative to foster financial independence and security across our villages.",
      "We encourage disciplined thrift deposits and provide affordable local credit, standing as one of the strongest community-based financial institutions in the division, democratically controlled by our members with modern computerized operations.",
      "Beyond everyday banking, we lead welfare programs, green environmental drives, educational honors, and senior-citizen appreciation events that uplift our entire society.",
    ],
  },
  featuredServices: {
    heading: "Featured Services",
    subHeading: "Tailored cooperative financial solutions",
    cards: [
      {
        title: "Savings & Deposits",
        summary:
          "Secure savings with competitive interest; special accounts for children, women, and senior citizens.",
        href: "/services#savings",
        iconName: "PiggyBank",
      },
      {
        title: "Loans & Financial Aid",
        summary:
          "Low-interest loans for farmers, housing, self-employment, and urgent personal needs.",
        href: "/services#loans",
        iconName: "HandCoins",
      },
      {
        title: "Welfare & CSR Activities",
        summary:
          "Support for members in need: senior citizens, environmental campaigns, charity, and medical aid.",
        href: "/services#welfare",
        iconName: "HeartHandshake",
      },
    ],
  },
  awards: {
    heading: "Awards & Achievements",
    subHeading: "Official recognition of our performance",
    featureSubHeading: "Proven Excellence in Cooperative Governance",
    paragraph:
      "Our consistent financial management, transparency, and service quality have been recognized by the Department of Cooperative Development and national cooperative federations.",
    centenaryAward: {
      title: "National Centenary Bronze Award 2018",
      description:
        "Awarded Bronze in the National Cooperative Excellence Competition for exemplary performance, strict audit compliance, and robust democratic governance.",
    },
    cooperativeDayAward: {
      title: "Cooperative Day Trophy",
      description:
        "Recognized on International Co-operative Day for dedicated community leadership, thrift promotion, and member support initiatives.",
    },
    viewMoreLink: {
      label: "View More",
      href: "/about-us#awards",
    },
  },
  closingQuote: {
    quote: "A happy family, a prosperous village, is the Sanasa wish",
    subText: "Dodangoda Horagasmulla SANASA Society Ltd",
  },
};
