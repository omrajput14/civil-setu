import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CITIZEN PORTAL | CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top App Bar */}

{/* Main Content Canvas */}
<main className="pt-20 pb-24 px-md max-w-md mx-auto">
{/* Hero Section */}
<section className="mb-xl">
<h2 className="font-display-lg text-2xl font-bold text-primary mb-md">How can we help you today?</h2>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:ring-1 focus:ring-secondary focus:border-secondary transition-all outline-none text-body-md" placeholder="Search for services or schemes..." type="text"/>
</div>
</section>
{/* Quick Action Grid */}
<section className="mb-xl">
<h3 className="font-headline-sm text-headline-sm text-primary mb-md">Quick Actions</h3>
<div className="grid grid-cols-2 gap-md">
{/* Action 1 */}
<button className="flex flex-col items-center justify-center p-md bg-surface border border-outline-variant rounded-lg hover:border-secondary hover:bg-surface-container-low transition-all text-center">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary mb-sm">
<span className="material-symbols-outlined">warning</span>
</div>
<span className="font-label-md text-on-surface">File Complaint</span>
</button>
{/* Action 2 */}
<button className="flex flex-col items-center justify-center p-md bg-surface border border-outline-variant rounded-lg hover:border-secondary hover:bg-surface-container-low transition-all text-center">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary mb-sm">
<span className="material-symbols-outlined">search</span>
</div>
<span className="font-label-md text-on-surface">Track Status</span>
</button>
{/* Action 3 */}
<button className="flex flex-col items-center justify-center p-md bg-surface border border-outline-variant rounded-lg hover:border-secondary hover:bg-surface-container-low transition-all text-center">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary mb-sm">
<span className="material-symbols-outlined">description</span>
</div>
<span className="font-label-md text-on-surface">Public Records</span>
</button>
{/* Action 4 */}
<button className="flex flex-col items-center justify-center p-md bg-surface border border-outline-variant rounded-lg hover:border-secondary hover:bg-surface-container-low transition-all text-center">
<div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary mb-sm">
<span className="material-symbols-outlined">assignment</span>
</div>
<span className="font-label-md text-on-surface">Apply for Scheme</span>
</button>
</div>
</section>
{/* Active Requests Section */}
<section className="mb-xl">
<div className="flex justify-between items-center mb-md">
<h3 className="font-headline-sm text-headline-sm text-primary">My Active Requests</h3>
<button className="text-secondary font-label-sm">View All</button>
</div>
<div className="space-y-sm">
{/* Request Card 1 */}
<div className="p-md bg-surface border border-outline-variant rounded-lg flex flex-col gap-sm">
<div className="flex justify-between items-start">
<span className="font-headline-sm text-primary text-sm">Broken Water Pipe - Ward 2</span>
<span className="px-2 py-0.5 rounded bg-on-secondary-fixed text-on-secondary-container text-[10px] font-bold uppercase tracking-wider">In Progress</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span className="text-xs">Last updated 2h ago</span>
</div>
</div>
{/* Request Card 2 */}
<div className="p-md bg-surface border border-outline-variant rounded-lg flex flex-col gap-sm">
<div className="flex justify-between items-start">
<span className="font-headline-sm text-primary text-sm">Street Light Installation</span>
<span className="px-2 py-0.5 rounded bg-on-tertiary-fixed-variant bg-opacity-10 text-on-tertiary-container text-[10px] font-bold uppercase tracking-wider">Resolved</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span className="text-xs">Last updated 1 day ago</span>
</div>
</div>
</div>
</section>
{/* Latest Announcements */}
<section className="mb-xl">
<h3 className="font-headline-sm text-headline-sm text-primary mb-md">Latest Announcements</h3>
<div className="space-y-sm">
<div className="flex items-start gap-md p-md bg-surface border border-outline-variant rounded-lg">
<div className="p-2 rounded bg-surface-container-high text-primary">
<span className="material-symbols-outlined">campaign</span>
</div>
<div>
<p className="font-body-md text-on-surface">Gram Sabha meeting scheduled for 24th June.</p>
<p className="text-xs text-on-surface-variant mt-1">Village Council Office</p>
</div>
</div>
<div className="flex items-start gap-md p-md bg-surface border border-outline-variant rounded-lg">
<div className="p-2 rounded bg-surface-container-high text-primary">
<span className="material-symbols-outlined">school</span>
</div>
<div>
<p className="font-body-md text-on-surface">New Scholarship Scheme for Rural Youth.</p>
<p className="text-xs text-on-surface-variant mt-1">Education Department</p>
</div>
</div>
</div>
</section>
</main>
{/* Bottom Navigation Bar */}
<nav className="sticky bottom-0 left-0 w-full h-16 bg-surface-container-lowest border-t border-outline-variant z-50 flex justify-around items-center md:hidden">
<a className="flex flex-col items-center justify-center gap-1 text-on-surface-variant hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">map</span>
<span className="text-[10px] font-medium">Map</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 text-on-surface-variant hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">assignment</span>
<span className="text-[10px] font-medium">Tasks</span>
</a>
{/* FAB-style Center Button */}
<div className="relative -top-6">
<button aria-label="Report Issue" className="w-14 h-14 bg-primary text-on-primary rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[28px]">add_a_photo</span>
</button>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">Report</span>
</div>
<a className="flex flex-col items-center justify-center gap-1 text-secondary" href="#">
<span className="material-symbols-outlined active-icon">person</span>
<span className="text-[10px] font-bold">Profile</span>
</a>
</nav>
      </div>
    </AppLayout>
  );
}
