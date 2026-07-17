interface SectionBadgeProps {
  label: string;
  icon: React.ReactNode;
}

export default function SectionBadge({ label, icon }: SectionBadgeProps) {
  return (
    <div className="menuBox" data-aos="fade-up" data-aos-delay="50">
      <div className="inline-block rounded-full border border-text px-[20px] py-[5px]">
        <div className="flex items-center gap-[6px]">
          <span aria-hidden="true">{icon}</span>
          <span className="pl-[6px] text-[14px] text-white">{label}</span>
        </div>
      </div>
    </div>
  );
}
