"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/reset-password/otp");
  };

  return (
    <AppLayout title="CIVICSETU - RESET PASSWORD" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Main Content Canvas */}
<main className="flex-grow flex items-center justify-center px-gutter py-xl">
<div className="w-full max-w-[440px]">
{/* Card Container */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-none">
{/* Card Header with Illustration */}
<div className="p-xl flex flex-col items-center text-center space-y-md">
<div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'FILL' 1", }}>lock_reset</span>
</div>
<div className="space-y-xs">
<h2 className="font-headline-md text-headline-md text-on-surface">Forgot Password?</h2>
<p className="font-body-md text-body-md text-on-surface-variant px-4">
                            Enter your registered mobile number to receive a verification code.
                        </p>
</div>
</div>
{/* Card Body/Form */}
<form onSubmit={handleSubmit} className="px-xl pb-xl space-y-lg" method="POST">
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="mobile-number">Mobile Number</label>
<div className="flex">
<div className="relative">
<select className="h-12 pl-3 pr-8 bg-surface-container-low border border-outline-variant border-r-0 rounded-l-lg appearance-none font-body-md text-body-md focus:ring-0 focus:border-primary cursor-pointer">
<option value="+91">+91</option>
<option value="+1">+1</option>
<option value="+44">+44</option>
</select>
<div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
<input className="w-full h-12 px-md bg-white border border-outline-variant rounded-r-lg font-body-md text-body-md focus:ring-0 focus:border-primary outline-none transition-all" id="mobile-number" name="mobile-number" pattern="[0-9]{10}" placeholder="98765 43210" required="" type="tel"/>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">We'll send a 6-digit OTP to this number.</p>
</div>
<button className="w-full h-12 bg-secondary hover:bg-[#B45309] text-white font-semibold rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-sm" type="submit">
<span>Send OTP</span>
<span className="material-symbols-outlined text-[20px]">send</span>
</button>
</form>
{/* Support Divider */}
<div className="border-t border-outline-variant px-xl py-md bg-surface-container-low flex justify-center">
<p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">help_outline</span>
                        Need help? <a className="text-primary font-bold hover:underline" href="#">Contact Support</a>
</p>
</div>
</div>
{/* Decorative Elements (Subtle patterns) */}
<div className="mt-lg text-center">
<p className="font-label-sm text-label-sm text-on-surface-variant opacity-60">
                    © 2024 CivicSetu Governance Systems. All rights reserved.
                </p>
</div>
</div>
</main>
{/* Footer Space (Empty as per Request suppression rules for Transactional pages) */}
<footer className="h-8"></footer>
      </div>
    </AppLayout>
  );
}
