import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import AosInit from "@/components/ui/AosInit";
import "./global.css";
import "./aos.css";
import "swiper/css";
import "swiper/css/pagination";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const swiperIcons = localFont({
  src: "../../public/assets/css/swiper2/swiper-icon.woff",
  variable: "--font-swiper-icons",
  weight: "400",
  style: "normal",
  display: "block",
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
    <html lang="id" className={`${inter.variable} ${poppins.variable} ${swiperIcons.variable}`}>
      <body>
        {children}
        <AosInit />
      </body>
    </html>
  );
}
