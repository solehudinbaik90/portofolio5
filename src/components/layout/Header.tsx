"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/about" },
  { label: "Proyek", href: "/portfolio" },
  { label: "Layanan", href: "/service" },
  { label: "Artikel", href: "/blog" },
  { label: "Kontak", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/soleh.muhamad",
    label: "Facebook",
    svgPath:
      "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
    viewBox: "0 0 320 512",
  },
  {
    href: "https://twitter.com/msoleh19",
    label: "Twitter",
    svgPath:
      "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
    viewBox: "0 0 512 512",
  },
  {
    href: "https://linkedin.com/msoleh19",
    label: "LinkedIn",
    svgPath:
      "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
    viewBox: "0 0 448 512",
  },
  {
    href: "https://www.instagram.com/msoleh321",
    label: "Instagram",
    svgPath:
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    viewBox: "0 0 448 512",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  return (
    <header className="relative z-[99]">
      <div className="container mx-auto pt-[30px]">
        <div className="flex justify-between rounded-[10px] bg-card px-[15px] py-[30px] md:px-[30px]">

          <div className="logo flex items-center">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="MSoleh - Portofolio"
                width={120}
                height={40}
              />
            </Link>
          </div>

          <nav className="hidden items-center lg:flex" aria-label="Navigasi utama">
            <ul className="flex gap-[40px]">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={pathname === href ? "navActive" : "navNotActive"}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="block lg:hidden">
            <div className="flex items-center gap-4 px-[10px]">
              <button
                onClick={openMenu}
                aria-label="Buka menu navigasi"
                className="rounded-full border border-[#919295] p-[10px] text-[25px] hover:bg-white/10 active:scale-90 transition-all"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div
        className={`sidebar fixed inset-0 z-[999] bg-btn/60 transition-all duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`ml-auto h-full min-h-[750px] w-[300px] bg-card px-[30px] pt-[60px] transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}

          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label="Menu navigasi mobile"
        >

          <div className="relative flex justify-center">
            <button
              onClick={closeMenu}
              aria-label="Tutup menu navigasi"
              className="group absolute left-[-78px] rounded-lg bg-card px-[15px] py-[10px] text-[26px]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                className="text-white transition-all duration-500 group-hover:rotate-90 group-hover:text-theme"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
            <Image
              src="/assets/images/logo.svg"
              alt="MSoleh"
              width={100}
              height={34}
            />
          </div>

          <div className="my-[30px] border-t border-[#ddd]" />

          <nav className="mt-[30px]" aria-label="Navigasi mobile">
            <ul className="grid gap-[14px]">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href} className="text-[18px] font-semibold">
                  <Link
                    href={href}
                    className={pathname === href ? "navActive" : "navNotActive"}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="my-[30px] border-t border-[#ddd]" />

          <div className="contact mt-[40px] pb-[20px] md:mt-[0px]">
            <p className="text-[20px] font-semibold text-white">Ikuti Saya:</p>
            <div className="mt-[20px] flex gap-3">
              {SOCIAL_LINKS.map(({ href, label, svgPath, viewBox }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <button className="boxShadow rounded-lg bg-btn p-[10px] text-[18px] text-text shadow-none transition duration-300 hover:text-theme">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox={viewBox}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d={svgPath} />
                    </svg>
                  </button>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
