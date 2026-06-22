import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - TRACK STATUS" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top App Bar */}

{/* Main Content Container */}
<main className="pt-20 pb-24 px-md max-w-md mx-auto">
{/* Search & Filter Section */}
<section className="space-y-md mb-lg">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg text-body-md focus:outline-none focus:border-primary-container focus:ring-0" placeholder="Search by Request ID (e.g. CS-10293)" type="text"/>
</div>
<div className="flex gap-2 overflow-x-auto scrollbar-hide">
<button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md transition-colors whitespace-nowrap">All</button>
<button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-lg font-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Active</button>
<button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-lg font-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Resolved</button>
<button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-lg font-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Drafts</button>
</div>
</section>
{/* Request List */}
<div className="space-y-md">
{/* Card 1: In Progress */}
<div className="bg-white border border-outline-variant rounded-lg overflow-hidden transition-all duration-300" id="card-1">
<div className="p-md">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-[4px] font-label-sm text-[10px] uppercase tracking-wider">In Progress</span>
<span className="font-body-md text-outline text-xs">12 Oct 2023</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-1">Broken Water Pipe - Ward 2</h3>
<p className="font-body-md text-on-surface-variant text-sm mb-4">ID: CS-10293</p>
<button className="w-full py-2 border border-primary-container text-primary-container font-label-md rounded-lg hover:bg-surface-container-low transition-colors active:scale-95 flex items-center justify-center gap-2" onclick="toggleDetails('details-1', this)">
                        View Details
                        <span className="material-symbols-outlined text-sm transition-transform duration-300">expand_more</span>
</button>
</div>
{/* Expanded View (Timeline) */}
<div className="hidden border-t border-outline-variant bg-surface-bright p-md" id="details-1">
<div className="relative space-y-6">
<div className="timeline-line"></div>
{/* Step 1: Completed */}
<div className="relative flex gap-4 step-completed">
<div className="step-indicator z-10 w-6 h-6 rounded-full border-2 bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'wght' 700", }}>check</span>
</div>
<div className="flex-1">
<p className="font-label-md text-on-background">Submitted</p>
<p className="font-body-md text-xs text-outline">12 Oct 2023, 09:30 AM</p>
</div>
</div>
{/* Step 2: Completed */}
<div className="relative flex gap-4 step-completed">
<div className="step-indicator z-10 w-6 h-6 rounded-full border-2 bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'wght' 700", }}>check</span>
</div>
<div className="flex-1">
<p className="font-label-md text-on-background">Assigned</p>
<p className="font-body-md text-xs text-outline">13 Oct 2023, 02:15 PM</p>
<p className="mt-1 text-xs text-on-surface-variant bg-surface-container-low p-2 rounded">Assigned to: Engineer Rajesh Kumar (Ward 2 Maintenance)</p>
</div>
</div>
{/* Step 3: Active */}
<div className="relative flex gap-4 step-active">
<div className="step-indicator z-10 w-6 h-6 rounded-full border-2 bg-orange-600 flex items-center justify-center shadow-[0_0_8px_rgba(217,119,6,0.3)]">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
</div>
<div className="flex-1">
<p className="font-label-md text-orange-700 font-bold">In Progress</p>
<p className="font-body-md text-xs text-outline">Started on 14 Oct 2023</p>
<p className="mt-2 text-sm text-on-surface-variant leading-relaxed">Excavation work is underway. Parts have been ordered for the primary valve replacement.</p>
</div>
</div>
{/* Step 4: Pending */}
<div className="relative flex gap-4">
<div className="step-indicator z-10 w-6 h-6 rounded-full border-2 border-outline-variant bg-white flex items-center justify-center">
</div>
<div className="flex-1">
<p className="font-label-md text-outline">Resolved</p>
<p className="font-body-md text-xs text-outline">Estimated: 16 Oct 2023</p>
</div>
</div>
</div>
</div>
</div>
{/* Card 2: Pending Approval */}
<div className="bg-white border border-outline-variant rounded-lg overflow-hidden">
<div className="p-md">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded-[4px] font-label-sm text-[10px] uppercase tracking-wider">Pending</span>
<span className="font-body-md text-outline text-xs">15 Oct 2023</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-1">Street Light Not Working</h3>
<p className="font-body-md text-on-surface-variant text-sm mb-4">ID: CS-10442</p>
<button className="w-full py-2 border border-primary-container text-primary-container font-label-md rounded-lg active:scale-95 flex items-center justify-center gap-2">
                        View Details
                        <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
</div>
{/* Card 3: Resolved */}
<div className="bg-white border border-outline-variant rounded-lg overflow-hidden">
<div className="p-md">
<div className="flex justify-between items-start mb-2">
<span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-[4px] font-label-sm text-[10px] uppercase tracking-wider">Resolved</span>
<span className="font-body-md text-outline text-xs">08 Oct 2023</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-1">Garbage Collection Skip</h3>
<p className="font-body-md text-on-surface-variant text-sm mb-4">ID: CS-09821</p>
<button className="w-full py-2 border border-primary-container text-primary-container font-label-md rounded-lg active:scale-95 flex items-center justify-center gap-2">
                        View Details
                        <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
</div>
{/* Empty State Visualization Placeholder (only visible if no results) */}
<div className="hidden flex flex-col items-center justify-center py-xl text-center" id="no-results">
<div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-outline text-4xl">search_off</span>
</div>
<h4 className="font-headline-sm text-on-surface">No requests found</h4>
<p className="font-body-md text-on-surface-variant px-lg">Try searching with a different ID or check your filters.</p>
</div>
</div>
{/* Help Section */}
<section className="mt-xl p-md bg-primary-container rounded-lg text-on-primary">
<h4 className="font-headline-sm mb-1">Need help with a request?</h4>
<p className="text-xs opacity-80 mb-4">Our support team is available 24/7 for urgent governance issues.</p>
<div className="flex gap-2">
<button className="flex-1 bg-white text-primary-container py-2 rounded font-label-md text-sm">Call Support</button>
<button className="flex-1 border border-white/30 text-white py-2 rounded font-label-md text-sm">FAQs</button>
</div>
</section>
</main>
{/* Bottom Navigation Bar (Citizen Portal) */}
<nav className="sticky bottom-0 left-0 w-full flex justify-around items-center bg-surface border-t border-outline-variant md:hidden h-16 z-50">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-full h-full" href="#">
<span className="material-symbols-outlined" data-icon="map">map</span>
<span className="font-label-sm text-[10px] mt-1">Map</span>
</a>
<a className="flex flex-col items-center justify-center text-secondary font-bold hover:bg-surface-container-high w-full h-full" href="#">
<span className="material-symbols-outlined" data-icon="assignment" style={{ fontVariationSettings: "'FILL' 1", }}>assignment</span>
<span className="font-label-sm text-[10px] mt-1">Tasks</span>
</a>
<div className="flex flex-col items-center justify-center w-full h-full">
<button className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-white -mt-8 shadow-lg active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="add_a_photo">add_a_photo</span>
</button>
<span className="font-label-sm text-[10px] mt-1 text-on-surface-variant">Upload</span>
</div>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-full h-full" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-[10px] mt-1">Profile</span>
</a>
</nav>
      </div>
    </AppLayout>
  );
}
