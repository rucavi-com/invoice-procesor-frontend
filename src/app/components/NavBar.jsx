"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellIcon } from "@heroicons/react/24/outline";
import Avatar from "./Avatar";

const NavBar = () => {
  const pathname = usePathname();

  const linkStyle = (href) =>
    `transition-all duration-300 ease-in-out ${
      pathname === href
        ? "text-[#fcbf00] font-extrabold text-xl"
        : "text-[#4B5563] text-base"
    }`;

  return (
    <nav className="bg-white flex justify-between px-5 border-b border-gray-300 h-[5vw]">
      <div className="flex items-center gap-5">
        <img src="/bigpons.svg" alt="bigpons" className="h-full pr-5" />
        <Link href="/compare" className={linkStyle("/compare")}>
          Facturas
        </Link>
        <Link href="/config" className={linkStyle("/config")}>
          Configuración
        </Link>
        <Link href="/help" className={linkStyle("/help")}>
          Ayuda
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        <Avatar username="Kendo" avatarUrl={"/avatarImage.jpg"} />
      </div>
    </nav>
  );
};

export default NavBar;
