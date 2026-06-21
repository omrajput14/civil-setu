import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="COMMUNITY SUPPORT &AMP; RESOURCE MATCHING" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar (From JSON) */}

{/* Main Canvas */}
<main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
{/* Status Rail & Screen Title */}
<div className="flex flex-col gap-stack-sm mb-stack-md">
<div className="h-rail-height bg-surface border-y border-border flex items-center px-stack-md shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
<span className="font-data-sm text-data-sm uppercase text-outline tracking-widest">SYS.OP: EMERGENCY FLOW | MODULE: RESOURCE_MATCHING | STATUS: ACTIVE</span>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Community Support Matrix</h1>
<p className="font-body-md text-body-md text-text-muted mt-1 max-w-2xl">Real-time civilian resource allocation and critical needs matching. Verify physical assets before confirming digital commitments.</p>
</div>
</div>
{/* Section 1: URGENT BLOOD DONOR MATCHING */}
<section className="flex flex-col gap-stack-md">
<div className="flex items-center gap-2 border-b border-border pb-2">
<span className="material-symbols-outlined text-error text-[20px]" style={{ fontVariationSettings: "'FILL' 1", }}>water_drop</span>
<h2 className="font-label-md text-label-md uppercase text-primary tracking-wide">Urgent: Blood Donor Matching</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
{/* Blood Card 1 */}
<div className="bg-surface border border-border rounded p-stack-md flex flex-col justify-between shadow-[0_1px_2px_rgba(17,24,39,0.06)] relative overflow-hidden group hover:border-error transition-colors">
<div className="absolute top-0 right-0 w-1 h-full bg-error"></div>
<div>
<div className="flex justify-between items-start mb-2">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Type</span>
<span className="bg-error-container text-on-error-container font-data-sm text-data-sm px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Critical</span>
</div>
<div className="font-data-lg text-data-lg text-error leading-none mb-1">O-</div>
<div className="font-body-md text-body-md text-on-surface">3 Units Required</div>
</div>
<div className="mt-stack-md pt-stack-sm border-t border-border border-dashed">
<div className="font-data-sm text-data-sm text-outline uppercase mb-1">Loc: Ward 14, City Gen</div>
<button className="w-full py-1.5 border border-border text-primary font-label-sm text-label-sm uppercase hover:bg-surface-container-low transition-colors">Commit to Donate</button>
</div>
</div>
{/* Blood Card 2 */}
<div className="bg-surface border border-border rounded p-stack-md flex flex-col justify-between shadow-[0_1px_2px_rgba(17,24,39,0.06)] relative overflow-hidden hover:border-warning transition-colors">
<div className="absolute top-0 right-0 w-1 h-full bg-warning"></div>
<div>
<div className="flex justify-between items-start mb-2">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Type</span>
<span className="bg-surface-container text-warning font-data-sm text-data-sm px-1.5 py-0.5 rounded-sm uppercase tracking-wider border border-warning/20">High Pri</span>
</div>
<div className="font-data-lg text-data-lg text-primary leading-none mb-1">A+</div>
<div className="font-body-md text-body-md text-on-surface">1 Unit Required</div>
</div>
<div className="mt-stack-md pt-stack-sm border-t border-border border-dashed">
<div className="font-data-sm text-data-sm text-outline uppercase mb-1">Loc: Ward 02, Central</div>
<button className="w-full py-1.5 border border-border text-primary font-label-sm text-label-sm uppercase hover:bg-surface-container-low transition-colors">Commit to Donate</button>
</div>
</div>
{/* Blood Card 3 */}
<div className="bg-surface border border-border rounded p-stack-md flex flex-col justify-between shadow-[0_1px_2px_rgba(17,24,39,0.06)] relative overflow-hidden hover:border-warning transition-colors">
<div className="absolute top-0 right-0 w-1 h-full bg-warning"></div>
<div>
<div className="flex justify-between items-start mb-2">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Type</span>
<span className="bg-surface-container text-warning font-data-sm text-data-sm px-1.5 py-0.5 rounded-sm uppercase tracking-wider border border-warning/20">High Pri</span>
</div>
<div className="font-data-lg text-data-lg text-primary leading-none mb-1">B-</div>
<div className="font-body-md text-body-md text-on-surface">2 Units Required</div>
</div>
<div className="mt-stack-md pt-stack-sm border-t border-border border-dashed">
<div className="font-data-sm text-data-sm text-outline uppercase mb-1">Loc: Mobile Unit Alpha</div>
<button className="w-full py-1.5 border border-border text-primary font-label-sm text-label-sm uppercase hover:bg-surface-container-low transition-colors">Commit to Donate</button>
</div>
</div>
</div>
</section>
{/* Section 2: RESOURCE EXCHANGE */}
<section className="flex flex-col gap-stack-md">
<div className="flex items-center gap-2 border-b border-border pb-2">
<span className="material-symbols-outlined text-secondary-container text-[20px]" style={{ fontVariationSettings: "'FILL' 1", }}>sync_alt</span>
<h2 className="font-label-md text-label-md uppercase text-primary tracking-wide">Resource Exchange Ledger</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Exchange Card 1 */}
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex flex-col">
<div className="px-stack-md py-stack-sm border-b border-border bg-surface-container-lowest flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-data-md text-data-md text-primary font-bold">UID: 884-X</span>
</div>
{/* Verification Badge */}
<div className="flex items-center gap-1 px-1.5 py-0.5 bg-success/10 border border-success/30 rounded-sm">
<span className="material-symbols-outlined text-success text-[14px]" style={{ fontVariationSettings: "'FILL' 1", }}>verified</span>
<span className="font-data-sm text-data-sm text-success uppercase font-semibold">Verified Civic Vol</span>
</div>
</div>
<div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">
{/* HAVE */}
<div className="flex-1 p-stack-md bg-surface-bright">
<div className="font-data-sm text-data-sm text-outline uppercase mb-2 tracking-widest">Available (Have)</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center border border-border">
<span className="material-symbols-outlined text-primary">water_drop</span>
</div>
<div>
<div className="font-label-md text-label-md text-primary">Potable Water</div>
<div className="font-data-md text-data-md text-text-muted">QTY: 50 Liters</div>
</div>
</div>
</div>
{/* NEED */}
<div className="flex-1 p-stack-md bg-surface">
<div className="font-data-sm text-data-sm text-warning uppercase mb-2 tracking-widest font-bold">Requested (Need)</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center border border-border">
<span className="material-symbols-outlined text-warning">battery_charging_full</span>
</div>
<div>
<div className="font-label-md text-label-md text-primary">Power Banks</div>
<div className="font-data-md text-data-md text-text-muted">QTY: 2 (Min 10k mAh)</div>
</div>
</div>
</div>
</div>
<div className="p-stack-sm border-t border-border bg-surface-container-lowest">
<button className="w-full py-2 bg-primary-container text-on-primary font-label-md text-label-md uppercase hover:bg-primary-container/90 transition-colors">Initiate Exchange Protocol</button>
</div>
</div>
{/* Exchange Card 2 */}
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex flex-col">
<div className="px-stack-md py-stack-sm border-b border-border bg-surface-container-lowest flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-data-md text-data-md text-primary font-bold">UID: 219-B</span>
</div>
</div>
<div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">
{/* HAVE */}
<div className="flex-1 p-stack-md bg-surface-bright">
<div className="font-data-sm text-data-sm text-outline uppercase mb-2 tracking-widest">Available (Have)</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center border border-border">
<span className="material-symbols-outlined text-primary">medication</span>
</div>
<div>
<div className="font-label-md text-label-md text-primary">First Aid Kits</div>
<div className="font-data-md text-data-md text-text-muted">QTY: 5 Standard</div>
</div>
</div>
</div>
{/* NEED */}
<div className="flex-1 p-stack-md bg-surface">
<div className="font-data-sm text-data-sm text-warning uppercase mb-2 tracking-widest font-bold">Requested (Need)</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container flex items-center justify-center border border-border">
<span className="material-symbols-outlined text-warning">local_shipping</span>
</div>
<div>
<div className="font-label-md text-label-md text-primary">Transport Vehicle</div>
<div className="font-data-md text-data-md text-text-muted">REQ: 1 Hour (Cargo)</div>
</div>
</div>
</div>
</div>
<div className="p-stack-sm border-t border-border bg-surface-container-lowest">
<button className="w-full py-2 bg-primary-container text-on-primary font-label-md text-label-md uppercase hover:bg-primary-container/90 transition-colors">Initiate Exchange Protocol</button>
</div>
</div>
</div>
</section>
{/* Section 3: VOLUNTEER DISPATCH BY WARD */}
<section className="flex flex-col gap-stack-md">
<div className="flex items-center gap-2 border-b border-border pb-2">
<span className="material-symbols-outlined text-primary text-[20px]">engineering</span>
<h2 className="font-label-md text-label-md uppercase text-primary tracking-wide">Volunteer Dispatch &amp; Sign-up</h2>
</div>
<div className="flex flex-col gap-[2px] bg-border border border-border rounded overflow-hidden shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
{/* Ward Row 1 */}
<div className="bg-surface p-stack-md flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-sm hover:bg-surface-container-lowest transition-colors">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-primary">Sector Alpha / Ward 04</span>
<span className="bg-error/10 text-error font-data-sm text-data-sm px-1.5 py-0.5 rounded-sm border border-error/20">High Demand</span>
</div>
<div className="font-data-sm text-data-sm text-text-muted uppercase">Req: Debris Clearance (4 Pax), Traffic Routing (2 Pax)</div>
</div>
<button className="w-full md:w-auto px-6 py-2 border border-border text-primary font-label-md text-label-md uppercase hover:bg-surface-container-low transition-colors bg-surface-bright">Deploy to Ward</button>
</div>
{/* Ward Row 2 */}
<div className="bg-surface p-stack-md flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-sm hover:bg-surface-container-lowest transition-colors">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-primary">Sector Beta / Ward 12</span>
</div>
<div className="font-data-sm text-data-sm text-text-muted uppercase">Req: Supply Distribution (5 Pax)</div>
</div>
<button className="w-full md:w-auto px-6 py-2 border border-border text-primary font-label-md text-label-md uppercase hover:bg-surface-container-low transition-colors bg-surface-bright">Deploy to Ward</button>
</div>
</div>
</section>
</main>
{/* BottomNavBar (From JSON) - Active State on "Town Hall" (index 2) based on logic rules */}

{/* Desktop Sidebar mapping for Navigation Shell rules (Hidden on mobile, visible on md+) */}
{/* Applying structural logic: On WEB (hidden md:flex), use TopAppBar for full nav cluster or left Sidebar. 
         JSON dictates BottomNavBar for mobile. We will keep standard layout as requested, trusting responsive rules. */}
      </div>
    </AppLayout>
  );
}
