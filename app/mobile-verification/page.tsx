import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - IDENTITY REGISTRATION" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top Bar Mockup (Suppressed full nav for transaction focus) */}

<main className="w-full max-w-[440px] mt-16">
{/* Progress Indicator */}
<div className="mb-xl">
<div className="flex justify-between items-end mb-sm">
<div>
<h1 className="font-headline-md text-headline-md text-on-background">Identity Registration</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Step 1 of 3: Mobile Verification</p>
</div>
</div>
<div className="flex gap-2">
<div className="flex-1 step-pill bg-custom-orange"></div>
<div className="flex-1 step-pill bg-outline-variant"></div>
<div className="flex-1 step-pill bg-outline-variant"></div>
</div>
</div>
{/* Verification Form Card */}
<div className="registration-card p-lg">
<div className="mb-lg">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-primary text-[28px]">smartphone</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-background mb-xs">Enter Mobile Number</h2>
<p className="font-body-md text-body-md text-on-surface-variant">We will send a one-time password (OTP) to verify your account.</p>
</div>
<form className="space-y-lg" id="registrationForm" onsubmit="event.preventDefault();">
{/* Phone Input Group */}
<div className="space-y-sm">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="mobile_number">Mobile Number</label>
<div className="relative flex">
<div className="flex items-center px-md border border-r-0 border-outline-variant bg-surface-container-low rounded-l-lg text-on-surface-variant font-medium">
                            +91
                        </div>
<input className="flex-1 block w-full p-md border-outline-variant rounded-r-lg font-body-lg text-body-lg focus:ring-0 focus:border-primary placeholder:text-outline-variant" id="mobile_number" maxlength="10" name="mobile_number" oninput="this.value = this.value.replace(/[^0-9]/g, '');" placeholder="9988776655" required="" type="tel"/>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Standard network charges may apply.</p>
</div>
{/* Disclaimer */}
<div className="flex gap-3 p-md bg-surface-container-low rounded-lg border border-outline-variant border-dashed">
<span className="material-symbols-outlined text-primary text-md" style={{ fontVariationSettings: "'FILL' 1", }}>verified_user</span>
<p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
<strong className="text-on-background">Secure Transmission:</strong> Your data is encrypted according to national governance standards. OTP is valid for 10 minutes.
                    </p>
</div>
{/* Action Button */}
<button className="w-full h-12 bg-custom-orange hover:bg-[#B45309] active:scale-95 transition-all text-white font-headline-sm text-headline-sm rounded-lg flex items-center justify-center gap-2" id="submitBtn" type="submit">
                    Send OTP
                    <span className="material-symbols-outlined">arrow_forward</span>
</button>
</form>
</div>
{/* Secondary Links */}
<div className="mt-lg flex flex-col items-center gap-sm">
<a className="font-label-md text-label-md text-primary hover:underline" href="#">Already have an account? Log In</a>
<div className="flex items-center gap-2 mt-md">
<span className="material-symbols-outlined text-on-surface-variant text-sm">lock</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Official Governance Portal</span>
</div>
</div>
</main>
{/* Footer Decorative / Context */}
<footer className="sticky bottom-0 w-full p-lg flex justify-between items-end pointer-events-none">
<div className="hidden lg:block opacity-10">
<span className="font-display-lg text-display-lg">CIVICSETU</span>
</div>
<div className="bg-surface-container p-md border border-outline-variant rounded-xl max-w-[280px] pointer-events-auto shadow-sm hidden md:block">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-xs uppercase tracking-widest opacity-60">Citizen Support</p>
<p className="font-body-md text-body-md font-medium text-on-background">Need assistance with identity verification?</p>
<button className="mt-sm text-primary font-label-md text-label-md flex items-center gap-1 hover:gap-2 transition-all">
                View FAQ <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</footer>
      </div>
    </AppLayout>
  );
}
