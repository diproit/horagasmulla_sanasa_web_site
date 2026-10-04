export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  brandName: string;
  tagline: string;
  foundingYear: number;
  // TODO: confirm exact postal address
  address: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  hours: {
    schedule: string;
    openDays: string;
    closedDays: string;
    times: string;
  };
  credit: string;
  copyright: string;
  navigation: NavItem[];
  introVideo: {
    videoId: string;
    title: string;
    embedUrl: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Horagasmulla SANASA",
  shortName: "Horagasmulla SANASA",
  brandName: "Horagasmulla SANASA",
  tagline: "Save today for a better tomorrow",
  foundingYear: 1965,
  // TODO: confirm exact postal address
  address: "Dodangoda Horagasmulla SANASA Society Ltd., Horagasmulla, Dodangoda, Sri Lanka",
  geo: {
    latitude: 6.55803,
    longitude: 80.007111,
  },
  hours: {
    schedule: "Tuesday to Sunday, 8:30 AM – 3:00 PM",
    openDays: "Tuesday – Sunday",
    closedDays: "Mondays and public holidays",
    times: "8:30 AM – 3:00 PM",
  },
  credit: "Site by RAJIDA © 2026",
  copyright: "© 2026 Dodangoda Horagasmulla SANASA. All Rights Reserved.",
  introVideo: {
    videoId: "PzTpCsgU9kw",
    title: "Dodangoda Horagasmulla SANASA – Introduction video",
    embedUrl: "https://www.youtube-nocookie.com/embed/PzTpCsgU9kw",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Membership", href: "/membership" },
    { label: "Management", href: "/management" },
    { label: "Contact", href: "/contact" },
  ],
};
