// Utility ringan — tambahkan helper lain di sini sesuai kebutuhan

/**
 * Menggabungkan class names secara kondisional
 * (alternatif ringan dari clsx jika tidak ingin install library)
 */
export const cn = (...classes: (string | undefined | false | null)[]): string =>
  classes.filter(Boolean).join(" ");
