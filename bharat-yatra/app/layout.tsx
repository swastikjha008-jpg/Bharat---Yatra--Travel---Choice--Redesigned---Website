import type { Metadata } from "next";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bharatyatratravelchoice.example"),
  title: {
    default: "Bharat Yatra Travel Choice | Travel Agency in Lucknow",
    template: "%s | Bharat Yatra Travel Choice",
  },
  description:
    "Bharat Yatra Travel Choice is a Lucknow-based travel company offering India & international tour packages, honeymoon getaways, family tours and religious journeys — including Ayodhya, Varanasi, Manali and Shimla.",
  keywords: [
    "Bharat Yatra Travel Choice",
    "travel agency Lucknow",
    "Lucknow tour packages",
    "India holiday packages",
    "honeymoon packages",
    "family tours",
    "religious tours",
    "Ayodhya tour package",
    "Manali tour package",
    "Varanasi tour package",
    "Shimla tour package",
  ],
  openGraph: {
    title: "Bharat Yatra Travel Choice",
    description:
      "A trusted travel partner for memorable journeys across India and beyond. Based in Lucknow.",
    url: "https://bharatyatratravelchoice.example",
    siteName: "Bharat Yatra Travel Choice",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
