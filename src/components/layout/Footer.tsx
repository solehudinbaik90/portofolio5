import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-[9]">
      <div className="container mx-auto flex justify-center pb-[40px]">
        <div>
          <p className="text-center text-text">
            Copyright{" "}
            <span className="text-theme">MSoleh</span>{" "}
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="mt-[20px] flex justify-center">
            <Image
              src="/assets/images/logo.svg"
              alt="MSoleh - Portofolio"
              width={120}
              height={40}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
