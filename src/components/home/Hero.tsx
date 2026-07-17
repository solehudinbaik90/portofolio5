import Link from "next/link";
import Stats from "./Stats";
import Cards from "./Cards";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="order-2 col-span-12 mt-[40px] py-[40px] md:mt-0 md:pr-[60px] lg:order-1 lg:col-span-8">
      <p className="text-[22px]" data-aos="fade-up" data-aos-delay="50">
        <span className="text-theme">Hi!</span> Saya di sini
      </p>

      <h2
        className="relative mt-[20px] inline-block text-[32px] font-semibold leading-tight md:text-[62px]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Saya MSoleh!
        <span className="absolute bottom-[15px] right-[-100px]">
          <Image
            src="/assets/images/icon/icon-1.png"
            alt="dekorasi"
            className="wobble-hor-bottom"
          />
        </span>
      </h2>

      <h2
        className="text-[52px] font-semibold leading-tight md:text-[62px]"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        PENGAJAR <span className="text-theme">FISIKA!</span>
      </h2>

      <br />

      <p className="text-text" data-aos="fade-up" data-aos-delay="200">
        Seorang sarjana pendidikan Ilmu Pengetahuan Alam (IPA) Jurusan Fisika.
        Memiliki pengalaman mengajar selama sepuluh tahun — sembilan tahun di
        MTs dan SMK, satu tahun di SMA dan bimbel. Walaupun usia saya sudah
        tidak muda lagi, saya tetap bersemangat untuk bisa mengajar lagi dan
        berkembang menjadi profesional.
      </p>

      <div className="mt-[50px]" data-aos="fade-up" data-aos-delay="250">
        <a
          href="https://wa.me/62887433130861"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Rekrut Saya!
        </a>
      </div>

      <Stats />
      <Cards />
    </div>
  );
}
