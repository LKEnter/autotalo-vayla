import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import { MorfoosGlobalProvider } from "@morfoos/core/providers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const generalSans = localFont({
  src: [
    { path: "./fonts/general-sans/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/general-sans/GeneralSans-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/general-sans/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/general-sans/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/general-sans/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${generalSans.variable} ${archivo.variable}`}>
      <body suppressHydrationWarning>
        <MorfoosGlobalProvider
          siteId={process.env.NEXT_PUBLIC_SITE_ID || "development_fallback"}
          autoTrackClicks={true}
        >
          <Header />
          {children}
          <Footer />
        </MorfoosGlobalProvider>
      </body>
    </html>
  );
}
