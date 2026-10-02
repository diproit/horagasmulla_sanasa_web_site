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
  managementTeam: {
    heading: string;
    subText: string;
    intro: string;
    staff: StaffMember[];
  };
  principles: {
    heading: string;
    subText: string;
    items: CooperativePrinciple[];
  };
}

export interface StaffMember {
  id: string;
  name: string;
  role: "Manager" | "Assistant Manager";
  imageKey: string;
  imageAlt: string;
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
      "Meeting on a regular monthly basis, the Board of Directors oversees operational policy, verifies statutory audit compliance, and safeguards the sustainable growth of our collective cooperative assets.",
    ],
  },
  board: {
    heading: "Board of Directors",
    subText: "Meet the elected leaders of Horagasmulla SANASA",
    members: [
      {
        id: "board-1",
        name: "Chaminda Veerapperuma",
        role: "Hon. Chairman / Board Leader",
        isChairman: true,
        imageKey: "board-1",
        bio: "Leading the cooperative board with over two decades of dedicated community service and rural financial development.",
      },
      {
        id: "board-2",
        name: "J . L Salomi Chanchala",
        role: "Hon. Deputy Chairman",
        imageKey: "board-2",
        bio: "Elected zonal representative overseeing local thrift mobilization and agricultural credit facilities.",
      },
      {
        id: "board-3",
        name: "W . K . A. Dilhani Damayanthi",
        role: "Hon. Secretary",
        imageKey: "board-3",
        bio: "Dedicated director representing zonal interests with a focus on member welfare and small business development.",
      },
      {
        id: "board-4",
        name: "R. Amara",
        role: "Member",
        imageKey: "board-4",
        bio: "Championing women's savings circles, micro-enterprise empowerment, and community welfare programs.",
      },
      {
        id: "board-5",
        name: "L . H .Manjula Malkanthi",
        role: "Member",
        imageKey: "board-5",
        bio: "Overseeing housing and renovation loan reviews and member welfare assistance initiatives.",
      },
      {
        id: "board-6",
        name: "W . G .Chathuranga Lakmal",
        role: "Member",
        imageKey: "board-6",
        bio: "Active board member coordinating environmental CSR campaigns and youth financial education programs.",
      },
      {
        id: "board-7",
        name: "M . M .Jagath Pushpakumara",
        role: "Member",
        imageKey: "board-7",
        bio: "Guiding operational modernization, digital bookkeeping audit standards, and member relations.",
      },
    ],
  },
  managementTeam: {
    heading: "Our Management Team",
    subText: "The professional team that runs our daily banking operations",
    intro:
      "Our Manager and Assistant Managers work hand in hand with the elected Board of Directors, serving members with care, transparency and trust every day.",
    // NOTE: To replace staff names and photos later: update the names above and replace public/images/staff-N.svg with real photos (public/images/staff-N.jpg) in lib/images.ts.
    staff: [
      {
        id: "staff-1",
        name: "S . D. Nadeeka Kumuduni",
        role: "Manager",
        imageKey: "staff-1",
        imageAlt: "Portrait of K. P. Nuwan Jayawardena (Demo), Manager",
      },
      {
        id: "staff-2",
        name: "S . Saduni Ruwanthika",
        role: "Assistant Manager",
        imageKey: "staff-2",
        imageAlt:
          "Portrait of H. M. Sanduni Wickramasinghe (Demo), Assistant Manager",
      },
      {
        id: "staff-3",
        name: "P . Chamari Lakmini",
        role: "Assistant Manager",
        imageKey: "staff-3",
        imageAlt:
          "Portrait of D. M. Kasun Rajapaksha (Demo), Assistant Manager",
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
