import Link from "next/link";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 10,
}: PaginationProps) {
  return (
    <div className="mt-[60px]" data-aos="fade-up" data-aos-delay="100">
      <ul className="flex justify-center space-x-4">

        <li className="group">
          <Link
            href="#"
            className="pagination"
            aria-label="Halaman sebelumnya"
          >
            <svg
              className="fill-white group-hover:fill-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" />
            </svg>
          </Link>
        </li>

        <li className="group">
          <Link href="/blog-details" className="pagination">
            1
          </Link>
        </li>

        <li className="group">
          <Link href="#" className="pagination">
            2
          </Link>
        </li>

        <li className="group">
          <Link href="#" className="pagination">
            ...
          </Link>
        </li>

        <li className="group">
          <Link href="#" className="pagination">
            {totalPages}
          </Link>
        </li>

        <li className="group">
          <Link
            href="#"
            className="pagination"
            aria-label="Halaman berikutnya"
          >
            <svg
              className="fill-white group-hover:fill-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}
