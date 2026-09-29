export interface MilestoneItem {
  year?: string;
  label: string;
  title: string;
  description: string;
}

export interface FacilityCard {
  id: string;
  title: string;
  caption: string;
  imageKey: string;
}

export interface AwardItem {
  id: string;
  title: string;
  caption: string;
  year?: string;
  description: string;
  imageKey: string;
}

export interface AboutPageContent {
  banner: {
    title: string;
    subText: string;
  };
  legacy: {
    heading: string;
    subHeading?: string;
    paragraphs: string[];
    imageCaption: string;
  };
  milestones: {
    heading: string;
    subText: string;
    items: MilestoneItem[];
  };
  awards: {
    heading: string;
    subText: string;
    subHeading: string;
    paragraphs: string[];
    items: AwardItem[];
  };
  facilities: {
    heading: string;
    subText: string;
    items: FacilityCard[];
  };
}

export const aboutContent: AboutPageContent = {
  banner: {
    title: "About Us",
    // Sub-text as required: "Over six decades of service, cooperative values, and community development"
    subText: "Over six decades of service, cooperative values, and community development",
  },
  legacy: {
    heading: "Our Legacy",
    subHeading: "Six Decades of Rural Financial Leadership",
    paragraphs: [
      "The society has been a steadfast driver of rural financial growth and community solidarity since its inception.",
      "Founded by vision-driven village leaders to help local farmers and small business owners avoid the trap of high-interest private debt, our society has grown step by step into a modern cooperative bank. Built firmly on self-help, mutual aid, and democratic governance, every member holds an equal stake in our collective future.",
      "Today, standing strong with Rs. 1 Billion in total assets and over 600 active members, Dodangoda Horagasmulla SANASA is recognized as the strongest local voluntary financial institution in the area.",
    ],
    imageCaption: "Main Office Entrance",
  },
  milestones: {
    heading: "Historical Milestones",
    subText: "Our journey through years of dedicated community service",
    items: [
      {
        year: "1965",
        label: "Establishment",
        title: "Inception of Thrift Union",
        description:
          "Founded by local leaders to encourage micro-savings and accessible cooperative financing for village households.",
      },
      {
        label: "Cooperative Registration",
        title: "Official Registration",
        description:
          "Registered under the Department of Cooperative Development as a limited-liability cooperative society.",
      },
      {
        label: "Computerization",
        title: "Digital Banking Launch",
        description:
          "Transitioned all member accounts, passbooks, and ledger operations to a computerized banking system for heightened security and transparency.",
      },
      {
        label: "Modernization",
        title: "Banking Lobby & Event Hall",
        description:
          "Renovated the main branch with modern teller counters, customer service areas, and a board room for community zonal meetings.",
      },
    ],
  },
  awards: {
    heading: "Awards & Verification",
    subText: "Official recognition of our performance and transparency",
    subHeading: "Commitment to Regulatory Excellence",
    paragraphs: [
      "The society operates under the strict audit and compliance oversight of the district Cooperative Development Commissioner. Our recognitions highlight long-term financial stability, thrift-deposit safety, and compassionate member welfare.",
      "We take pride in having secured the National Centenary Bronze Award 2018 along with the esteemed Cooperative Day Trophy, testifying to our continued governance standards.",
    ],
    items: [
      {
        id: "award-bronze",
        title: "National Centenary Bronze Award 2018",
        caption: "Centenary Bronze Plaque (2018)",
        year: "2018",
        description:
          "Awarded in the National Cooperative Excellence Competition for exemplary governance, member trust, and financial stability.",
        imageKey: "award-bronze",
      },
      {
        id: "award-cooperative-day",
        title: "Cooperative Day Trophy",
        caption: "International Cooperative Day Trophy",
        description:
          "Presented in recognition of community leadership, thrift promotion, and member support initiatives.",
        imageKey: "award-cooperative-day",
      },
    ],
  },
  facilities: {
    heading: "Our Facilities",
    subText: "Comfortable, modern environment to serve you",
    items: [
      {
        id: "facility-counter",
        title: "Transaction Counter",
        caption: "Modern teller counters ensuring fast, accurate, and welcoming member transactions.",
        imageKey: "facility-counter",
      },
      {
        id: "facility-computer",
        title: "Computerized Operations",
        caption: "Secure digital banking systems safeguarding member records and account accuracy.",
        imageKey: "facility-computer",
      },
      {
        id: "facility-office",
        title: "Banking Office",
        caption: "Dedicated consultation areas and executive board room for community zonal governance.",
        imageKey: "facility-office",
      },
    ],
  },
};
