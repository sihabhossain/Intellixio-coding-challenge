import Link from "next/link";

export const createStyledLink = (href: string, text: string) => (
  <Link
    href={href}
    className="text-blue-500 hover:text-blue-700 py-2 m-2 inline-block"
  >
    {text}
  </Link>
);
