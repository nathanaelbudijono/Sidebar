"use client";

import { navItemProps } from "@/types/modules";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdFolderShared } from "react-icons/md";
import { PiPackageFill } from "react-icons/pi";
import { RiHome4Line } from "react-icons/ri";

const Sidebar = () => {
  const path = usePathname();
  return (
    <main className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            Title
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary ${
                  path === item.href ? "bg-muted text-primary shadow-sm" : ""
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;

const navItems: navItemProps[] = [
  {
    href: "/",
    icon: <RiHome4Line className="h-4 w-4" />,
    label: "Dashboard",
  },
  {
    href: "/drive",
    icon: <PiPackageFill className="h-4 w-4" />,
    label: "My Drive",
  },
  {
    href: "/shared",
    icon: <MdFolderShared className="h-4 w-4" />,
    label: "Shared with Me",
  },
];
