import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProfileImage from "@/components/home/ProfileImage";

export const metadata: Metadata = { title: "Beranda" };

export default function HomePage() {
  return (
    <div className="bg-img">
      <Header />
      <section className="relative z-[99]">
        <div className="main__body">
          <section className="py-[30px] md:py-[80px]">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-[30px]">
                <Hero />
                <ProfileImage />
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
