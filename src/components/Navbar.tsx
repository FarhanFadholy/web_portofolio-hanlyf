"use client";

import { Home, Folder, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

//membuat komponen Navbar
export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "project", "contact"];
      let found = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", href: "#home" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  const menuMobile = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Project", href: "#project", icon: Folder },
    { name: "Contact", href: "#contact", icon: Send },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80, // adjust for navbar height
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pt-0 pb-6 font-consolas">
        <div
          className="flex items-center gap-12 px-10 py-4
               bg-white/10 backdrop-blur-sm
               rounded-b-2xl"
        >
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => handleNavClick(e, item.href)}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                activeSection === item.href.replace('#','')
                  ? "text-white font-bold"
                  : "text-gray-200/70 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-100/90 backdrop-blur-xl border-t border-white/10 z-50">
        <div className="flex justify-around py-3">
          {menuMobile.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => handleNavClick(e, item.href)}
              className={`flex flex-col items-center text-xs ${
                activeSection === item.href.replace('#','')
                  ? "text-black font-bold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

// hidden        = disembunyikan di mobile
// md:block      = muncul di tablet & desktop
// rounded-b-2xl = Membuat rounded bottom-left & bottom-right, sedangkan bagian atas tetap lurus.
// fixed top-0 left-0 right-0 = Membuat navbar berada tepat di paling atas halaman.

{
  /* logo
            <div className="text-2xl font-bold">
              <Link href="/">hanlyf.</Link>
            </div> */
}
