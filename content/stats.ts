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
    value: 1,
    // TODO: confirm currency (Rs. 1 Billion)
    displayValue: "Rs. 1 Billion",
    label: "Total Assets",
    description: "Financial strength backing our cooperative community",
  },
  {
    id: "active-members",
    value: 600,
    displayValue: "600+",
    label: "Active Members",
    suffix: "+",
    description: "Equal voting stakeholders across local zones",
  },
  {
    id: "account-holders",
    value: 900,
    displayValue: "900+",
    label: "Account Holders",
    suffix: "+",
    description: "Families and individuals saving with security",
  },
  {
    id: "years-of-service",
    value: 61,
    displayValue: "61",
    label: "Years of Service",
    description: "Dedicated community banking since 1965",
  },
];
