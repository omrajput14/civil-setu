import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - MEETING DETAILS" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top App Bar */}

<main className="max-w-[1280px] mx-auto p-gutter pb-xl">
{/* Hero Summary Section */}
<section className="bg-white border border-outline-variant rounded-xl p-lg mb-lg">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
<div>
<span className="text-secondary font-label-sm uppercase tracking-wider">Official Record</span>
<h2 className="font-display-lg text-display-lg text-primary mt-xs">Quarterly Gram Sabha - Q3 2023</h2>
<div className="flex flex-wrap gap-md mt-sm text-on-surface-variant">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span className="font-body-md">October 14, 2023</span>
</div>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span className="font-body-md">10:30 AM - 02:45 PM</span>
</div>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="font-body-md font-medium">Panchayat Bhawan, Block 7</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-xs">
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-md py-xs rounded text-label-sm">PUBLISHED</span>
<span className="text-label-sm text-outline">ID: GS-2023-09-442</span>
</div>
</div>
</section>
{/* Bento Layout for Records */}
<div className="bento-grid">
{/* Resolutions Section (8 Columns) */}
<div className="md:col-span-8 flex flex-col gap-md">
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden">
<div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
<h3 className="font-headline-sm text-primary">Resolutions Passed</h3>
<span className="text-label-sm text-on-surface-variant">3 Items</span>
</div>
<div className="divide-y divide-outline-variant">
{/* Item 1 */}
<div className="p-md hover:bg-surface-container-lowest transition-colors">
<div className="flex justify-between items-start mb-xs">
<h4 className="font-body-lg font-semibold text-on-surface">New Water Pipeline for Ward 4</h4>
<span className="px-sm py-xs bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-label-sm">Approved</span>
</div>
<p className="font-body-md text-on-surface-variant">Authorization for 1.2km pipeline extension to the East Hamlet. Budget allocated: ₹4.5L.</p>
<div className="mt-sm flex items-center gap-md">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-primary-container flex items-center justify-center text-[10px] text-white">JD</div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-secondary-container flex items-center justify-center text-[10px] text-white">MK</div>
</div>
<span className="text-label-sm text-outline italic">Proposed by Janardhan D.</span>
</div>
</div>
{/* Item 2 */}
<div className="p-md hover:bg-surface-container-lowest transition-colors">
<div className="flex justify-between items-start mb-xs">
<h4 className="font-body-lg font-semibold text-on-surface">Road Repair Budget Approval</h4>
<span className="px-sm py-xs bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-label-sm">Approved</span>
</div>
<p className="font-body-md text-on-surface-variant">Emergency repair works for Main Street following heavy monsoon damage. Immediate execution sanctioned.</p>
</div>
{/* Item 3 */}
<div className="p-md hover:bg-surface-container-lowest transition-colors">
<div className="flex justify-between items-start mb-xs">
<h4 className="font-body-lg font-semibold text-on-surface">Digital Literacy Program for Youth</h4>
<span className="px-sm py-xs bg-surface-container-highest text-on-surface-variant rounded text-label-sm">Pending</span>
</div>
<p className="font-body-md text-on-surface-variant">Proposal for community center computer lab. Deferred for next meeting due to technical review requirements.</p>
</div>
</div>
</div>
{/* Voting Breakdown */}
<div className="bg-white border border-outline-variant rounded-xl p-md">
<h3 className="font-headline-sm text-primary mb-md">Key Resolution Voting</h3>
<div className="space-y-lg">
<div>
<div className="flex justify-between items-center mb-xs">
<span className="font-label-md text-on-surface">Water Pipeline (Ward 4)</span>
<span className="font-label-md text-primary">82% Consensus</span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden flex">
<div className="bg-primary h-full" style={{ width: "72%", }} title="In Favor"></div>
<div className="bg-secondary-container h-full" style={{ width: "10%", }} title="Against"></div>
<div className="bg-outline-variant h-full" style={{ width: "18%", }} title="Abstained"></div>
</div>
<div className="flex gap-md mt-sm">
<div className="flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="text-label-sm text-outline">In Favor (102)</span>
</div>
<div className="flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-secondary-container"></div>
<span className="text-label-sm text-outline">Against (14)</span>
</div>
<div className="flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<span className="text-label-sm text-outline">Abstained (26)</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Side Panels (4 Columns) */}
<div className="md:col-span-4 flex flex-col gap-md">
{/* Attendance Stats */}
<div className="bg-white border border-outline-variant rounded-xl p-md">
<h3 className="font-headline-sm text-primary mb-md">Attendance Summary</h3>
<div className="flex items-center justify-between mb-lg">
<div>
<span className="text-display-lg font-bold text-primary">142</span>
<p className="text-label-sm text-outline">Total Members Present</p>
</div>
<div className="h-16 w-16 relative">
{/* Visual Ring Placeholder */}
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-low" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-width="8"></circle>
<circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="176" stroke-dashoffset="44" stroke-width="8"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">75%</span>
</div>
</div>
<div className="space-y-sm">
<div className="flex justify-between items-center text-body-md">
<span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-primary">person</span> Men</span>
<span className="font-semibold">68</span>
</div>
<div className="h-1.5 w-full bg-surface-container-low rounded-full">
<div className="bg-primary h-full rounded-full" style={{ width: "48%", }}></div>
</div>
<div className="flex justify-between items-center text-body-md">
<span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-secondary">person_4</span> Women</span>
<span className="font-semibold">54</span>
</div>
<div className="h-1.5 w-full bg-surface-container-low rounded-full">
<div className="bg-secondary-container h-full rounded-full" style={{ width: "38%", }}></div>
</div>
<div className="flex justify-between items-center text-body-md">
<span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-tertiary-container">person_2</span> Youth</span>
<span className="font-semibold">20</span>
</div>
<div className="h-1.5 w-full bg-surface-container-low rounded-full">
<div className="bg-tertiary-container h-full rounded-full" style={{ width: "14%", }}></div>
</div>
</div>
</div>
{/* Digital Verification */}
<div className="bg-white border border-outline-variant rounded-xl p-md">
<h3 className="font-headline-sm text-primary mb-md">Verification</h3>
<div className="space-y-lg">
<div className="flex items-start gap-md">
<div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center signature-stamp overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional digital stamp or circular ink seal in a blue-ink style on a white paper background, symbolizing administrative authority and verification for a government office in India. The seal has clear, sharp edges and looks authentic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnVMmyuGGAIf6nTXM3q8sXC7a5ApcYLHriNVT6CovKbzvGaDFMgZdwcoSK8nhoywG6itlZOoIjUZS054RIH-Yrp2EmeCRqaCHSZlpmx_XxtDvFsV_MrXo0i4Cxx0LfThkyYKtoE28-_JP1N9o_G0EsqCy6LbOkAO3CHsHMAXpAYdRbAZroY_98YXXln9bW0wMP966hI60yIguuixHD5vFWkvy9AkGaNFVCODozjtv8OtmbD2xb1m7BOt2YglM4voiBphzY3pBhcFfN"/>
</div>
<div>
<h4 className="font-label-md text-on-surface">Ram Swaroop Singh</h4>
<p className="text-label-sm text-outline">Sarpanch</p>
<div className="flex items-center gap-xs text-[10px] text-tertiary-container font-semibold mt-xs">
<span className="material-symbols-outlined text-[14px]">verified</span>
                                    DIGITALLY SIGNED
                                </div>
</div>
</div>
<div className="flex items-start gap-md">
<div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center signature-stamp overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A detailed scanned image of a formal administrative signature in black ink on a textured white background. The signature is elegant and authoritative, with a faint blue stamp partially overlapping it, representing a government secretary's validation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIljHY6hlyMpPBr7whao7MKv3Mj9GoQCf_LwqL-iB3K0hfWHtCPCuss2RNQvtsmyYC8eTrQ3mQ0Y3CKf_3A-_jevWWlw8MAPL7Usvpv85mq9mYNGfMnxAmevPyLI2YAffStfZI9telFU9tjtSjDLyHAPEu4ueX0BILBFuTgA3h28NC4hfmGDNpsZyc01RWGu-p3iBg4JFe9SoTYEAL2lLCQt23tOlLt46oxOmc1tAG1jDHU_6dAfuF6z8epilWHeNZdoWtQBfzYYF5"/>
</div>
<div>
<h4 className="font-label-md text-on-surface">Meera K.</h4>
<p className="text-label-sm text-outline">Panchayat Secretary</p>
<div className="flex items-center gap-xs text-[10px] text-tertiary-container font-semibold mt-xs">
<span className="material-symbols-outlined text-[14px]">verified</span>
                                    DIGITALLY SIGNED
                                </div>
</div>
</div>
</div>
<div className="mt-lg pt-md border-t border-outline-variant">
<div className="flex items-center gap-xs text-outline text-[11px]">
<span className="material-symbols-outlined text-[14px]">lock</span>
                            Blockchain Verified Hash: 0x82...f91a
                        </div>
</div>
</div>
</div>
</div>
</main>
{/* Bottom Actions Container (Mobile-fixed, Desktop-fluid) */}
<div className="sticky bottom-0 w-full bg-surface border-t border-outline-variant p-md md:p-gutter z-40">
<div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-md justify-end">
<button className="flex items-center justify-center gap-sm px-lg h-12 border border-primary text-primary font-semibold rounded-lg hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">share</span>
                Share Record
            </button>
<button className="flex items-center justify-center gap-sm px-lg h-12 bg-primary text-white font-semibold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-sm">
<span className="material-symbols-outlined">download</span>
                Download Full PDF
            </button>
</div>
</div>
{/* Bottom Navigation (Shared Component) */}
<nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface border-t border-outline-variant flex justify-around items-center h-16 px-xs">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">Services</span>
</a>
<div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-3 py-1">
<span className="material-symbols-outlined">description</span>
<span className="font-label-sm text-label-sm">Requests</span>
</div>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
      </div>
    </AppLayout>
  );
}
