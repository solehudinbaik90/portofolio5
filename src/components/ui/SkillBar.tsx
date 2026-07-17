import type { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
  aosDelay?: string;
}

export default function SkillBar({ skill, aosDelay = "100" }: SkillBarProps) {
  return (
    <div>
      <div
        className="mb-2 flex items-center justify-between gap-4"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <p className="text-[16px] font-medium text-white">{skill.name}</p>
        <span className="text-base font-semibold text-white">
          {skill.percent}%
        </span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay={String(Number(aosDelay) + 50)}
        className="flex w-full overflow-hidden rounded-full border border-theme/20 bg-theme/10 p-1 text-xs font-medium h-3.5"
        role="progressbar"
        aria-valuenow={skill.percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Keahlian ${skill.name}: ${skill.percent}%`}
      >
        <div
          className="flex h-full items-center justify-center overflow-hidden rounded-full bg-theme"
          style={{ width: `${skill.percent}%` }}
        />
      </div>
    </div>
  );
}
