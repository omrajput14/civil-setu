import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - PROJECT DETAIL" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

<main className="max-w-7xl mx-auto px-md md:px-lg mt-lg">
{/* Project Summary Section (Asymmetric Bento Grid) */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
{/* Main Details Card */}
<div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-md mb-lg">
<div>
<div className="flex items-center gap-sm mb-xs">
<span className="px-sm py-xs bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm rounded uppercase tracking-wider">PRJ-2023-089</span>
<span className="px-sm py-xs bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-label-sm rounded flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
                                In Progress
                            </span>
</div>
<h2 className="font-display-lg text-display-lg text-primary mb-xs">Main Street Paving</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Upgrading the primary arterial road with high-durability asphalt and improved drainage systems to enhance village connectivity.</p>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-lg pt-lg border-t border-outline-variant">
<div>
<p className="text-label-sm text-on-surface-variant uppercase font-semibold mb-1">Completion Date</p>
<p className="font-headline-sm text-primary">Nov 30, 2023</p>
</div>
<div>
<p className="text-label-sm text-on-surface-variant uppercase font-semibold mb-1">Project Sector</p>
<p className="font-headline-sm text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-sm">construction</span> Infrastructure
                        </p>
</div>
<div>
<p className="text-label-sm text-on-surface-variant uppercase font-semibold mb-1">Lead Supervisor</p>
<p className="font-headline-sm text-primary">R. Kumar</p>
</div>
</div>
</div>
{/* Progress Visualization Card */}
<div className="md:col-span-4 bg-primary-container text-on-primary border border-primary-container rounded-xl p-lg flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined !text-7xl">trending_up</span>
</div>
<div className="relative w-40 h-40">
{/* SVG Radial Progress */}
<svg className="w-full h-full transform -rotate-90">
<circle className="text-white/10" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-width="12"></circle>
<circle className="text-secondary-container" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="110" stroke-width="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-display-lg font-display-lg text-white">75%</span>
<span className="text-label-sm uppercase font-semibold text-white/70">Complete</span>
</div>
</div>
<div className="mt-lg text-center">
<p className="text-body-md text-white/90">Work is ahead of schedule by <span className="font-bold">4 days</span>.</p>
</div>
</div>
{/* Budget Transparency */}
<div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
<div className="flex items-center justify-between mb-lg">
<h3 className="font-headline-sm text-primary">Budget Overview</h3>
<span className="material-symbols-outlined text-primary">payments</span>
</div>
<div className="space-y-lg">
<div>
<div className="flex justify-between mb-2">
<span className="text-label-md text-on-surface-variant">Spent to Date</span>
<span className="text-label-md font-bold text-primary">₹9.2L</span>
</div>
<div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{ width: "73.6%", }}></div>
</div>
</div>
<div className="flex justify-between p-md bg-surface-container-low rounded-lg">
<div>
<p className="text-label-sm text-on-surface-variant uppercase">Allocated</p>
<p className="font-headline-md text-primary">₹12.5L</p>
</div>
<div className="text-right">
<p className="text-label-sm text-on-surface-variant uppercase">Remaining</p>
<p className="font-headline-md text-tertiary">₹3.3L</p>
</div>
</div>
</div>
</div>
{/* Timeline / Vertical Stepper */}
<div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
<h3 className="font-headline-sm text-primary mb-lg">Project Timeline</h3>
<div className="relative space-y-md">
<div className="absolute left-4 top-2 bottom-2 w-0.5 bg-outline-variant"></div>
{/* Done */}
<div className="flex gap-lg relative">
<div className="z-10 w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<div className="flex-1 pb-4">
<p className="font-headline-sm text-primary">Site Survey</p>
<p className="text-body-md text-on-surface-variant">Topographic mapping and utility identification completed on Aug 12.</p>
</div>
</div>
{/* Done */}
<div className="flex gap-lg relative">
<div className="z-10 w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<div className="flex-1 pb-4">
<p className="font-headline-sm text-primary">Material Procurement</p>
<p className="text-body-md text-on-surface-variant">Asphalt, gravel, and concrete drainage pipes delivered on Aug 25.</p>
</div>
</div>
{/* Done */}
<div className="flex gap-lg relative">
<div className="z-10 w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<div className="flex-1 pb-4">
<p className="font-headline-sm text-primary">Excavation</p>
<p className="text-body-md text-on-surface-variant">Roadbed cleared and leveled to engineering specifications on Sept 10.</p>
</div>
</div>
{/* In Progress */}
<div className="flex gap-lg relative">
<div className="z-10 w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center ring-4 ring-secondary-fixed">
<span className="material-symbols-outlined text-sm animate-spin">refresh</span>
</div>
<div className="flex-1 pb-4">
<p className="font-headline-sm text-primary">Paving</p>
<p className="text-body-md text-on-surface-variant">Application of primary asphalt layer currently 60% complete.</p>
</div>
</div>
{/* Upcoming */}
<div className="flex gap-lg relative">
<div className="z-10 w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-sm">schedule</span>
</div>
<div className="flex-1">
<p className="font-headline-sm text-on-surface-variant">Finishing</p>
<p className="text-body-md text-on-surface-variant italic">Scheduled for Nov 20: Striping, signage, and curb finishing.</p>
</div>
</div>
</div>
</div>
{/* Before & After Photos */}
<div className="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="p-lg border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-sm text-primary">Site Documentation</h3>
<div className="flex gap-sm">
<button className="px-md py-xs bg-surface-container text-primary font-label-md rounded flex items-center gap-2 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-sm">photo_library</span> View Gallery
                        </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 h-[400px]">
<div className="relative group h-full">
<img className="w-full h-full object-cover" data-alt="A wide-angle, documentary-style photograph of a dilapidated rural road in India before reconstruction. The road surface is cracked with visible potholes and uneven dirt shoulders. The lighting is harsh midday sun, casting long shadows. The setting is a quiet village street with basic brick houses in the background. High-fidelity, sharp focus, professional photography for urban planning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvuNsN0YrHZN4u5pjFj7t47e3AReaqd7_NunESZVPHAoMbe8Zk7KJMRHoRzpohv6qrBWwG0O3eXZvjBtO3dg-SavKWI7RIWyb0nqd7-fe45UGGQPQsId9ovcPF59qQla_1dEVXlxEsotRPASbfe8vT-98PWNdiBXCoeEB0kSRBLBXSOnvy1XOGCmsqm9QGvZdNWYFmj5543fVFRQtEXTJI70ETn08exMo4ecgjsEzG8rmYMql976TmUELC_30wJEHdnAtR4he6lAhR"/>
<div className="absolute top-4 left-4 bg-on-background/80 text-white px-md py-xs rounded-lg text-label-md backdrop-blur-sm">
                            Before Construction
                        </div>
</div>
<div className="relative group h-full border-t md:border-t-0 md:border-l border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A high-contrast progress shot of the same rural road now featuring a fresh, smooth layer of dark grey asphalt. Construction equipment like a steamroller is visible in the far distance. Bright yellow safety cones line the newly defined shoulder. The late afternoon sun creates a warm, gold-toned glow on the new surface, highlighting its texture and quality. Modern, clean, and professional governance aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjomx-QagHMeyUd_-kTVYmuvo9aUUqjB8nbJkGfrDn9BEqa9T5lkzzOdj-sLlFquPbnecceNJzJNnY4S2wWozOUQujUqGvzApnfFFrwa9TArTgAOf6ySRtLF_vLksXYAhPA9KFAORyzzzeQwRNd8lNgXh4VHdCKRUKDsl8jXPrXdrO0U7BCczpXrGKKpl3Z-b-d8pqMPc3ISnMrSyM_kGWE1EtW5NYLQHMbva2vgGErX8ro6wL9RM9mJOl18ZkaeGeFTkfX0KULYDN"/>
<div className="absolute top-4 left-4 bg-secondary-container/90 text-on-secondary-container px-md py-xs rounded-lg text-label-md font-bold backdrop-blur-sm">
                            Current Progress
                        </div>
<div className="absolute bottom-4 right-4 bg-white/90 text-primary px-sm py-xs rounded text-label-sm border border-outline-variant backdrop-blur-sm">
                            Updated 2 days ago
                        </div>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar */}
<nav className="sticky bottom-0 left-0 w-full z-50 flex justify-around items-center bg-surface dark:bg-on-background px-xs py-sm border-t border-outline-variant">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-1 scale-95 transition-transform duration-150" href="#">
<span className="material-symbols-outlined" data-icon="list_alt">list_alt</span>
<span className="font-label-sm text-[10px]">Projects</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-sm text-[10px]">Track</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-sm text-[10px]">Budget</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:bg-surface-container dark:hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-[10px]">Profile</span>
</a>
</nav>
      </div>
    </AppLayout>
  );
}
