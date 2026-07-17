import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types";

interface PostCardProps {
  post: Post;
  aosDelay?: string;
}

export default function PostCard({ post, aosDelay = "100" }: PostCardProps) {
  return (
    <div
      className="col-span-12 md:col-span-6 lg:col-span-4"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="group rounded-xl bg-card p-[25px]">
        <div className="h-[260px] w-full overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
          />
        </div>
        <div>
          <p className="mt-[20px] inline-block rounded-md bg-theme/10 p-[4px] text-sm text-theme">
            {post.category}
          </p>
          <Link href="/blog-details">
            <h2 className="mt-[12px] text-[20px] font-semibold transition-all duration-300 hover:text-theme md:text-[24px]">
              {post.title}
            </h2>
          </Link>
          <p className="mt-[14px] text-base text-text">{post.excerpt}</p>
          <div className="mt-[20px] flex items-center gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-base text-theme"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" />
              </svg>
              <span className="text-sm text-text">{post.date}</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-base text-theme"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>
              <span className="text-sm text-text">{post.comments} komentar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
