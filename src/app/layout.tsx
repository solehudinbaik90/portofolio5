import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import AosInit from "@/components/ui/AosInit";
import "./globals.css";
import "./aos.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | MSoleh - Portofolio",
    default: "MSoleh - Portofolio",
  },
  description:
    "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh — Guru IPA/Fisika berpengalaman.",
  icons: { icon: "/favicon.ico" },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {children}
        <AosInit />
      </body>
    </html>
  );
}
