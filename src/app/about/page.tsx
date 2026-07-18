import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProfileCard from "@/components/about/ProfileCard";
import ExperienceList from "@/components/about/ExperienceList";
import EducationList from "@/components/about/EducationList";
import SkillList from "@/components/about/SkillList";
import SectionBadge from "@/components/ui/SectionBadge";
import { experiences } from "@/data/experiences";
import { educations } from "@/data/educations";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Profil",
  description: "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#252525]">
      <div className="bg-img" aria-hidden="true" />
      <div className="relative z-10">
        <Header />
        <main>
        <section className="py-[30px] md:py-[80px]">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-[20px]">

              <div className="col-span-12 lg:col-span-4 lg:pr-[30px]">
                <SectionBadge
                  label="Profil"
                  icon={
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-[14px] text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
                    </svg>
                  }
                />
                <ProfileCard />
              </div>

              <div className="col-span-12 lg:col-span-8">
                <div className="mt-[80px]">
                  <h2
                    className="text-[32px] font-semibold uppercase leading-tight text-white md:text-[52px]"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    Mendidik dengan <span className="text-theme">Semangat!</span>
                  </h2>
                  <p className="mt-[20px] text-text" data-aos="fade-up" data-aos-delay="100">
                    Seorang sarjana pendidikan Ilmu Pengetahuan Alam (IPA) jurusan Fisika dengan
                    pengalaman mengajar lebih dari sepuluh tahun. Sembilan tahun di MTs dan SMK,
                    satu tahun di SMA dan bimbel. Selalu bersemangat untuk terus berkembang
                    menjadi pengajar yang profesional dan inspiratif.
                  </p>
                </div>

                <div className="mt-[60px]">
                  <h2 className="text-[32px] font-semibold" data-aos="fade-up" data-aos-delay="150">
                    Info Pribadi:
                  </h2>
                  <div className="mt-[20px] grid grid-cols-12">
                    <div className="col-span-6" data-aos="fade-up" data-aos-delay="200">
                      <p className="text-[18px] font-medium">Nama</p>
                      <p className="mt-2 text-[16px] text-text">Muhamad Soleh</p>
                    </div>
                    <div className="col-span-6" data-aos="fade-up" data-aos-delay="200">
                      <p className="text-[18px] font-medium">Profesi</p>
                      <p className="mt-2 text-[16px] text-text">Guru IPA / Fisika</p>
                    </div>
                  </div>
                  <div className="mt-[20px] grid grid-cols-12">
                    <div className="col-span-6" data-aos="fade-up" data-aos-delay="250">
                      <p className="text-[18px] font-medium">Email</p>
                      <p className="mt-2 text-[16px] text-text">solehudinz3692@gmail.com</p>
                    </div>
                    <div className="col-span-6" data-aos="fade-up" data-aos-delay="250">
                      <p className="text-[18px] font-medium">Lokasi</p>
                      <p className="mt-2 text-[16px] text-text">Tangerang, Banten</p>
                    </div>
                  </div>
                </div>

                <ExperienceList experiences={experiences} />
                <EducationList educations={educations} />
                <SkillList skills={skills} />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
