import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="EMERGENCY DASHBOARD - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* SideNav (Desktop) */}
<nav className="hidden md:flex flex-col fixed top-0 left-0 w-[240px] h-screen bg-primary border-r border-border z-40 pt-[64px]">
<div className="flex flex-col h-full py-stack-md">
<div className="px-stack-lg pb-stack-lg mb-stack-md border-b border-primary-container">
<span className="font-headline-md text-headline-md font-bold text-on-primary tracking-tight">CIVICSETU</span>
</div>
<ul className="flex flex-col flex-grow gap-2 px-stack-sm">
<li className="flex items-center gap-3 px-stack-md py-3 bg-danger/20 text-danger border-l-4 border-danger cursor-pointer font-label-md text-label-md transition-colors duration-150 rounded-r-DEFAULT">
<span className="material-symbols-outlined" data-icon="sos">sos</span>
<span className="">SOS Dashboard</span>
</li>
<li className="flex items-center gap-3 px-stack-md py-3 text-on-primary/70 hover:bg-primary-container/50 cursor-pointer font-label-md text-label-md transition-colors duration-150 border-l-4 border-transparent rounded-r-DEFAULT">
<span className="material-symbols-outlined" data-icon="warning">warning</span>
<span className="">Active Alerts</span>
</li>
<li className="flex items-center gap-3 px-stack-md py-3 text-on-primary/70 hover:bg-primary-container/50 cursor-pointer font-label-md text-label-md transition-colors duration-150 border-l-4 border-transparent rounded-r-DEFAULT">
<span className="material-symbols-outlined" data-icon="home_work">home_work</span>
<span className="">Shelters</span>
</li>
<li className="flex items-center gap-3 px-stack-md py-3 text-on-primary/70 hover:bg-primary-container/50 cursor-pointer font-label-md text-label-md transition-colors duration-150 border-l-4 border-transparent rounded-r-DEFAULT">
<span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
<span className="">First Aid</span>
</li>
</ul>
</div>
</nav>
{/* BottomNavBar (Mobile) */}

{/* Main Canvas */}
<main className="flex-grow p-margin-mobile md:p-margin-desktop max-w-7xl mx-auto w-full">
{/* Top Status Rail */}
<div className="h-rail-height bg-surface border border-border flex items-center px-stack-md justify-between mb-stack-lg shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-none">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-danger animate-pulse"></div>
<span className="font-data-sm text-data-sm text-text-muted uppercase tracking-wider">System Alert Level: RED</span>
</div>
<span className="font-data-sm text-data-sm text-text-muted uppercase tracking-wider">Sync: Live</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
{/* SOS Trigger Module (Spans full width on mobile, 4 cols on desktop) */}
<section className="lg:col-span-4 flex flex-col gap-stack-md">
<div className="bg-surface border border-danger p-stack-lg shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-none flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
<div className="absolute inset-0 bg-danger/5 pattern-diagonal-lines pattern-danger pattern-bg-transparent pattern-size-4 pattern-opacity-20 z-0"></div>
<h2 className="font-headline-md text-headline-md text-danger mb-stack-lg z-10 text-center">EMERGENCY TRIGGER</h2>
<button className="hold-btn sos-pulse relative w-40 h-40 rounded-full bg-danger text-on-error flex flex-col items-center justify-center shadow-lg hover:bg-error transition-colors duration-200 z-10 cursor-pointer active:scale-95 group" id="sos-trigger">
<span className="material-symbols-outlined text-4xl mb-2" data-icon="sos">sos</span>
<span className="font-label-md text-label-md uppercase tracking-widest">Hold 3s</span>
</button>
<p className="font-data-md text-data-md text-text-muted text-center mt-stack-lg z-10">Hold to broadcast coordinates to all emergency units.</p>
</div>
{/* Quick Actions Grid within the left column */}
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-none">
<div className="border-b border-border p-stack-sm px-stack-md bg-surface-container-low">
<h3 className="font-label-md text-label-md uppercase text-text-muted">Quick Actions</h3>
</div>
<div className="grid grid-cols-2 gap-px bg-border">
<button className="bg-surface p-stack-md flex flex-col items-center justify-center gap-2 hover:bg-surface-container transition-colors cursor-pointer min-h-[100px]">
<span className="material-symbols-outlined text-danger" data-icon="local_hospital">local_hospital</span>
<span className="font-label-sm text-label-sm text-center">Medical</span>
</button>
<button className="bg-surface p-stack-md flex flex-col items-center justify-center gap-2 hover:bg-surface-container transition-colors cursor-pointer min-h-[100px]">
<span className="material-symbols-outlined text-warning" data-icon="electric_bolt">electric_bolt</span>
<span className="font-label-sm text-label-sm text-center">Power Outage</span>
</button>
<button className="bg-surface p-stack-md flex flex-col items-center justify-center gap-2 hover:bg-surface-container transition-colors cursor-pointer min-h-[100px]">
<span className="material-symbols-outlined text-primary" data-icon="water_drop">water_drop</span>
<span className="font-label-sm text-label-sm text-center">Blood Need</span>
</button>
<button className="bg-surface p-stack-md flex flex-col items-center justify-center gap-2 hover:bg-surface-container transition-colors cursor-pointer min-h-[100px]">
<span className="material-symbols-outlined text-secondary" data-icon="fire_truck">fire_truck</span>
<span className="font-label-sm text-label-sm text-center">Fire / Rescue</span>
</button>
</div>
</div>
</section>
{/* Active Alerts Feed (Spans 8 cols on desktop) */}
<section className="lg:col-span-8 flex flex-col gap-stack-md">
<div className="flex items-center justify-between border-b border-border pb-stack-sm">
<h2 className="font-headline-md text-headline-md text-on-surface">ACTIVE ALERTS</h2>
<span className="font-data-md text-data-md text-text-muted">Loc: Ward 7 &amp; Surroundings</span>
</div>
{/* High Priority Alert Card */}
<div className="bg-surface border border-danger shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-none flex flex-col">
<div className="bg-danger p-stack-sm px-stack-md flex justify-between items-center text-on-error">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="flood" data-weight="fill">flood</span>
<span className="font-label-md text-label-md uppercase tracking-wider">CRITICAL ALERT</span>
</div>
<span className="font-data-sm text-data-sm uppercase">Last Update: 2m ago</span>
</div>
<div className="p-stack-lg flex flex-col md:flex-row gap-stack-lg">
<div className="flex-grow flex flex-col justify-between">
<div>
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm leading-tight">Flash Flood Warning</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">Severe water logging reported in low-lying areas of Ward 7. Immediate evacuation recommended for sectors A and B. Emergency shelters are open.</p>
</div>
<div className="flex gap-stack-md mt-stack-md">
<button className="bg-danger text-on-error px-stack-lg py-2 font-label-md text-label-md border border-danger hover:bg-error transition-colors rounded-none">View Evac Route</button>
<button className="bg-surface text-danger px-stack-lg py-2 font-label-md text-label-md border border-danger hover:bg-danger/10 transition-colors rounded-none">Mark Safe</button>
</div>
</div>
{/* Map Visual Placeholder */}
<div className="w-full md:w-1/3 h-48 md:h-auto bg-surface-container border border-border relative overflow-hidden flex items-center justify-center">
{/* In a real app this would be a map, simulating it structurally */}
<div className="absolute inset-0 bg-primary/5 flex items-center justify-center" data-location="Ward 7">
<span className="material-symbols-outlined text-danger text-4xl" data-icon="location_on" data-weight="fill">location_on</span>
</div>
<div className="absolute bottom-0 left-0 w-full bg-surface/90 border-t border-border p-2">
<span className="font-data-sm text-data-sm text-text-muted">Map Data © CivicSetu GIS</span>
</div>
</div>
</div>
</div>
{/* Secondary Alert Card */}
<div className="bg-surface border border-warning shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-none flex flex-col">
<div className="bg-warning/20 border-b border-warning p-stack-sm px-stack-md flex justify-between items-center text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-warning" data-icon="power_off">power_off</span>
<span className="font-label-md text-label-md uppercase tracking-wider text-warning">HIGH PRIORITY</span>
</div>
<span className="font-data-sm text-data-sm text-text-muted uppercase">Last Update: 15m ago</span>
</div>
<div className="p-stack-md flex justify-between items-center">
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">Grid Failure - Sector C</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Restoration ETA: 4 Hours. Utility crews dispatched.</p>
</div>
<button className="bg-surface text-on-surface px-stack-md py-2 font-label-md text-label-md border border-border hover:bg-surface-container transition-colors rounded-none">Details</button>
</div>
</div>
</section>
</div>
</main>
      </div>
    </AppLayout>
  );
}
