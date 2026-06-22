import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - SUCCESS" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Confetti Overlay */}
<canvas className="confetti-canvas" id="confetti"></canvas>
{/* Main Content Canvas */}
<main className="w-full max-w-md px-md pt-xl pb-32 flex flex-col gap-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
{/* Header Image Placeholder */}
<div className="relative w-full h-40 rounded-xl overflow-hidden mb-sm border border-outline-variant bg-surface-container">
<div className="w-full h-full bg-cover bg-center opacity-80" data-alt="A cinematic, high-resolution photograph of a newly constructed modern rural home in India under a clear blue sky, symbolizing the PM Awas Yojana success. The lighting is warm and hopeful, with a professional architectural photography style. The image features clean lines and a palette of earthy tones and deep blues, reflecting a sense of stability and government-grade quality." style={{ backgroundImage: "url('https", }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
<div className="absolute bottom-md left-md">
<span className="font-label-sm text-label-sm text-white bg-secondary px-sm py-xs rounded">GOVERNMENT OF INDIA</span>
</div>
</div>
{/* Success Header */}
<div className="flex flex-col items-center text-center gap-md">
<div className="w-20 h-20 rounded-full bg-tertiary-fixed-dim flex items-center justify-center success-checkmark-circle shadow-lg">
<span className="material-symbols-outlined text-on-tertiary-fixed-variant text-[48px]" style={{ fontVariationSettings: "'FILL' 1", }}>check_circle</span>
</div>
<div className="flex flex-col gap-xs">
<h1 className="font-display-lg-mobile text-display-lg-mobile text-primary">Application Submitted Successfully!</h1>
<p className="font-body-md text-body-md text-on-surface-variant px-md">Your application for the PM Awas Yojana (Rural) has been received and is being processed.</p>
</div>
</div>
{/* Reference Card (Bento Style) */}
<section className="bg-white rounded-xl border border-outline-variant p-md flex flex-col gap-md shadow-sm">
<div className="flex justify-between items-center border-b border-outline-variant pb-sm">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Application Summary</span>
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0", }}>verified</span>
</div>
<div className="grid grid-cols-2 gap-md">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Application ID</p>
<p className="font-headline-sm text-headline-sm text-primary">CS-APP-88214</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Submission Date</p>
<p className="font-headline-sm text-headline-sm text-primary" id="currentDate">Oct 24, 2023</p>
</div>
</div>
</section>
{/* Next Steps Timeline */}
<section className="flex flex-col gap-md">
<h2 className="font-headline-sm text-headline-sm text-primary px-xs">What Happens Next?</h2>
<div className="flex flex-col gap-0">
{/* Step 1 */}
<div className="flex gap-md">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center z-10">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<div className="w-0.5 h-12 bg-outline-variant -my-1"></div>
</div>
<div className="pb-md">
<h3 className="font-label-md text-label-md text-on-surface">1. Document Verification</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Our back-office team will verify the uploaded ID and property documents within 48 hours.</p>
</div>
</div>
{/* Step 2 */}
<div className="flex gap-md">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full border-2 border-outline-variant bg-white flex items-center justify-center z-10"></div>
<div className="w-0.5 h-12 bg-outline-variant -my-1"></div>
</div>
<div className="pb-md">
<h3 className="font-label-md text-label-md text-on-surface">2. Field Officer Visit</h3>
<p className="font-body-md text-body-md text-on-surface-variant">A local governance officer will visit your site for physical verification of the premises.</p>
</div>
</div>
{/* Step 3 */}
<div className="flex gap-md">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full border-2 border-outline-variant bg-white flex items-center justify-center z-10"></div>
</div>
<div className="pb-md">
<h3 className="font-label-md text-label-md text-on-surface">3. Final Approval</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Upon successful field reports, your application will be cleared for the first installment.</p>
</div>
</div>
</div>
</section>
{/* Info Block */}
<div className="bg-surface-container-low border border-primary-container p-md rounded-lg flex gap-md items-start">
<span className="material-symbols-outlined text-primary-container">info</span>
<p className="font-body-md text-body-md text-on-surface-variant">An SMS confirmation has been sent to your registered mobile number (+91 XXX-XXX-8810).</p>
</div>
{/* Action Buttons */}
<div className="flex flex-col gap-md mt-md">
<button className="bg-[#D97706] text-white py-md rounded-lg font-headline-sm shadow-md active:scale-95 transition-transform">
                Track Status
            </button>
<button className="bg-transparent border border-primary text-primary py-md rounded-lg font-label-md active:bg-primary-container transition-colors">
                Back to Home
            </button>
</div>
</main>
{/* Shared Bottom Navigation */}
<nav className="sticky bottom-0 left-0 w-full flex justify-around items-center bg-surface border-t border-outline-variant md:hidden h-16 z-50">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-full h-full transition-colors" href="#">
<span className="material-symbols-outlined">map</span>
<span className="font-label-sm text-[12px] font-semibold">Map</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-full h-full transition-colors" href="#">
<span className="material-symbols-outlined">assignment</span>
<span className="font-label-sm text-[12px] font-semibold">Tasks</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-full h-full transition-colors" href="#">
<span className="material-symbols-outlined">add_a_photo</span>
<span className="font-label-sm text-[12px] font-semibold">Upload</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-full h-full transition-colors" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-[12px] font-semibold">Profile</span>
</a>
</nav>
      </div>
    </AppLayout>
  );
}
