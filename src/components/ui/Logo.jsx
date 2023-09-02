import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-5 items-center">
      <Link
        href="/"
        className="font-medium text-lg flex items-center gap-3 pr-5 md:border-r border-zinc-900"
      >
        <Image src="/logo.png" width={30} height={30} alt="Logo" />
        <span>SupaBlog</span>
      </Link>
    </div>
  );
}
