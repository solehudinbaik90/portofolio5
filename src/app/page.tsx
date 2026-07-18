import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProfileImage from "@/components/home/ProfileImage";

export const metadata: Metadata = {
  title: "Beranda",
  description: "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh.",
};

export default function HomePage() {
  return (
    <>
      <div className="bg-img" />
      <div className="relative z-[10] min-h-screen">
        <Header />
        <main className="relative z-[99]">
          <section className="py-[30px] md:py-[80px]">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-[30px]">
                <Hero />
                <ProfileImage />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
