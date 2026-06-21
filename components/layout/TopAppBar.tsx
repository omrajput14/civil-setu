"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TopAppBar({ title = "Rural Connect", showBackButton = false }: { title?: string, showBackButton?: boolean }) {
  const router = useRouter();
  
  return (
    <header className="w-full top-0 sticky bg-surface dark:bg-on-surface border-b border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex items-center justify-between px-margin-mobile h-14 shrink-0 z-30">
      <div className="flex items-center gap-2">
        {showBackButton ? (
          <button 
            onClick={() => router.back()}
            className="material-symbols-outlined text-primary dark:text-primary-fixed hover:bg-surface-container-low transition-colors active:scale-95"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            arrow_back
          </button>
        ) : (
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
        )}
        <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:bg-surface-container-low transition-colors active:scale-95 p-2 rounded-full flex items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <Link href="/profile" className="hover:bg-surface-container-low transition-colors active:scale-95 p-2 rounded-full flex items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">account_circle</span>
        </Link>
      </div>
    </header>
  );
}
