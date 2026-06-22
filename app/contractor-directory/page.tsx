import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CONTRACTOR DIRECTORY | CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top App Bar */}

<main className="px-4 py-6">
{/* Search & Context */}
<section className="mb-8">
<div className="mb-2">
<h2 className="font-display-lg-mobile text-display-lg-mobile text-primary">Contractors</h2>
<p className="font-body-md text-on-surface-variant">Find verified partners for rural infrastructure projects.</p>
</div>
{/* Search Bar */}
<div className="mt-4 relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-3 bg-surface border border-outline-variant rounded-xl focus:ring-1 focus:ring-primary-container focus:border-primary outline-none transition-all font-body-md" placeholder="Search by name or category..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<button className="text-primary">
<span className="material-symbols-outlined">tune</span>
</button>
</div>
</div>
</section>
{/* Filter Chips */}
<section className="mb-8 overflow-x-auto hide-scrollbar flex gap-2 -mx-4 px-4">
<button className="flex items-center gap-1.5 px-4 py-2 bg-primary-container text-on-primary-container rounded-full font-label-sm whitespace-nowrap">
<span className="material-symbols-outlined text-[18px]">all_inclusive</span> All
            </button>
<button className="flex items-center gap-1.5 px-4 py-2 bg-surface border border-outline-variant text-on-surface-variant rounded-full font-label-sm whitespace-nowrap hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">foundation</span> Infrastructure
            </button>
<button className="flex items-center gap-1.5 px-4 py-2 bg-surface border border-outline-variant text-on-surface-variant rounded-full font-label-sm whitespace-nowrap hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">water_drop</span> Water
            </button>
<button className="flex items-center gap-1.5 px-4 py-2 bg-surface border border-outline-variant text-on-surface-variant rounded-full font-label-sm whitespace-nowrap hover:border-primary hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">electric_bolt</span> Energy
            </button>
</section>
{/* Contractor Cards List */}
<div className="space-y-4">
{/* Card 1: Bharat Construction Co. */}
<article className="bg-surface border border-outline-variant rounded-xl overflow-hidden active:scale-[0.98] transition-transform">
<div className="p-4">
<div className="flex justify-between items-start mb-3">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-headline-sm text-primary">Bharat Construction Co.</h3>
<span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-[#BBF7D0]">Grade A</span>
</div>
<div className="flex items-center gap-1 text-[#D97706]">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]">star_half</span>
<span className="ml-1 font-label-sm text-on-surface-variant">4.8</span>
</div>
</div>
<div className="bg-surface-container-low p-2 rounded-lg">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1", }}>verified</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-outline-variant">
<div className="flex flex-col">
<span className="text-[10px] uppercase text-outline font-bold">Total Projects</span>
<span className="font-headline-sm text-on-surface">142</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase text-outline font-bold">Current Active</span>
<span className="font-headline-sm text-on-surface flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
                                3 Projects
                            </span>
</div>
</div>
<div className="mt-4 flex gap-3">
<button className="flex-1 py-2.5 bg-primary-container text-white rounded-xl font-label-md hover:opacity-90 active:scale-95 transition-all">
                            View Portfolio
                        </button>
<button className="px-3 py-2.5 border border-outline-variant rounded-xl text-primary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">call</span>
</button>
</div>
</div>
</article>
{/* Card 2: Rural Infra Partners */}
<article className="bg-surface border border-outline-variant rounded-xl overflow-hidden active:scale-[0.98] transition-transform">
<div className="p-4">
<div className="flex justify-between items-start mb-3">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-headline-sm text-primary">Rural Infra Partners</h3>
<span className="bg-[#EFF6FF] text-[#1D4ED8] px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-[#DBEAFE]">Verified</span>
</div>
<div className="flex items-center gap-1 text-[#D97706]">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="ml-1 font-label-sm text-on-surface-variant">4.2</span>
</div>
</div>
<div className="bg-surface-container-low p-2 rounded-lg">
<span className="material-symbols-outlined text-outline">verified_user</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-outline-variant">
<div className="flex flex-col">
<span className="text-[10px] uppercase text-outline font-bold">Total Projects</span>
<span className="font-headline-sm text-on-surface">86</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase text-outline font-bold">Current Active</span>
<span className="font-headline-sm text-on-surface flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                                0 Projects
                            </span>
</div>
</div>
<div className="mt-4 flex gap-3">
<button className="flex-1 py-2.5 bg-primary-container text-white rounded-xl font-label-md hover:opacity-90 active:scale-95 transition-all">
                            View Portfolio
                        </button>
<button className="px-3 py-2.5 border border-outline-variant rounded-xl text-primary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">call</span>
</button>
</div>
</div>
</article>
{/* Card 3: Apex Water Solutions */}
<article className="bg-surface border border-outline-variant rounded-xl overflow-hidden active:scale-[0.98] transition-transform">
<div className="p-4">
<div className="flex justify-between items-start mb-3">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-headline-sm text-primary">Apex Water Solutions</h3>
<span className="bg-[#DCFCE7] text-[#16A34A] px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-[#BBF7D0]">Grade A</span>
</div>
<div className="flex items-center gap-1 text-[#D97706]">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="ml-1 font-label-sm text-on-surface-variant">5.0</span>
</div>
</div>
<div className="bg-surface-container-low p-2 rounded-lg text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", }}>new_releases</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-outline-variant">
<div className="flex flex-col">
<span className="text-[10px] uppercase text-outline font-bold">Total Projects</span>
<span className="font-headline-sm text-on-surface">31</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase text-outline font-bold">Current Active</span>
<span className="font-headline-sm text-on-surface flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
                                1 Project
                            </span>
</div>
</div>
<div className="mt-4 flex gap-3">
<button className="flex-1 py-2.5 bg-primary-container text-white rounded-xl font-label-md hover:opacity-90 active:scale-95 transition-all">
                            View Portfolio
                        </button>
<button className="px-3 py-2.5 border border-outline-variant rounded-xl text-primary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">call</span>
</button>
</div>
</div>
</article>
</div>
</main>
{/* Bottom Navigation Bar */}
<nav className="sticky bottom-0 w-full z-50 border-t border-outline-variant flex justify-around items-center h-16 px-xs bg-surface">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm-mobile">Home</span>
</a>
{/* Services is Active */}
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1.5 active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", }}>account_balance</span>
<span className="font-label-sm text-label-sm-mobile">Services</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95" href="#">
<span className="material-symbols-outlined">description</span>
<span className="font-label-sm text-label-sm-mobile">Requests</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm-mobile">Profile</span>
</a>
</nav>
{/* Floating Action Button: Contextual for Services - Filter */}
<button className="sticky bottom-20 right-4 w-14 h-14 bg-secondary-container text-on-secondary-container rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-40">
<span className="material-symbols-outlined">add_business</span>
</button>
      </div>
    </AppLayout>
  );
}
