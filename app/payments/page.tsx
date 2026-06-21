import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - PAYMENTS HUB" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Navigation Drawer (Desktop) */}
<nav className="hidden md:flex flex-col h-full fixed left-0 top-0 w-[240px] bg-primary dark:bg-on-primary-fixed border-r border-outline z-40">
<div className="p-stack-md border-b border-outline/30">
<div className="font-headline-lg text-headline-lg text-on-primary mb-stack-sm">CIVICSETU</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-outline-variant/20 flex items-center justify-center text-on-primary font-data-sm">C9</div>
<div>
<div className="font-label-md text-label-md text-on-primary">CITIZEN-09241</div>
<div className="font-data-sm text-data-sm text-on-primary/70">Verified Profile</div>
</div>
</div>
</div>
<div className="flex-1 py-stack-md flex flex-col gap-2 px-stack-sm">
<a className="flex items-center gap-3 px-stack-sm py-2 bg-secondary-container text-on-secondary-container border-l-4 border-secondary font-bold font-label-md text-label-md cursor-pointer hover:bg-primary-container transition-all" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", }}>dashboard</span>
                Payments Hub
            </a>
<a className="flex items-center gap-3 px-stack-sm py-2 text-on-primary/70 hover:text-on-primary hover:bg-primary-container font-label-md text-label-md cursor-pointer transition-all" href="#">
<span className="material-symbols-outlined">receipt_long</span>
                Bill History
            </a>
<a className="flex items-center gap-3 px-stack-sm py-2 text-on-primary/70 hover:text-on-primary hover:bg-primary-container font-label-md text-label-md cursor-pointer transition-all" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
                Payment Methods
            </a>
<a className="flex items-center gap-3 px-stack-sm py-2 text-on-primary/70 hover:text-on-primary hover:bg-primary-container font-label-md text-label-md cursor-pointer transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</div>
<div className="h-rail-height bg-surface flex items-center px-stack-md border-t border-outline/30 mt-auto">
<span className="font-data-sm text-data-sm text-text-muted uppercase">SYSTEM ACTIVE</span>
</div>
</nav>
{/* Top App Bar (Mobile & Desktop) */}

{/* Main Content Canvas */}
<main className="flex-1 w-full mt-16 pb-20 md:pb-0 md:ml-[240px] p-margin-mobile md:p-margin-desktop bg-background flex flex-col gap-stack-lg">
{/* Top Section: Total Outstanding Balance */}
<section>
<div className="bg-surface border border-border p-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-stack-md kpi-card">
<div>
<h2 className="font-data-sm text-data-sm text-text-muted uppercase mb-2">Total Outstanding Balance</h2>
<div className="font-data-lg text-data-lg text-on-surface">₹ 4,250.00</div>
</div>
<div className="flex gap-stack-sm">
<button className="bg-primary-container text-on-primary px-4 py-2 font-label-md text-label-md border border-primary-container hover:opacity-90 transition-opacity">Pay All</button>
<button className="bg-surface text-primary-container px-4 py-2 font-label-md text-label-md border border-border hover:bg-surface-container-low transition-colors">Details</button>
</div>
</div>
{/* Status Rail */}
<div className="h-rail-height bg-surface border border-border border-t-0 flex items-center px-stack-sm">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Last updated: 14:32 IST | 3 Active Invoices</span>
</div>
</section>
{/* Categories: Horizontal Scroll */}
<section>
<h3 className="font-data-sm text-data-sm text-text-muted uppercase mb-stack-sm">Filter by Category</h3>
<div className="flex overflow-x-auto hide-scrollbar gap-stack-sm pb-2">
<button className="flex-shrink-0 bg-primary-container text-on-primary px-4 py-2 font-label-md text-label-md border border-primary-container">All</button>
<button className="flex-shrink-0 bg-surface text-on-surface px-4 py-2 font-label-md text-label-md border border-border hover:bg-surface-container-low transition-colors">Water</button>
<button className="flex-shrink-0 bg-surface text-on-surface px-4 py-2 font-label-md text-label-md border border-border hover:bg-surface-container-low transition-colors">Electricity</button>
<button className="flex-shrink-0 bg-surface text-on-surface px-4 py-2 font-label-md text-label-md border border-border hover:bg-surface-container-low transition-colors">Property Tax</button>
<button className="flex-shrink-0 bg-surface text-on-surface px-4 py-2 font-label-md text-label-md border border-border hover:bg-surface-container-low transition-colors">Waste</button>
<button className="flex-shrink-0 bg-surface text-on-surface px-4 py-2 font-label-md text-label-md border border-border hover:bg-surface-container-low transition-colors">Professional Tax</button>
</div>
</section>
{/* Bill Cards & Quick Actions Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
{/* Bill Cards List */}
<section className="lg:col-span-2 flex flex-col gap-stack-md">
<h3 className="font-data-sm text-data-sm text-text-muted uppercase">Active Bills</h3>
{/* Bill Card 1: Urgent */}
<div className="bg-surface border border-border p-stack-md flex flex-col md:flex-row justify-between gap-stack-md kpi-card relative">
{/* Urgent Badge */}
<div className="absolute top-0 right-0 bg-danger text-on-error px-2 py-1 font-data-sm text-data-sm uppercase transform translate-x-px -translate-y-px border border-danger">
                        DUE IN 2 DAYS
                    </div>
<div className="flex flex-col gap-2">
<div className="font-label-md text-label-md text-on-surface">MAHAVITARAN - Electricity</div>
<div className="flex items-center gap-4">
<div className="font-data-sm text-data-sm text-text-muted">Bill No: EL-2023-894</div>
<div className="font-data-sm text-data-sm text-text-muted">Due: 24 Oct 2023</div>
</div>
</div>
<div className="flex flex-col md:items-end justify-between">
<div className="font-data-md text-data-md text-on-surface">₹ 1,850.00</div>
<button className="mt-2 md:mt-0 text-primary font-label-sm text-label-sm uppercase hover:underline">Pay Now</button>
</div>
</div>
{/* Bill Card 2 */}
<div className="bg-surface border border-border p-stack-md flex flex-col md:flex-row justify-between gap-stack-md kpi-card">
<div className="flex flex-col gap-2">
<div className="font-label-md text-label-md text-on-surface">PMC - Property Tax</div>
<div className="flex items-center gap-4">
<div className="font-data-sm text-data-sm text-text-muted">Bill No: PT-2324-112</div>
<div className="font-data-sm text-data-sm text-text-muted">Due: 15 Nov 2023</div>
</div>
</div>
<div className="flex flex-col md:items-end justify-between">
<div className="font-data-md text-data-md text-on-surface">₹ 2,400.00</div>
<button className="mt-2 md:mt-0 text-primary font-label-sm text-label-sm uppercase hover:underline">Pay Now</button>
</div>
</div>
</section>
{/* Quick Actions */}
<section className="flex flex-col gap-stack-md">
<h3 className="font-data-sm text-data-sm text-text-muted uppercase">Quick Actions</h3>
<div className="grid grid-cols-1 gap-2">
<button className="bg-surface border border-border p-stack-sm flex items-center gap-3 hover:bg-surface-container-low transition-colors text-left kpi-card">
<span className="material-symbols-outlined text-primary-container">flash_on</span>
<span className="font-label-md text-label-md text-on-surface">Quick Pay</span>
</button>
<button className="bg-surface border border-border p-stack-sm flex items-center gap-3 hover:bg-surface-container-low transition-colors text-left kpi-card">
<span className="material-symbols-outlined text-primary-container">history</span>
<span className="font-label-md text-label-md text-on-surface">View History</span>
</button>
<button className="bg-surface border border-border p-stack-sm flex items-center gap-3 hover:bg-surface-container-low transition-colors text-left kpi-card">
<span className="material-symbols-outlined text-primary-container">autorenew</span>
<span className="font-label-md text-label-md text-on-surface">Manage Autopay</span>
</button>
</div>
{/* Informational Graphic Placeholder */}
<div className="mt-auto border border-border bg-surface p-stack-sm kpi-card">
<div className="bg-cover bg-center w-full h-32 border border-outline-variant/30 opacity-70 mb-2" data-alt="A stylized, technical line-art illustration of a smart meter or abstract data dashboard, light mode, navy blue lines on white background, conveying digital payment efficiency." style={{ backgroundImage: "url('https", }}></div>
<p className="font-data-sm text-data-sm text-text-muted">Set up Autopay to avoid late fees.</p>
</div>
</section>
</div>
</main>
{/* Bottom Navigation (Mobile Only) */}
      </div>
    </AppLayout>
  );
}
