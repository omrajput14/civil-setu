import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - WATER SUPPLY SCHEDULE" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top App Bar */}

<main className="max-w-md mx-auto pb-xl">
{/* Visual Anchor: Large Header Area */}
<div className="bg-primary pt-12 pb-xl px-gutter text-center relative overflow-hidden">
{/* Subtle background pattern */}
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px", }}></div>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center p-4 border-4 border-primary-container shadow-sm mb-4">
<img alt="Water Supply Icon" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU2jz7yYIbA2rollwf4pBWYqMfxlFE4mkFcTAJvmChFrNIZkMfPn9PXzypOc1laRPX8ry5N2lyRhxLe0GmTYIvBpBDURyW8fbnaVMQs-9E7mK1QHB2xsZmIHb-Qk2hWW_c_5Yh9OZz7ua9ad3Q17oT_SbvfXNtro4Rc65H1RH-d6Cnw5LSi_npSNn0X8Q6iDCm97Bod02ChNgxExjXTy4qfDeb_Wq80UKlf2vFjMWpJrjuMVdrvrrejLCDm9eGDzgy_w5Z5yVdu8Tx"/>
</div>
<h2 className="text-on-primary font-display-lg-mobile text-display-lg-mobile tracking-tight">Water Supply Schedule</h2>
<div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-container text-on-secondary-fixed rounded-full text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[16px]">info</span>
                    Status: Regular Maintenance
                </div>
</div>
</div>
{/* Main Content Card */}
<div className="px-gutter -mt-6 relative z-20">
<div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
{/* Title & Location */}
<div className="p-md border-b border-outline-variant bg-surface-container-lowest">
<h3 className="font-headline-md text-headline-md text-primary mb-1">Water Supply Notice - Ward 04</h3>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-md">location_on</span>
<span className="font-body-md text-body-md">Sectors A, B, and C • Ward 04</span>
</div>
</div>
{/* Time Details */}
<div className="p-md flex items-start gap-4">
<div className="bg-primary-container rounded-lg p-3 text-on-primary flex flex-col items-center min-w-[64px]">
<span className="text-label-sm font-label-sm uppercase">Oct</span>
<span className="text-headline-md font-bold">22</span>
</div>
<div className="flex-1">
<p className="font-label-md text-label-md text-primary">Scheduled Time Window</p>
<p className="font-headline-sm text-headline-sm">6:00 AM - 9:00 AM</p>
<p className="text-on-surface-variant font-body-md text-body-md mt-1 italic">Expected duration: 3 Hours</p>
</div>
</div>
{/* Instructions */}
<div className="p-md bg-surface-container-low mx-md mb-md rounded-lg border border-outline-variant">
<h4 className="font-label-md text-label-md text-primary mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-md">description</span>
                        Detailed Instructions
                    </h4>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        Maintenance work completed. Full pressure will be restored in all sectors. Please store sufficient water for morning needs. We recommend keeping taps closed during the first 10 minutes of restoration to avoid air-lock in pipes.
                    </p>
</div>
{/* Map Section */}
<div className="px-md mb-md">
<div className="rounded-lg border border-outline-variant overflow-hidden relative h-48 map-container">
<div className="absolute inset-0 z-0" data-alt="A clean, minimalist administrative map of a city's residential sector, labeled Ward 04. The map uses a sophisticated professional palette of CivicSetu navy blues and soft grays. Boundaries are clearly marked with a high-contrast stroke, and key utility points are highlighted with subtle icons. The lighting is bright and uniform, suggesting a digital interface designed for clarity and governance." data-location="Ward 04" style={{ backgroundImage: "url('https", }}></div>
<div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
<div className="bg-surface px-4 py-2 rounded-full border border-primary shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-primary">zoom_in</span>
<span className="font-label-md text-label-md text-primary">Affected Area View</span>
</div>
</div>
</div>
</div>
{/* Actions */}
<div className="p-md flex flex-col gap-3">
<button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg active:scale-[0.98] transition-transform duration-100 flex items-center justify-center gap-2">
<span className="material-symbols-outlined">alarm</span>
                        Set Reminder
                    </button>
<button className="w-full border border-primary text-primary font-label-md text-label-md py-3 rounded-lg active:scale-[0.98] transition-transform duration-100 flex items-center justify-center gap-2 hover:bg-surface-container-low">
<span className="material-symbols-outlined">group</span>
                        Share with Neighbors
                    </button>
</div>
</div>
</div>
{/* Secondary Info Cards */}
<div className="px-gutter mt-lg grid grid-cols-2 gap-4">
<div className="bg-surface border border-outline-variant p-md rounded-xl">
<span className="material-symbols-outlined text-primary mb-2">call</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Emergency Helpline</p>
<p className="font-label-md text-label-md text-primary mt-1">1800-444-2024</p>
</div>
<div className="bg-surface border border-outline-variant p-md rounded-xl">
<span className="material-symbols-outlined text-primary mb-2">history</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Last Update</p>
<p className="font-label-md text-label-md text-primary mt-1">10 Minutes ago</p>
</div>
</div>
<div className="px-gutter mt-xl">
<div className="bg-surface-variant/30 border border-dashed border-outline rounded-xl p-md text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
                    Found an issue with your supply?
                </p>
<button className="mt-2 text-primary font-label-md text-label-md flex items-center justify-center gap-1 mx-auto">
                    Report Outage <span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</main>
{/* Bottom Navigation Mockup (Filtered for detail view: Not required by instructions but common) */}
{/* Suppressed per "The Shell Visibility & Relevance (THE FILTER)" Rule: Task-Focused sub-page with Back action. */}
      </div>
    </AppLayout>
  );
}
