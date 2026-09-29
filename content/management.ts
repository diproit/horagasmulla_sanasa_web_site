export interface BoardMember {
  id: string;
  name: string;
  role: string;
  isChairman?: boolean;
  imageKey: string;
  zone?: string;
  bio?: string;
}

export interface CooperativePrinciple {
  title: string;
  leadIn: string;
  description: string;
}

export interface ManagementPageContent {
  banner: {
    title: string;
    subText: string;
  };
  governance: {
    heading: string;
    subText: string;
    subHeading: string;
    paragraphs: string[];
  };
  board: {
    heading: string;
    subText: string;
    members: BoardMember[];
  };
  principles: {
    heading: string;
    subText: string;
    items: CooperativePrinciple[];
  };
}

export const managementContent: ManagementPageContent = {
  banner: {
    title: "Management",
    subText: "Democratically elected Board of Directors leading with transparency and trust",
  },
  governance: {
    heading: "Our Governance System",
    subText: "Board representation directly elected by geographical zones",
    subHeading: "Elected Board of Directors",
    paragraphs: [
      "The society operates under a progressive Board of Directors framework, firmly rooted in transparency and direct accountability to all general members.",
      "The Board is democratically elected directly from our defined geographical zones. This guarantees that every local neighborhood has a dedicated representative to present local financial priorities, evaluate loan applications, and coordinate community welfare schemes.",
      "Meeting on a regular monthly basis, the Board of Directors oversees operational policy, verifies regulatory audit compliance, and safeguards the sustainable growth of our collective cooperative assets.",
    ],
  },
  board: {
    heading: "Board of Directors",
    subText: "Meet the elected leaders of Horagasmulla SANASA",
    members: [
      {
        id: "board-1",
        name: "K. A. Bandara Jayasinghe (Demo)",
        role: "Hon. Chairman / Board Leader",
        isChairman: true,
        imageKey: "board-1",
        bio: "Leading the cooperative board with over two decades of dedicated community service and rural financial development.",
      },
      {
        id: "board-2",
        name: "M. D. Nimal Perera (Demo)",
        role: "Director",
        imageKey: "board-2",
        bio: "Elected zonal representative overseeing local thrift mobilization and agricultural credit facilities.",
      },
      {
        id: "board-3",
        name: "S. K. Chandrasena Silva (Demo)",
        role: "Director",
        imageKey: "board-3",
        bio: "Dedicated director representing zonal interests with a focus on member welfare and small business development.",
      },
      {
        id: "board-4",
        name: "W. M. Premawathi Wickramasinghe (Demo)",
        role: "Director",
        imageKey: "board-4",
        bio: "Championing women's savings circles, micro-enterprise empowerment, and community welfare programs.",
      },
      {
        id: "board-5",
        name: "D. L. Somapala Ranatunga (Demo)",
        role: "Director",
        imageKey: "board-5",
        bio: "Overseeing housing and renovation loan reviews and member welfare assistance initiatives.",
      },
      {
        id: "board-6",
        name: "R. P. Sarath Gunawardena (Demo)",
        role: "Director",
        imageKey: "board-6",
        bio: "Active board member coordinating environmental CSR campaigns and youth financial education programs.",
      },
      {
        id: "board-7",
        name: "H. M. Anura Senanayake (Demo)",
        role: "Director",
        imageKey: "board-7",
        bio: "Guiding operational modernization, digital bookkeeping audit standards, and member relations.",
      },
    ],
  },
  principles: {
    heading: "Cooperative Principles",
    subText: "Values that guide our management team",
    items: [
      {
        title: "Democratic Member Control",
        leadIn: "Democratic Member Control:",
        description:
          "Members actively set organizational policies and make strategic decisions; elected board representatives remain directly accountable to the general membership.",
      },
      {
        title: "Transparency & Integrity",
        leadIn: "Transparency & Integrity:",
        description:
          "Financial statements, audit evaluations, and asset balances are independently inspected and certified annually by the Cooperative Development Commissioner.",
      },
      {
        title: "Concern for the Community",
        leadIn: "Concern for the Community:",
        description:
          "While delivering dependable financial services to our members, the society continuously strives for the sustainable development and social upliftment of our surrounding villages.",
      },
    ],
  },
};
