import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CITIZEN REGISTRATION - AADHAAR VERIFICATION" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar (Transactional - Hidden nav items) */}

{/* Main Content Canvas */}
<main className="flex-1 flex items-center justify-center p-margin-mobile w-full max-w-4xl mx-auto">
{/* Registration Form Container (Instrument Panel Style) */}
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] w-full max-w-2xl overflow-hidden rounded-[6px]">
{/* Form Header / Status Rail */}
<div className="h-rail-height bg-surface border-b border-border px-4 flex items-center justify-between">
<span className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest">Process: UIDAI_VERIFICATION_01</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest">Step 1 of 3</span>
</div>
<div className="p-stack-lg space-y-stack-lg">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Citizen Registration</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Authenticate identity using Aadhaar to access government services.</p>
</div>
<div className="border border-border p-stack-md rounded-[6px] bg-background">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-warning mt-1">info</span>
<div>
<span className="font-label-md text-label-md block mb-1">Mandatory Requirement</span>
<span className="font-body-md text-body-md text-on-surface-variant text-sm">Your Aadhaar number will be verified via OTP sent to the registered mobile number. Do not navigate away from this page.</span>
</div>
</div>
</div>
<form action="#" className="space-y-stack-lg" method="POST">
{/* Aadhaar Field */}
<div className="space-y-stack-sm">
<label className="font-label-md text-label-md text-on-surface block" htmlFor="aadhaar">Aadhaar Number</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted font-data-md text-data-md">
                                UID
                            </span>
<input className="bg-surface border border-border text-on-surface font-data-md text-data-md rounded-[6px] focus:ring-0 focus:border-primary focus:border-2 block w-full pl-12 p-2.5 transition-colors" id="aadhaar" maxlength="12" name="aadhaar" pattern="\d{12}" placeholder="0000 0000 0000" required="" type="text"/>
</div>
<span className="font-data-sm text-data-sm text-text-muted uppercase">12-Digit Format Required</span>
</div>
{/* Mobile Number Field */}
<div className="space-y-stack-sm">
<label className="font-label-md text-label-md text-on-surface block" htmlFor="mobile">Registered Mobile Number</label>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted font-data-md text-data-md">
                                +91
                            </span>
<input className="bg-surface border border-border text-on-surface font-data-md text-data-md rounded-[6px] focus:ring-0 focus:border-primary focus:border-2 block w-full pl-12 p-2.5 transition-colors" id="mobile" maxlength="10" name="mobile" pattern="[6-9]{1}[0-9]{9}" placeholder="9876543210" required="" type="tel"/>
</div>
<span className="font-data-sm text-data-sm text-text-muted uppercase">Must correspond to Aadhaar registry</span>
</div>
{/* OTP Block (Initially hidden, revealed via interaction ideally, shown here for design completeness) */}
<div className="border border-border p-stack-md rounded-[6px] bg-surface relative overflow-hidden">
{/* Simulated disabled overlay for initial state */}
<div className="absolute inset-0 bg-background/50 z-10 flex items-center justify-center backdrop-blur-[1px]">
<button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-[6px] border border-transparent hover:bg-primary/90 transition-colors shadow-[0_1px_2px_rgba(17,24,39,0.06)]" type="button">Request OTP</button>
</div>
<div className="space-y-stack-sm opacity-50">
<label className="font-label-md text-label-md text-on-surface block flex items-center justify-between" htmlFor="otp">
                                One Time Password (OTP)
                                <span className="font-data-sm text-data-sm text-warning uppercase">Awaiting Request</span>
</label>
<input className="bg-surface border border-border text-on-surface font-data-lg text-data-lg text-center tracking-[0.5em] rounded-[6px] focus:ring-0 focus:border-primary focus:border-2 block w-full p-3 transition-colors" disabled="" id="otp" maxlength="6" name="otp" placeholder="------" type="text"/>
<div className="flex justify-between items-center mt-2">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Valid for 05:00</span>
<button className="font-label-sm text-label-sm text-primary underline opacity-50 cursor-not-allowed" disabled="" type="button">Resend Code</button>
</div>
</div>
</div>
{/* Consent */}
<div className="flex items-start gap-3 mt-stack-lg">
<div className="flex items-center h-5">
<input aria-describedby="consent-description" className="w-4 h-4 border border-border rounded-[2px] bg-surface focus:ring-2 focus:ring-primary focus:ring-offset-background text-primary" id="consent" required="" type="checkbox"/>
</div>
<div className="text-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="consent">Data Processing Consent</label>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1" id="consent-description">I hereby consent to the secure processing of my demographic data retrieved from UIDAI solely for the purpose of citizen registration and service delivery monitoring.</p>
</div>
</div>
{/* Actions */}
<div className="pt-stack-md border-t border-border flex justify-end gap-stack-md">
<button className="px-6 py-2 border border-border bg-surface text-primary font-label-md text-label-md rounded-[6px] hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-surface" type="button">
                            Cancel
                        </button>
<button className="px-6 py-2 bg-primary-container text-on-primary font-label-md text-label-md rounded-[6px] hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-surface flex items-center gap-2 shadow-[0_1px_2px_rgba(17,24,39,0.06)]" type="submit">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
                            Verify & Register
                        </button>
</div>
</form>
</div>
{/* Bottom Status Rail */}
<div className="h-rail-height bg-surface border-t border-border px-4 flex items-center justify-between">
<span className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">encrypted</span> 256-bit TLS</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest">Server Time: <span className="font-data-sm text-data-sm" id="clock"></span></span>
</div>
</div>
</main>
      </div>
    </AppLayout>
  );
}
