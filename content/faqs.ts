export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "membership" | "services" | "contact";
}

export interface FAQCategory {
  id: "membership" | "services" | "contact";
  title: string;
  description: string;
}

export const faqCategories: FAQCategory[] = [
  {
    id: "membership",
    title: "Membership & Registration",
    description: "Learn about eligibility, required documents, and cooperative ownership.",
  },
  {
    id: "services",
    title: "Savings & Loans",
    description: "Explore our thrift deposit accounts, credit portfolios, and community welfare programs.",
  },
  {
    id: "contact",
    title: "Office & Contact",
    description: "Find information on branch hours, direct telephone numbers, WhatsApp, and location.",
  },
];

export const faqs: FAQItem[] = [
  // Membership FAQs
  {
    id: "mem-1",
    category: "membership",
    question: "Who is eligible to become a member of Horagasmulla SANASA?",
    answer:
      "Any resident of Horagasmulla, Dodangoda, or surrounding administrative divisions who is at least 18 years old, committed to cooperative principles, and willing to make an initial deposit for share capital is eligible to apply.",
  },
  {
    id: "mem-2",
    category: "membership",
    question: "What documents must I bring to register as a member?",
    answer:
      "Please bring a copy of your National Identity Card (NIC), valid proof of residency in the Dodangoda area (such as a utility bill or Grama Niladhari letter), and the initial minimum deposit to open your member share account.",
  },
  {
    id: "mem-3",
    category: "membership",
    question: "How is cooperative membership different from being a customer at a commercial bank?",
    answer:
      "Unlike commercial banks, Horagasmulla SANASA is entirely member-owned. As an equal stakeholder, you have democratic voting rights to elect zonal board representatives, receive dividend payouts from thrift deposits and share capital, and gain access to preferential loan schemes and welfare relief.",
  },
  {
    id: "mem-4",
    category: "membership",
    question: "How do I apply for membership?",
    answer:
      "Joining is simple: visit our main office in Horagasmulla to obtain an application form, or speak with your elected local zonal council representative who can guide you through the registration process.",
  },
  {
    id: "mem-5",
    category: "membership",
    question: "What is the geographical zonal structure of the society?",
    answer:
      "Our society spans multiple Grama Niladhari administrative divisions grouped into local geographical zones. Each zone convenes its own Zonal Council, ensuring community members have a direct voice in loan reviews, thrift circles, and welfare outreach.",
  },

  // Services FAQs — based on the 11 real savings accounts effective 01.04.2026
  {
    id: "srv-1",
    category: "services",
    question: "What savings accounts does Horagasmulla SANASA offer?",
    answer:
      "We offer eleven savings and deposit accounts: Member Savings Account (8% p.a.), Danayojana Savings (9%), Member Fixed Deposit (9%), Member Fixed Deposit – Monthly Interest (7.5%), Children's Savings (10%), Loan Security Deposit (8%), Abhimana Savings (5%), Sahas Savings (7%), D.S.H. Investment (6%), D.S.H. Youth (4.5%), and D.S.H. Super 60 Savings (5%). All rates are effective from 01.04.2026. Conditions apply.",
  },
  {
    id: "srv-2",
    category: "services",
    question: "Which savings account is designed for children?",
    answer:
      "The Children's Savings account is for all children below 18 years of age. It earns 10% per annum — the highest rate offered. The account can be opened with Rs. 1,000. Members who deposit Rs. 500 every month receive a set of books at the end of the year. A savings money box is provided at opening; the amount collected in the box is counted in December, and a 10% bonus on that amount is credited to the account.",
  },
  {
    id: "srv-3",
    category: "services",
    question: "Can non-members open a savings account?",
    answer:
      "Yes. The Abhimana Savings account accepts deposits from both members and non-members. It earns 5% per annum, and interest is credited to the account monthly.",
  },
  {
    id: "srv-4",
    category: "services",
    question: "What is the minimum period for a fixed deposit?",
    answer:
      "Fixed deposits can be made for a minimum period of one year or longer. The Member Fixed Deposit earns 9% per annum. If you prefer monthly interest payments, the Member Fixed Deposit – Monthly Interest scheme pays interest every month at 7.5% per annum (1.5% lower than the applicable fixed-deposit rate, as interest is received monthly).",
  },
  {
    id: "srv-5",
    category: "services",
    question: "How can I get a loan through a savings account?",
    answer:
      "Through the Sahas Savings account, you deposit the same fixed amount every month for 12 months at 7% per annum. After completing 12 months, you can obtain a loan equivalent to three times the balance of the account. The loan must be repaid within 3 years through 36 installments.",
  },

  // Loan FAQs — based on the 11 real loan products
  {
    id: "srv-6",
    category: "services",
    question: "What types of loans does Horagasmulla SANASA offer?",
    answer:
      "We offer eleven loan types: General Loan (12%), Property Loan (15%), Shanik Loan (23%), Festival Loan (11%), Education Loan (11%), Movable Property Loan (15%), Security Loan (10%), Business Loan (35%), Goods Purchase Loan (11%), Disaster Loan (12%), and Sahas Loan (9%). Annual rates range from 9% to 35%. For every loan, an additional 1% is charged for the Education and Project Fund, in addition to the interest. Conditions apply.",
  },
  {
    id: "srv-7",
    category: "services",
    question: "Can non-members get a loan?",
    answer:
      "Yes, but only through the Security Loan. Non-members who hold a fixed deposit with us can obtain up to 85% of the fixed deposit value as a loan. The interest rate is 2% above the applicable fixed-deposit rate, and repayment follows the maturity period of the deposit. All other loan types are available to members only.",
  },
  {
    id: "srv-8",
    category: "services",
    question: "What do I need to qualify for a General Loan?",
    answer:
      "You must have completed at least 3 months of membership. The loan range is Rs. 50,000 to Rs. 1,000,000 at 12% per annum. You need to maintain 15% of the loan amount as share capital, provide security equivalent to 30% of the loan amount, and arrange two personal guarantors — each with a deposit of 25% of the loan amount in their accounts (totalling 50%).",
  },
  {
    id: "srv-9",
    category: "services",
    question: "How do I repay a Business Loan?",
    answer:
      "The Business Loan is repaid over 8 months through daily installments. You do not need to visit the office every day — the daily installment can be handed over to the relevant field officer. Loan amounts range from Rs. 25,000 to Rs. 700,000 at 35% per annum, and the loan is available to members engaged in business activities.",
  },
  {
    id: "srv-10",
    category: "services",
    question: "Is there any extra charge on loans?",
    answer:
      "Yes. For every type of loan, an additional 1% is charged for the Education and Project Fund, in addition to the stated interest rate. Conditions apply.",
  },

  // Contact FAQs
  {
    id: "cnt-1",
    category: "contact",
    question: "What are the bank's opening hours?",
    answer:
      "We are open Tuesday to Sunday from 8:30 AM to 3:00 PM. We are closed on Mondays and all official public holidays.",
  },
  {
    id: "cnt-2",
    category: "contact",
    question: "How can I contact the manager directly or send a WhatsApp message?",
    answer:
      "You can contact our Manager directly by phone or WhatsApp at 070 6400 288 (tappable links are available throughout our website).",
  },
  {
    id: "cnt-3",
    category: "contact",
    question: "What is the office telephone number and official email address?",
    answer:
      "You can reach our main office line at 034 22 850 61 or send email inquiries to sanasa.hor@gmail.com.",
  },
  {
    id: "cnt-4",
    category: "contact",
    question: "Where is the Horagasmulla SANASA office located?",
    answer:
      "Our main branch is located at Dodangoda Horagasmulla SANASA Society Ltd., Horagasmulla, Dodangoda, Sri Lanka. You can find directions using the interactive Google Map embedded on our Contact page.",
  },
  {
    id: "cnt-5",
    category: "contact",
    question: "What official social media channels does the society maintain?",
    answer:
      "You can connect with us on our official Facebook page and watch cooperative broadcasts on YouTube (SANASA TV).",
  },
];
