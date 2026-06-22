import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="USER PROFILE | CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top Navigation Placeholder (Mobile Header) */}

<main className="max-w-md mx-auto p-md space-y-xl">
{/* Profile Header */}
<section className="flex flex-col items-center py-xl">
<div className="relative">
<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-sm">
<img className="w-full h-full object-cover" data-alt="A professional studio portrait of a friendly Indian man in his late 30s named Rajesh Kumar, wearing a clean, traditional Nehru jacket. The background is a soft, blurred office setting with warm daylight. The image has high clarity, professional lighting, and a trustworthy, administrative tone suitable for a government service app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAg812RpkeBs_h5qXN8xhhb5_9-OgBXknB6IZk_kbLMCv1V9PbDyofmFyhPVpS1pvhs4Ei3DDc89ijTLMLIDcjwgItPqECzLVCdD3tf2WrWT9_PngRMKWRxTSO5dJY6yabA4VyMQ7JrwqhsFz-Z_59ldvomvkfpG4YNAUzXtRZWST3e7Z9liH1qr4Zlp90aUgddqIL1F11wQx3XnqPT3JPlIs-MTooM_C1POY-iLAMm9TxOBa5xU3zpLChPYuQ3g0pD9wH1L4pXO4_"/>
</div>
<div className="absolute bottom-0 right-0 bg-green-600 text-white p-1 rounded-full border-2 border-white flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1", }}>verified</span>
</div>
</div>
<div className="mt-sm text-center">
<h2 className="font-headline-md text-headline-md text-on-surface">Rajesh Kumar</h2>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-green-50 text-green-700 font-label-sm text-label-sm mt-1">
<span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1", }}>verified</span>
                    Verified Citizen
                </span>
</div>
</section>
{/* Personal Information */}
<section className="space-y-sm">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary">Personal Details</h3>
</div>
<div className="surface-level-1 rounded-xl p-md space-y-md">
<div className="flex flex-col gap-1">
<label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Mobile Number</label>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">call</span>
<span className="font-body-md text-body-md text-on-surface">+91 98765 43210</span>
</div>
</div>
<div className="h-[1px] bg-outline-variant w-full"></div>
<div className="flex flex-col gap-1">
<label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Email Address</label>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">mail</span>
<span className="font-body-md text-body-md text-on-surface">rajesh.kumar@email.com</span>
</div>
</div>
<div className="h-[1px] bg-outline-variant w-full"></div>
<div className="flex flex-col gap-1">
<label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Location</label>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
<span className="font-body-md text-body-md text-on-surface leading-tight">Village Sonapur, Ward No. 4, <br/>Patna District, Bihar</span>
</div>
</div>
</div>
</section>
{/* Digital Vault */}
<section className="space-y-sm">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary">Digital Vault</h3>
<button className="text-secondary font-label-md text-label-md flex items-center gap-1">
                    View All <span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
<div className="surface-level-1 rounded-xl overflow-hidden">
<div className="flex items-center p-md border-b border-outline-variant">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary">badge</span>
</div>
<div className="ml-3 flex-grow">
<p className="font-label-md text-label-md text-on-surface">Aadhaar Card</p>
<p className="text-label-sm text-on-surface-variant">XXXX-XXXX-4521</p>
</div>
<span className="px-2 py-0.5 rounded-[4px] bg-green-100 text-green-700 font-label-sm text-label-sm">Verified</span>
</div>
<div className="flex items-center p-md border-b border-outline-variant">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary">credit_card</span>
</div>
<div className="ml-3 flex-grow">
<p className="font-label-md text-label-md text-on-surface">PAN Card</p>
<p className="text-label-sm text-on-surface-variant">XXXXX452A</p>
</div>
<span className="px-2 py-0.5 rounded-[4px] bg-green-100 text-green-700 font-label-sm text-label-sm">Verified</span>
</div>
<div className="flex items-center p-md">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary">description</span>
</div>
<div className="ml-3 flex-grow">
<p className="font-label-md text-label-md text-on-surface">Income Certificate</p>
<p className="text-label-sm text-on-surface-variant">Applied: 12 Oct 2023</p>
</div>
<span className="px-2 py-0.5 rounded-[4px] bg-orange-100 text-orange-700 font-label-sm text-label-sm">Pending</span>
</div>
</div>
</section>
{/* Account Activity */}
<section className="space-y-sm">
<h3 className="font-headline-sm text-headline-sm text-primary">Recent Activity</h3>
<div className="grid grid-cols-2 gap-md">
<div className="surface-level-1 rounded-xl p-md flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-secondary">assignment_turned_in</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">2 Active</span>
</div>
<p className="font-label-md text-label-md text-on-surface mt-1 leading-tight">Scheme Applications</p>
</div>
<div className="surface-level-1 rounded-xl p-md flex flex-col gap-2">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-error">report_problem</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">1 Open</span>
</div>
<p className="font-label-md text-label-md text-on-surface mt-1 leading-tight">Track Complaints</p>
</div>
</div>
</section>
{/* Settings & Support */}
<section className="space-y-sm">
<h3 className="font-headline-sm text-headline-sm text-primary">Preferences &amp; Support</h3>
<div className="surface-level-1 rounded-xl overflow-hidden">
<div className="flex items-center p-md border-b border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">language</span>
<span className="ml-3 font-label-md text-label-md text-on-surface flex-grow">Language Settings</span>
<span className="text-on-surface-variant text-label-sm mr-2">English</span>
<span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</div>
<div className="flex items-center p-md border-b border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">feedback</span>
<span className="ml-3 font-label-md text-label-md text-on-surface flex-grow">App Feedback</span>
<span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</div>
<div className="flex items-center p-md border-b border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">security</span>
<span className="ml-3 font-label-md text-label-md text-on-surface flex-grow">Privacy Policy</span>
<span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</div>
<div className="flex items-center p-md hover:bg-red-50 transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-error group-hover:scale-110 transition-transform">logout</span>
<span className="ml-3 font-label-md text-label-md text-error flex-grow">Log Out</span>
</div>
</div>
</section>
<footer className="text-center py-xl">
<p className="text-label-sm text-on-surface-variant">CivicSetu Rural Governance OS</p>
<p className="text-label-sm text-outline-variant mt-xs">Version 2.4.0 (Stable)</p>
</footer>
</main>
{/* Bottom Navigation Bar - From Shared Components JSON */}
<nav className="sticky bottom-0 left-0 w-full flex justify-around items-center bg-surface border-t border-outline-variant md:hidden h-16 z-50">
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-1/4 h-full cursor-pointer transition-transform active:scale-95">
<span className="material-symbols-outlined" data-icon="map">map</span>
<span className="font-label-sm text-[10px] uppercase">Map</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-1/4 h-full cursor-pointer transition-transform active:scale-95">
<span className="material-symbols-outlined" data-icon="assignment">assignment</span>
<span className="font-label-sm text-[10px] uppercase">Tasks</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-1/4 h-full cursor-pointer transition-transform active:scale-95">
<div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white -mt-6 shadow-lg">
<span className="material-symbols-outlined" data-icon="add_a_photo">add_a_photo</span>
</div>
<span className="font-label-sm text-[10px] uppercase mt-1">Upload</span>
</div>
{/* Active Tab: Profile */}
<div className="flex flex-col items-center justify-center text-secondary font-bold hover:bg-surface-container-high w-1/4 h-full cursor-pointer transition-transform active:scale-95">
<span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: "'FILL' 1", }}>person</span>
<span className="font-label-sm text-[10px] uppercase">Profile</span>
</div>
</nav>
      </div>
    </AppLayout>
  );
}
