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
  | "award-1"
  | "award-2"
  | "award-3"
  | "award-4"
  | "award-5"
  | "award-6"
  | "award-7"
  | "facility-counter"
  | "facility-computer"
  | "facility-office"
  | "welfare-plants"
  | "welfare-charity"
  | "welfare-wesak"
  | "welfare-senior"
  | "welfare-1"
  | "welfare-2"
  | "welfare-3"
  | "welfare-4"
  | "welfare-5"
  | "welfare-6"
  | "board-1"
  | "board-2"
  | "board-3"
  | "board-4"
  | "board-5"
  | "board-6"
  | "board-7"
  | "staff-1"
  | "staff-2"
  | "staff-3"
  | "membership-cover";

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
    src: "/images/og-image.png",
    alt: "Horagasmulla SANASA logo: blue cupped hands holding the cooperative emblem, with the Sinhala name Horagasmulla over the bank building",
    width: 512,
    height: 512,
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
    alt: "Cooperative tournament trophy photo",
    width: 600,
    height: 600,
    caption: "Cooperative tournament trophy",
  },
  "award-cooperative-day": {
    src: "/images/award-cooperative-day.jpg",
    alt: "Cooperative tournament recognition trophy",
    width: 600,
    height: 600,
    caption: "Cooperative tournament trophy",
  },
  // TEMPORARY: replace each award-N path with its real trophy photo (public/images/award-N.jpg) when available.
  "award-1": {
    src: "/images/awards/award-1.jpeg",
    alt: "Trophy won at the 2026 cricket tournament organized by Panadura SANASA",
    width: 300,
    height: 300,
  },
  "award-2": {
    src: "/images/awards/award-2.jpeg",
    alt: "Trophies won at the 2025 cricket tournament organized by Panadura SANASA",
    width: 300,
    height: 300,
  },
  "award-3": {
    src: "/images/awards/award-3.jpeg",
    alt: "Trophy won at the 2024 cricket tournament organized by Panadura SANASA",
    width: 300,
    height: 300,
  },
  "award-4": {
    src: "/images/awards/award-4.jpeg",
    alt: "Trophy won at the 2018 Soma Mathararachchi Memorial Cricket Tournament",
    width: 300,
    height: 300,
  },
  "award-5": {
    src: "/images/awards/award-5.jpeg",
    alt: "Award plaque for third place in drama at the 2018 National Children's Festival",
    width: 300,
    height: 300,
  },
  "award-6": {
    src: "/images/awards/award-6.jpeg",
    alt: "Trophies won for Netball and Volleyball at the 95th Cooperative Day celebrations in 2017",
    width: 300,
    height: 300,
  },
  "award-7": {
    src: "/images/awards/award-7.jpeg",
    alt: "Trophies won at the Kalutara District Cooperative Board cricket tournament",
    width: 300,
    height: 300,
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
  // TEMPORARY: reused existing images. Replace each welfare-N path with the real event photo (public/images/welfare-N.jpg) when available.
  "welfare-1": {
    src: "/images/1.jpeg",
    alt: "Recognition of 24 years of service of Manager S. D. Nadeeka Kumuduni at Horagasmulla SANASA",
    width: 800,
    height: 600,
  },
  "welfare-2": {
    src: "/images/2.jpeg",
    alt: "Members and staff at the Kathina sermon series at Isurupura Sri Sangaraja Maha Viharaya, Dodangoda",
    width: 800,
    height: 600,
  },
  "welfare-3": {
    src: "/images/3.jpeg",
    alt: "Horagasmulla SANASA members during the annual excursion to Ampara",
    width: 800,
    height: 600,
  },
  "welfare-4": {
    src: "/images/4.jpeg",
    alt: "Cash prizes awarded to children of Horagasmulla SANASA members for examination achievements",
    width: 800,
    height: 600,
  },
  "welfare-5": {
    src: "/images/5.jpeg",
    alt: "Special religious ceremony for the installation of new deity statues at Payagala Estate for Hindu members",
    width: 800,
    height: 600,
  },
  "welfare-6": {
    src: "/images/6.jpeg",
    alt: "Celebrating the proud 59th anniversary of Horagasmulla SANASA Society",
    width: 800,
    height: 600,
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
    src: "/images/bord/board-1.jpeg",
    alt: "Chaminda Veerapperuma, Hon. Chairman / Board Leader",
    width: 480,
    height: 700,
    caption: "Hon. Chairman / Board Leader",
  },
  "board-2": {
    src: "/images/bord/board-2.webp",
    alt: "J . L Salomi Chanchala, Hon. Deputy Chairman",
    width: 480,
    height: 480,
    caption: "Hon. Deputy Chairman",
  },
  "board-3": {
    src: "/images/bord/board-3.webp",
    alt: "W . K . A. Dilhani Damayanthi, Hon. Secretary",
    width: 480,
    height: 480,
    caption: "Hon. Secretary",
  },
  "board-4": {
    src: "/images/bord/board-4.webp",
    alt: "R. Amara, Member",
    width: 480,
    height: 480,
    caption: "Member",
  },
  "board-5": {
    src: "/images/bord/board-5.webp",
    alt: "L . H .Manjula Malkanthi, Member",
    width: 480,
    height: 480,
    caption: "Member",
  },
  "board-6": {
    src: "/images/bord/board-6.webp",
    alt: "W . G .Chathuranga Lakmal, Member",
    width: 480,
    height: 480,
    caption: "Member",
  },
  "board-7": {
    src: "/images/bord/board-7.webp",
    alt: "M . M .Jagath Pushpakumara, Member",
    width: 480,
    height: 480,
    caption: "Member",
  },
  // Replace with real photos (public/images/staff-1.jpg etc.) when available.
  "staff-1": {
    src: "/images/staff/staff-1.webp",
    alt: "S . D. Nadeeka Kumuduni, Manager",
    width: 400,
    height: 400,
  },
  "staff-2": {
    src: "/images/staff/staff-2.webp",
    alt: "S . Saduni Ruwanthika, Assistant Manager",
    width: 400,
    height: 400,
  },
  "staff-3": {
    src: "/images/staff/staff-3.webp",
    alt: "P . Chamari Lakmini, Assistant Manager",
    width: 400,
    height: 400,
  },
  "membership-cover": {
    src: "/images/membership-benefits-cover.png",
    alt: "සී/ස දොඩන්ගොඩ හොරගස්මුල්ල සකසුරුවම් හා ණය ගනුදෙනු සමුපකාර සමිතිය - නව සුභ සාධක කාරක නියෝග මාලාව",
    width: 600,
    height: 700,
  },
};

export function getImage(key: ImageKey): SiteImage {
  return siteImages[key];
}
