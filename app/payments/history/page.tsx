import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="PAYMENT HISTORY - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* NavigationDrawer (Desktop) */}
<nav className="hidden md:flex flex-col h-full bg-primary text-on-primary font-label-md fixed left-0 top-0 w-[240px] border-r border-outline z-40">
<div className="h-16 flex items-center px-margin-desktop border-b border-on-primary/10">
<span className="font-headline-md text-headline-md text-on-primary font-bold tracking-tight">CITIZEN PORTAL</span>
</div>
<div className="p-stack-md flex items-center gap-stack-md border-b border-on-primary/10">
<div className="w-10 h-10 bg-on-primary/10 flex items-center justify-center border border-on-primary/20">
<span className="material-symbols-outlined text-on-primary">person</span>
</div>
<div>
<div className="font-data-md text-data-md text-on-primary">CITIZEN-09241</div>
<div className="font-label-sm text-label-sm text-on-primary/70">Verified Profile</div>
</div>
</div>
<div className="flex-1 py-stack-md overflow-y-auto">
<a className="flex items-center gap-stack-md px-margin-desktop py-stack-sm text-on-primary/70 hover:text-on-primary hover:bg-primary-container transition-all cursor-pointer" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Payments Hub</span>
</a>
<a className="flex items-center gap-stack-md px-margin-desktop py-stack-sm bg-secondary-container text-on-secondary-container border-l-4 border-secondary font-bold hover:bg-primary-container transition-all cursor-pointer" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span>Bill History</span>
</a>
<a className="flex items-center gap-stack-md px-margin-desktop py-stack-sm text-on-primary/70 hover:text-on-primary hover:bg-primary-container transition-all cursor-pointer" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span>Payment Methods</span>
</a>
<a className="flex items-center gap-stack-md px-margin-desktop py-stack-sm text-on-primary/70 hover:text-on-primary hover:bg-primary-container transition-all cursor-pointer" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</div>
<div className="h-rail-height bg-on-primary/5 flex items-center px-margin-desktop border-t border-on-primary/10">
<span className="font-data-sm text-data-sm text-on-primary/50 uppercase tracking-widest">SYSTEM ACTIVE</span>
</div>
</nav>
{/* TopAppBar */}

{/* Main Content Canvas */}
<main className="pt-[80px] md:pt-margin-desktop px-margin-mobile md:px-margin-desktop pb-[100px] md:pb-margin-desktop max-w-5xl mx-auto space-y-stack-lg">
{/* Page Header & Actions */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-md">
<div>
<h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Payment History</h2>
<p className="font-body-md text-body-md text-text-muted mt-1">Archive of all processed civic transactions.</p>
</div>
<div className="flex items-center gap-stack-sm w-full md:w-auto">
<div className="relative w-full md:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">search</span>
<input className="w-full bg-surface border border-border text-on-surface font-body-md text-body-md pl-10 pr-4 py-2 focus:outline-none focus:ring-0 focus:border-primary placeholder:text-text-muted transition-colors" placeholder="Search by ID or service..." type="text"/>
</div>
</div>
</div>
{/* Filters & Summary Rail */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-stack-md bg-surface border border-border shadow-elevation-1 p-stack-sm">
<div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 lg:pb-0">
<button className="px-4 py-1.5 bg-primary text-on-primary font-label-md text-label-md border border-primary whitespace-nowrap transition-colors">All Services</button>
<button className="px-4 py-1.5 bg-surface text-primary font-label-md text-label-md border border-border hover:bg-surface-container-low whitespace-nowrap transition-colors">Water</button>
<button className="px-4 py-1.5 bg-surface text-primary font-label-md text-label-md border border-border hover:bg-surface-container-low whitespace-nowrap transition-colors">Electricity</button>
<button className="px-4 py-1.5 bg-surface text-primary font-label-md text-label-md border border-border hover:bg-surface-container-low whitespace-nowrap transition-colors">Taxes</button>
</div>
<div className="flex items-center justify-between lg:justify-end gap-stack-md px-2 border-t lg:border-t-0 lg:border-l border-border pt-2 lg:pt-0 lg:pl-stack-md">
<span className="font-data-sm text-data-sm text-text-muted uppercase">This Month</span>
<span className="font-data-lg text-data-lg text-on-surface leading-none">₹12,450</span>
</div>
</div>
{/* High-Density Transaction List */}
<div className="bg-surface border border-border shadow-elevation-1">
<div className="h-rail-height bg-surface flex items-center px-stack-md border-b border-border">
<span className="font-data-sm text-data-sm text-text-muted uppercase w-12 hidden md:block">TYPE</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase flex-1">SERVICE DETAILS</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase w-32 hidden sm:block">STATUS</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase w-32 text-right">AMOUNT</span>
<span className="w-10"></span>
</div>
<div className="divide-y divide-border">
{/* Item 1 */}
<div className="group flex items-center p-stack-md hover:bg-surface-container-lowest transition-colors cursor-pointer">
<div className="w-12 hidden md:flex">
<div className="w-8 h-8 bg-surface-container-high border border-border flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[18px]">water_drop</span>
</div>
</div>
<div className="flex-1 pr-stack-md">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-on-surface">Water Utility Bill - Q3</span>
<span className="md:hidden px-1.5 py-0.5 bg-success/10 text-success border border-success/20 font-data-sm text-[10px] uppercase tracking-wider">SUCCESS</span>
</div>
<div className="flex items-center gap-3 font-data-sm text-data-sm text-text-muted">
<span>24 OCT 2023</span>
<span className="text-border">|</span>
<span>TXN-88921-A</span>
</div>
</div>
<div className="w-32 hidden sm:flex">
<span className="px-2 py-1 bg-success/10 text-success border border-success/20 font-data-sm text-data-sm uppercase tracking-wider inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span> SUCCESS
                        </span>
</div>
<div className="w-32 text-right font-data-md text-data-md text-on-surface">
                        ₹1,250.00
                    </div>
<div className="w-10 flex justify-end">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">chevron_right</span>
</div>
</div>
{/* Item 2 */}
<div className="group flex items-center p-stack-md hover:bg-surface-container-lowest transition-colors cursor-pointer">
<div className="w-12 hidden md:flex">
<div className="w-8 h-8 bg-surface-container-high border border-border flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[18px]">account_balance</span>
</div>
</div>
<div className="flex-1 pr-stack-md">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-on-surface">Property Tax - FY 2023-24</span>
<span className="md:hidden px-1.5 py-0.5 bg-success/10 text-success border border-success/20 font-data-sm text-[10px] uppercase tracking-wider">SUCCESS</span>
</div>
<div className="flex items-center gap-3 font-data-sm text-data-sm text-text-muted">
<span>15 OCT 2023</span>
<span className="text-border">|</span>
<span>TXN-77210-P</span>
</div>
</div>
<div className="w-32 hidden sm:flex">
<span className="px-2 py-1 bg-success/10 text-success border border-success/20 font-data-sm text-data-sm uppercase tracking-wider inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span> SUCCESS
                        </span>
</div>
<div className="w-32 text-right font-data-md text-data-md text-on-surface">
                        ₹8,500.00
                    </div>
<div className="w-10 flex justify-end">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">chevron_right</span>
</div>
</div>
{/* Item 3 */}
<div className="group flex items-center p-stack-md hover:bg-surface-container-lowest transition-colors cursor-pointer">
<div className="w-12 hidden md:flex">
<div className="w-8 h-8 bg-surface-container-high border border-border flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[18px]">electric_bolt</span>
</div>
</div>
<div className="flex-1 pr-stack-md">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-on-surface">Electricity Board - SEP</span>
<span className="md:hidden px-1.5 py-0.5 bg-success/10 text-success border border-success/20 font-data-sm text-[10px] uppercase tracking-wider">SUCCESS</span>
</div>
<div className="flex items-center gap-3 font-data-sm text-data-sm text-text-muted">
<span>02 OCT 2023</span>
<span className="text-border">|</span>
<span>TXN-66104-E</span>
</div>
</div>
<div className="w-32 hidden sm:flex">
<span className="px-2 py-1 bg-success/10 text-success border border-success/20 font-data-sm text-data-sm uppercase tracking-wider inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span> SUCCESS
                        </span>
</div>
<div className="w-32 text-right font-data-md text-data-md text-on-surface">
                        ₹2,700.00
                    </div>
<div className="w-10 flex justify-end">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">chevron_right</span>
</div>
</div>
{/* Item 4 */}
<div className="group flex items-center p-stack-md hover:bg-surface-container-lowest transition-colors cursor-pointer bg-surface-bright border-l-4 border-l-warning">
<div className="w-12 hidden md:flex">
<div className="w-8 h-8 bg-surface-container-high border border-border flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[18px]">directions_car</span>
</div>
</div>
<div className="flex-1 pr-stack-md">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-on-surface">Vehicle Registration Renewal</span>
<span className="md:hidden px-1.5 py-0.5 bg-warning/10 text-warning border border-warning/20 font-data-sm text-[10px] uppercase tracking-wider">PENDING</span>
</div>
<div className="flex items-center gap-3 font-data-sm text-data-sm text-text-muted">
<span>28 SEP 2023</span>
<span className="text-border">|</span>
<span>TXN-55099-V</span>
</div>
</div>
<div className="w-32 hidden sm:flex">
<span className="px-2 py-1 bg-warning/10 text-warning border border-warning/20 font-data-sm text-data-sm uppercase tracking-wider inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">pending</span> PENDING
                        </span>
</div>
<div className="w-32 text-right font-data-md text-data-md text-on-surface">
                        ₹1,500.00
                    </div>
<div className="w-10 flex justify-end">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">chevron_right</span>
</div>
</div>
</div>
<div className="p-stack-md border-t border-border flex justify-center">
<button className="px-6 py-2 bg-surface text-primary font-label-md text-label-md border border-border hover:bg-surface-container-low transition-colors flex items-center gap-2">
<span>Load More Records</span>
<span className="material-symbols-outlined text-[18px]">expand_more</span>
</button>
</div>
</div>
</main>
{/* BottomNavBar (Mobile) */}
      </div>
    </AppLayout>
  );
}
