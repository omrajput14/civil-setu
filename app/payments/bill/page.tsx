import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CITIZEN PORTAL - BILL DETAILS" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar (Mobile) */}

{/* NavigationDrawer (Desktop) - Hidden because it's a detail view */}
<aside className="hidden md:flex flex-col h-full fixed left-0 top-0 w-[240px] bg-primary dark:bg-on-primary-fixed border-r border-outline z-40">
{/* Drawer Header */}
<div className="p-gutter border-b border-outline/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden flex-shrink-0">
<img alt="Citizen Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a citizen in a well-lit, modern setting. The style is crisp, clean, and corporate, fitting a government portal profile picture. The lighting is bright and evenly distributed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrZYuNGaegizIri40uRTya1DQn5ADn54xmSu6WJo-R9VdM8c3B9ZFOLh1d_H1tkwoJ9laa6gjRSim-ys0l5VSqPSQmYeRbUmGoQ8iJvEUNPQ2kbAA_ArdqudZi3u_UEms64lqA62mB65WqODQ4VtkaJvqOj4suYcSkP7Pqb82T5wCxP52EkzvXwYnxc5jFnxoEB2727Z2wNiGdLFtJXWTlR1QcCcb3i2iuaMcy_-IqxvBsfqMKS7IlQ9AjqE96DRcIzIeZgB0Nb0yn"/>
</div>
<div>
<div className="font-label-md text-label-md text-on-primary">CITIZEN-09241</div>
<div className="font-data-sm text-data-sm text-on-primary/70 uppercase">Verified Profile</div>
</div>
</div>
</div>
{/* Navigation Items */}
<nav className="flex-1 py-stack-md flex flex-col gap-1">
<a className="px-gutter py-3 flex items-center gap-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container transition-all cursor-pointer" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Payments Hub</span>
</a>
{/* Active State */}
<a className="px-gutter py-3 flex items-center gap-3 bg-secondary-container text-on-secondary-container border-l-4 border-secondary font-bold cursor-pointer hover:bg-primary-container transition-all" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-label-md text-label-md">Bill History</span>
</a>
<a className="px-gutter py-3 flex items-center gap-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container transition-all cursor-pointer" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="font-label-md text-label-md">Payment Methods</span>
</a>
<a className="px-gutter py-3 flex items-center gap-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container transition-all cursor-pointer" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</nav>
{/* System Status */}
<div className="p-gutter border-t border-outline/20 bg-primary-container/50">
<div className="font-data-sm text-data-sm text-on-primary/70 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-success"></span>
                SYSTEM ACTIVE
            </div>
</div>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 mt-16 md:mt-0 md:ml-[240px] p-margin-mobile md:p-margin-desktop bg-background pb-32">
{/* Back Navigation (Desktop) */}
<div className="hidden md:flex items-center gap-2 mb-stack-lg text-text-muted cursor-pointer hover:text-primary transition-colors w-fit">
<span className="material-symbols-outlined text-sm">arrow_back</span>
<span className="font-label-md text-label-md">Return to Bill History</span>
</div>
<div className="max-w-4xl mx-auto space-y-stack-lg">
{/* Header Module */}

{/* Main Data Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Left Column: Financials & CTA */}
<div className="md:col-span-7 space-y-stack-lg">
{/* Amount Summary Card */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-elevation-1 overflow-hidden flex flex-col">
<div className="p-stack-lg border-b border-border flex-1 flex flex-col justify-center bg-surface-bright">
<div className="font-label-sm text-label-sm text-text-muted uppercase mb-2">Total Amount Due</div>
<div className="font-data-lg text-[48px] leading-[56px] text-primary flex items-baseline gap-2">
<span className="text-headline-md text-text-muted font-normal">$</span>
                                4,250.00
                            </div>
<div className="font-body-md text-body-md text-danger mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">warning</span>
                                Due in 14 Days (Oct 31, 2023)
                            </div>
</div>
{/* Breakdown Grid */}
<div className="grid grid-cols-3 bg-surface divide-x divide-border">
<div className="p-gutter">
<div className="font-label-sm text-label-sm text-text-muted mb-1">Principal</div>
<div className="font-data-md text-data-md text-on-surface">$4,100.00</div>
</div>
<div className="p-gutter">
<div className="font-label-sm text-label-sm text-text-muted mb-1">Interest</div>
<div className="font-data-md text-data-md text-on-surface">$50.00</div>
</div>
<div className="p-gutter">
<div className="font-label-sm text-label-sm text-text-muted mb-1">Penalties</div>
<div className="font-data-md text-data-md text-on-surface">$100.00</div>
</div>
</div>
</section>
{/* Payment Action Area */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-elevation-1 p-stack-lg">
<h2 className="font-headline-md text-headline-md text-primary mb-stack-md">Payment Options</h2>
{/* Payment Methods List */}
<div className="space-y-2 mb-stack-lg">
<label className="flex items-center justify-between p-gutter border border-primary/20 bg-primary/5 rounded cursor-pointer">
<div className="flex items-center gap-3">
<input checked="" className="text-primary focus:ring-primary h-4 w-4 border-outline" name="payment_method" type="radio"/>
<span className="material-symbols-outlined text-primary">account_balance</span>
<div>
<div className="font-label-md text-label-md text-on-surface">ACH Bank Transfer</div>
<div className="font-body-sm text-[13px] text-text-muted">No processing fee</div>
</div>
</div>
</label>
<label className="flex items-center justify-between p-gutter border border-border hover:border-outline-variant bg-surface rounded cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<input className="text-primary focus:ring-primary h-4 w-4 border-outline" name="payment_method" type="radio"/>
<span className="material-symbols-outlined text-text-muted">credit_card</span>
<div>
<div className="font-label-md text-label-md text-on-surface">Credit / Debit Card</div>
<div className="font-body-sm text-[13px] text-text-muted">2.9% processing fee applies</div>
</div>
</div>
</label>
</div>
<button className="w-full bg-primary-container text-on-primary py-4 px-6 rounded flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-elevation-1 font-label-md text-label-md uppercase tracking-wide">
<span className="material-symbols-outlined text-sm">lock</span>
                            Pay $4,250.00 Now
                        </button>
<div className="mt-4 font-body-sm text-[12px] text-text-muted text-center flex justify-center items-center gap-1">
<span className="material-symbols-outlined text-[14px]">shield</span>
                            Secure, encrypted transaction via GovPay
                        </div>
</section>
</div>
{/* Right Column: Details & Metadata */}
<div className="md:col-span-5 space-y-stack-lg">
{/* Property Details Card */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-elevation-1">
<div className="p-gutter border-b border-border bg-surface-bright flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">real_estate_agent</span>
<h2 className="font-label-md text-label-md text-primary uppercase">Assessment Basis</h2>
</div>
<div className="p-gutter space-y-4">
{/* Property Info Map / Image */}
<div className="w-full h-32 bg-surface-variant border border-border rounded overflow-hidden relative mb-4">
<div className="bg-cover bg-center w-full h-full absolute inset-0" data-alt="A clean, high-contrast overhead satellite map view of a suburban property lot. The styling is muted with deep navy UI overlays, fitting a modern government GIS application. The specific lot is highlighted with a subtle yellow outline." style={{ backgroundImage: "url('https", }}></div>
<div className="absolute bottom-2 right-2 bg-surface/90 border border-border px-2 py-1 font-data-sm text-[10px] text-primary z-10 backdrop-blur-sm">PARCEL: 849-B</div>
</div>
<ul className="space-y-3 font-body-md text-body-md">
<li className="flex justify-between items-baseline border-b border-border/50 pb-2">
<span className="text-text-muted">Property Area</span>
<span className="font-data-md text-data-md text-on-surface">2,450 sq ft</span>
</li>
<li className="flex justify-between items-baseline border-b border-border/50 pb-2">
<span className="text-text-muted">Usage Type</span>
<span className="font-label-md text-label-md text-on-surface">Residential (R-1)</span>
</li>
<li className="flex justify-between items-baseline border-b border-border/50 pb-2">
<span className="text-text-muted">Assessed Value</span>
<span className="font-data-md text-data-md text-on-surface">$425,000</span>
</li>
<li className="flex justify-between items-baseline pb-1">
<span className="text-text-muted">Millage Rate</span>
<span className="font-data-md text-data-md text-on-surface">1.0%</span>
</li>
</ul>
</div>
{/* Status Rail (Internal) */}
<div className="h-rail-height bg-surface-container-low border-t border-border px-gutter flex items-center justify-between font-data-sm text-[11px] text-text-muted uppercase">
<span>Valuation Date: Jan 1, 2023</span>
<span>Ref: VAL-8821</span>
</div>
</section>
{/* Metadata Card */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-elevation-1">
<div className="p-gutter border-b border-border bg-surface-bright flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">history</span>
<h2 className="font-label-md text-label-md text-primary uppercase">Record Metadata</h2>
</div>
<div className="p-gutter grid grid-cols-2 gap-4">
<div>
<div className="font-label-sm text-label-sm text-text-muted mb-1 uppercase">Last Paid</div>
<div className="font-data-md text-data-md text-on-surface">12 Jun 2023</div>
<div className="font-body-sm text-[12px] text-text-muted mt-1">Receipt: <a className="text-primary hover:underline" href="#">#RCP-912</a></div>
</div>
<div>
<div className="font-label-sm text-label-sm text-text-muted mb-1 uppercase">Next Assessment</div>
<div className="font-data-md text-data-md text-on-surface">Apr 2024</div>
<div className="font-body-sm text-[12px] text-text-muted mt-1">Est. Change: +1.2%</div>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
{/* BottomNavBar (Mobile) */}
      </div>
    </AppLayout>
  );
}
