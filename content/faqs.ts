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

  // Services FAQs
  {
    id: "srv-1",
    category: "services",
    question: "What types of savings accounts are offered?",
    answer:
      "We provide targeted savings plans including Children's Savings Accounts (with educational rewards and annual gifts), Women's Savings Schemes (offering secure deposits and emergency micro-credit links), and Senior Citizens' Accounts (featuring prioritized counter service and dedicated welfare programs).",
  },
  {
    id: "srv-2",
    category: "services",
    question: "What loan facilities are available for members?",
    answer:
      "We offer affordable, low-interest loan portfolios including Agricultural Loans (for seeds, fertilizer, and farm equipment), Housing & Renovation Loans (for building, buying, or extending homes), and Business Development Loans (for village shops, traditional crafts, and self-employed members).",
  },
  {
    id: "srv-3",
    category: "services",
    question: "Can non-members apply for loan facilities?",
    answer:
      "Our concessionary credit facilities and low-interest rates are reserved for registered cooperative members. Registering as a member allows you to apply for loan programs with the support and recommendation of your local zonal council.",
  },
  {
    id: "srv-4",
    category: "services",
    question: "What welfare and community projects does the society run?",
    answer:
      "We regularly invest resources back into Dodangoda through free plant seedling distributions (green village home initiative), dry-ration welfare charity for vulnerable elder members, Wesak sermon and lantern festivals, and annual senior citizen appreciation events.",
  },
  {
    id: "srv-5",
    category: "services",
    question: "Are member records and transactions computerized?",
    answer:
      "Yes. All accounts, passbooks, and banking operations at Horagasmulla SANASA are fully computerized, providing accurate, secure, and transparent financial records.",
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
