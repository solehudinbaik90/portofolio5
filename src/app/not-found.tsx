import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "404 - Halaman Tidak Ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-[80px] font-bold text-theme">404</h1>
      <h2 className="text-[28px] font-semibold text-white">
        Halaman tidak ditemukan
      </h2>
      <p className="text-text">
        Halaman yang kamu cari tidak ada atau telah dipindahkan.
      </p>
      <Link href="/" className="btn">
        Kembali ke Beranda
      </Link>
    </main>
  );
}
