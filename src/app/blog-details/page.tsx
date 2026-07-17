import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import PostCard from "@/components/blog/PostCard";
import type { Comment } from "@/types";
import { posts } from "@/data/post";

export const metadata: Metadata = {
  title: "Detail Artikel",
  description: "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh.",
};

const comments: Comment[] = [
  {
    id: 1,
    name: "Jose K. King",
    avatar: "/assets/images/user/user-1.png",
    text: "Kami ingin mengetahui semua properti menarik lainnya dari superkonduktor yang tidak konvensional. Perangkat lunak kami yang canggih dan mudah digunakan ini kami harap dapat menghasilkan pemahaman baru dan menyarankan aplikasi yang sepenuhnya baru.",
  },
  {
    id: 2,
    name: "Rock Sendro",
    avatar: "/assets/images/user/user-2.png",
    text: "Kami ingin mengetahui semua properti menarik lainnya dari superkonduktor yang tidak konvensional. Perangkat lunak kami yang canggih dan mudah digunakan ini kami harap dapat menghasilkan pemahaman baru dan menyarankan aplikasi yang sepenuhnya baru.",
  },
];

const listItems = [
  "Pembuatan akun pengguna dengan opsi login email.",
  "Opsi reset kata sandi dan pemulihan akun.",
  "Fungsionalitas pencarian lanjutan untuk menemukan konten spesifik.",
  "Antarmuka yang responsif dan mudah digunakan.",
];

const relatedPosts = posts.slice(0, 3);

export default function BlogDetailsPage() {
  return (
    <>
      <Header />
      <main className="relative z-[99]">
        <section className="py-[30px] md:py-[80px]">
          <div className="container mx-auto">

            <SectionBadge
              label="Detail Artikel"
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
                  <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" />
                </svg>
              }
            />

            <div className="mt-[60px]">
              <div className="w-full overflow-hidden lg:h-[720px]" data-aos="fade-up" data-aos-delay="100">
                <Image
                  src="/assets/images/blog/blog-feature.png"
                  alt="Artikel Utama"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>

              <div className="title mt-[40px]" data-aos="fade-up" data-aos-delay="150">
                <h2 className="text-[26px] font-semibold capitalize leading-[36px] text-white md:text-[32px] md:leading-[42px]">
                  Perangkat Lunak Open-Source untuk Mempercepat Penelitian Kuantum
                </h2>
              </div>

              <div className="mt-[20px] flex items-center gap-[20px]" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-[10px]">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-base text-theme" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" />
                  </svg>
                  <span className="text-sm text-text">22 Juni 2026</span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-base text-theme" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                  </svg>
                  <span className="text-sm text-text">2 Komentar</span>
                </div>
              </div>

              <div className="mt-[30px]" data-aos="fade-up" data-aos-delay="100">
                <p className="text-text">
                  Teknologi kuantum diperkirakan akan mengubah secara fundamental banyak bidang
                  utama masyarakat. Para peneliti yakin bahwa ada lebih banyak properti dan
                  aplikasi kuantum yang berguna untuk dijelajahi daripada yang kita ketahui saat ini.
                  Sebuah tim peneliti di Universitas Teknik Chalmers di Swedia telah mengembangkan
                  perangkat lunak open-source yang tersedia secara bebas, yang akan membuka jalan
                  bagi penemuan-penemuan baru di bidang ini dan mempercepat penelitian kuantum secara signifikan.
                </p>

                <p className="mt-[30px] text-text">
                  Dalam beberapa dekade mendatang, teknologi kuantum diperkirakan akan menjadi
                  teknologi kunci di bidang-bidang seperti kesehatan, komunikasi, pertahanan, dan
                  energi. Kekuatan dan potensi teknologi ini terletak pada sifat-sifat aneh dan
                  sangat khusus dari partikel kuantum.
                </p>

                <div className="mt-[30px] rounded-xl bg-btn p-[30px]">
                  <div className="gap-[20px] md:flex">
                    <div className="w-[50px] md:w-[120px]">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[100px] text-theme" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                      </svg>
                    </div>
                    <p className="text-[16px] text-white">
                      Teknologi kuantum diperkirakan akan mengubah secara fundamental banyak bidang
                      utama masyarakat. Para peneliti yakin bahwa ada lebih banyak properti dan
                      aplikasi kuantum yang berguna untuk dijelajahi daripada yang kita ketahui saat ini.
                    </p>
                  </div>
                </div>

                <p className="mt-[30px] text-text">
                  Superkonduktor baru ini terus menjadi bahan yang sangat misterius — sama seperti
                  saudara konvensional mereka pada saat ditemukan di laboratorium lebih dari seratus
                  tahun yang lalu.
                </p>

                <div className="w-100 mt-[30px] gap-[30px] lg:flex">
                  <div className="h-auto w-full overflow-hidden lg:w-6/12">
                    <Image src="/assets/images/blog/blog-2.png" alt="Artikel" className="h-full w-full rounded-xl object-cover" />
                  </div>
                  <div className="mt-[30px] lg:mt-0 lg:w-6/12">
                    <p className="text-text">
                      Template Admin React yang paling ramah pengembang & sangat dapat dikustomisasi.
                    </p>
                    <ul className="mt-[20px] grid gap-5">
                      {listItems.map((item) => (
                        <li key={item} className="flex items-start text-text">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" className="mr-[8px] mt-[5px] shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-[30px] grid gap-[30px] md:flex">
                  {[4, 5, 6, 7].map((n) => (
                    <div key={n}>
                      <Image src={`/assets/images/blog/blog-${n}.png`} alt={`Blog ${n}`} className="w-full rounded-xl" />
                    </div>
                  ))}
                </div>

                <p className="mt-[30px] text-text">
                  Untuk dapat menjelajahi penemuan revolusioner baru, diperlukan alat yang dapat
                  mempelajari dan memanfaatkan sifat kuantum yang luar biasa pada tingkat partikel minimal.
                </p>
              </div>

              <div className="mt-[30px]">
                <div className="grid items-center justify-between md:flex">
                  <div data-aos="fade-up" data-aos-delay="100">
                    <p className="text-[18px] font-semibold text-white">Oleh Muhamad Soleh</p>
                  </div>
                  <div className="mt-[20px] md:mt-0" data-aos="fade-up" data-aos-delay="100">
                    <div className="mt-[30px] flex justify-center gap-3">
                      <a href="https://www.facebook.com/soleh.muhamad" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="socialRound" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="socialRound" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[30px] md:mt-[10px]">
                <div data-aos="fade-up" data-aos-delay="100">
                  <h2 className="text-[22px] font-semibold text-white">{comments.length} Komentar</h2>
                </div>
                <div className="my-[15px] border-t border-[#ddd]" />
                <div className="parent mt-[40px] grid gap-[30px]">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex w-full gap-[30px]" data-aos="fade-up" data-aos-delay="100">
                      <div className="w-[20%] md:w-auto">
                        <Image src={comment.avatar} alt={comment.name} className="w-[120px] rounded-full" />
                      </div>
                      <div className="w-[80%] md:w-auto">
                        <h2 className="text-[18px] font-medium text-white">{comment.name}</h2>
                        <p className="mt-[10px] text-text">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-[60px]" data-aos="fade-up" data-aos-delay="100">
                  <h2 className="text-[22px] font-semibold text-white">Kirim Komentar</h2>
                  <p className="mt-[2px] text-text">
                    Alamat email tidak akan dipublikasikan. Kolom yang wajib diisi telah ditandai *
                  </p>
                  <div className="mt-[20px]">
                    <div className="grid w-full gap-[20px] md:flex">
                      <div className="md:w-1/2">
                        <input className="block w-full rounded-lg border bg-transparent px-[15px] py-[10px] text-white focus:outline-none" type="text" placeholder="Nama Lengkap Anda*" aria-label="Nama Lengkap" />
                      </div>
                      <div className="md:w-1/2">
                        <input className="block w-full rounded-lg border bg-transparent px-[15px] py-[10px] text-white focus:outline-none" type="email" placeholder="Email Anda*" aria-label="Email" />
                      </div>
                    </div>
                    <div className="mt-[20px]">
                      <textarea placeholder="Tulis komentar Anda di sini*" cols={30} rows={8} aria-label="Komentar" className="block w-full rounded-lg border bg-transparent px-[15px] py-[10px] text-white focus:outline-none" />
                    </div>
                    <div className="mb-6 mt-[20px] flex items-start">
                      <input id="remember" type="checkbox" className="h-4 w-4 rounded bg-btn" />
                      <label htmlFor="remember" className="ml-3 text-sm font-medium text-text">
                        Simpan nama, email, dan situs web saya di peramban ini untuk komentar berikutnya.
                      </label>
                    </div>
                    <div className="mb-[30px]">
                      <button className="btn">Kirim</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[80px]">
                <h2 className="text-[28px] font-semibold" data-aos="fade-up" data-aos-delay="50">
                  Artikel <span className="text-theme">Terkait:</span>
                </h2>
                <div className="mt-[30px] grid gap-y-[30px] md:grid-cols-12 md:gap-x-[30px]">
                  {relatedPosts.map((post, i) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      aosDelay={String(100 + i * 50)}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
