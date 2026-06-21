import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - SUPPORT CENTER" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar (Mobile Only per Layout Anchor) */}

{/* SideNav (Desktop Only per Layout Anchor) */}
<nav className="hidden md:flex flex-col w-[240px] bg-[#1A3A5C] text-white fixed top-0 left-0 h-full z-50 shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
<div className="flex items-center gap-4 p-margin-desktop border-b border-[#2A486B]">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
<h1 className="font-headline-md font-bold text-white">CivicSetu</h1>
</div>
<div className="flex-1 overflow-y-auto py-stack-md">
{/* Nav Items Mapping to JSON BottomNavBar intent */}
<a className="flex items-center gap-4 px-margin-desktop py-stack-md text-[#87a4cc] hover:bg-[#2A486B] transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md">Hub</span>
</a>
<a className="flex items-center gap-4 px-margin-desktop py-stack-md text-[#87a4cc] hover:bg-[#2A486B] transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="font-label-md">History</span>
</a>
<a className="flex items-center gap-4 px-margin-desktop py-stack-md text-[#87a4cc] hover:bg-[#2A486B] transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span className="font-label-md">Wallets</span>
</a>
<a className="flex items-center gap-4 px-margin-desktop py-stack-md text-white bg-[#2A486B] relative" href="#">
<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#D97706]"></div>
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md">Account</span>
</a>
</div>
</nav>
{/* Main Content Canvas */}
<main className="p-margin-mobile md:p-margin-desktop max-w-7xl mx-auto space-y-stack-lg">
{/* Page Header & Action */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-md">
<div>
<h2 className="font-headline-lg text-primary mb-stack-sm">Support Center</h2>
<p className="font-body-md text-text-muted">Manage active inquiries and access technical documentation.</p>
</div>
<div>
<button className="w-full md:w-auto bg-surface text-[#1A3A5C] border border-[#E5E7EB] font-label-md px-6 py-3 shadow-[0_1px_2px_rgba(17,24,39,0.06)] hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 uppercase tracking-wide">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                    Raise New Support Ticket
                </button>
</div>
</div>
{/* Search Bar */}
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex items-center p-4">
<span className="material-symbols-outlined text-text-muted mr-4" data-icon="search">search</span>
<input className="flex-1 bg-transparent border-none outline-none font-body-md text-on-surface placeholder:text-text-muted focus:ring-0 p-0" placeholder="Search for topics, guides..." type="text" />
</div>
{/* Quick Support Tiles (Bento Grid Style) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg hover:border-[#1A3A5C] transition-colors cursor-pointer group">
<div className="flex items-start justify-between mb-stack-md">
<span className="material-symbols-outlined text-primary group-hover:text-[#D97706] transition-colors text-[32px]" data-icon="payments">payments</span>
<span className="material-symbols-outlined text-text-muted" data-icon="arrow_forward">arrow_forward</span>
</div>
<h3 className="font-headline-md text-primary mb-2">Payment Issues</h3>
<p className="font-body-md text-text-muted">Resolve transaction failures and bill discrepancies.</p>
</div>
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg hover:border-[#1A3A5C] transition-colors cursor-pointer group">
<div className="flex items-start justify-between mb-stack-md">
<span className="material-symbols-outlined text-primary group-hover:text-[#D97706] transition-colors text-[32px]" data-icon="fact_check">fact_check</span>
<span className="material-symbols-outlined text-text-muted" data-icon="arrow_forward">arrow_forward</span>
</div>
<h3 className="font-headline-md text-primary mb-2">Scheme Eligibility</h3>
<p className="font-body-md text-text-muted">Check qualifications for civic programs and grants.</p>
</div>
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg hover:border-[#1A3A5C] transition-colors cursor-pointer group">
<div className="flex items-start justify-between mb-stack-md">
<span className="material-symbols-outlined text-primary group-hover:text-[#D97706] transition-colors text-[32px]" data-icon="folder_managed">folder_managed</span>
<span className="material-symbols-outlined text-text-muted" data-icon="arrow_forward">arrow_forward</span>
</div>
<h3 className="font-headline-md text-primary mb-2">Document Vault Help</h3>
<p className="font-body-md text-text-muted">Assistance with uploading and verifying IDs.</p>
</div>
</div>
{/* Main Workspace: Active Tickets & Documentation */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/* Active Tickets Module (Left 2/3) */}
<div className="lg:col-span-2 space-y-stack-md">
<div className="flex items-center justify-between border-b border-border pb-stack-sm">
<h3 className="font-label-md text-text-muted uppercase tracking-wider">Active Support Tickets</h3>
<div className="flex items-center gap-2 text-text-muted">
<span className="material-symbols-outlined text-[16px]" data-icon="sync">sync</span>
<span className="font-data-sm uppercase">Last sync: 2 min ago</span>
</div>
</div>
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] divide-y divide-border">
{/* Ticket 1 */}
<div className="p-stack-md hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="font-data-md text-[#1A3A5C] bg-[#e1e8fd] px-2 py-1">TKT-8821</span>
<h4 className="font-headline-md text-primary text-[18px]">Water Bill Discrepancy</h4>
</div>
<p className="font-body-md text-text-muted">Submitted on Oct 12, 2023 • Department of Water Services</p>
</div>
<div className="flex items-center gap-3">
<span className="bg-[#F59E0B] text-white font-data-sm uppercase px-2 py-1 rounded-sm">In Progress</span>
<span className="material-symbols-outlined text-text-muted" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</div>
{/* Ticket 2 */}
<div className="p-stack-md hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="font-data-md text-text-muted bg-[#F4F6F8] px-2 py-1">TKT-9920</span>
<h4 className="font-headline-md text-text-muted text-[18px]">Address Verification Delay</h4>
</div>
<p className="font-body-md text-text-muted">Submitted on Oct 05, 2023 • Civic Registration Office</p>
</div>
<div className="flex items-center gap-3">
<span className="bg-[#16A34A] text-white font-data-sm uppercase px-2 py-1 rounded-sm">Resolved</span>
<span className="material-symbols-outlined text-text-muted" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</div>
</div>
</div>
{/* Documentation Module (Right 1/3) */}
<div className="space-y-stack-md">
<div className="flex items-center justify-between border-b border-border pb-stack-sm">
<h3 className="font-label-md text-text-muted uppercase tracking-wider">Most Read Guides</h3>
</div>
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] divide-y divide-border">
<a className="flex items-center justify-between p-stack-md hover:bg-surface-container-low transition-colors group" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#1A3A5C] text-[20px]" data-icon="article">article</span>
<span className="font-body-md text-primary group-hover:text-[#1A3A5C]">Updating Residential Address</span>
</div>
<span className="material-symbols-outlined text-text-muted" data-icon="chevron_right">chevron_right</span>
</a>
<a className="flex items-center justify-between p-stack-md hover:bg-surface-container-low transition-colors group" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#1A3A5C] text-[20px]" data-icon="article">article</span>
<span className="font-body-md text-primary group-hover:text-[#1A3A5C]">Understanding Property Tax Brackets</span>
</div>
<span className="material-symbols-outlined text-text-muted" data-icon="chevron_right">chevron_right</span>
</a>
<a className="flex items-center justify-between p-stack-md hover:bg-surface-container-low transition-colors group" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#1A3A5C] text-[20px]" data-icon="article">article</span>
<span className="font-body-md text-primary group-hover:text-[#1A3A5C]">How to Renew Vehicle Registration</span>
</div>
<span className="material-symbols-outlined text-text-muted" data-icon="chevron_right">chevron_right</span>
</a>
<a className="flex items-center justify-between p-stack-md hover:bg-surface-container-low transition-colors group" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#1A3A5C] text-[20px]" data-icon="article">article</span>
<span className="font-body-md text-primary group-hover:text-[#1A3A5C]">Digital ID Verification Process</span>
</div>
<span className="material-symbols-outlined text-text-muted" data-icon="chevron_right">chevron_right</span>
</a>
</div>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only per Layout Anchor) */}
      </div>
    </AppLayout>
  );
}
