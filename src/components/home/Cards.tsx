import Image from "next/image";

export default function Cards() {
  return (
    <div className="mt-[60px] grid grid-cols-12 gap-[30px]">
      <div className="col-span-12 md:col-span-4" data-aos="fade-up" data-aos-delay="350">
        <div className="border-text grid gap-[30px] rounded-lg border-2 border-dotted p-[20px]">
          <h3 className="text-center text-[24px]">Layanan</h3>
          <div className="flex justify-around p-[10px]">
            <Image src="/assets/images/icon/icon-2.png" alt="Ikon Layanan 1" />
            <Image src="/assets/images/icon/icon-3.png" alt="Ikon Layanan 2" />
            <Image src="/assets/images/icon/icon-4.png" alt="Ikon Layanan 3" />
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4" data-aos="fade-up" data-aos-delay="350">
        <div className="border-text grid gap-[10px] rounded-lg border-2 border-dotted p-[20px]">
          <h3 className="text-center text-[24px]">Proyek</h3>
          <div className="flex justify-around">
            <Image src="/assets/images/show/show-1.png" alt="Tampilan Proyek" />
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4" data-aos="fade-up" data-aos-delay="350">
        <div className="border-text grid gap-[38px] rounded-lg border-2 border-dotted p-[20px]">
          <h3 className="text-center text-[24px]">Profil</h3>
          <div className="flex justify-around p-[10px]">
            <Image src="/assets/images/logo.svg" alt="Logo MSoleh" />
          </div>
        </div>
      </div>
    </div>
  );
}
