"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All", "Agriculture", "Education", "Health", "Housing", "Pension", "Women & Child"
  ];

  return (
    <AppLayout title="GOVERNMENT SCHEMES HUB" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Status Rail */}
        <div className="h-rail-height bg-surface border-b border-border flex items-center px-margin-mobile">
          <span className="font-data-sm text-data-sm uppercase text-text-muted">AADHAAR LINKED · WARD 4 · 6 SCHEMES MATCHED</span>
        </div>
        <main className="px-margin-mobile py-stack-md flex flex-col gap-stack-lg max-w-2xl mx-auto">
          {/* Search & Filter */}
          <section className="flex flex-col gap-stack-sm">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
              <input className="w-full h-10 pl-10 pr-3 rounded-[6px] border border-border bg-surface text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container font-body-md text-body-md placeholder-text-muted" placeholder="Search schemes" type="text" />
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-2 py-1">
              {tabs.map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-3 py-1.5 rounded-[6px] font-label-sm text-label-sm border ${
                    activeTab === tab 
                      ? "bg-primary-container text-on-primary border-primary-container" 
                      : "bg-surface text-on-surface-variant border-border hover:bg-surface-container-low transition-colors"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </section>
{/* ELIGIBLE FOR YOU Section */}
<section className="flex flex-col gap-stack-sm">
<h2 className="font-label-sm text-label-sm uppercase text-text-muted tracking-wider">ELIGIBLE FOR YOU</h2>
<div className="flex flex-col gap-stack-md">
{/* Scheme Card 1 (Expanded) */}
<article className="bg-surface border border-border rounded-[6px] shadow-elevation-1 p-4 flex flex-col gap-3">
<div className="flex justify-between items-start gap-2">
<h3 className="font-label-md text-label-md text-on-surface">PM Kisan Samman Nidhi</h3>
<span className="shrink-0 px-2 py-0.5 rounded-[4px] bg-success/10 text-success font-data-sm text-data-sm uppercase tracking-wider border border-success/20 flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1", }}>check_circle</span>
                            MATCHED
                        </span>
</div>
<p className="font-body-md text-body-md text-text-muted text-sm leading-tight">Direct income support for landholding farmers</p>
<div className="flex justify-between items-end mt-1 border-t border-border pt-3">
<span className="font-data-md text-data-md text-on-surface font-semibold">₹6,000/YEAR</span>
<a className="font-label-sm text-label-sm text-primary-container flex items-center gap-1 hover:underline" href="#">View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
{/* Expanded Logic */}
<div className="mt-2 bg-background border border-border rounded-[4px] p-3">
<button className="flex items-center gap-1 text-primary-container font-label-sm text-[13px] w-full text-left">
<span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                            Why am I eligible?
                        </button>
<ul className="mt-2 flex flex-col gap-2">
<li className="flex items-start gap-2 text-text-muted font-body-md text-[13px] leading-snug">
<span className="material-symbols-outlined text-success text-[16px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1", }}>check</span>
                                Land ownership on record: 2.1 acres, Ward 4
                            </li>
<li className="flex items-start gap-2 text-text-muted font-body-md text-[13px] leading-snug">
<span className="material-symbols-outlined text-success text-[16px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1", }}>check</span>
                                Annual income bracket matches scheme criteria
                            </li>
</ul>
</div>
</article>
{/* Scheme Card 2 */}
<article className="bg-surface border border-border rounded-[6px] shadow-elevation-1 p-4 flex flex-col gap-3">
<div className="flex justify-between items-start gap-2">
<h3 className="font-label-md text-label-md text-on-surface">Pradhan Mantri Awas Yojana</h3>
<span className="shrink-0 px-2 py-0.5 rounded-[4px] bg-success/10 text-success font-data-sm text-data-sm uppercase tracking-wider border border-success/20 flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1", }}>check_circle</span>
                            MATCHED
                        </span>
</div>
<div className="flex justify-between items-end mt-1">
<span className="font-data-md text-data-md text-on-surface font-semibold">₹1,20,000</span>
<a className="font-label-sm text-label-sm text-primary-container flex items-center gap-1 hover:underline" href="#">View <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
</article>
{/* Scheme Card 3 */}
<article className="bg-surface border border-border rounded-[6px] shadow-elevation-1 p-4 flex flex-col gap-3">
<div className="flex justify-between items-start gap-2">
<h3 className="font-label-md text-label-md text-on-surface">National Social Assistance Programme</h3>
<span className="shrink-0 px-2 py-0.5 rounded-[4px] bg-success/10 text-success font-data-sm text-data-sm uppercase tracking-wider border border-success/20 flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1", }}>check_circle</span>
                            MATCHED
                        </span>
</div>
<div className="flex justify-between items-end mt-1">
<span className="font-data-md text-data-md text-on-surface font-semibold">₹1,000/MONTH</span>
<a className="font-label-sm text-label-sm text-primary-container flex items-center gap-1 hover:underline" href="#">View <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
</article>
</div>
</section>
{/* Divider */}
<hr className="border-border" />
{/* ALL SCHEMES Section */}
<section className="flex flex-col gap-0 pb-6">
<h2 className="font-label-sm text-label-sm uppercase text-text-muted tracking-wider mb-2">ALL SCHEMES</h2>
<ul className="flex flex-col">
<li className="border-b border-border">
<a className="flex justify-between items-center py-3 group" href="#">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">Sukanya Samriddhi Yojana</span>
<span className="font-body-md text-[13px] text-text-muted">Women &amp; Child</span>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors">chevron_right</span>
</a>
</li>
<li className="border-b border-border">
<a className="flex justify-between items-center py-3 group" href="#">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">Ayushman Bharat</span>
<span className="font-body-md text-[13px] text-text-muted">Health</span>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors">chevron_right</span>
</a>
</li>
<li className="border-b border-border">
<a className="flex justify-between items-center py-3 group" href="#">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">Post Matric Scholarship</span>
<span className="font-body-md text-[13px] text-text-muted">Education</span>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors">chevron_right</span>
</a>
</li>
<li className="border-b border-border">
<a className="flex justify-between items-center py-3 group" href="#">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">Atal Pension Yojana</span>
<span className="font-body-md text-[13px] text-text-muted">Pension</span>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors">chevron_right</span>
</a>
</li>
<li className="border-b border-border">
<a className="flex justify-between items-center py-3 group" href="#">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">MGNREGA</span>
<span className="font-body-md text-[13px] text-text-muted">Employment</span>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors">chevron_right</span>
</a>
</li>
</ul>
</section>
</main>
{/* BottomNavBar */}
      </div>
    </AppLayout>
  );
}
