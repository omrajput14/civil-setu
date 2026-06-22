import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - IDENTITY REGISTRATION" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top Navigation Bar (Suppressed Shell for focused journey as per instruction) */}

<main className="flex-grow pt-24 pb-16 px-container-margin flex justify-center">
<div className="w-full max-w-[640px] flex flex-col gap-xl">
{/* Progress Section */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
<div className="flex justify-between items-center mb-md">
<h2 className="font-headline-md text-headline-md text-on-surface">Identity Registration</h2>
<span className="font-label-md text-label-md text-primary font-bold">Step 3 of 3</span>
</div>
{/* Progress Bar Visual */}
<div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden flex gap-1">
<div className="h-full bg-primary flex-1"></div>
<div className="h-full bg-primary flex-1"></div>
<div className="h-full bg-primary flex-1"></div>
</div>
<p className="mt-sm font-body-md text-body-md text-on-surface-variant">Complete your profile details to finalize your governance account.</p>
</div>
{/* Registration Form Card */}
<section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="p-lg border-b border-outline-variant">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Profile Details</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Please provide accurate administrative information.</p>
</div>
<div className="p-lg space-y-lg">
{/* Name Field */}
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="full_name">Full Name (As per Aadhaar)</label>
<div className="relative">
<input className="w-full h-10 px-md rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-body-md bg-surface-container-lowest" id="full_name" name="full_name" placeholder="Enter your full name" type="text"/>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Include middle names if present on official documents.</span>
</div>
{/* Ration Card Field */}
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="family_id">Family ID / Ration Card Number</label>
<div className="relative">
<input className="w-full h-10 px-md rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-body-md bg-surface-container-lowest uppercase" id="family_id" name="family_id" placeholder="RC-XXXXXXXXXX" type="text"/>
</div>
</div>
{/* Ward/Village Dropdown */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="district">District</label>
<select className="h-10 px-md rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-body-md bg-surface-container-lowest" id="district">
<option value="">Select District</option>
<option value="1">Nashik</option>
<option value="2">Pune</option>
<option value="3">Nagpur</option>
</select>
</div>
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="village">Ward / Village</label>
<select className="h-10 px-md rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-on-surface font-body-md bg-surface-container-lowest" id="village">
<option value="">Select Location</option>
<option value="v1">Sinnar Ward 04</option>
<option value="v2">Sinnar Ward 12</option>
<option value="v3">Panchvati Area</option>
</select>
</div>
</div>
{/* Declaration Checkbox */}
<div className="flex items-start gap-md pt-md">
<input className="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" id="declaration" type="checkbox"/>
<label className="font-body-md text-body-md text-on-surface-variant" htmlFor="declaration">
                            I hereby declare that the information provided is true and correct to the best of my knowledge under the Civic Governance Act.
                        </label>
</div>
</div>
{/* Action Footer */}
<div className="p-lg bg-surface-container-low flex items-center justify-between">
<button className="px-md h-10 text-primary font-medium flex items-center gap-2 hover:bg-surface-container-high rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                        Back
                    </button>
<button className="px-xl h-10 text-white font-semibold rounded-lg hover:brightness-95 transition-all shadow-sm active:scale-[0.98]" id="complete_btn" style={{ backgroundColor: "#D97706", }}>
                        Complete Registration
                    </button>
</div>
</section>
{/* Visual Context Side (Asymmetric Layout Hint) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="bg-tertiary-container/10 border border-tertiary/10 p-md rounded-lg flex gap-md items-center">
<div className="w-12 h-12 rounded-lg bg-tertiary flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
</div>
<div>
<p className="font-label-md text-tertiary font-bold">Secure Verification</p>
<p className="font-label-sm text-on-surface-variant">Your data is encrypted and stored according to government protocols.</p>
</div>
</div>
<div className="bg-primary-container/10 border border-primary-container/10 p-md rounded-lg flex gap-md items-center">
<div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="assignment_ind">assignment_ind</span>
</div>
<div>
<p className="font-label-md text-primary font-bold">Automatic Mapping</p>
<p className="font-label-sm text-on-surface-variant">Instantly access localized schemes based on your selected ward.</p>
</div>
</div>
</div>
{/* Map Context */}
<div className="relative w-full h-48 rounded-xl border border-outline-variant overflow-hidden group cursor-pointer">
<div className="absolute inset-0 z-0" data-alt="A detailed digital map interface showing a clean, administrative district overview. The map features a minimalist color palette of whites, grays, and soft blues, with a specific focus on highlighted administrative boundaries in deep navy. Professional UI overlays show population density icons and ward markers in a clean, government-standard aesthetic with zero shadows and sharp edges." style={{ backgroundImage: "url('https", }}></div>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10 flex items-end p-lg">
<div className="bg-white/90 backdrop-blur-sm p-sm rounded border border-outline-variant flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm" data-icon="location_on">location_on</span>
<span className="font-label-sm text-primary">District Jurisdiction: Nashik</span>
</div>
</div>
</div>
</div>
</main>
{/* Simple Feedback Toast (Hidden by default) */}
<div className="sticky bottom-8 right-8 bg-surface-container-highest border border-outline-variant p-md rounded-lg shadow-lg flex items-center gap-md transform translate-y-24 transition-transform duration-300 z-[100]" id="toast">
<div className="w-8 h-8 bg-on-tertiary-container rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined text-sm" data-icon="check" style={{ fontVariationSettings: "'FILL' 1", }}>check</span>
</div>
<div>
<p className="font-label-md text-on-surface">Registration Complete</p>
<p className="font-label-sm text-on-surface-variant">Redirecting to Dashboard...</p>
</div>
</div>
      </div>
    </AppLayout>
  );
}
