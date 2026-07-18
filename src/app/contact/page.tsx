import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#252525]">
      <div className="bg-img" aria-hidden="true" />
      <div className="relative z-10">
        <Header />
        <main>
        <section className="py-[30px] md:py-[80px]">
          <div className="container mx-auto">

            <SectionBadge
              label="Kontak"
              icon={
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-[14px] text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
              }
            />

            <div className="mt-[30px] md:mt-[40px]">
              <h2
                className="text-[32px] font-semibold uppercase leading-tight text-white md:text-[52px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Mari Diskusikan <br className="hidden md:block" />
                Tentang <span className="text-theme">Proyek!</span>
              </h2>
              <p className="mt-[20px] text-text lg:w-[60%]" data-aos="fade-up" data-aos-delay="150">
                Kebutuhan akan pengalaman digital yang terintegrasi dan mulus mendorong
                desain dan pengembangan produk perangkat lunak. Kami siap membantu
                mewujudkan ide Anda menjadi kenyataan.
              </p>
            </div>

            <div className="mt-[60px] md:mt-[80px]">
              <div data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-[32px] font-semibold">Mari Bekerja Sama!</h2>
              </div>

              <div className="grid grid-cols-12 gap-[30px]">

                <div className="col-span-12 mt-[30px] lg:col-span-7">
                  <ContactForm />
                </div>

                <div className="col-span-12 lg:col-span-5" data-aos="fade-up" data-aos-delay="100">
                  <div className="mt-[30px] rounded-xl bg-card p-[10px]">
                    <iframe
                      title="Lokasi Muhamad Soleh"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15868.838416887245!2d106.532609!3d-6.1024512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41ff38cdee3d79%3A0xa8ebc179ed208332!2sWarung%20Emak%20Ati!5e0!3m2!1sid!2sid!4v1783157829397!5m2!1sid!2sid"
                      height={390}
                      width="100%"
                      className="rounded-xl"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>

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
