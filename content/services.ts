// ─── Savings Accounts ─────────────────────────────────────────────────────────

export interface SavingsAccount {
  /** URL slug / deep-link id */
  id: string;
  name: string;
  /** Annual interest rate in % */
  rate: number;
  /** One short line used in the "Interest Rates at a Glance" table */
  summary: string;
  /** Bullet-point facts shown on the card */
  highlights: string[];
}

/** Interest rates and account types effective from this date */
export const savingsEffectiveDate = "01.04.2026";

/** Disclaimer shown below the table and section */
export const savingsNote =
  "All the above deposit types and interest rates are effective from 01.04.2026. Conditions apply.";

/** 11 real savings / deposit accounts — ordered as provided */
export const savingsAccounts: SavingsAccount[] = [
  {
    id: "member-savings-account",
    name: "Member Savings Account",
    rate: 8,
    summary: "Regular savings account",
    highlights: ["This account operates as a regular savings account."],
  },
  {
    id: "danayojana-savings",
    name: "Danayojana Savings",
    rate: 9,
    summary: "Minimum Rs. 200 deposited every month",
    highlights: [
      "A minimum of Rs. 200 must be deposited into the account every month.",
      "This is maintained as a compulsory savings deposit.",
    ],
  },
  {
    id: "member-fixed-deposit",
    name: "Member Fixed Deposit",
    rate: 9,
    summary: "Fixed deposit for 1 year or longer",
    highlights: [
      "This deposit scheme is introduced for members who wish to make fixed deposits for a minimum period of one year or longer.",
    ],
  },
  {
    id: "member-fixed-deposit-monthly-interest",
    name: "Member Fixed Deposit – Monthly Interest",
    rate: 7.5,
    summary: "Fixed deposit for 1 year or longer, interest paid monthly",
    highlights: [
      "A fixed deposit can be made for a minimum period of one year or longer, with interest paid monthly.",
      "When interest is received monthly, the interest is calculated at a rate 1.5% lower than the applicable interest rate for the relevant fixed-deposit period.",
    ],
  },
  {
    id: "childrens-savings",
    name: "Children's Savings",
    rate: 10,
    summary: "For children under 18; open with Rs. 1,000",
    highlights: [
      "This account can be opened for all children below 18 years of age.",
      "The deposit can be started with Rs. 1,000.",
      "An account holder who deposits Rs. 500 every month will receive a set of books at the end of the year.",
      "A savings money box is provided when opening the account. The amount accumulated in the money box is counted in December, and a 10% bonus on that amount is credited to the account together with the deposited amount.",
    ],
  },
  {
    id: "loan-security-deposit",
    name: "Loan Security Deposit",
    rate: 8,
    summary: "30% of the loan amount kept as a deposit",
    highlights: [
      "When a member obtains a loan, 30% of the relevant loan amount must be maintained as a deposit in this account.",
    ],
  },
  {
    id: "abhimana-savings",
    name: "Abhimana Savings",
    rate: 5,
    summary: "Open to members and non-members; interest credited monthly",
    highlights: [
      "Both members and non-members can make deposits into this account.",
      "Interest is credited to the account monthly.",
    ],
  },
  {
    id: "sahas-savings",
    name: "Sahas Savings",
    rate: 7,
    summary: "Same amount monthly for 12 months, then a loan of 3x the balance",
    highlights: [
      "The same amount must be deposited every month for a period of 12 months.",
      "After completing 12 months, a loan equivalent to three times the balance of the account can be obtained.",
      "The loan must be repaid within 3 years through 36 installments.",
    ],
  },
  {
    id: "dsh-investment",
    name: "D.S.H. Investment",
    rate: 6,
    summary: "Investment plan available",
    highlights: ["An investment plan is available for this investment scheme."],
  },
  {
    id: "dsh-youth",
    name: "D.S.H. Youth",
    rate: 4.5,
    summary: "For young men and women above 18",
    highlights: [
      "This account has been introduced for young men and women above 18 years of age.",
      "Once a child reaches the age of 18, the Children's Savings Account is transferred to this account.",
    ],
  },
  {
    id: "dsh-super-60-savings",
    name: "D.S.H. Super 60 Savings",
    rate: 5,
    summary: "Chosen monthly amount for one year",
    highlights: [
      "The account holder can select a preferred monthly savings amount in multiples of two, such as Rs. 2,000, Rs. 4,000, or Rs. 6,000, and must deposit the selected amount every month.",
      "This savings plan is maintained for a period of one year only.",
    ],
  },
];

// ─── Loan Products ───────────────────────────────────────────────────────────

export interface LoanProduct {
  /** URL slug / deep-link id */
  id: string;
  name: string;
  /** Annual interest rate in % */
  rate: number;
  /** Loan amount range as a string */
  amount: string;
  /** Repayment period; null means not specified — show "Contact our office" on card and "—" in table */
  // TODO: repayment period not provided for General Loan and Movable Property Loan
  repayment: string | null;
  /** Optional short pill label (e.g. "Members only", "Daily installments") */
  tag?: string;
  /** Bullet-point facts shown on the card */
  highlights: string[];
}

/** Disclaimer shown below the loans table and section */
export const loanNote =
  "For every type of loan, an additional 1% is charged for the Education and Project Fund, in addition to the interest. Conditions apply.";

/** 11 real loan products — ordered as provided */
export const loanProducts: LoanProduct[] = [
  {
    id: "general-loan",
    name: "General Loan",
    rate: 12,
    amount: "Rs. 50,000 to Rs. 1,000,000",
    // TODO: repayment period not provided for General Loan
    repayment: null,
    tag: "Members only",
    highlights: [
      "Members can obtain a loan of Rs. 50,000 after completing 3 months of membership.",
      "This loan facility is available only to members of the society.",
      "The minimum loan amount is Rs. 50,000, and the maximum is Rs. 1,000,000.",
      "15% of the loan amount should be maintained as share capital.",
      "Security equivalent to 30% of the loan amount is required.",
      "Two personal guarantors are required.",
      "Each guarantor should have a deposit equivalent to 25% of the loan amount in their respective accounts, making a total of 50%.",
    ],
  },
  {
    id: "property-loan",
    name: "Property Loan",
    rate: 15,
    amount: "Rs. 500,000 to Rs. 3,000,000",
    repayment: "Up to 10 years (120 installments)",
    highlights: [
      "The applicant must have completed at least one year of membership.",
      "Loans from Rs. 500,000 to Rs. 3,000,000 can be obtained.",
      "15% of the loan amount should be maintained as share capital.",
      "The loan is granted up to 50% of the assessed value of the property.",
      "The property should be owned by the member or his/her spouse.",
      "The maximum repayment period is 10 years (120 installments).",
    ],
  },
  {
    id: "shanik-loan",
    name: "Shanik Loan",
    rate: 23,
    amount: "Up to Rs. 200,000",
    repayment: "12 months",
    highlights: [
      "The maximum loan amount is Rs. 200,000.",
      "A deposit equivalent to 50% of the loan amount should be maintained.",
      "The repayment period is 12 months.",
    ],
  },
  {
    id: "festival-loan",
    name: "Festival Loan",
    rate: 11,
    amount: "Up to Rs. 50,000",
    repayment: "10 months",
    highlights: [
      "The maximum loan amount is Rs. 50,000.",
      "The repayment period is 10 months.",
      "This loan can be obtained for the Sinhala and Tamil New Year or Christmas celebrations.",
      "A deposit equivalent to 20% of the loan amount should be maintained.",
    ],
  },
  {
    id: "education-loan",
    name: "Education Loan",
    rate: 11,
    amount: "Up to Rs. 30,000",
    repayment: "10 months",
    tag: "For members with school-going children",
    highlights: [
      "This loan is issued to purchase school equipment for the new school term.",
      "The maximum loan amount is Rs. 30,000. (This amount may be revised annually.)",
      "The repayment period is 10 months.",
      "A deposit equivalent to 50% of the loan amount should be maintained.",
      "This loan facility is available only to members who have school-going children.",
    ],
  },
  {
    id: "movable-property-loan",
    name: "Movable Property Loan",
    rate: 15,
    amount: "Up to Rs. 3,000,000",
    // TODO: repayment period not provided for Movable Property Loan
    repayment: null,
    highlights: [
      "This loan is provided for the purchase of motorcycles and motor vehicles.",
      "Loans are available for both brand-new and used vehicles.",
      "Up to 50% of the value of the vehicle can be financed.",
      "The maximum loan amount is Rs. 3,000,000.",
    ],
  },
  {
    id: "security-loan",
    name: "Security Loan",
    rate: 10,
    amount: "Up to 85% of the fixed deposit value",
    repayment: "Based on the maturity period of the fixed deposit",
    tag: "Also open to non-members",
    highlights: [
      "This loan is provided against fixed deposits.",
      "Up to 85% of the value of the fixed deposit can be obtained as a loan.",
      "The interest rate for the Security Loan is calculated by adding 2% to the interest rate applicable to the fixed deposit.",
      "The repayment period of the loan is determined according to the maturity period of the fixed deposit.",
      "This loan facility is also available to non-members.",
    ],
  },
  {
    id: "business-loan",
    name: "Business Loan",
    rate: 35,
    amount: "Rs. 25,000 to Rs. 700,000",
    repayment: "8 months (daily installments)",
    tag: "Daily installments",
    highlights: [
      "This loan is issued to members who are engaged in business activities.",
      "Loans from Rs. 25,000 up to Rs. 700,000 can be obtained.",
      "The repayment period is 8 months.",
      "Installments should be paid daily.",
      "Members do not need to visit the office to make the daily installment payment. The installment can be handed over to the relevant field officer.",
    ],
  },
  {
    id: "goods-purchase-loan",
    name: "Goods Purchase Loan",
    rate: 11,
    amount: "Up to Rs. 3,000,000",
    repayment: "Up to 5 years (60 months)",
    highlights: [
      "This loan is provided for the purchase of any goods or products.",
      "A quotation must be obtained from the institution or supplier from which the goods are being purchased.",
      "The maximum loan amount is Rs. 3,000,000.",
      "The maximum repayment period is 5 years (60 months).",
    ],
  },
  {
    id: "disaster-loan",
    name: "Disaster Loan",
    rate: 12,
    amount: "Up to Rs. 3,000,000",
    repayment: "Up to 5 years",
    highlights: [
      "This loan is provided for emergency or disaster-related situations.",
      "An estimate or quotation should be submitted for this purpose.",
      "The maximum loan amount is Rs. 3,000,000.",
      "The maximum repayment period is 5 years.",
    ],
  },
  {
    id: "sahas-loan",
    name: "Sahas Loan",
    rate: 9,
    amount: "Up to Rs. 3,000,000",
    repayment: "Up to 3 years",
    highlights: [
      "A loan amount equivalent to three times the total value of the Sahas Deposit can be obtained as a Sahas Loan.",
      "The maximum loan amount is Rs. 3,000,000.",
      "The maximum repayment period is 3 years.",
    ],
  },
];

// ─── Welfare (page content) ──────────────────────────────────────────────────

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
