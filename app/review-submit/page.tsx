import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU | REVIEW & SUBMIT COMPLAINT" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top App Bar */}

{/* Content Canvas */}
<main className="flex-grow pt-16 pb-24 px-container-margin md:max-w-3xl md:mx-auto w-full">
{/* Step Indicator */}
<div className="mt-8 mb-6">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Step 2 of 2: Review</p>
<div className="mt-2 h-1 w-full bg-outline-variant rounded-full overflow-hidden">
<div className="h-full bg-primary w-full"></div>
</div>
</div>
{/* Summary Section */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden mb-8">
<div className="px-md py-md border-b border-outline-variant bg-surface-container-low">
<h2 className="font-headline-sm text-headline-sm text-primary">Complaint Details</h2>
</div>
<div className="p-md space-y-xl">
{/* Category */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Category</label>
<p className="font-body-md text-body-md font-medium text-on-surface">Infrastructure & Public Works</p>
</div>
{/* Title */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Subject / Title</label>
<p className="font-body-md text-body-md font-medium text-on-surface">Pothole accumulation on Main Street bypass near Block B</p>
</div>
{/* Description */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Description</label>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        There are approximately 4 large potholes forming on the bypass road. This is a high-traffic area during commute hours and poses a significant risk to two-wheelers. The largest pothole is roughly 2 feet wide and 5 inches deep.
                    </p>
</div>
{/* Location Preview */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-sm">Location</label>
<div className="relative w-full h-48 rounded-lg overflow-hidden border border-outline-variant">
<div className="w-full h-full" data-alt="A detailed map interface showing a rural township layout with clean, professional GIS markings. The map uses a light-mode color scheme with soft greys and blues, indicating roads, blocks, and local landmarks in a minimalist, administrative governance software style. A single orange pin marks the specific location of a public works issue." data-location="Rural Road Main Street" style={{ backgroundImage: "url('https", }}></div>
<div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/90 backdrop-blur p-2 rounded border border-outline-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
<span className="font-label-md text-label-md">Main St. Bypass, Block B, Ward 4</span>
</div>
</div>
</div>
{/* Attachment Preview (Optional UX improvement) */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-sm">Attachments</label>
<div className="flex gap-sm overflow-x-auto pb-xs">
<div className="w-20 h-20 rounded border border-outline-variant flex-shrink-0 bg-cover bg-center" data-alt="A clear, high-resolution daytime photograph of a damaged asphalt road in a rural setting. The image shows a significant pothole with debris around it, captured from a professional perspective to document a civic grievance. The lighting is bright and natural, highlighting the texture of the cracked pavement and the surrounding green landscape." style={{ backgroundImage: "url('https", }}></div>
<div className="w-20 h-20 rounded border border-outline-variant flex-shrink-0 bg-cover bg-center" data-alt="A wide-angle professional shot of a village road during a clear day. The road surface shows clear signs of wear and tear with visible patches and cracks. The background includes typical rural utility poles and a few distant houses, emphasizing the administrative context of local infrastructure maintenance in a governance app." style={{ backgroundImage: "url('https", }}></div>
</div>
</div>
</div>
</section>
{/* Certification */}
<div className="mb-xl flex items-start gap-md">
<div className="flex items-center h-5">
<input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" id="certify" type="checkbox"/>
</div>
<label className="font-body-md text-body-md text-on-surface" htmlFor="certify">
                I certify that the information provided is accurate and I understand that providing false information may result in the dismissal of this complaint.
            </label>
</div>
{/* Submit Button */}
<button className="w-full h-[48px] bg-accent-submit text-white font-headline-sm text-headline-sm rounded hover:brightness-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2" id="submitBtn">
            Submit Complaint
        </button>
</main>
{/* Bottom Navigation (Mobile Only) */}
<nav className="sticky bottom-0 left-0 w-full flex justify-around items-center bg-surface-container-lowest border-t border-outline-variant md:hidden h-16 z-40">
<div className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">map</span>
<span className="font-label-sm text-[10px] mt-0.5">Map</span>
</div>
<div className="flex flex-col items-center justify-center text-secondary font-bold">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", }}>assignment</span>
<span className="font-label-sm text-[10px] mt-0.5">Tasks</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">add_a_photo</span>
<span className="font-label-sm text-[10px] mt-0.5">Upload</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-[10px] mt-0.5">Profile</span>
</div>
</nav>
{/* Success Modal */}
<div className="fixed inset-0 z-50 flex items-center justify-center p-gutter modal-overlay opacity-0 pointer-events-none transition-opacity duration-300" id="successModal">
<div className="bg-surface-container-lowest w-full max-w-sm rounded-xl border border-outline-variant shadow-2xl p-xl flex flex-col items-center text-center transform scale-95 transition-transform duration-300" id="modalContent">
<div className="w-16 h-16 bg-tertiary-container/10 text-tertiary rounded-full flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1", }}>check_circle</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary mb-sm">Complaint Submitted Successfully</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl">Your grievance has been logged. We will notify you of updates regarding its status.</p>
<div className="bg-surface-container-low w-full p-md rounded border border-outline-variant mb-xl">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Reference ID</p>
<p className="font-headline-sm text-headline-sm text-primary font-bold tracking-widest">CS-8821</p>
</div>
<button className="w-full h-10 bg-primary text-white font-label-md text-label-md rounded hover:opacity-90 active:scale-95 transition-all">
                Track Status
            </button>
<button className="mt-md font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" id="closeModal">
                Return to Dashboard
            </button>
</div>
</div>
      </div>
    </AppLayout>
  );
}
