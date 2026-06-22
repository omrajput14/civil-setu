import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="MEETING MINUTES ARCHIVE | CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

<main className="pb-20">
{/* Search & Context Header */}
<section className="bg-surface px-gutter pt-lg pb-md">
<h2 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-4">Meeting Minutes</h2>
<p className="text-on-surface-variant font-body-md text-body-md mb-6">Archive of all official Gram Sabha and Committee proceedings.</p>
{/* Search Bar */}
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none font-body-md text-on-surface transition-all" placeholder="Search by topic, date, or village..." type="text"/>
</div>
</section>
{/* Category Filters */}
<section className="mt-4 px-gutter">
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
<button className="bg-primary-container text-white px-md py-2 rounded-xl text-label-md font-label-md whitespace-nowrap active:scale-95 transition-transform">All Meetings</button>
<button className="bg-white border border-outline-variant text-on-surface-variant px-md py-2 rounded-xl text-label-md font-label-md whitespace-nowrap hover:bg-surface-container-low transition-colors active:scale-95">Infrastructure</button>
<button className="bg-white border border-outline-variant text-on-surface-variant px-md py-2 rounded-xl text-label-md font-label-md whitespace-nowrap hover:bg-surface-container-low transition-colors active:scale-95">Social Welfare</button>
<button className="bg-white border border-outline-variant text-on-surface-variant px-md py-2 rounded-xl text-label-md font-label-md whitespace-nowrap hover:bg-surface-container-low transition-colors active:scale-95">Health</button>
<button className="bg-white border border-outline-variant text-on-surface-variant px-md py-2 rounded-xl text-label-md font-label-md whitespace-nowrap hover:bg-surface-container-low transition-colors active:scale-95">Agriculture</button>
</div>
</section>
{/* Meeting Records List */}
<section className="px-gutter mt-lg space-y-4">
{/* Meeting Card 1 */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden active:bg-surface-container-low transition-colors">
<div className="p-md">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-sm text-headline-sm text-primary flex-1 pr-4">Quarterly Gram Sabha - Q3 2023</h3>
<button className="text-on-surface-variant hover:text-secondary active:scale-90 transition-all">
<span className="material-symbols-outlined">download</span>
</button>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-md text-label-sm mb-4">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Oct 15, 2023</span>
<span className="mx-1">•</span>
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span>Panchayat Bhawan</span>
</div>
{/* Tags */}
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-surface-container text-primary-container px-2 py-1 rounded text-label-sm font-label-md">Water Supply</span>
<span className="bg-surface-container text-primary-container px-2 py-1 rounded text-label-sm font-label-md">Road Repair</span>
</div>
<div className="flex items-center justify-between border-t border-outline-variant pt-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">group</span>
<span className="text-label-sm font-label-md">142 Members Attended</span>
</div>
<button className="bg-primary-container text-white px-md py-2 rounded-xl text-label-sm font-label-md hover:opacity-90 active:scale-95 transition-all">
                            View Minutes
                        </button>
</div>
</div>
</div>
{/* Meeting Card 2 */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden active:bg-surface-container-low transition-colors">
<div className="p-md">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-sm text-headline-sm text-primary flex-1 pr-4">Social Welfare Distribution Meet</h3>
<button className="text-on-surface-variant hover:text-secondary active:scale-90 transition-all">
<span className="material-symbols-outlined">download</span>
</button>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-md text-label-sm mb-4">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Sept 28, 2023</span>
<span className="mx-1">•</span>
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span>Community Center</span>
</div>
{/* Tags */}
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-surface-container text-primary-container px-2 py-1 rounded text-label-sm font-label-md">Pensions</span>
<span className="bg-surface-container text-primary-container px-2 py-1 rounded text-label-sm font-label-md">Health Kits</span>
</div>
<div className="flex items-center justify-between border-t border-outline-variant pt-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">group</span>
<span className="text-label-sm font-label-md">86 Members Attended</span>
</div>
<button className="bg-primary-container text-white px-md py-2 rounded-xl text-label-sm font-label-md hover:opacity-90 active:scale-95 transition-all">
                            View Minutes
                        </button>
</div>
</div>
</div>
{/* Meeting Card 3 */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden active:bg-surface-container-low transition-colors">
<div className="p-md">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-sm text-headline-sm text-primary flex-1 pr-4">Annual Budget Planning 2024</h3>
<button className="text-on-surface-variant hover:text-secondary active:scale-90 transition-all">
<span className="material-symbols-outlined">download</span>
</button>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-md text-label-sm mb-4">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Aug 12, 2023</span>
<span className="mx-1">•</span>
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span>Panchayat Hall</span>
</div>
{/* Tags */}
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-surface-container text-primary-container px-2 py-1 rounded text-label-sm font-label-md">Finance</span>
<span className="bg-surface-container text-primary-container px-2 py-1 rounded text-label-sm font-label-md">Planning</span>
</div>
<div className="flex items-center justify-between border-t border-outline-variant pt-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">group</span>
<span className="text-label-sm font-label-md">210 Members Attended</span>
</div>
<button className="bg-primary-container text-white px-md py-2 rounded-xl text-label-sm font-label-md hover:opacity-90 active:scale-95 transition-all">
                            View Minutes
                        </button>
</div>
</div>
</div>
</section>
{/* Empty State Illustration Placeholder (Invisible if content exists) */}
<div className="hidden flex-col items-center justify-center pt-20 px-gutter text-center" id="no-results">
<span className="material-symbols-outlined text-6xl text-outline-variant mb-4">search_off</span>
<p className="font-headline-sm text-on-surface-variant">No meetings found</p>
<p className="text-body-md text-outline">Try adjusting your search or filters.</p>
</div>
</main>
{/* BottomNavBar */}
<nav className="sticky bottom-0 w-full z-50 border-t border-outline-variant bg-surface dark:bg-surface-dim">
<div className="flex justify-around items-center h-16 px-xs">
{/* Home */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-[10px] sm:text-label-sm-mobile">Home</span>
</a>
{/* Services */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-[10px] sm:text-label-sm-mobile">Services</span>
</a>
{/* Requests (Active Tab) */}
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-3 py-1 active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", }}>description</span>
<span className="font-label-sm text-[10px] sm:text-label-sm-mobile">Requests</span>
</a>
{/* Profile */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-[10px] sm:text-label-sm-mobile">Profile</span>
</a>
</div>
</nav>
{/* Micro-interactions Script */}
      </div>
    </AppLayout>
  );
}
