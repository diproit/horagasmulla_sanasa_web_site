export interface StatItem {
  id: string;
  value: number;
  displayValue: string;
  label: string;
  suffix?: string;
  description?: string;
}

export const statistics: StatItem[] = [
  {
    id: "total-assets",
    value: 400,
    displayValue: "Rs. 400 Million",
    label: "Total Assets",
  },
  {
    id: "active-members",
    value: 750,
    displayValue: "750+",
    label: "Active Members",
    suffix: "+",
  },
  {
    id: "account-holders",
    value: 9000,
    displayValue: "9000+",
    label: "Account Holders",
    suffix: "+",
  },
  {
    id: "years-of-service",
    value: 60,
    displayValue: "60+",
    label: "Years of Service",
    suffix: "+",
  },
];
