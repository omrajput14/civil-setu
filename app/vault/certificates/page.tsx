import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CERTIFICATES &AMP; APPLICATIONS" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Web TopAppBar (Hidden on Mobile) */}

{/* Mobile TopAppBar */}

{/* Status Rail */}
<div className="w-full h-rail-height bg-surface border-b border-border flex items-center px-margin-mobile md:px-margin-desktop">
<span className="font-data-sm text-data-sm text-text-muted uppercase tracking-wider">2 ACTIVE · 1 READY FOR DOWNLOAD · WARD 4</span>
</div>
{/* Main Content Canvas */}
<main className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop pt-6 pb-12 space-y-stack-lg">
{/* Primary Action */}
<button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-lg" data-icon="add">add</span>
            New Application
        </button>
{/* ACTIVE APPLICATIONS SECTION */}
<section className="space-y-stack-md">
<h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-wider">ACTIVE APPLICATIONS</h2>
<div className="grid grid-cols-1 gap-stack-md">
{/* Card 1 */}
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 flex flex-col gap-3">
<div className="flex justify-between items-start">
<div>
<h3 className="font-body-md text-body-md font-medium text-primary">Agricultural Subsidy</h3>
<span className="font-data-sm text-data-sm text-text-muted mt-1 block">ID: SUB-2023-891A</span>
</div>
<span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded">IN PROGRESS</span>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-text-muted mb-1">
<span className="">Step 2 of 4: Verification</span>
<span className="">50%</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-1/2"></div>
</div>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 flex flex-col gap-3">
<div className="flex justify-between items-start">
<div>
<h3 className="font-body-md text-body-md font-medium text-primary">Income Certificate</h3>
<span className="font-data-sm text-data-sm text-text-muted mt-1 block">ID: INC-2024-1102</span>
</div>
<span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded">IN PROGRESS</span>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-text-muted mb-1">
<span className="">Step 1 of 3: Document Review</span>
<span className="">25%</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-1/4"></div>
</div>
</div>
</div>
</div>
</section>
{/* READY FOR DOWNLOAD SECTION */}
<section className="space-y-stack-md">
<h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-wider">READY FOR DOWNLOAD</h2>
<div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 flex flex-col gap-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-label-md text-[15px] font-semibold text-primary">Residence Certificate</h3>
<div className="flex items-center gap-2 mt-1">
<span className="font-data-sm text-data-sm text-text-muted">ID: RES-2024-0847</span>
<span className="text-text-muted text-xs">•</span>
<span className="font-data-sm text-data-sm text-text-muted">18 JUN 2026</span>
</div>
</div>
<span className="bg-success/10 text-success font-label-sm text-label-sm px-2 py-1 rounded">APPROVED</span>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary-container text-on-primary font-label-md text-label-md py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                        Download PDF
                    </button>
<button className="flex-1 border border-border text-primary font-label-md text-label-md py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="share">share</span>
                        Share
                    </button>
</div>
</div>
</section>
{/* PAST APPLICATIONS SECTION */}
<section className="space-y-stack-md">
<h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-wider">PAST APPLICATIONS</h2>
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] divide-y divide-border">
<div className="p-3 flex justify-between items-center opacity-75">
<div>
<h4 className="font-body-md text-[14px] text-text-muted">Character Certificate</h4>
<span className="font-data-sm text-[10px] text-text-muted">CHR-2023-5521</span>
</div>
<span className="bg-danger/10 text-danger font-label-sm text-[10px] px-2 py-0.5 rounded">REJECTED</span>
</div>
<div className="p-3 flex justify-between items-center opacity-75">
<div>
<h4 className="font-body-md text-[14px] text-text-muted">Trade License</h4>
<span className="font-data-sm text-[10px] text-text-muted">TRD-2022-1109</span>
</div>
<span className="bg-text-muted/10 text-text-muted font-label-sm text-[10px] px-2 py-0.5 rounded">EXPIRED</span>
</div>
</div>
</section>
</main>
{/* SideNav (Web) */}
