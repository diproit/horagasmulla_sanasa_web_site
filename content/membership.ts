export interface KeyBenefit {
  icon?: string;
  gif: string;
  title: string;
  description: string;
}

export interface BrochureInfo {
  file: string;
  downloadName: string;
  title: string;
  description: string;
}

export interface WhyJoinContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  intro: string;
  keyBenefitsHeading: string;
  keyBenefits: KeyBenefit[];
  closingQuote: string;
  closingCta: string;
  brochure: BrochureInfo;
}


export interface MembershipPageContent {
  banner: {
    title: string;
    subText: string;
  };
  whyJoin: WhyJoinContent;

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
    eyebrow: "Why Become a Member?",
    heading: "Save Today… Secure Tomorrow!",
    subheading:
      "Protect your future and the future of your loved ones by becoming a member of SANASA Welfare Society today.",
    intro:
      "Through membership, you and your family can have access to various welfare and financial benefits during important moments and unexpected situations in life.",
    keyBenefitsHeading: "Key Benefits of Becoming a Member",
    keyBenefits: [
      {
        gif: "/gif/Financial Assistance in Emergencies.gif",
        icon: "💰",
        title: "Financial Assistance in Emergencies",
        description:
          "Financial support is available for members and their family members during various unexpected situations.",
      },
      {
        gif: "/gif/Loan & Financial Facilities.gif",
        icon: "🏠",
        title: "Loan & Financial Facilities",
        description:
          "Opportunities to access suitable loan and financial facilities according to your needs.",
      },
      {
        gif: "/gif/Educational Assistance.gif",
        icon: "🎓",
        title: "Educational Assistance",
        description:
          "Welfare benefits to support the educational needs of members' children.",
      },
      {
        gif: "/gif/Hospitalization & Health Support.gif",
        icon: "🏥",
        title: "Hospitalization & Health Support",
        description:
          "Welfare benefits available for hospitalization and various healthcare needs.",
      },
      {
        gif: "/gif/Financial Support for the Family in Case of Death.gif",
        icon: "⚰️",
        title: "Financial Support for the Family in Case of Death",
        description:
          "A welfare mechanism that provides financial assistance to the family in the event of a member's death.",
      },
      {
        gif: "/gif/Marriage Benefits.gif",
        icon: "💍",
        title: "Marriage Benefits",
        description:
          "Welfare benefits available for important marriage-related occasions of members.",
      },
      {
        gif: "/gif/Benefits for Childbirth.gif",
        icon: "👶",
        title: "Benefits for Childbirth",
        description:
          "Support and welfare benefits available for childbirth within members' families.",
      },
      {
        gif: "/gif/Many More Membership Benefits.gif",
        icon: "🎁",
        title: "Many More Membership Benefits",
        description:
          "Enjoy a range of additional benefits through membership, savings, and welfare schemes.",
      },
    ],
    closingQuote:
      "The small step you take today… can become a greater protection for your family tomorrow.",
    closingCta:
      "Join SANASA Welfare Society today and start building a more secure future for you and your family!",
    brochure: {
      file: "/pdf/membership-benefits.pdf",
      downloadName: "SANASA-Membership-Benefits.pdf",
      title: "Full Membership Benefits",
      description:
        "Read the complete details of the welfare and financial benefits (PDF).",
    },
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
