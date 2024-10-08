import Link from "next/link";

export function Header() {
  return (
    <nav className="w-full px-5 py-6  border-b">
      <Link href="/">
        <img src="/logo.svg" alt="" />
      </Link>
    </nav>
  );
}
