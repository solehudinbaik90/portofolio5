import Image from "next/image";

export default function ProfileImage() {
    return (
        <div className="order-1 col-span-12 lg:order-2 lg:col-span-4">
            <div className="relative mt-[50px]">
                <div data-aos="fade-up" data-aos-delay="200">
                    <Image
                        src="/assets/images/profile/user-1.png"
                        alt="Foto Profil Muhamad Soleh"
                        width={480}
                        height={600}
                        className="w-full"
                        priority
                        />
                    <Image
                        src="/assets/images/icon/figma.png"
                        alt="Figma"
                        width={80}
                        height={80}
                        className="slide-top-1 absolute left-[-10px] top-[90px] w-[60px] md:top-[170px] md:w-[80px] lg:top-[120px]"
                        />
                    <Image
                        src="/assets/images/icon/photoshop-logo.png"
                        alt="Photoshop"
                        width={80}
                        height={80}
                        className="slide-top-2 absolute right-[-10px] top-[260px] w-[60px] md:top-[450px] md:w-[80px] lg:top-[250px]"
                        />
                </div>

                <div
                    className="pulse bg-card absolute bottom-[-50px] right-[40px] flex items-center gap-[20px] rounded-full px-[40px] py-[18px] md:bottom-[-17px] lg:right-[-34px]"
                    data-aos="fade-up"
                    data-aos-delay="350"
                    >
                    <svg
                        viewBox="0 0 512 512"
                        className="text-theme h-[40px] w-[40px]"
                        style={ { fill: "currentColor" }}
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        >
>
                        <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z" />
                    </svg>
                    <div>
                        <div>
                            <h2 className="text-[26px] font-semibold">100.000K+</h2>
                            <p className="text-base text-white">
                                Pelanggan Setia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            );
            }
