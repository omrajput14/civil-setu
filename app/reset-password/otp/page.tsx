"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/reset-password/new");
  };

  return (
    <AppLayout title="CIVICSETU - VERIFY IDENTITY" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar (Suppressed Shell logic: Back button present, linear flow) */}

<main className="flex-grow flex items-center justify-center p-gutter">
<div className="max-w-[440px] w-full bg-surface border border-outline-variant rounded-xl p-xl shadow-none">
{/* Header Section */}
<div className="text-center mb-xl">
<div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-md border border-outline-variant">
<span className="material-symbols-outlined text-primary text-[32px]">shield_person</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-sm">Verify Identity</h1>
<p className="font-body-md text-on-surface-variant">Enter the 6-digit code sent to <span className="font-semibold text-on-surface">+91 99XXXX8810</span></p>
</div>
{/* OTP Input Section */}
<form onSubmit={handleSubmit} className="space-y-xl" id="otp-form">
<div className="flex justify-between gap-sm" id="otp-container">
<input className="otp-input w-12 h-14 text-center text-headline-md font-bold bg-white border border-outline-variant rounded-xl focus:border-2 transition-all" maxlength="1" required="" type="number"/>
<input className="otp-input w-12 h-14 text-center text-headline-md font-bold bg-white border border-outline-variant rounded-xl focus:border-2 transition-all" maxlength="1" required="" type="number"/>
<input className="otp-input w-12 h-14 text-center text-headline-md font-bold bg-white border border-outline-variant rounded-xl focus:border-2 transition-all" maxlength="1" required="" type="number"/>
<input className="otp-input w-12 h-14 text-center text-headline-md font-bold bg-white border border-outline-variant rounded-xl focus:border-2 transition-all" maxlength="1" required="" type="number"/>
<input className="otp-input w-12 h-14 text-center text-headline-md font-bold bg-white border border-outline-variant rounded-xl focus:border-2 transition-all" maxlength="1" required="" type="number"/>
<input className="otp-input w-12 h-14 text-center text-headline-md font-bold bg-white border border-outline-variant rounded-xl focus:border-2 transition-all" maxlength="1" required="" type="number"/>
</div>
{/* Action Button */}
<button className="w-full h-12 bg-custom-orange hover:brightness-110 active:scale-[0.98] transition-all text-white font-label-md text-label-md rounded-xl shadow-sm flex items-center justify-center gap-sm" type="submit">
                    Verify &amp; Continue
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</form>
{/* Resend Logic */}
<div className="mt-xl text-center">
<p className="font-body-md text-on-surface-variant">
                    Didn't receive the code? 
                    <span className="font-semibold text-primary block mt-1" id="timer-container">
                        Resend in <span id="countdown">00:59</span>
</span>
<button className="hidden font-label-md text-primary hover:underline transition-all" id="resend-btn">Resend Code</button>
</p>
</div>
</div>
</main>
{/* Footer Security Badge */}
<footer className="p-lg mt-auto">
<div className="flex items-center justify-center gap-sm bg-surface-container-low border border-outline-variant rounded-full py-2 px-4 max-w-max mx-auto">
<span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1", }}>lock</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Secure Transmission Active</span>
</div>
<p className="text-center font-label-sm text-on-surface-variant mt-md opacity-60">
            © 2024 CivicSetu Digital Infrastructure. All Rights Reserved.
        </p>
</footer>
      </div>
    </AppLayout>
  );
}
