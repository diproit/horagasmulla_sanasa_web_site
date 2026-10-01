export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export type ImageKey =
  | "logo"
  | "hero-building"
  | "og-image"
  | "main-office"
  | "award-bronze"
  | "award-cooperative-day"
  | "facility-counter"
  | "facility-computer"
  | "facility-office"
  | "welfare-plants"
  | "welfare-charity"
  | "welfare-wesak"
  | "welfare-senior"
  | "board-1"
  | "board-2"
  | "board-3"
  | "board-4"
  | "board-5"
  | "board-6"
  | "board-7";

export const siteImages: Record<ImageKey, SiteImage> = {
  logo: {
    src: "/images/logo.svg",
    alt: "Dodangoda Horagasmulla SANASA Society Ltd Official Logo",
    width: 320,
    height: 80,
  },
  "hero-building": {
    src: "/images/hero-building.svg",
    alt: "Dodangoda Horagasmulla SANASA Bank Main Branch Building Entrance",
    width: 800,
    height: 600,
    caption: "Dodangoda Horagasmulla SANASA Bank",
  },
  "og-image": {
    src: "/images/og-image.svg",
    alt: "Dodangoda Horagasmulla SANASA Society Ltd — Trusted Cooperative Banking since 1965",
    width: 1200,
    height: 630,
  },
  "main-office": {
    src: "/images/main-office.jpg",
    alt: "Main Office Entrance of Dodangoda Horagasmulla SANASA Society Ltd",
    width: 800,
    height: 600,
    caption: "Main Office Entrance",
  },
  "award-bronze": {
    src: "/images/award-bronze.jpg",
    alt: "National Centenary Bronze Award 2018 Plaque",
    width: 600,
    height: 600,
    caption: "Centenary Bronze Plaque (2018)",
  },
  "award-cooperative-day": {
    src: "/images/award-cooperative-day.jpg",
    alt: "International Cooperative Day Recognition Trophy",
    width: 600,
    height: 600,
    caption: "International Cooperative Day Trophy",
  },
  "facility-counter": {
    src: "/images/facility-counter.svg",
    alt: "Modern Banking Transaction Counter at Horagasmulla SANASA",
    width: 800,
    height: 600,
    caption: "Transaction Counter",
  },
  "facility-computer": {
    src: "/images/facility-computer.svg",
    alt: "Secure Computerized Operations and Digital Banking Ledgers",
    width: 800,
    height: 600,
    caption: "Computerized Operations",
  },
  "facility-office": {
    src: "/images/facility-office.svg",
    alt: "Banking Office and Zonal Board Meeting Room",
    width: 800,
    height: 600,
    caption: "Banking Office",
  },
  "welfare-plants": {
    src: "/images/welfare-plants.svg",
    alt: "Green Village Home Initiative Free Plant and Seedling Distribution",
    width: 800,
    height: 600,
    caption: "Plant Distribution — Green village home initiative",
  },
  "welfare-charity": {
    src: "/images/welfare-charity.svg",
    alt: "Welfare Charity Supporting Elder Cooperative Members in Need",
    width: 800,
    height: 600,
    caption: "Welfare Charity — Supporting elder members in need",
  },
  "welfare-wesak": {
    src: "/images/welfare-wesak.svg",
    alt: "Annual Wesak Spiritual Dhamma Sermons and Illumination Ceremony",
    width: 800,
    height: 600,
    caption: "Wesak Ceremony — Dhamma sermons and lights festival",
  },
  "welfare-senior": {
    src: "/images/welfare-senior.svg",
    alt: "Senior Member Appreciation Ceremony Honoring Pioneer Members",
    width: 800,
    height: 600,
    caption: "Senior Appreciation — Honoring our founding senior members",
  },
  "board-1": {
    src: "/images/board-1.svg",
    alt: "Portrait of K. A. Bandara Jayasinghe, Hon. Chairman / Board Leader",
    width: 480,
    height: 600,
    caption: "Hon. Chairman / Board Leader",
  },
  "board-2": {
    src: "/images/board-2.svg",
    alt: "Portrait of M. D. Nimal Perera, Director",
    width: 480,
    height: 600,
    caption: "Director",
  },
  "board-3": {
    src: "/images/board-3.svg",
    alt: "Portrait of S. K. Chandrasena Silva, Director",
    width: 480,
    height: 600,
    caption: "Director",
  },
  "board-4": {
    src: "/images/board-4.svg",
    alt: "Portrait of W. M. Premawathi Wickramasinghe, Director",
    width: 480,
    height: 600,
    caption: "Director",
  },
  "board-5": {
    src: "/images/board-5.svg",
    alt: "Portrait of D. L. Somapala Ranatunga, Director",
    width: 480,
    height: 600,
    caption: "Director",
  },
  "board-6": {
    src: "/images/board-6.svg",
    alt: "Portrait of R. P. Sarath Gunawardena, Director",
    width: 480,
    height: 600,
    caption: "Director",
  },
  "board-7": {
    src: "/images/board-7.svg",
    alt: "Portrait of H. M. Anura Senanayake, Director",
    width: 480,
    height: 600,
    caption: "Director",
  },
};

export function getImage(key: ImageKey): SiteImage {
  return siteImages[key];
}
