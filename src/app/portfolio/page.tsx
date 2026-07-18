import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyek",
  description: "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh.",
};

const delays = ["200", "250", "300", "200", "250", "300"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#252525]">
      <div className="bg-img" aria-hidden="true" />
      <div className="relative z-10">
        <Header />
        <main>
        <section className="py-[30px] md:py-[80px]">
          <div className="container mx-auto">

            <SectionBadge
              label="Proyek"
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
                  <path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32.4 97.2c28-12.4 47.6-40.5 47.6-73.2c0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3V358.7C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48c44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>
              }
            />

            <div className="mt-[30px] md:mt-[40px]">
              <h2
                className="text-[32px] font-semibold uppercase leading-tight text-white md:text-[52px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Jangan Kompromi Untuk <br className="hidden md:block" />
                Kualitas <span className="text-theme">Proyek!</span>
              </h2>
              <p className="mt-[20px] text-text lg:w-[60%]" data-aos="fade-up" data-aos-delay="150">
                Kebutuhan akan pengalaman digital yang terintegrasi dan mulus mendorong
                desain dan pengembangan produk perangkat lunak di berbagai organisasi
                dengan skala yang belum pernah terjadi sebelumnya.
              </p>
            </div>

            <div className="mt-[60px] md:mt-[80px]">
              <div className="grid gap-y-[30px] md:grid-cols-12 md:gap-x-[30px]">
                {projects.map((project, i) => (
                  <div
                    key={project.id}
                    className="col-span-12 md:col-span-6 lg:col-span-4"
                    data-aos="fade-up"
                    data-aos-delay={delays[i] ?? "200"}
                  >
                    <div className="group rounded-2xl bg-btn p-[30px]">
                      <div className="overflow-hidden rounded-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
                        />
                      </div>
                      <div>
                        <p className="mt-[16px] text-[14px] text-text">{project.category}</p>
                        <div className="cursor-pointer text-white transition-all duration-300 hover:text-theme">
                          <Link href="#">
                            <h2 className="mt-[15px] text-[20px] font-medium capitalize">
                              {project.title}
                            </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
    </div>
  );
}
