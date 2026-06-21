import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - DASHBOARD" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar Mobile */}

{/* SideNav Desktop */}
<nav className="hidden md:flex flex-col fixed top-0 left-0 w-[240px] h-full bg-primary text-on-primary z-50">
<div className="h-[64px] flex items-center px-stack-md border-b border-on-primary-fixed-variant">
<span className="material-symbols-outlined mr-stack-sm">account_balance</span>
<span className="font-headline-md text-headline-md font-bold tracking-tight">CIVICSETU</span>
</div>
<div className="flex-1 py-stack-md">
<a className="flex items-center px-stack-md py-stack-sm bg-surface-container-low text-primary border-l-4 border-secondary-container relative group" href="#">
<span className="material-symbols-outlined mr-stack-md">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center px-stack-md py-stack-sm text-on-primary-fixed hover:bg-surface-tint transition-colors group" href="#">
<span className="material-symbols-outlined mr-stack-md">how_to_vote</span>
<span className="font-label-md text-label-md">Polls</span>
</a>
<a className="flex items-center px-stack-md py-stack-sm text-on-primary-fixed hover:bg-surface-tint transition-colors group" href="#">
<span className="material-symbols-outlined mr-stack-md">event_seat</span>
<span className="font-label-md text-label-md">Town Hall</span>
</a>
<a className="flex items-center px-stack-md py-stack-sm text-on-primary-fixed hover:bg-surface-tint transition-colors group" href="#">
<span className="material-symbols-outlined mr-stack-md">construction</span>
<span className="font-label-md text-label-md">Works</span>
</a>
</div>
<div className="p-stack-md border-t border-on-primary-fixed-variant">
<div className="font-data-sm text-data-sm text-on-primary-fixed mb-1 uppercase">User ID</div>
<div className="font-data-md text-data-md">USR-9482-B</div>
</div>
</nav>
{/* Main Content */}
<main className="max-w-7xl mx-auto p-margin-mobile md:p-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Header Section */}
<div className="col-span-1 md:col-span-12 mb-stack-md">
<h1 className="font-headline-lg text-headline-lg font-light text-primary mb-stack-sm">Civic Participation Hub</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Centralized data for active civic engagements and ward analytics.</p>
</div>
{/* Primary Entry Points (Bento Grid) */}
<div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Active Polls KPI */}
<div className="bg-surface border border-border shadow-elevation-1 p-stack-md flex flex-col justify-between h-48 hover:bg-surface-container-lowest transition-colors relative">
<div className="flex justify-between items-start">
<span className="font-label-md text-label-md text-on-surface-variant uppercase">Active Polls</span>
<span className="material-symbols-outlined text-secondary-container">how_to_vote</span>
</div>
<div>
<div className="font-data-lg text-data-lg text-primary mb-1">04</div>
<div className="font-body-md text-body-md text-on-surface-variant">Live resolutions awaiting vote</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-[32px] border-t border-border bg-surface flex items-center px-stack-md">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Updates in realtime</span>
</div>
</div>
{/* Town Hall Countdown */}
<div className="bg-surface border border-border shadow-elevation-1 p-stack-md flex flex-col justify-between h-48 hover:bg-surface-container-lowest transition-colors relative">
<div className="flex justify-between items-start">
<span className="font-label-md text-label-md text-on-surface-variant uppercase">Next Town Hall</span>
<span className="material-symbols-outlined text-primary">event_seat</span>
</div>
<div>
<div className="font-data-lg text-data-lg text-primary mb-1 font-mono">14d 08h 22m</div>
<div className="font-body-md text-body-md text-on-surface-variant">Ward 7 Special Session</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-[32px] border-t border-border bg-surface flex items-center px-stack-md justify-between">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Loc: City Hall</span>
<a className="font-data-sm text-data-sm text-primary uppercase font-bold hover:underline" href="#">Register</a>
</div>
</div>
{/* Public Works Map/Stats (Spans 2 columns on desktop) */}
<div className="bg-surface border border-border shadow-elevation-1 md:col-span-2 flex flex-col md:flex-row overflow-hidden h-auto md:h-64 relative">
<div className="w-full md:w-1/3 p-stack-md flex flex-col justify-between border-b md:border-b-0 md:border-r border-border">
<div>
<div className="flex items-center mb-stack-sm">
<span className="material-symbols-outlined text-primary mr-2">construction</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase">Public Works</span>
</div>
<div className="font-data-lg text-data-lg text-primary mb-1">12</div>
<div className="font-body-md text-body-md text-on-surface-variant">Ongoing projects in Ward 7</div>
</div>
<div className="mt-stack-md">
<button className="bg-primary-container text-on-primary w-full py-2 font-label-md text-label-md text-center hover:opacity-90 transition-opacity">View Details</button>
</div>
</div>
<div className="w-full md:w-2/3 h-48 md:h-full relative bg-surface-variant">
<div className="bg-cover bg-center w-full h-full opacity-80" data-alt="A highly detailed, technical map visualization in a modern, light-mode interface. The map shows a city grid with precise, sharp lines and geometric overlays indicating public works zones. The color palette relies on crisp whites, soft grays (#F4F6F8), and sharp navy blue (#1A3A5C) structural accents, with small, precise amber (#D97706) markers indicating active construction sites. The visual style is strictly functional, mirroring high-end industrial software or civil engineering tools, with no organic shapes or decorative gradients. The lighting is flat and uniform, emphasizing data clarity." data-location="Chicago" style={{ backgroundImage: "url('https", }}></div>
<div className="absolute bottom-0 left-0 w-full h-[32px] border-t border-border bg-surface/90 backdrop-blur-sm flex items-center px-stack-md">
<span className="font-data-sm text-data-sm text-on-surface-variant uppercase">Data Source: Municipal GIS Server</span>
</div>
</div>
</div>
</div>
{/* Secondary Column */}
<div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
{/* Ward Representative Card */}
<div className="bg-surface border border-border shadow-elevation-1">
<div className="h-[32px] border-b border-border bg-surface-container-lowest flex items-center px-stack-md">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Ward Representative</span>
</div>
<div className="p-stack-md">
<div className="flex items-center mb-stack-md">
<img className="w-16 h-16 rounded-none border border-border mr-stack-md object-cover" data-alt="A professional headshot of a middle-aged, authoritative civic leader in a tailored dark navy suit. The portrait is taken against a flat, neutral white background to align with a sterile, functional software interface. The lighting is crisp and even, highlighting sharp details without dramatic shadows. The mood is serious, trustworthy, and efficient, reflecting a government 'Instrument Panel' aesthetic. The subject is looking directly at the camera with a neutral, confident expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6yOvBd6aeyn8P7OnC7iuCFRx2ag8VX7qs26HBYVRTi4JfvjLelbdSNvNNjtk4C7c5x_y8c5gV0ryRjBOz3NRuxMqa0rFfHipW54CTJtmXX8cdtCpc7XHcfQT5EJSfJ6m34hKjOicl-4avnm1R4spObC_ViYx4Udyi_XXQat09QRU1DPy5boOCbVYfwIwIJ0J6mBjCw6qdeErXaiKHwRBJWYZ4dABojuFgQ9LUy9z1i9wsinT7E2juDPIVTXGMLbJgbMrGvEJnk7zI" />
<div>
<h3 className="font-headline-md text-headline-md font-bold text-primary">Sarah Jenkins</h3>
<p className="font-data-sm text-data-sm text-on-surface-variant uppercase">Ward 7 Supervisor</p>
</div>
</div>
<div className="space-y-stack-sm mb-stack-md">
<div className="flex justify-between items-center border-b border-surface-variant pb-1">
<span className="font-data-md text-data-md text-text-muted">ID</span>
<span className="font-data-md text-data-md text-on-surface">REP-W7-442</span>
</div>
<div className="flex justify-between items-center border-b border-surface-variant pb-1">
<span className="font-data-md text-data-md text-text-muted">Status</span>
<span className="font-data-sm text-data-sm bg-success text-on-primary px-2 py-0.5 rounded-none uppercase">Active</span>
</div>
</div>
<button className="border border-border text-primary w-full py-2 font-label-md text-label-md text-center hover:bg-surface-container-lowest transition-colors flex justify-center items-center">
<span className="material-symbols-outlined mr-2 text-[18px]">mail</span> Contact Office
                    </button>
</div>
</div>
{/* Recent Resolutions Feed */}
<div className="bg-surface border border-border shadow-elevation-1 flex-1 flex flex-col">
<div className="h-[32px] border-b border-border bg-surface-container-lowest flex items-center px-stack-md">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Recent Resolutions</span>
</div>
<div className="p-stack-md flex-1 overflow-y-auto">
{/* Feed Item */}
<div className="mb-stack-md pb-stack-md border-b border-surface-variant last:border-0 last:mb-0 last:pb-0">
<div className="flex justify-between items-start mb-1">
<span className="font-data-sm text-data-sm text-text-muted uppercase">RES-2023-A4</span>
<span className="font-data-sm text-data-sm text-success uppercase font-bold">Passed</span>
</div>
<h4 className="font-label-md text-label-md text-primary mb-1">Zoning Amendment: Commercial Sector B</h4>
<div className="w-full bg-surface-variant h-2 mt-2 flex">
<div className="bg-primary-container h-full" style={{ width: "68%", }}></div>
<div className="bg-danger h-full" style={{ width: "32%", }}></div>
</div>
<div className="flex justify-between mt-1">
<span className="font-data-sm text-data-sm text-on-surface-variant">68% Yea</span>
<span className="font-data-sm text-data-sm text-on-surface-variant">32% Nay</span>
</div>
</div>
{/* Feed Item */}
<div className="mb-stack-md pb-stack-md border-b border-surface-variant last:border-0 last:mb-0 last:pb-0">
<div className="flex justify-between items-start mb-1">
<span className="font-data-sm text-data-sm text-text-muted uppercase">RES-2023-B2</span>
<span className="font-data-sm text-data-sm text-danger uppercase font-bold">Rejected</span>
</div>
<h4 className="font-label-md text-label-md text-primary mb-1">Budget Allocation: Park Expansion</h4>
<div className="w-full bg-surface-variant h-2 mt-2 flex">
<div className="bg-primary-container h-full" style={{ width: "45%", }}></div>
<div className="bg-danger h-full" style={{ width: "55%", }}></div>
</div>
<div className="flex justify-between mt-1">
<span className="font-data-sm text-data-sm text-on-surface-variant">45% Yea</span>
<span className="font-data-sm text-data-sm text-on-surface-variant">55% Nay</span>
</div>
</div>
</div>
<div className="h-[32px] border-t border-border bg-surface flex justify-center items-center px-stack-md hover:bg-surface-container-lowest cursor-pointer">
<span className="font-data-sm text-data-sm text-primary uppercase font-bold">View Archive</span>
</div>
</div>
</div>
</main>
{/* BottomNavBar Mobile */}
      </div>
    </AppLayout>
  );
}
