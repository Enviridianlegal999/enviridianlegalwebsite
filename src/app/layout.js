import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBox from "@/components/popups/ChatBox";
import AdminLoginFAB from "@/components/popups/AdminLoginFAB";

import { AuthProvider } from "@/contexts/AuthContext";

import theme from "@/styles/mui/theme";
import "@/styles/globals.css";

const pinland = localFont({
  src: [
    {
      path: "../../public/fonts/Pinland-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pinland",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://enviridianlegal.com"),
  title: {
    default:
      "Enviridian Legal | Constitutional, Service & IP Law Experts - Delhi NCR",
    template: "%s | Enviridian Legal",
  },
  description:
    "Enviridian Legal is a Delhi NCR law firm specializing in Constitutional, Service, and IP Law. Expert representation in Supreme Court, High Courts, and Tribunals.",
  keywords: [
    "constitutional law India",
    "service law tribunal",
    "employment lawyer Delhi",
    "IP disputes India",
    "Supreme Court lawyers",
    "High Court Delhi NCR",
    "public interest litigation",
    "fundamental rights lawyer",
    "service matters tribunal",
    "IP regulatory compliance",
    "constitutional writs",
    "employment seniority disputes",
    "Delhi law firm",
    "Supreme Court advocates",
  ],
  authors: [{ name: "Enviridian Legal" }],
  creator: "Enviridian Legal",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://enviridianlegal.com",
    siteName: "Enviridian Legal",
    title:
      "Enviridian Legal | Constitutional, Service & IP Law - Supreme Court & High Court",
    description:
      "Expert representation in Constitutional Law, Service Tribunals, IP Disputes, Supreme Court, High Courts. Delhi NCR based with nationwide practice.",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enviridian Legal - Constitutional Law, Service Matters & IP Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enviridian Legal | Constitutional & Service Law Specialists",
    description:
      "Supreme Court & High Court advocates specializing in constitutional writs, service tribunals, IP regulatory disputes. Delhi NCR.",
    images: ["/seo/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${pinland.variable}`}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <NextTopLoader
              color="var(--secondary)"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
            />
            <Header />
            <main>{children}</main>
            <Footer />
            <AdminLoginFAB />
            <ChatBox />
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                style: {
                  borderRadius: "var(--low-rounded)",
                  background: "var(--grey-1)",
                  color: "var(--white)",
                },
              }}
            />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
