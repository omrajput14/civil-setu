import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CITIZEN LOGIN | CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top Section with Illustration/Identity */}
<div className="w-full max-w-md bg-white border border-outline-variant rounded-xl overflow-hidden mb-lg">
<div className="relative h-48 w-full bg-primary-container overflow-hidden">
{/* Background Decoration Pattern */}
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "24px 24px", }}></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-lg">
<div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-sm shadow-sm">
<span className="material-symbols-outlined text-primary text-[40px]" data-icon="foundation">foundation</span>
</div>
<h1 className="font-headline-md text-headline-md text-white">CivicSetu</h1>
<p className="font-body-md text-body-md text-primary-fixed opacity-90">Rural Governance OS</p>
</div>
</div>
{/* Login Form Container */}
<div className="p-lg">
<div className="mb-lg">
<h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Citizen Login</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Access government services and digital infrastructure securely.</p>
</div>
{/* Input Group: Mobile Number */}
<div className="space-y-md">
<div>
<label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="mobile_number">Mobile Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline" data-icon="phone_iphone">phone_iphone</span>
</div>
<input className="block w-full pl-10 pr-md py-3 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-0 focus:border-primary transition-all" id="mobile_number" maxlength="10" name="mobile_number" placeholder="Enter 10-digit number" type="tel"/>
</div>
<p className="mt-xs font-label-sm text-label-sm text-outline">Preferred for OTP-based verification</p>
</div>
<div className="relative flex items-center py-sm">
<div className="flex-grow border-t border-outline-variant"></div>
<span className="flex-shrink mx-md font-label-sm text-label-sm text-outline uppercase tracking-wider">OR</span>
<div className="flex-grow border-t border-outline-variant"></div>
</div>
{/* Input Group: Aadhaar */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="aadhaar_number">Aadhaar Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline" data-icon="fingerprint">fingerprint</span>
</div>
<input className="block w-full pl-10 pr-md py-3 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-on-surface focus:ring-0 focus:border-primary transition-all" id="aadhaar_number" name="aadhaar_number" placeholder="XXXX XXXX XXXX" type="text"/>
</div>
</div>
{/* Action Buttons */}
<div className="pt-md space-y-md">
<button className="w-full py-4 bg-[#D97706] text-white font-label-md text-label-md rounded-lg flex items-center justify-center gap-sm btn-shadow active:scale-[0.98] transition-transform" type="button">
                        Request OTP
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="w-full py-3 bg-transparent border border-primary text-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-sm active:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-sm" data-icon="lock">lock</span>
                        Login with Password
                    </button>
</div>
</div>
</div>
{/* Footer / Registration Link */}
<div className="bg-surface-container-low p-md border-t border-outline-variant flex flex-col items-center gap-sm">
<p className="font-body-md text-body-md text-on-surface-variant">New here?</p>
<a className="font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center gap-xs" href="#">
                Register your identity
                <span className="material-symbols-outlined text-sm" data-icon="person_add">person_add</span>
</a>
</div>
</div>
{/* Help / Support Footer */}
<div className="w-full max-w-md flex justify-between items-center px-sm">
<div className="flex items-center gap-xs text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm" data-icon="language">language</span>
<span>English (Default)</span>
</div>
<a className="flex items-center gap-xs text-primary font-label-sm text-label-sm font-medium" href="#">
<span className="material-symbols-outlined text-sm" data-icon="help">help</span>
            Need Help?
        </a>
</div>
{/* Micro-interaction Script */}
      </div>
    </AppLayout>
  );
}
