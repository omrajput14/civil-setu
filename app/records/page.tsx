import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="PUBLIC RECORDS - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top AppBar (Mobile Variant) */}

{/* Main Content Canvas */}
<main className="pt-[124px] pb-24 px-md space-y-xl">
{/* Category: Vital Statistics */}
<section>
<h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Vital Statistics</h2>
<div className="grid grid-cols-1 gap-sm">
{/* Birth Certificates */}
<div className="bg-surface border border-outline-variant p-md rounded-lg flex items-start gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="p-2 bg-primary-fixed rounded text-primary">
<span className="material-symbols-outlined">description</span>
</div>
<div className="flex-1">
<h3 className="font-label-md text-label-md text-on-surface font-semibold">Birth Certificates</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Digital copies of registered birth records.</p>
</div>
</div>
{/* Death Certificates */}
<div className="bg-surface border border-outline-variant p-md rounded-lg flex items-start gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="p-2 bg-primary-fixed rounded text-primary">
<span className="material-symbols-outlined">history_edu</span>
</div>
<div className="flex-1">
<h3 className="font-label-md text-label-md text-on-surface font-semibold">Death Certificates</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Access official registry of deaths.</p>
</div>
</div>
</div>
</section>
{/* Category: Land & Property */}
<section>
<h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Land &amp; Property</h2>
<div className="grid grid-cols-1 gap-sm">
{/* Land Records */}
<div className="bg-surface border border-outline-variant p-md rounded-lg flex items-start gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="p-2 bg-primary-fixed rounded text-primary">
<span className="material-symbols-outlined">landscape</span>
</div>
<div className="flex-1">
<h3 className="font-label-md text-label-md text-on-surface font-semibold">Land Records</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Ownership maps and tenancy documents.</p>
</div>
</div>
{/* House Tax */}
<div className="bg-surface border border-outline-variant p-md rounded-lg flex items-start gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="p-2 bg-primary-fixed rounded text-primary">
<span className="material-symbols-outlined">account_balance</span>
</div>
<div className="flex-1">
<h3 className="font-label-md text-label-md text-on-surface font-semibold">House Tax</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Property assessments and payment history.</p>
</div>
</div>
</div>
</section>
{/* Category: Financials */}
<section>
<h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Financials</h2>
<div className="grid grid-cols-1 gap-sm">
<div className="bg-surface border border-outline-variant p-md rounded-lg flex items-start gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="p-2 bg-primary-fixed rounded text-primary">
<span className="material-symbols-outlined">assessment</span>
</div>
<div className="flex-1">
<h3 className="font-label-md text-label-md text-on-surface font-semibold">Gram Panchayat Budget</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Annual financial planning and allocation.</p>
</div>
</div>
<div className="bg-surface border border-outline-variant p-md rounded-lg flex items-start gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="p-2 bg-primary-fixed rounded text-primary">
<span className="material-symbols-outlined">receipt_long</span>
</div>
<div className="flex-1">
<h3 className="font-label-md text-label-md text-on-surface font-semibold">Audit Reports</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Official audits for the current fiscal year.</p>
</div>
</div>
</div>
</section>
{/* Category: Administrative */}
<section>
<h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Administrative</h2>
<div className="grid grid-cols-1 gap-sm">
<div className="bg-surface border border-outline-variant p-md rounded-lg flex items-start gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="p-2 bg-primary-fixed rounded text-primary">
<span className="material-symbols-outlined">event</span>
</div>
<div className="flex-1">
<h3 className="font-label-md text-label-md text-on-surface font-semibold">Meeting Minutes</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Records from the recent Gram Sabha.</p>
</div>
</div>
<div className="bg-surface border border-outline-variant p-md rounded-lg flex items-start gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="p-2 bg-primary-fixed rounded text-primary">
<span className="material-symbols-outlined">foundation</span>
</div>
<div className="flex-1">
<h3 className="font-label-md text-label-md text-on-surface font-semibold">Tenders</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Active and closed public infrastructure bids.</p>
</div>
</div>
</div>
</section>
{/* Popular Documents */}
<section className="pb-md">
<h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-md">Popular Documents</h2>
<div className="space-y-sm">
<div className="bg-surface border border-outline-variant rounded-lg p-md flex items-center justify-between">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary">file_download</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold">2023-24 Budget Plan</span>
<span className="text-[12px] text-outline">PDF • 2.4 MB</span>
</div>
</div>
<button className="px-md py-sm bg-surface border border-outline-variant text-primary font-label-md text-label-md rounded active:bg-surface-container-low transition-colors">
                        View
                    </button>
</div>
<div className="bg-surface border border-outline-variant rounded-lg p-md flex items-center justify-between">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary">file_download</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold">Village Master Plan</span>
<span className="text-[12px] text-outline">JPEG • 5.1 MB</span>
</div>
</div>
<button className="px-md py-sm bg-surface border border-outline-variant text-primary font-label-md text-label-md rounded active:bg-surface-container-low transition-colors">
                        View
                    </button>
</div>
</div>
</section>
</main>
{/* Bottom Navigation Bar */}
<nav className="sticky bottom-0 left-0 w-full h-16 bg-surface border-t border-outline-variant flex justify-around items-center z-50">
<button aria-label="Map" className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined">map</span>
<span className="font-label-sm text-[10px] uppercase mt-1">Map</span>
</button>
<button aria-label="Tasks" className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined">assignment</span>
<span className="font-label-sm text-[10px] uppercase mt-1">Tasks</span>
</button>
<button aria-label="Reports" className="flex flex-col items-center justify-center text-secondary font-bold active:scale-95 transition-transform">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", }}>assessment</span>
<span className="font-label-sm text-[10px] uppercase mt-1">Reports</span>
</button>
<button aria-label="Profile" className="flex flex-col items-center justify-center text-on-surface-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-[10px] uppercase mt-1">Profile</span>
</button>
</nav>
      </div>
    </AppLayout>
  );
}
