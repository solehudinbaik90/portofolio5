const stats = [
  { value: "10", label: "TAHUN BERPENGALAMAN\nMENGAJAR" },
  { value: "200", label: "PROYEK SELESAI\nDI TAHUN INI" },
  { value: "780", label: "ANGGOTA TIM\nDI 10 NEGARA" },
];

export default function Stats() {
  return (
    <div className="mt-[60px] grid grid-cols-12 gap-[30px] md:gap-2">
      {stats.map(({ value, label }) => (
        <div
          key={label}
          className="col-span-12 md:col-span-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-[50px] font-semibold">
            <span className="counter">{value}</span>+
          </h2>
          <p className="whitespace-pre-line text-white">{label}</p>
        </div>
      ))}
    </div>
  );
}
