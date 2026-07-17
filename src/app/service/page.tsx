import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh.",
};

const serviceDelays = ["100", "150", "200", "100", "150", "200"];

export default function ServicePage() {
  return (
    <>
      <Header />
      <main className="relative z-[99]">
        <section className="py-[30px] md:py-[80px]">
          <div className="container mx-auto">

            <SectionBadge
              label="Semua Layanan"
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
                Semua layanan umum yang <br className="hidden md:block" />
                saya berikan kepada <span className="text-theme">klien!</span>
              </h2>
              <p className="mt-[20px] text-text lg:w-[60%]" data-aos="fade-up" data-aos-delay="150">
                Kebutuhan akan pengalaman digital yang terintegrasi dan mulus mendorong
                desain dan pengembangan produk perangkat lunak di berbagai organisasi.
              </p>
            </div>

            <div className="mt-[60px] md:mt-[80px]">
              <div className="grid gap-y-[60px] md:grid-cols-12 md:gap-x-[30px]">
                {services.map((service, i) => (
                  <div
                    key={service.title}
                    className="col-span-12 md:col-span-6 lg:col-span-4"
                    data-aos="fade-up"
                    data-aos-delay={serviceDelays[i] ?? "100"}
                  >
                    <div className="group rounded-2xl bg-btn p-[30px]">
                      <div>{service.icon}</div>
                      <h2 className="pt-5 text-[20px] font-medium text-white md:text-[26px]">
                        {service.title}
                      </h2>
                      <p className="mt-[10px] text-text">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[100px]">
              <h2 className="text-[32px] font-semibold" data-aos="fade-up" data-aos-delay="50">
                Kata Mereka:
              </h2>
              <div
                className="mt-[30px] grid gap-[30px] md:grid-cols-2 lg:grid-cols-3"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="divide-y divide-dashed divide-theme rounded-xl bg-card px-[30px] py-[40px]"
                  >
                    <p className="pb-[30px] text-[18px] italic text-text">
                      &quot;{item.text}&quot;
                    </p>
                    <div className="flex items-center gap-4 pt-[30px]">
                      <div className="inline-block w-[80px] overflow-hidden rounded-full">
                        <Image src={item.avatar} alt={item.name} />
                      </div>
                      <div className="grid gap-[10px]">
                        <p className="text-base font-semibold text-white lg:text-[20px]">
                          {item.name}
                        </p>
                        <p className="text-text">{item.location}</p>
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
    </>
  );
}
