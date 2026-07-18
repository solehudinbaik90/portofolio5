import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import PostCard from "@/components/blog/PostCard";
import Pagination from "@/components/blog/Pagination";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh.",
};

const postDelays = ["100", "150", "200", "100", "150", "200"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#252525]">
      <div className="bg-img" aria-hidden="true" />
      <div className="relative z-10">
        <Header />
        <main>
        <section className="py-[30px] md:py-[80px]">
          <div className="container mx-auto">

            <SectionBadge
              label="Artikel"
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

            <div className="mt-[30px] md:mt-[40px]">
              <h2
                className="text-[32px] font-semibold uppercase leading-tight text-white md:text-[52px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Jangan Kompromi Untuk <br className="hidden md:block" />
                Kualitas <span className="text-theme">Konten!</span>
              </h2>
              <p className="mt-[20px] text-text lg:w-[60%]" data-aos="fade-up" data-aos-delay="150">
                Temukan artikel terbaru seputar pendidikan, teknologi, dan pengembangan diri
                dari Muhamad Soleh.
              </p>
            </div>

            <div className="mt-[60px] md:mt-[80px]">
              <div className="grid gap-y-[30px] md:grid-cols-12 md:gap-x-[30px]">
                {posts.map((post, i) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    aosDelay={postDelays[i] ?? "100"}
                  />
                ))}
              </div>

              <Pagination currentPage={1} totalPages={10} />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  </div>
  );
}
