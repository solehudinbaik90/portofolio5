"use client";

import { useRef, useState } from "react";
import type { FormStatus } from "@/types";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="contact-form"
      data-aos="fade-up"
      data-aos-delay="100"
      noValidate
    >
      <div className="grid gap-[30px] md:flex">
        <input
          className="inputBox"
          type="text"
          name="name"
          placeholder="Nama Anda"
          required
          disabled={isLoading}
          aria-label="Nama Anda"
        />
        <input
          className="inputBox"
          type="email"
          name="email"
          placeholder="Email Anda"
          required
          disabled={isLoading}
          aria-label="Email Anda"
        />
      </div>

      <div className="mt-[30px]">
        <input
          className="inputBox"
          type="url"
          name="website"
          placeholder="Link Website (opsional)"
          disabled={isLoading}
          aria-label="Link Website"
        />
      </div>

      <div className="mt-[30px]">
        <textarea
          name="message"
          placeholder="Pesan Anda"
          required
          rows={10}
          disabled={isLoading}
          className="w-full rounded-lg border bg-transparent p-[15px] text-text focus:outline-none dark:border-btn"
          aria-label="Pesan Anda"
        />
      </div>

      <div className="mt-[30px]">
        <button
          type="submit"
          className="btn disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isLoading}
        >
          {isLoading ? "Mengirim..." : "KIRIM PESAN"}
        </button>

        {status === "success" && (
          <p className="mt-3 text-green-400" role="status">
            ✓ Pesan berhasil terkirim!
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-400" role="alert">
            ✗ Gagal mengirim pesan. Silakan coba lagi.
          </p>
        )}
      </div>
    </form>
  );
}
