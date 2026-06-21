import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - DIGITAL VAULT" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Nav Sidebar (Desktop) */}
<nav className="hidden md:flex flex-col h-screen w-[240px] bg-primary text-on-primary border-r border-outline-variant fixed left-0 top-0 py-stack-lg z-50">
<div className="px-margin-desktop mb-stack-lg">
<h1 className="font-headline-lg text-headline-lg text-on-primary">CivicSetu</h1>
</div>
<div className="flex items-center px-margin-desktop mb-stack-lg">
<div className="w-10 h-10 bg-primary-container rounded-none flex items-center justify-center mr-3">
<span className="font-data-md text-data-md text-on-primary-container">SR</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-primary uppercase">S. RAJESH KUMAR</p>
<p className="font-data-sm text-data-sm text-on-primary/70 uppercase">ID: GOV-8829-01</p>
</div>
</div>
<div className="flex flex-col h-full mt-stack-md">
{/* Active Tab: Issued (Closest match to Digital Vault/Documents) */}
<a className="flex items-center px-margin-desktop py-stack-sm bg-primary-container text-on-primary-container border-l-4 border-secondary transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined mr-3">folder_shared</span>
<span className="font-body-md text-body-md">My Certificates</span>
</a>
<a className="flex items-center px-margin-desktop py-stack-sm text-on-primary/70 hover:bg-primary-fixed-dim/10 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined mr-3">cloud_upload</span>
<span className="font-body-md text-body-md">DigiLocker Drive</span>
</a>
<a className="flex items-center px-margin-desktop py-stack-sm text-on-primary/70 hover:bg-primary-fixed-dim/10 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined mr-3">history_edu</span>
<span className="font-body-md text-body-md">Activity Logs</span>
</a>
<a className="flex items-center px-margin-desktop py-stack-sm text-on-primary/70 hover:bg-primary-fixed-dim/10 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined mr-3">account_balance</span>
<span className="font-body-md text-body-md">Department Links</span>
</a>
<a className="flex items-center px-margin-desktop py-stack-sm text-on-primary/70 hover:bg-primary-fixed-dim/10 transition-all duration-200 ease-in-out mt-auto" href="#">
<span className="material-symbols-outlined mr-3">contact_support</span>
<span className="font-body-md text-body-md">Support</span>
</a>
</div>
</nav>
{/* Main Content Canvas */}
<main className="flex-1 md:ml-[240px] pb-24 md:pb-0">
{/* Status Rail (Top) */}
<div className="h-rail-height bg-surface border-b border-border flex items-center justify-between px-margin-mobile md:px-margin-desktop w-full top-0 sticky z-40">
<div className="flex items-center gap-4">
<span className="font-data-sm text-data-sm text-text-muted uppercase">SECURE VAULT: ACTIVE</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase hidden sm:inline">ENCRYPTION: AES-256</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-success"></span>
<span className="font-data-sm text-data-sm text-text-muted uppercase">SYSTEM ONLINE</span>
</div>
</div>
{/* TopAppBar (Mobile/Desktop Header) */}

{/* Search Bar Mobile */}
<div className="sm:hidden px-margin-mobile py-stack-sm bg-surface border-b border-border">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">search</span>
<input className="pl-10 pr-4 py-2 border border-border sharp-corners font-body-md text-body-md bg-surface text-on-surface focus:outline-none focus:border-primary-container focus:border-2 transition-all w-full placeholder-text-muted" placeholder="Search documents..." type="text"/>
</div>
</div>
<div className="p-margin-mobile md:p-margin-desktop max-w-7xl mx-auto space-y-8">
{/* Linked Identities Section */}
<section>
<div className="flex justify-between items-end mb-stack-md">
<div>
<h2 className="font-headline-md text-headline-md text-primary">Linked Identities</h2>
<p className="font-body-md text-body-md text-text-muted mt-1">Core identity documents verified by state authority.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
{/* Aadhaar Card */}
<div className="bg-surface border border-border sharp-corners shadow-lift p-stack-md flex flex-col relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-primary-fixed-dim/10 -mr-8 -mt-8 rotate-45 transform"></div>
<div className="flex justify-between items-start mb-stack-lg relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container text-on-primary flex items-center justify-center sharp-corners">
<span className="material-symbols-outlined">badge</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Aadhaar Card</h3>
<span className="font-data-sm text-data-sm text-text-muted uppercase">UIDAI • GOV OF INDIA</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 bg-success/10 text-success border border-success/20 sharp-corners font-data-sm text-data-sm uppercase">
                                Verified
                            </span>
</div>
<div className="mb-stack-lg">
<p className="font-data-md text-data-md text-primary tracking-widest">XXXX-XXXX-8829</p>
<p className="font-data-sm text-data-sm text-text-muted mt-1 uppercase">S. RAJESH KUMAR</p>
</div>
<div className="mt-auto pt-stack-sm border-t border-border flex justify-end">
<button className="font-label-sm text-label-sm text-primary uppercase hover:bg-surface-container-low px-3 py-1.5 transition-colors sharp-corners border border-transparent hover:border-border">View Document</button>
</div>
</div>
{/* PAN Card */}
<div className="bg-surface border border-border sharp-corners shadow-lift p-stack-md flex flex-col relative overflow-hidden">
<div className="flex justify-between items-start mb-stack-lg relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container text-on-primary flex items-center justify-center sharp-corners">
<span className="material-symbols-outlined">credit_card</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wide">PAN Card</h3>
<span className="font-data-sm text-data-sm text-text-muted uppercase">INCOME TAX DEPT</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 bg-success/10 text-success border border-success/20 sharp-corners font-data-sm text-data-sm uppercase">
                                Verified
                            </span>
</div>
<div className="mb-stack-lg">
<p className="font-data-md text-data-md text-primary tracking-widest">ABCDE1234F</p>
<p className="font-data-sm text-data-sm text-text-muted mt-1 uppercase">S. RAJESH KUMAR</p>
</div>
<div className="mt-auto pt-stack-sm border-t border-border flex justify-end">
<button className="font-label-sm text-label-sm text-primary uppercase hover:bg-surface-container-low px-3 py-1.5 transition-colors sharp-corners border border-transparent hover:border-border">View Document</button>
</div>
</div>
</div>
</section>
{/* Issued Documents Section */}
<section>
<div className="flex justify-between items-end mb-stack-md border-b border-border pb-stack-sm">
<div>
<h2 className="font-headline-md text-headline-md text-primary">Issued Documents</h2>
<p className="font-body-md text-body-md text-text-muted mt-1">Official certificates and records synced from departmental databases.</p>
</div>
<button className="hidden sm:flex items-center gap-2 font-label-md text-label-md bg-primary-container text-on-primary px-4 py-2 sharp-corners hover:bg-primary-fixed-variant transition-colors">
<span className="material-symbols-outlined text-sm">add</span>
                        Fetch Document
                    </button>
</div>
<div className="bg-surface border border-border shadow-lift sharp-corners">
{/* List Header (Desktop) */}
<div className="hidden md:grid grid-cols-12 gap-4 p-stack-sm border-b border-border bg-surface-container-low font-data-sm text-data-sm text-text-muted uppercase">
<div className="col-span-5 pl-2">Document Name</div>
<div className="col-span-3">Issuing Authority</div>
<div className="col-span-2">Date Issued</div>
<div className="col-span-2 text-right pr-2">Actions</div>
</div>
{/* List Items */}
<div className="divide-y divide-border">
{/* Item 1: Driving License */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-stack-md items-center hover:bg-surface-bright transition-colors group">
<div className="col-span-1 md:col-span-5 flex items-center gap-3">
<div className="w-8 h-8 bg-surface-dim flex items-center justify-center sharp-corners border border-border shrink-0">
<span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "18px", }}>directions_car</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface uppercase">Driving License</h4>
<p className="font-data-sm text-data-sm text-text-muted md:hidden mt-0.5">MINISTRY OF ROAD TRANSPORT • 12 JAN 2021</p>
<p className="font-data-sm text-data-sm text-primary md:hidden mt-1">DL-14-2021-9982</p>
</div>
</div>
<div className="hidden md:block col-span-3">
<span className="font-data-sm text-data-sm text-on-surface uppercase">Min. of Road Transport</span>
<p className="font-data-sm text-data-sm text-primary mt-0.5">DL-14-2021-9982</p>
</div>
<div className="hidden md:block col-span-2">
<span className="font-data-sm text-data-sm text-on-surface">12 JAN 2021</span>
</div>
<div className="col-span-1 md:col-span-2 flex justify-end gap-2">
<button className="p-1.5 text-text-muted hover:text-primary hover:bg-surface-container border border-transparent hover:border-border sharp-corners transition-colors" title="Download">
<span className="material-symbols-outlined" style={{ fontSize: "20px", }}>download</span>
</button>
<button className="p-1.5 text-text-muted hover:text-primary hover:bg-surface-container border border-transparent hover:border-border sharp-corners transition-colors" title="Share">
<span className="material-symbols-outlined" style={{ fontSize: "20px", }}>share</span>
</button>
<button className="p-1.5 text-text-muted hover:text-primary hover:bg-surface-container border border-transparent hover:border-border sharp-corners transition-colors" title="View details">
<span className="material-symbols-outlined" style={{ fontSize: "20px", }}>chevron_right</span>
</button>
</div>
</div>
{/* Item 2: COVID Vaccine */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-stack-md items-center hover:bg-surface-bright transition-colors group">
<div className="col-span-1 md:col-span-5 flex items-center gap-3">
<div className="w-8 h-8 bg-surface-dim flex items-center justify-center sharp-corners border border-border shrink-0">
<span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "18px", }}>vaccines</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface uppercase">COVID-19 Vaccination Certificate</h4>
<p className="font-data-sm text-data-sm text-text-muted md:hidden mt-0.5">MINISTRY OF HEALTH • 05 AUG 2021</p>
<p className="font-data-sm text-data-sm text-primary md:hidden mt-1">COV-992-110</p>
</div>
</div>
<div className="hidden md:block col-span-3">
<span className="font-data-sm text-data-sm text-on-surface uppercase">Min. of Health</span>
<p className="font-data-sm text-data-sm text-primary mt-0.5">COV-992-110</p>
</div>
<div className="hidden md:block col-span-2">
<span className="font-data-sm text-data-sm text-on-surface">05 AUG 2021</span>
</div>
<div className="col-span-1 md:col-span-2 flex justify-end gap-2">
<button className="p-1.5 text-text-muted hover:text-primary hover:bg-surface-container border border-transparent hover:border-border sharp-corners transition-colors" title="Download">
<span className="material-symbols-outlined" style={{ fontSize: "20px", }}>download</span>
</button>
<button className="p-1.5 text-text-muted hover:text-primary hover:bg-surface-container border border-transparent hover:border-border sharp-corners transition-colors" title="Share">
<span className="material-symbols-outlined" style={{ fontSize: "20px", }}>share</span>
</button>
<button className="p-1.5 text-text-muted hover:text-primary hover:bg-surface-container border border-transparent hover:border-border sharp-corners transition-colors" title="View details">
<span className="material-symbols-outlined" style={{ fontSize: "20px", }}>chevron_right</span>
</button>
</div>
</div>
{/* Item 3: Income Certificate */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-stack-md items-center hover:bg-surface-bright transition-colors group">
<div className="col-span-1 md:col-span-5 flex items-center gap-3">
<div className="w-8 h-8 bg-surface-dim flex items-center justify-center sharp-corners border border-border shrink-0">
<span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "18px", }}>request_quote</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface uppercase">Income Certificate</h4>
<p className="font-data-sm text-data-sm text-text-muted md:hidden mt-0.5">REVENUE DEPARTMENT • 18 MAR 2023</p>
<p className="font-data-sm text-data-sm text-primary md:hidden mt-1">INC-TN-23-441</p>
</div>
</div>
<div className="hidden md:block col-span-3">
<span className="font-data-sm text-data-sm text-on-surface uppercase">Revenue Department</span>
<p className="font-data-sm text-data-sm text-primary mt-0.5">INC-TN-23-441</p>
</div>
<div className="hidden md:block col-span-2">
<span className="font-data-sm text-data-sm text-on-surface">18 MAR 2023</span>
</div>
<div className="col-span-1 md:col-span-2 flex justify-end gap-2">
<button className="p-1.5 text-text-muted hover:text-primary hover:bg-surface-container border border-transparent hover:border-border sharp-corners transition-colors" title="Download">
<span className="material-symbols-outlined" style={{ fontSize: "20px", }}>download</span>
</button>
<button className="p-1.5 text-text-muted hover:text-primary hover:bg-surface-container border border-transparent hover:border-border sharp-corners transition-colors" title="Share">
<span className="material-symbols-outlined" style={{ fontSize: "20px", }}>share</span>
</button>
<button className="p-1.5 text-text-muted hover:text-primary hover:bg-surface-container border border-transparent hover:border-border sharp-corners transition-colors" title="View details">
<span className="material-symbols-outlined" style={{ fontSize: "20px", }}>chevron_right</span>
</button>
</div>
</div>
</div>
{/* Prominent List Action */}
<div className="p-stack-md border-t border-border bg-surface-container-low flex justify-center">
<button className="flex items-center gap-2 font-label-md text-label-md text-primary uppercase hover:text-primary-container transition-colors py-2 px-4 border border-border sharp-corners bg-surface hover:bg-surface-bright">
<span className="material-symbols-outlined text-sm">post_add</span>
                            Add New Document
                        </button>
</div>
</div>
</section>
</div>
</main>
{/* Bottom Nav Bar (Mobile only) */}
      </div>
    </AppLayout>
  );
}
