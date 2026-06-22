"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarDrawer() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: "home" },
    { name: "Services", href: "/services", icon: "apps" },
    { name: "Ward Budget", href: "/ward/budget", icon: "account_balance" },
    { name: "Emergency SOS", href: "/emergency", icon: "emergency" },
    { name: "Family Registry", href: "/family/search", icon: "family_restroom" },
  ];

  return (
    <aside className="hidden md:flex flex-col h-full w-[240px] bg-surface dark:bg-on-surface border-r border-border dark:border-outline shrink-0 z-40">
      <div className="p-stack-lg border-b border-border dark:border-outline">
        <div className="flex items-center gap-stack-sm mb-2">
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-border overflow-hidden">
            <img className="w-full h-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdbKXmautqLHvP3Tuc1wHkhMPTam6VFYvq48jhkdy_srwNEN9YfL9Ti7sHM9D2l8czH06NNhkX1GdUwKGZJB3zlkbIwg4739PcQMcQFANpt5FluJn3on4hHns5_fCAI_3Sn_YODONZ3SFruhJizTDCuF82ZROrDNxCq5S4tTTqJ0c4gyFG3HKErXLMtVrPxZwa8sSNYpPnz_PkqOTQPShT9PTeXU75eiG6aljbRkVq6I_amJfIhNFAImLJ6b1UCf9GfXctKfoi1QIB" />
          </div>
          <div>
            <div className="font-label-md text-label-md text-on-surface">Ramesh Kumar</div>
            <div className="font-data-sm text-data-sm text-text-muted">ID: 4829-1029-4821</div>
          </div>
        </div>
        <div className="font-data-sm text-data-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded inline-block mt-2">Village: Bilaspur</div>
      </div>
      <nav className="flex-1 py-stack-lg flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`pl-4 py-3 flex items-center gap-3 transition-colors ${
                isActive 
                  ? "text-primary bg-primary-container/10 font-bold" 
                  : "text-on-surface-variant hover:bg-surface-container-low"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                {item.icon}
              </span>
              <span className="font-label-md text-label-md">{item.name}</span>
            </Link>
          );
        })}
        <div className="mt-auto border-t border-border pt-4">
          <Link href="/profile" className={`pl-4 py-3 flex items-center gap-3 transition-colors ${
            pathname === "/profile" ? "text-primary bg-primary-container/10 font-bold" : "text-on-surface-variant hover:bg-surface-container-low"
          }`}>
            <span className="material-symbols-outlined text-[20px]" style={pathname === "/profile" ? { fontVariationSettings: "'FILL' 1" } : {}}>settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
