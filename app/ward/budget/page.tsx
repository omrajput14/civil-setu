import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="WARD BUDGET &AMP; PROGRESS - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Status Rail */}
<div className="w-full h-rail-height bg-white dark:bg-surface-container-lowest border-b border-border dark:border-outline flex items-center justify-start px-margin-mobile md:px-margin-desktop shadow-[0_1px_2px_rgba(17,24,39,0.06)] relative z-40">
<span className="font-data-sm text-data-sm text-text-muted uppercase data-mono">WARD 4 · FY 2023-24 · 8 ACTIVE PROJECTS</span>
</div>
{/* Main Content Grid */}
<main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Sidebar (Web Only) */}
<aside className="hidden md:flex md:col-span-3 flex-col bg-primary min-h-[calc(100vh-140px)] rounded-[6px] text-on-primary py-stack-lg">
<nav className="flex flex-col gap-2 w-full px-4">
<a className="flex items-center gap-3 px-4 py-3 rounded-[4px] hover:bg-on-primary-fixed-variant transition-colors text-on-surface-variant dark:text-outline p-2" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-md text-label-md">Home</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-[4px] bg-on-primary-fixed-variant border-l-[4px] border-warning text-primary-fixed" href="#">
<span className="material-symbols-outlined" data-icon="apps">apps</span>
<span className="font-label-md text-label-md">Services</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-[4px] hover:bg-on-primary-fixed-variant transition-colors text-on-surface-variant dark:text-outline p-2" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-md text-label-md">Schemes</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-[4px] hover:bg-on-primary-fixed-variant transition-colors text-on-surface-variant dark:text-outline p-2" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</nav>
</aside>
{/* Main Canvas */}
<div className="col-span-1 md:col-span-9 flex flex-col gap-stack-lg">
{/* Section 1: Budget Overview */}
<section className="flex flex-col gap-stack-sm">
<h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest data-mono">WARD BUDGET OVERVIEW</h2>
<div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg">
<div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md mb-stack-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-text-muted mb-1">Total Budget</span>
<span className="font-data-lg text-data-lg text-primary data-mono">₹42,50,000</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-text-muted mb-1">Utilized</span>
<span className="font-data-lg text-data-lg text-primary data-mono">₹28,15,000</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-text-muted mb-1">Remaining</span>
<span className="font-data-lg text-data-lg text-warning data-mono">₹14,35,000</span>
</div>
</div>
<div className="w-full bg-background rounded-full h-2 overflow-hidden border border-border">
<div className="bg-primary h-2" style={{ width: "66%", }}></div>
</div>
<div className="flex justify-between mt-2">
<span className="font-data-sm text-data-sm text-text-muted data-mono">0%</span>
<span className="font-data-sm text-data-sm text-text-muted data-mono">66% UTILIZED</span>
<span className="font-data-sm text-data-sm text-text-muted data-mono">100%</span>
</div>
</div>
</section>
{/* Section 2: Active Projects */}
<section className="flex flex-col gap-stack-sm">
<h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest data-mono">ACTIVE WARD PROJECTS</h2>
<div className="flex flex-col gap-stack-md">
{/* Project Card 1 */}
<div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-md flex flex-col gap-stack-sm">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<h3 className="font-label-md text-label-md text-on-surface">Main Road Paving - Ward 4 East</h3>
<span className="font-data-sm text-data-sm text-text-muted data-mono mt-1">ID: PWR-W4-001</span>
</div>
<span className="px-2 py-1 bg-surface-container-high text-primary font-data-sm text-data-sm rounded-[4px] uppercase data-mono border border-surface-tint">IN PROGRESS</span>
</div>
<div className="flex flex-col gap-1 mt-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-text-muted">Progress</span>
<span className="font-data-sm text-data-sm text-primary data-mono">75%</span>
</div>
<div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-border">
<div className="bg-primary h-1.5" style={{ width: "75%", }}></div>
</div>
</div>
<div className="mt-2 pt-2 border-t border-border">
<span className="font-body-md text-body-md text-text-muted">Next Milestone: <span className="text-on-surface font-medium">Drainage completion</span></span>
</div>
</div>
{/* Project Card 2 */}
<div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-md flex flex-col gap-stack-sm">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<h3 className="font-label-md text-label-md text-on-surface">Solar Street Lighting - Sector B</h3>
<span className="font-data-sm text-data-sm text-text-muted data-mono mt-1">ID: PWR-W4-012</span>
</div>
<span className="px-2 py-1 bg-surface-bright text-success font-data-sm text-data-sm rounded-[4px] uppercase data-mono border border-success">ON TRACK</span>
</div>
<div className="flex flex-col gap-1 mt-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-text-muted">Progress</span>
<span className="font-data-sm text-data-sm text-success data-mono">40%</span>
</div>
<div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-border">
<div className="bg-success h-1.5" style={{ width: "40%", }}></div>
</div>
</div>
<div className="mt-2 pt-2 border-t border-border">
<span className="font-body-md text-body-md text-text-muted">Next Milestone: <span className="text-on-surface font-medium">Battery installation</span></span>
</div>
</div>
{/* Project Card 3 */}
<div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-md flex flex-col gap-stack-sm">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<h3 className="font-label-md text-label-md text-on-surface">Primary School Renovation</h3>
<span className="font-data-sm text-data-sm text-text-muted data-mono mt-1">ID: PWR-W4-009</span>
</div>
<span className="px-2 py-1 bg-error-container text-on-error-container font-data-sm text-data-sm rounded-[4px] uppercase data-mono border border-error">DELAYED</span>
</div>
<div className="flex flex-col gap-1 mt-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-text-muted">Progress</span>
<span className="font-data-sm text-data-sm text-danger data-mono">15%</span>
</div>
<div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-border">
<div className="bg-danger h-1.5" style={{ width: "15%", }}></div>
</div>
</div>
<div className="mt-2 pt-2 border-t border-border">
<span className="font-body-md text-body-md text-text-muted">Reason: <span className="text-danger font-medium">Material procurement</span></span>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
      </div>
    </AppLayout>
  );
}
