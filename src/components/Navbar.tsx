"use client";

import { Home, Folder, Send } from "lucide-react";
import Link from "next/link";

//membuat komponen Navbar
export default function Navbar() {
  const menu = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  const menuMobile = [
    { name: "Home", href: "/", icon: Home },
    { name: "Project", href: "/project", icon: Folder },
    { name: "Contact", href: "/contact", icon: Send },
  ];

  return (
    <>
      <nav className="hidden md:block">
        <div className="h-15 w-[80%] mx-auto bg-white mt-5 rounded-full">
          <div className="px-5 py-3 justify-between flex items-center">
            {/* logo */}
            <div className="text-2xl font-bold">
              <Link href="/">hanlyf.</Link>
            </div>

            {/* Menu Dekstop*/}
            <div className="space-x-8 text-lg font-medium">
              {menu.map((item) => (
                <Link key={item.name} href={item.href}>
                  {item.name} {/* untuk menampilkan nama menu */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white backdrop-blur-xl border-t border-white/10">
        <div className="flex justify-around py-3">
          {menuMobile.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center text-gray-600 hover:text-black"
            >
              <item.icon />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// hidden → disembunyikan di mobile
// md:block → muncul di tablet & desktop
