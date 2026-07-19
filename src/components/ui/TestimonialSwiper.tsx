"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import type { Testimonial } from "@/types";

interface TestimonialSwiperProps {
  testimonials: Testimonial[];
}

export default function TestimonialSwiper({ testimonials }: TestimonialSwiperProps) {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div ref={swiperRef} className="swiper">
      <div className="swiper-wrapper">
        {testimonials.map((item) => (
          <div key={item.id} className="swiper-slide">
            <div className="divide-y divide-dashed divide-theme rounded-xl bg-card px-[30px] py-[40px] shadow-none">
              <p className="pb-[30px] text-[18px] italic text-text">
                &quot;{item.text}&quot;
              </p>
              <div className="flex items-center gap-4 pt-[30px]">
                <div className="inline-block w-[80px] overflow-hidden rounded-full">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-full object-cover"
                  />
                </div>
                <div className="grid gap-[10px]">
                  <p className="text-base font-semibold text-white lg:text-[24px]">
                    {item.name}
                  </p>
                  <p className="text-text">{item.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination" />
    </div>
  );
}
