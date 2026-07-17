import type { Skill } from "@/types";
import SkillBar from "@/components/ui/SkillBar";

interface SkillListProps {
  skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div className="mt-[60px]">
      <h2 className="text-[32px] font-semibold" data-aos="fade-up" data-aos-delay="50">
        Keahlian <span className="text-theme">Utama:</span>
      </h2>
      <div className="mt-[40px] grid gap-[30px]">
        {skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            aosDelay={String(100 + i * 50)}
          />
        ))}
      </div>
    </div>
  );
}
