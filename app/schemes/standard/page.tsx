import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - GOVERNMENT SCHEMES HUB" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Mobile Nav Header */}

{/* Desktop Sidebar */}
<aside className="hidden md:flex flex-col fixed inset-y-0 left-0 w-[240px] bg-primary text-on-primary z-50">
<div className="h-14 flex items-center px-margin-desktop border-b border-outline-variant">
<h1 className="font-headline-md text-headline-md font-bold text-on-primary">GOVERNMENT PORTAL</h1>
</div>
<nav className="flex-1 py-stack-md flex flex-col gap-2 px-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary-fixed-variant transition-colors duration-200 text-on-primary-fixed-variant" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-md text-label-md">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-primary-container text-on-primary-container rounded-md relative" href="#">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary rounded-l-md"></div>
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-md text-label-md">Services</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary-fixed-variant transition-colors duration-200 text-on-primary-fixed-variant" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</nav>
</aside>
{/* Main Content Canvas */}
<main className="w-full max-w-4xl mx-auto md:px-margin-desktop">
{/* Desktop Header & Status Rail */}
<div className="hidden md:block pt-stack-lg">
<div className="flex items-center gap-4 mb-stack-sm">
<button className="text-primary hover:bg-surface-variant p-1 rounded-sm transition-colors duration-200">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Government Schemes</h1>
</div>
</div>
{/* Status Rail (Mobile & Desktop) */}
<div className="w-full bg-surface border-b border-border h-rail-height flex items-center px-margin-mobile md:px-4 md:rounded-t-lg md:border-t md:border-x md:mt-stack-sm">
<span className="font-data-sm text-data-sm text-text-muted uppercase">AADHAAR LINKED · WARD 4 · 6 SCHEMES MATCHED</span>
</div>
{/* Search & Filter Section */}
<section className="bg-surface p-margin-mobile md:p-6 border-b border-border md:border-x md:rounded-b-lg shadow-[0_1px_2px_rgba(17,24,39,0.06)] mb-stack-lg">
<div className="relative w-full mb-stack-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-[6px] text-[14px] text-on-surface placeholder:text-text-muted focus:ring-0 focus:border-primary-container focus:border-2 font-body-md transition-all" placeholder="Search schemes" type="text"/>
</div>
{/* Filter Chips */}
<div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
<button className="px-4 py-1.5 rounded-[6px] bg-primary-container text-surface font-label-md text-[13px] whitespace-nowrap transition-colors border border-primary-container">All</button>
<button className="px-4 py-1.5 rounded-[6px] bg-surface text-on-surface-variant font-body-md text-[13px] whitespace-nowrap border border-border hover:bg-surface-container-low transition-colors">Agriculture</button>
<button className="px-4 py-1.5 rounded-[6px] bg-surface text-on-surface-variant font-body-md text-[13px] whitespace-nowrap border border-border hover:bg-surface-container-low transition-colors">Education</button>
<button className="px-4 py-1.5 rounded-[6px] bg-surface text-on-surface-variant font-body-md text-[13px] whitespace-nowrap border border-border hover:bg-surface-container-low transition-colors">Health</button>
<button className="px-4 py-1.5 rounded-[6px] bg-surface text-on-surface-variant font-body-md text-[13px] whitespace-nowrap border border-border hover:bg-surface-container-low transition-colors">Housing</button>
<button className="px-4 py-1.5 rounded-[6px] bg-surface text-on-surface-variant font-body-md text-[13px] whitespace-nowrap border border-border hover:bg-surface-container-low transition-colors">Pension</button>
<button className="px-4 py-1.5 rounded-[6px] bg-surface text-on-surface-variant font-body-md text-[13px] whitespace-nowrap border border-border hover:bg-surface-container-low transition-colors">Women &amp; Child</button>
</div>
</section>
{/* Scheme List */}
<section className="flex flex-col gap-stack-md px-margin-mobile md:px-0">
{/* Scheme Card 1 */}
<article className="bg-surface border border-border rounded-xl shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 md:p-6 flex flex-col hover:border-primary-container transition-colors cursor-pointer group">
<div className="mb-2">
<span className="font-body-md text-[12px] uppercase text-text-muted tracking-wider font-semibold">AGRICULTURE</span>
</div>
<h3 className="font-headline-md text-[16px] font-semibold text-on-surface mb-2">PM Kisan Samman Nidhi</h3>
<p className="font-body-md text-[14px] text-on-surface-variant mb-4 leading-relaxed line-clamp-2">Direct income support of ₹6,000 per year provided to all landholding farmer families across the country in three equal installments.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
<div className="flex flex-col">
<span className="font-data-md text-[14px] font-semibold text-primary-container">Benefit: ₹6,000/year</span>
</div>
<div className="flex items-center text-primary-container group-hover:text-secondary transition-colors font-label-md text-label-md">
<span>View Details &amp; Apply</span>
<span className="material-symbols-outlined ml-1 text-sm">chevron_right</span>
</div>
</div>
</article>
{/* Scheme Card 2 */}
<article className="bg-surface border border-border rounded-xl shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 md:p-6 flex flex-col hover:border-primary-container transition-colors cursor-pointer group">
<div className="mb-2 flex items-center justify-between">
<span className="font-body-md text-[12px] uppercase text-text-muted tracking-wider font-semibold">PENSION</span>
<span className="bg-success/10 text-success font-label-sm text-[10px] px-2 py-0.5 rounded-[4px] uppercase tracking-wider">Eligible</span>
</div>
<h3 className="font-headline-md text-[16px] font-semibold text-on-surface mb-2">Indira Gandhi National Old Age Pension</h3>
<p className="font-body-md text-[14px] text-on-surface-variant mb-4 leading-relaxed line-clamp-2">Financial assistance provided to senior citizens (60 years and above) belonging to BPL households.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
<div className="flex flex-col">
<span className="font-data-md text-[14px] font-semibold text-primary-container">Benefit: ₹1,000/month</span>
</div>
<div className="flex items-center text-primary-container group-hover:text-secondary transition-colors font-label-md text-label-md">
<span>View Details &amp; Apply</span>
<span className="material-symbols-outlined ml-1 text-sm">chevron_right</span>
</div>
</div>
</article>
{/* Scheme Card 3 */}
<article className="bg-surface border border-border rounded-xl shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 md:p-6 flex flex-col hover:border-primary-container transition-colors cursor-pointer group">
<div className="mb-2">
<span className="font-body-md text-[12px] uppercase text-text-muted tracking-wider font-semibold">HOUSING</span>
</div>
<h3 className="font-headline-md text-[16px] font-semibold text-on-surface mb-2">Pradhan Mantri Awas Yojana (Urban)</h3>
<p className="font-body-md text-[14px] text-on-surface-variant mb-4 leading-relaxed line-clamp-2">Ensuring 'Housing for All' in urban areas by providing central assistance to implementing agencies for housing construction.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
<div className="flex flex-col">
<span className="font-data-md text-[14px] font-semibold text-primary-container">Benefit: Subsidy up to ₹2.67 Lakhs</span>
</div>
<div className="flex items-center text-primary-container group-hover:text-secondary transition-colors font-label-md text-label-md">
<span>View Details &amp; Apply</span>
<span className="material-symbols-outlined ml-1 text-sm">chevron_right</span>
</div>
</div>
</article>
{/* Scheme Card 4 */}
<article className="bg-surface border border-border rounded-xl shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 md:p-6 flex flex-col hover:border-primary-container transition-colors cursor-pointer group mb-8 md:mb-0">
<div className="mb-2 flex items-center justify-between">
<span className="font-body-md text-[12px] uppercase text-text-muted tracking-wider font-semibold">HEALTH</span>
<span className="bg-warning/10 text-warning font-label-sm text-[10px] px-2 py-0.5 rounded-[4px] uppercase tracking-wider">Action Required</span>
</div>
<h3 className="font-headline-md text-[16px] font-semibold text-on-surface mb-2">Ayushman Bharat - PMJAY</h3>
<p className="font-body-md text-[14px] text-on-surface-variant mb-4 leading-relaxed line-clamp-2">Provides health cover of ₹5 lakhs per family per year for secondary and tertiary care hospitalization across public and private empaneled hospitals.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
<div className="flex flex-col">
<span className="font-data-md text-[14px] font-semibold text-primary-container">Benefit: ₹5 Lakhs/year</span>
</div>
<div className="flex items-center text-primary-container group-hover:text-secondary transition-colors font-label-md text-label-md">
<span>View Details &amp; Apply</span>
<span className="material-symbols-outlined ml-1 text-sm">chevron_right</span>
</div>
</div>
</article>
</section>
</main>
{/* Mobile Bottom Navigation */}
      </div>
    </AppLayout>
  );
}
