"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TopAppBar({ title = "Rural Connect", showBackButton = false }: { title?: string, showBackButton?: boolean }) {
  const router = useRouter();
  
  return (
    <header className="w-full bg-surface dark:bg-on-surface border-b border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex items-center justify-between px-margin-mobile min-h-[56px] py-2 shrink-0 z-30">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {showBackButton ? (
          <button 
            onClick={() => router.back()}
            className="material-symbols-outlined text-primary dark:text-primary-fixed hover:bg-surface-container-low transition-colors active:scale-95 shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            arrow_back
          </button>
        ) : (
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
        )}
        <h1 className="font-label-md text-[15px] font-bold text-primary dark:text-primary-fixed leading-tight truncate">{title}</h1>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <button className="hover:bg-surface-container-low transition-colors active:scale-95 p-1.5 rounded-full flex items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
        </button>
        <Link href="/profile" className="hover:bg-surface-container-low transition-colors active:scale-95 p-1.5 rounded-full flex items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined text-[22px]">account_circle</span>
        </Link>
      </div>
    </header>
  );
}
