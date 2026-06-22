"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: "home" },
    { name: "Services", href: "/services", icon: "apps" },
    { name: "Ward Budget", href: "/ward/budget", icon: "account_balance" },
    { name: "Emergency", href: "/emergency", icon: "emergency" },
  ];

  return (
    <nav className="absolute bottom-0 left-0 right-0 z-50 bg-surface dark:bg-on-surface border-t border-border shadow-[0_-1px_2px_rgba(17,24,39,0.06)] flex justify-around items-center h-16 px-gutter">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center rounded-xl px-2 py-1 active:scale-90 transition-transform w-20 ${
              isActive
                ? "text-primary dark:text-secondary-container bg-primary-container/10 dark:bg-primary-container border-t-2 border-[#FFA500]"
                : "text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
              {item.icon}
            </span>
            <span className={`font-label-sm text-label-sm mt-1 uppercase ${isActive ? "font-bold" : ""}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
