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
  subText: string;
  buttonText: string;
  buttonHref: string;
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
      "Beyond everyday banking, we participate actively in religious and cultural events, member excursions, and awards for our children's achievements that uplift our entire community.",
    ],
  },
  featuredServices: {
    heading: "Featured Services",
    subHeading: "Tailored cooperative financial solutions",
    cards: [
      {
        title: "Savings & Deposits",
        summary:
          "Eleven savings and deposit options with annual interest rates from 4.5% to 10%.",
        href: "/services#savings",
        iconName: "PiggyBank",
      },
      {
        title: "Loans & Financial Aid",
        summary:
          "Eleven loan types for education, festivals, property, vehicles, business and emergencies, with annual rates from 9% to 35%.",
        href: "/services#loans",
        iconName: "HandCoins",
      },
      {
        title: "Community Welfare",
        summary:
          "Religious and cultural events, awards for our children's achievements, member excursions and anniversary celebrations.",
        href: "/services#welfare",
        iconName: "HeartHandshake",
      },
    ],
  },
  awards: {
    heading: "Awards & Achievements",
    subText: "7 trophies in cricket, netball, volleyball and drama",
    buttonText: "View All Awards",
    buttonHref: "/about-us#awards",
  },
  closingQuote: {
    quote: "A happy family, a prosperous village, is the Sanasa wish",
    subText: "Dodangoda Horagasmulla SANASA Society Ltd",
  },
};
