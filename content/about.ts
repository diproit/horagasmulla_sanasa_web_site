
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
    intro: string;
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
      "Today, standing strong with Rs. 400 Million in total assets and over 750 active members, Dodangoda Horagasmulla SANASA is recognized as the strongest local voluntary financial institution in the area.",
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
    heading: "Awards & Achievements",
    subText: "Our trophies from cooperative sports and cultural events",
    intro:
      "Our trophies celebrate the collective spirit, teamwork, and active participation of our members across regional cooperative sports tournaments and cultural festivals.",
  },
};
