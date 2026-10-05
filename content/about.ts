
export interface Milestone {
  id: string;
  period: string;
  title: string;
  bullets: string[];
  featured?: boolean;
}

export interface MilestoneItem extends Milestone {}

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
    items: Milestone[];
  };
  awards: {
    heading: string;
    subText: string;
    intro: string;
  };
}

// Text supplied by the Society. Do not edit wording without approval.
export const milestones: Milestone[] = [
  {
    id: "milestone-1965-1967",
    period: "1965–1967",
    title: "Establishment of the Society and Initial Financial Development",
    featured: true,
    bullets: [
      "The inaugural meeting was held on July 10, 1965, with 42 members; the founding president was Mr. Lionel de Silva.",
      "1967.02.05 – Registered with the government under the name 'Horagasmulla Credit Society'.",
    ],
  },
  {
    id: "milestone-1973-1974",
    period: "1973–1974",
    title: "Expansion of Financial Activities",
    bullets: [
      "Decision made on 30 December 1973 to construct a new building. Estimated cost: Rs. 4,480.20.",
      "Approval for the building was received on August 13, 1974.",
    ],
  },
  {
    id: "milestone-1985-1988",
    period: "1985–1988",
    title: "Expansion of Member Services and Organizational Development",
    bullets: [
      "Transfer of the land on which the building is situated to the Society on August 30, 1985.",
      "Conversion into a bank and inauguration on July 10, 1986",
      "Holding a Dhamma sermon at the Society Hall on July 10, 1988, to mark the 23rd anniversary and the completion of one year of the bank's operations.",
    ],
  },
  {
    id: "milestone-1989-1996",
    period: "1989–1996",
    title: "Strengthening Financial and Welfare Services",
    bullets: [
      "Acquisition of a plot of land at the Ruwanmaga Junction for the proposed bank building on February 19, 1989.",
      "Introduction of the 'Dhana Yojana' account on November 11, 1990. Increase of the withdrawal limit to Rs. 500,000.",
      "The initial formulation of the General Assembly agenda format used today—dating back to January 3, 1993.",
      "Inauguration of a SANASA farmers' sales outlet on November 23, 1993 (this was a proposal by Mr. Dayananda).",
      "Introduction of SANASA Children's Deposits on February 25, 1994.",
      "Introduction of the group loan scheme on July 9, 1995.",
      "Opening of the bank building on August 21, 1996.",
    ],
  },
  {
    id: "milestone-1999-2005",
    period: "1999–2005",
    title: "Continued Growth and Institutional Development",
    bullets: [
      "Opening of the Sub-Post Office on July 22, 1999.",
      "Opening of the concessionary sales outlet on April 3, 2000.",
      "Purchase of 10 perches of land adjacent to the Society Hall in 2002.",
      "Introduction of the New Year festival loan scheme on 16 March 2003 (Rs. 2,000/-)",
      "Purchase of a counterfeit banknote detection machine on September 12, 2004.",
      "Streamlining the administrative operations of the society and the bank through the issuance of circulars on January 8, 2005.",
    ],
  },
  {
    id: "milestone-2007-2010",
    period: "2007–2010",
    title: "Growth and Service Expansion",
    bullets: [
      "Holding the General Meeting at Koswaththa College in January 2007 due to insufficient space.",
      "Holding the 45th anniversary celebration on August 8, 2010.",
    ],
  },
  {
    id: "milestone-2012-2015",
    period: "2012–2015",
    title: "Strengthening Member Welfare and Achieving 50 Years",
    featured: true,
    bullets: [
      "The 47th anniversary was celebrated on August 11, 2012. Mr. Chaminda Weerapperuma was elected to the position of Chairman.",
      "Implementation of the signature card system on January 1, 2013.",
      "Sale of the 'Ruwanmaga' land on March 1, 2013.",
      "Inauguration of the SANASA Library on August 17, 2014.",
      "25 January 2015: Commencement of the construction of the new society hall building.",
      "Holding the 50th anniversary celebration and launching the Golden Jubilee commemorative volume in 2015.",
    ],
  },
  {
    id: "milestone-2016-2018",
    period: "2016–2018",
    title: "Modernization and Service Development",
    bullets: [
      "2016 – Renaming the children's club as the SANASA Muthukata Children's Club.",
      "Moving into the newly constructed building.",
      "51st Anniversary on August 12, 2016",
      "Keeping the bank office and the Sub-Post Office open six days a week—excluding Mondays—effective from 15 January 2017.",
      "The opening of the new bank office at the auspicious time of 11:22 a.m. on December 2, 2018, by Mr. Danison Weerasuriya, Honorable Chairman of the SANASA National Organization and the Colombo District Societies Union.",
    ],
  },
  {
    id: "milestone-2019-2022",
    period: "2019–2022",
    title: "Major Development and Continued Member Service",
    bullets: [
      "The 53rd Board of Directors meeting was held in the Board of Directors' meeting room for the first time in 2019.",
      "Offering alms to 21 'Kiri-ammavaru' (mothers representing the Seven Mothers/Goddesses) to mark the first anniversary of the opening of the bank office on November 30, 2019.",
      "Operating a mobile banking service.",
      "Providing interest-free COVID relief loans.",
    ],
  },
  {
    id: "milestone-2023",
    period: "2023",
    title: "Modernization and 58 Years of Service",
    featured: true,
    bullets: [
      "Purchasing computer system components.",
      "Purchasing an electricity generator for use in the bank office.",
      "Installation of the CCTV camera system.",
      "Establishing a SANASA sales unit within the office premises to sell consumer goods at concessionary prices.",
    ],
  },
];

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
    items: milestones,
  },
  awards: {
    heading: "Awards & Achievements",
    subText: "Our trophies from cooperative sports and cultural events",
    intro:
      "Our trophies celebrate the collective spirit, teamwork, and active participation of our members across regional cooperative sports tournaments and cultural festivals.",
  },
};
