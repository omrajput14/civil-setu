import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CONTRACTOR PORTFOLIO | CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top App Bar */}

<main className="max-w-screen-md mx-auto p-gutter space-y-xl">
{/* Contractor Identity Header */}
<section className="bg-surface-container-lowest p-md border border-outline-variant rounded-xl flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-xl bg-surface-container-high border border-outline-variant mb-md flex items-center justify-center relative">
<img className="w-16 h-16 object-contain opacity-80" data-alt="A professional corporate logo for an infrastructure construction company, featuring bold geometric shapes and clean lines. The logo is rendered in a deep navy blue and crisp white palette, reflecting reliability and authority in civil engineering. High-contrast studio lighting emphasizes the sleek 2D graphic design, set against a subtle gray-toned background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDXpuCQPVi56fd2E8fA6cx0Kd1hrSLSHKNze5ekfNRTV3RONwoyCSYp1OZAtH7AeFUiEJZ6KRMC-LveSvHw-VWrUjawuIW1BY72dwKNRFPUsCPHMCELVLYVGCnYfzecv1usNistNjmUkWXg-RZrztQv2qVlzCHv3z38haZHOTshz8VYesXU63fxHQgkNMkxnVtnox_nE3t-kWqs8Ri69Cz_apxzRIttGdaqpYefcWhLLzwClVgxYjMaO907OKGrb_x0k4WMf6F6ojR"/>
<div className="absolute -bottom-2 -right-2 bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-sm border border-secondary">
<span className="material-symbols-outlined text-[14px]" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1", }}>verified</span>
<span className="font-label-sm text-label-sm uppercase">Verified</span>
</div>
</div>
<h2 className="font-headline-md text-headline-md text-primary mb-xs">Apex Rural Infra Ltd.</h2>
<p className="font-body-md text-on-surface-variant mb-md">Specializing in Sustainable Road &amp; Bridge Infrastructure</p>
<div className="flex gap-sm">
<div className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm rounded-lg flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="gavel">gavel</span> Grade A
                </div>
<div className="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded-lg flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="location_on">location_on</span> State-wide
                </div>
</div>
</section>
{/* Summary Statistics Bento */}
<section className="grid grid-cols-2 gap-md">
<div className="bg-primary-container text-on-primary-container p-md rounded-xl col-span-2 flex justify-around">
<div className="text-center">
<div className="font-headline-md text-headline-md text-white">12+</div>
<div className="font-label-sm text-label-sm text-on-primary-container/80">Years Service</div>
</div>
<div className="w-px h-full bg-outline-variant opacity-20"></div>
<div className="text-center">
<div className="font-headline-md text-headline-md text-white">48</div>
<div className="font-label-sm text-label-sm text-on-primary-container/80">Projects Done</div>
</div>
<div className="w-px h-full bg-outline-variant opacity-20"></div>
<div className="text-center">
<div className="font-headline-md text-headline-md text-white">98%</div>
<div className="font-label-sm text-label-sm text-on-primary-container/80">Completion</div>
</div>
</div>
<div className="bg-white border border-outline-variant p-md rounded-xl flex flex-col justify-center">
<span className="material-symbols-outlined text-secondary mb-xs" data-icon="schedule">schedule</span>
<div className="font-headline-sm text-headline-sm">18.2 Mo.</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Avg. Timeline</div>
</div>
<div className="bg-white border border-outline-variant p-md rounded-xl flex flex-col justify-center">
<span className="material-symbols-outlined text-tertiary mb-xs" data-icon="star_rate">star_rate</span>
<div className="font-headline-sm text-headline-sm">4.8 / 5.0</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Govt Rating</div>
</div>
</section>
{/* Ongoing Projects */}
<section>
<div className="flex items-center justify-between mb-md">
<h3 className="font-headline-sm text-headline-sm text-primary">Ongoing Projects</h3>
<span className="text-primary font-label-md text-label-md cursor-pointer">View Map</span>
</div>
<div className="space-y-md">
{/* Project 1 */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden">
<div className="p-md">
<div className="flex justify-between items-start mb-sm">
<h4 className="font-headline-sm text-headline-sm leading-tight">Gram Panchayat Link Road Expansion</h4>
<span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] px-2 py-0.5 rounded font-bold uppercase">Active</span>
</div>
<div className="flex items-center gap-xs text-on-surface-variant font-body-md text-body-md mb-md">
<span className="material-symbols-outlined text-[16px]" data-icon="location_on">location_on</span>
                            Khandwa District, Sector 4
                        </div>
<div className="space-y-xs">
<div className="flex justify-between font-label-sm text-label-sm">
<span>Construction Progress</span>
<span className="text-primary">65%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ width: "65%", }}></div>
</div>
</div>
</div>
</div>
{/* Project 2 */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden">
<div className="p-md">
<div className="flex justify-between items-start mb-sm">
<h4 className="font-headline-sm text-headline-sm leading-tight">Canal Bridge - Village Amra</h4>
<span className="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-0.5 rounded font-bold uppercase">Procurement</span>
</div>
<div className="flex items-center gap-xs text-on-surface-variant font-body-md text-body-md mb-md">
<span className="material-symbols-outlined text-[16px]" data-icon="location_on">location_on</span>
                            Hoshangabad Division
                        </div>
<div className="space-y-xs">
<div className="flex justify-between font-label-sm text-label-sm">
<span>Project Phase</span>
<span className="text-primary">12%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ width: "12%", }}></div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Past Performance List */}
<section>
<h3 className="font-headline-sm text-headline-sm text-primary mb-md">Past Performance</h3>
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden divide-y divide-outline-variant">
<div className="p-md flex justify-between items-center">
<div>
<div className="font-headline-sm text-headline-sm">Solar Street Lighting Phase II</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Completed Jan 2023 • Budget ₹4.2 Cr</div>
</div>
<div className="flex flex-col items-end">
<div className="flex text-secondary">
<span className="material-symbols-outlined text-[18px]" data-icon="star" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" data-icon="star" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" data-icon="star" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" data-icon="star" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" data-icon="star" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary">On-Time</span>
</div>
</div>
<div className="p-md flex justify-between items-center">
<div>
<div className="font-headline-sm text-headline-sm">Panchayat Bhavan Renovation</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Completed Sep 2022 • Budget ₹85 L</div>
</div>
<div className="flex flex-col items-end">
<div className="flex text-secondary">
<span className="material-symbols-outlined text-[18px]" data-icon="star" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" data-icon="star" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" data-icon="star" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" data-icon="star" style={{ fontVariationSettings: "'FILL' 1", }}>star</span>
<span className="material-symbols-outlined text-[18px]" data-icon="star_outline">star_outline</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Late (15d)</span>
</div>
</div>
</div>
</section>
{/* Certifications */}
<section>
<h3 className="font-headline-sm text-headline-sm text-primary mb-md">Official Certifications</h3>
<div className="grid grid-cols-1 gap-sm">
<div className="bg-surface-container-low border border-outline-variant p-md rounded-xl flex items-center gap-md">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-outline-variant text-primary">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm">ISO 9001:2015</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Quality Management System Certification</div>
</div>
<span className="material-symbols-outlined ml-auto text-on-surface-variant" data-icon="open_in_new">open_in_new</span>
</div>
<div className="bg-surface-container-low border border-outline-variant p-md rounded-xl flex items-center gap-md">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-outline-variant text-primary">
<span className="material-symbols-outlined" data-icon="license">license</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm">A-Grade Public Works License</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Reg No: MH/PWD/4452/2023</div>
</div>
<span className="material-symbols-outlined ml-auto text-on-surface-variant" data-icon="open_in_new">open_in_new</span>
</div>
</div>
</section>
</main>
{/* Sticky Bottom Actions */}
<div className="sticky bottom-0 left-0 w-full bg-surface border-t border-outline-variant p-gutter flex gap-md z-50">
<button className="flex-1 h-12 bg-white border border-primary text-primary font-label-md text-label-md rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[20px]" data-icon="mail">mail</span>
            Official Inquiry
        </button>
<button className="flex-1 h-12 bg-primary text-white font-label-md text-label-md rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[20px]" data-icon="call">call</span>
            Contact Now
        </button>
</div>
{/* Bottom Navigation (Shared Component Mock) */}
