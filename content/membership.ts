export interface MemberBenefit {
  title: string;
  leadIn: string;
  description: string;
}

export interface ZonalStructureBlock {
  title: string;
  description: string;
}

export interface MembershipPageContent {
  banner: {
    title: string;
    subText: string;
  };
  whyJoin: {
    heading: string;
    subText: string;
    subHeading: string;
    intro: string;
    benefits: MemberBenefit[];
    closingLine: string;
  };
  zonalStructure: {
    heading: string;
    subText: string;
    subHeading: string;
    paragraphs: string[];
    blocks: ZonalStructureBlock[];
  };
  eligibility: {
    heading: string;
    requirements: string[];
  };
  howToJoin: {
    heading: string;
    paragraphs: string[];
    requiredDocuments: string[];
    cta: {
      label: string;
      href: string;
    };
  };
}

export const membershipContent: MembershipPageContent = {
  banner: {
    title: "Membership",
    subText: "Cooperative ownership and direct democratic representation",
  },
  whyJoin: {
    heading: "Why Become a Member?",
    subText: "Ownership, shared benefits, and direct democratic participation",
    subHeading: "Benefits of Membership",
    intro:
      "Unlike commercial banks, the society is owned entirely by its members. When you join, you are not merely a customer; you become an equal shareholder with a direct say in our cooperative direction.",
    benefits: [
      {
        title: "Democratic Rights",
        leadIn: "Democratic Rights:",
        description:
          "Vote and select your zone's representatives to the Board of Directors, ensuring your community's voice is heard.",
      },
      {
        title: "Dividend Payouts",
        leadIn: "Dividend Payouts:",
        description:
          "Benefit from annual profit-sharing dividends calculated fairly on your thrift deposits and invested share capital.",
      },
      {
        title: "Special Loan Rates",
        leadIn: "Special Loan Rates:",
        description:
          "Access preferential, concessionary credit facilities and repayment terms not accessible to non-members.",
      },
      {
        title: "Community Welfare",
        leadIn: "Community Welfare:",
        description:
          "Enjoy eligibility for emergency medical assistance, student scholarships, bereavement grants, and welfare relief.",
      },
    ],
    closingLine:
      "Membership ensures that financial assets remain within our community, directly financing local agriculture, housing, and enterprise.",
  },
  zonalStructure: {
    heading: "Geographical Zonal Structure",
    subText: "Decentralized management that distributes decision-making authority",
    subHeading: "Bridges to Local Governance",
    paragraphs: [
      "The society operates across multiple local administrative divisions in Dodangoda, organized into distinct geographical zones to keep banking close to the people.",
      "Each zone conducts its own Zonal Council, guaranteeing that every hamlet and neighborhood exercises direct influence over cooperative investments, loan approvals, and community welfare initiatives.",
    ],
    blocks: [
      {
        title: "Grama Niladhari Divisions",
        description: "Cooperative operations spanning across key administrative divisions in Dodangoda.",
      },
      {
        title: "Geographical Zones",
        description: "Neighborhood clusters organized for localized financial accessibility and regular meetings.",
      },
      {
        title: "Zonal Councils",
        description: "Locally elected grassroots councils handling member proposals, thrift circles, and loan reviews.",
      },
    ],
  },
  eligibility: {
    heading: "Eligibility Requirements",
    requirements: [
      "Resident of the Horagasmulla / Dodangoda area or surrounding administrative divisions",
      "At least 18 years of age at the time of application",
      "Willingness and commitment to uphold cooperative values and principles",
      "Initial deposit for purchasing member share capital",
    ],
  },
  howToJoin: {
    heading: "How to Join",
    paragraphs: [
      "Becoming a member of Horagasmulla SANASA is straightforward and welcoming. You can visit our main office in Horagasmulla to collect the registration form or speak directly with your local zonal representative.",
      "To complete your registration, please bring a clear copy of your National Identity Card (NIC), valid proof of residency (such as a utility bill or Grama Niladhari certificate), and the initial minimum deposit to open your member share account.",
    ],
    requiredDocuments: [
      "Copy of National Identity Card (NIC) / Driving License / Valid Passport",
      "Proof of residency in Dodangoda area (utility bill or Grama Niladhari letter)",
      "Initial minimum deposit for member share capital",
    ],
    cta: {
      label: "Contact Us to Register",
      href: "/contact",
    },
  },
};
