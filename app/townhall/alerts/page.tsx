import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="COMMUNITY ALERTS - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top AppBar (JSON Source of Truth) */}

<main className="max-w-[1280px] mx-auto px-gutter py-md space-y-xl">
{/* Header Section */}
<section className="space-y-base">
<h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface">Community Alerts</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Active broadcasts for Ward 12, Municipal Area</p>
</section>
{/* Critical Alerts Section */}
<section className="space-y-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
                    Critical Alerts
                </h3>
<span className="font-label-sm text-label-sm text-error bg-error-container px-2 py-0.5 rounded-lg">1 Urgent</span>
</div>
{/* Urgent Card: Storm Warning */}
<div className="bg-surface border-2 border-error rounded-xl overflow-hidden shadow-sm relative group active:scale-[0.98] transition-transform duration-100">
<div className="bg-error h-1.5 w-full"></div>
<div className="p-md flex gap-md">
<div className="shrink-0">
<div className="w-12 h-12 rounded-lg bg-error-container flex items-center justify-center">
<img alt="Storm Cloud Icon" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU2jz7yYIbA2rollwf4pBWYqMfxlFE4mkFcTAJvmChFrNIZkMfPn9PXzypOc1laRPX8ry5N2lyRhxLe0GmTYIvBpBDURyW8fbnaVMQs-9E7mK1QHB2xsZmIHb-Qk2hWW_c_5Yh9OZz7ua9ad3Q17oT_SbvfXNtro4Rc65H1RH-d6Cnw5LSi_npSNn0X8Q6iDCm97Bod02ChNgxExjXTy4qfDeb_Wq80UKlf2vFjMWpJrjuMVdrvrrejLCDm9eGDzgy_w5Z5yVdu8Tx"/>
</div>
</div>
<div className="space-y-xs flex-1">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-error font-bold uppercase">Severe Weather</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">10m ago</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Storm Warning (High Priority)</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Severe thunderstorm expected in the next 2 hours. Citizens are advised to stay indoors and secure outdoor equipment.</p>
<div className="pt-sm flex gap-sm">
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2">
                                View Advisory
                                <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/* General Updates Section */}
<section className="space-y-md">
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="info">info</span>
                General Updates
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
{/* Update Card: Water Supply */}
<div className="bg-surface border border-outline-variant rounded-xl p-md flex gap-md hover:bg-surface-container-low transition-colors duration-200">
<div className="shrink-0">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
<img alt="Water Drop Icon" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU2jz7yYIbA2rollwf4pBWYqMfxlFE4mkFcTAJvmChFrNIZkMfPn9PXzypOc1laRPX8ry5N2lyRhxLe0GmTYIvBpBDURyW8fbnaVMQs-9E7mK1QHB2xsZmIHb-Qk2hWW_c_5Yh9OZz7ua9ad3Q17oT_SbvfXNtro4Rc65H1RH-d6Cnw5LSi_npSNn0X8Q6iDCm97Bod02ChNgxExjXTy4qfDeb_Wq80UKlf2vFjMWpJrjuMVdrvrrejLCDm9eGDzgy_w5Z5yVdu8Tx"/>
</div>
</div>
<div className="space-y-xs flex-1">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase">Utilities</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">2h ago</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Water Supply Schedule</h4>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
<p className="font-label-md text-label-md">Tomorrow 6 AM - 9 AM</p>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Regular maintenance completed. Water supply will resume as per the scheduled morning slot.</p>
</div>
</div>
{/* Update Card: Health Camp */}
<div className="bg-surface border border-outline-variant rounded-xl p-md flex gap-md hover:bg-surface-container-low transition-colors duration-200">
<div className="shrink-0">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
<img alt="Medical Cross Icon" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU2jz7yYIbA2rollwf4pBWYqMfxlFE4mkFcTAJvmChFrNIZkMfPn9PXzypOc1laRPX8ry5N2lyRhxLe0GmTYIvBpBDURyW8fbnaVMQs-9E7mK1QHB2xsZmIHb-Qk2hWW_c_5Yh9OZz7ua9ad3Q17oT_SbvfXNtro4Rc65H1RH-d6Cnw5LSi_npSNn0X8Q6iDCm97Bod02ChNgxExjXTy4qfDeb_Wq80UKlf2vFjMWpJrjuMVdrvrrejLCDm9eGDzgy_w5Z5yVdu8Tx"/>
</div>
</div>
<div className="space-y-xs flex-1">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase">Public Health</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">5h ago</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Free Health Camp</h4>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span>
<p className="font-label-md text-label-md">Oct 25 at Panchayat Bhavan</p>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Free general health checkup and consultation for all residents. Please bring your Aadhar card for registration.</p>
</div>
</div>
{/* Update Card: Road Maintenance (Static Example) */}
<div className="bg-surface border border-outline-variant rounded-xl p-md flex gap-md hover:bg-surface-container-low transition-colors duration-200 opacity-80">
<div className="shrink-0">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-2xl" data-icon="construction">construction</span>
</div>
</div>
<div className="space-y-xs flex-1">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase">Road Works</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Yesterday</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Road Resurfacing Work</h4>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="location_on">location_on</span>
<p className="font-label-md text-label-md">Main Market Street</p>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Expect traffic diversions near the Clock Tower. Alternative routes are active through Subhash Marg.</p>
</div>
</div>
</div>
</section>
</main>
{/* Bottom Navigation Bar (JSON Source of Truth) */}
<nav className="sticky bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-2 bg-surface border-t border-outline-variant">
{/* Home */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
{/* Services (ACTIVE) */}
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-1 active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="apps">apps</span>
<span className="font-label-sm text-label-sm">Services</span>
</a>
{/* Requests */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-sm text-label-sm">Requests</span>
</a>
{/* Profile */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-95 transition-transform duration-100" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
      </div>
    </AppLayout>
  );
}
