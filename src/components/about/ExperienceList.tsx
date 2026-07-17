import type { Experience } from "@/types";

interface ExperienceListProps {
  experiences: Experience[];
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="mt-[60px]">
      <h2 className="text-[32px] font-semibold" data-aos="fade-up" data-aos-delay="300">
        Pengalaman <span className="text-theme">Mengajar:</span>
      </h2>
      <div className="items mt-[40px] grid gap-[40px]">
        <div className="item relative grid gap-[40px] border-l-[2px] border-text pb-[16px] pl-[35px]">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="absolute left-[-16px] top-[-25px] text-[30px] text-text" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z" />
          </svg>
          {experiences.map((exp) => (
            <div key={exp.role}>
              <p className="text-text" data-aos="fade-up" data-aos-delay="50">{exp.period}</p>
              <h3 className="mt-[10px] text-[20px] font-medium text-white md:text-[25px]" data-aos="fade-up" data-aos-delay="100">
                {exp.role}
              </h3>
              <p className="mt-[5px] text-[18px] font-medium text-text" data-aos="fade-up" data-aos-delay="150">
                {exp.place}
              </p>
              <p className="mt-[15px] text-text" data-aos="fade-up" data-aos-delay="200">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
