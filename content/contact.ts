export interface ContactChannel {
  label: string;
  display: string;
  href: string;
  icon?: string;
}

export interface SocialLinks {
  facebook: string;
  youtube: string;
}

export interface ContactPageContent {
  banner: {
    title: string;
    subText: string;
  };
  getInTouch: {
    heading: string;
    subText: string;
  };
  managerWhatsApp: {
    label: string;
    display: string;
    telHref: string;
    whatsAppHref: string;
  };
  officePhone: {
    label: string;
    display: string;
    telHref: string;
  };
  email: {
    label: string;
    display: string;
    mailtoHref: string;
  };
  social: SocialLinks;
  hours: {
    label: string;
    schedule: string;
    closed: string;
  };
  registeredAddress: {
    label: string;
    value: string;
  };
  googleMapsEmbedUrl: string;
}

export const contactContent: ContactPageContent = {
  banner: {
    title: "Contact Us",
    subText: "Reach out to our staff for any inquiries, savings plans, or loan support",
  },
  getInTouch: {
    heading: "Dodangoda Horagasmulla SANASA Society Ltd.",
    subText: "We are here to assist our members and visitors with trusted cooperative services.",
  },
  managerWhatsApp: {
    label: "Manager / Mobile / WhatsApp",
    display: "070 6400 288",
    telHref: "tel:+94706400288",
    whatsAppHref: "https://wa.me/94706400288",
  },
  officePhone: {
    label: "Office Phone",
    display: "034 22 850 61",
    telHref: "tel:+94342285061",
  },
  email: {
    label: "Email Inquiries",
    display: "sanasa.hor@gmail.com",
    mailtoHref: "mailto:sanasa.hor@gmail.com",
  },
  social: {
    facebook: "https://www.facebook.com/share/1FfbYzc2ot/",
    youtube: "https://youtube.com/@sanasatv?si=htc9BXE5Sju3PEbm",
  },
  hours: {
    label: "Business Hours",
    schedule: "Tuesday to Sunday, 8:30 AM to 3:00 PM",
    closed: "Closed Mondays and public holidays",
  },
  registeredAddress: {
    label: "Registered Office Address",
    value: "Dodangoda Horagasmulla SANASA Society Ltd., Horagasmulla, Dodangoda, Sri Lanka",
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.711707348385!2d80.00711157602946!3d6.558030476507938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae233b30e777045%3A0x763af06d20acb8ba!2sSanasa%20Bank%20(%20New)%20Horagasmulla!5e0!3m2!1sen!2slk!4v1790657638272!5m2!1sen!2slk",
};
