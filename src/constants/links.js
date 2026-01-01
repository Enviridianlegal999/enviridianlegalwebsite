import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const headerNavItems = [
  { label: "Chamber", href: "/about" },
  { label: "Practice", href: "/practice-areas" },
  { label: "Process", href: "/process-and-approach" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/blog" },
];

export const socialLinks = [
  {
    label: "Facebook",
    href: `https://facebook.com/${"enviridian-legal"}`,
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: `https://instagram.com/${"enviridian-legal"}`,
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: `https://linkedin.com/in/${"enviridian-legal"}`,
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${+91987654321}`,
    icon: FaWhatsapp,
  },
];
