import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="AUTOPAY CONFIGURATION" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar (Desktop) */}

{/* TopAppBar (Mobile) */}

<main className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
<div className="hidden md:block mb-stack-lg mt-stack-md">
<h1 className="font-headline-lg text-headline-lg text-on-surface">Autopay Configuration</h1>
<p className="font-body-md text-body-md text-text-muted mt-stack-sm">Configure automatic payments for recurring civic bills.</p>
</div>
{/* Linked Account Card */}
<section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] mb-stack-lg rounded-none">
<div className="h-rail-height bg-surface border-b border-border flex items-center px-stack-md justify-between">
<span className="font-data-sm text-data-sm uppercase text-text-muted tracking-widest">Linked Account</span>
<span className="bg-success/10 text-success font-data-sm text-data-sm px-2 py-0.5 uppercase tracking-widest border border-success/20">Verified</span>
</div>
<div className="p-stack-md flex items-center gap-stack-md">
<div className="w-12 h-12 bg-background border border-border flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1", }}>account_balance</span>
</div>
<div className="flex-grow">
<h3 className="font-label-md text-label-md text-on-surface">HDFC Bank</h3>
<p className="font-data-md text-data-md text-text-muted mt-1">•••• •••• •••• 8821</p>
</div>
<button className="font-label-md text-label-md text-primary border border-border px-stack-md py-stack-sm bg-surface hover:bg-background transition-colors rounded-none">Change</button>
</div>
</section>
{/* Active Services List */}
<section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] mb-stack-lg rounded-none">
<div className="h-rail-height bg-surface border-b border-border flex items-center px-stack-md">
<span className="font-data-sm text-data-sm uppercase text-text-muted tracking-widest">Active Services</span>
</div>
<div className="divide-y divide-border">
{/* Service Item 1 */}
<div className="p-stack-md flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
<div className="flex items-center gap-stack-md">
<div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-none shrink-0">
<span className="material-symbols-outlined text-primary">water_drop</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Water Utility - PMC</h4>
<p className="font-body-md text-body-md text-text-muted text-sm mt-0.5">Quarterly Billing</p>
</div>
</div>
<div className="flex flex-row items-center justify-between sm:justify-end gap-stack-md w-full sm:w-auto">
<div className="flex flex-col">
<label className="font-data-sm text-data-sm uppercase text-text-muted tracking-widest mb-1 block">Max Limit (₹)</label>
<input className="font-data-md text-data-md text-right border border-border bg-surface w-24 h-8 px-2 rounded-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" type="text" defaultValue="1500.00" />
</div>
<div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in mt-4">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface border-4 border-primary appearance-none cursor-pointer z-10 transition-transform duration-200 ease-in-out right-0 focus:outline-none" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="toggle1"></label>
</div>
</div>
</div>
{/* Service Item 2 */}
<div className="p-stack-md flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
<div className="flex items-center gap-stack-md">
<div className="w-10 h-10 bg-warning/10 flex items-center justify-center rounded-none shrink-0">
<span className="material-symbols-outlined text-warning">bolt</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Electricity Board - MSEDCL</h4>
<p className="font-body-md text-body-md text-text-muted text-sm mt-0.5">Monthly Billing</p>
</div>
</div>
<div className="flex flex-row items-center justify-between sm:justify-end gap-stack-md w-full sm:w-auto">
<div className="flex flex-col">
<label className="font-data-sm text-data-sm uppercase text-text-muted tracking-widest mb-1 block">Max Limit (₹)</label>
<input className="font-data-md text-data-md text-right border border-border bg-surface w-24 h-8 px-2 rounded-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" type="text" defaultValue="3000.00" />
</div>
<div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in mt-4">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface border-4 border-border appearance-none cursor-pointer z-10 transition-transform duration-200 ease-in-out left-0 focus:outline-none" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-border cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="toggle2"></label>
</div>
</div>
</div>
</div>
</section>
{/* Payment Rules */}
<section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] mb-stack-lg rounded-none">
<div className="h-rail-height bg-surface border-b border-border flex items-center px-stack-md">
<span className="font-data-sm text-data-sm uppercase text-text-muted tracking-widest">Payment Rules</span>
</div>
<div className="p-stack-md">
<div className="flex flex-col md:flex-row md:items-end gap-stack-md">
<div className="flex-grow">
<label className="font-label-md text-label-md text-on-surface block mb-1">Global Monthly Ceiling</label>
<p className="font-body-md text-body-md text-text-muted text-sm mb-2">Maximum amount to be auto-debited across all services in a calendar month.</p>
</div>
<div className="relative flex-shrink-0 w-full md:w-48">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 font-data-md text-data-md text-text-muted">₹</span>
<input className="font-data-md text-data-md border border-border bg-surface w-full h-10 pl-8 pr-3 rounded-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-right" type="text" defaultValue="5000.00" />
</div>
</div>
</div>
</section>
{/* Security Footer & Action */}
<div className="mt-stack-lg mb-stack-lg flex flex-col gap-stack-md items-center text-center px-stack-md">
<div className="flex items-center gap-2 text-text-muted">
<span className="material-symbols-outlined text-sm">lock</span>
<span className="font-data-sm text-data-sm uppercase tracking-widest">Bank-grade 256-bit encryption active</span>
</div>
<button className="w-full md:w-auto bg-primary-container text-on-primary font-label-md text-label-md px-8 py-3 rounded-none hover:opacity-90 transition-opacity uppercase tracking-wide">
                Enable Automatic Payments
            </button>
</div>
</main>
{/* BottomNavBar */}
      </div>
    </AppLayout>
  );
}
