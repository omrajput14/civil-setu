"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/reset-password/success");
  };

  return (
    <AppLayout title="CIVICSETU - CREATE NEW PASSWORD" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

<main className="min-h-[calc(100vh-56px)] flex items-center justify-center p-gutter">
<div className="w-full max-w-md bg-white border border-outline-variant rounded-xl overflow-hidden">
{/* Form Header */}
<div className="p-lg border-b border-outline-variant">
<h2 className="font-display-lg text-display-lg text-primary mb-2">Create New Password</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Set a strong password for your CivicSetu account to ensure the security of your administrative data.</p>
</div>
{/* Form Body */}
<form onSubmit={handleSubmit} className="p-lg space-y-lg" id="resetForm">
{/* New Password Field */}
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface block" htmlFor="new_password">New Password</label>
<div className="relative">
<input className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md focus:border-primary transition-all pr-12" id="new_password" name="new_password" placeholder="Enter new password" type={showNew ? "text" : "password"}/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" onClick={() => setShowNew(!showNew)} type="button">
<span className="material-symbols-outlined" id="new_password_icon">visibility</span>
</button>
</div>
</div>
{/* Confirm Password Field */}
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface block" htmlFor="confirm_password">Confirm Password</label>
<div className="relative">
<input className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md focus:border-primary transition-all pr-12" id="confirm_password" name="confirm_password" placeholder="Re-type new password" type={showConfirm ? "text" : "password"}/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" onClick={() => setShowConfirm(!showConfirm)} type="button">
<span className="material-symbols-outlined" id="confirm_password_icon">visibility</span>
</button>
</div>
</div>
{/* Password Requirements Checklist */}
<div className="bg-surface-container-low p-4 rounded-xl space-y-3">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Password Requirements</p>
<ul className="space-y-2">
<li className="requirement-item flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant transition-colors" id="req_length">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
                            At least 8 characters
                        </li>
<li className="requirement-item flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant transition-colors" id="req_symbol">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
                            One special symbol (e.g., @, #, $)
                        </li>
<li className="requirement-item flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant transition-colors" id="req_number">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
                            At least one number
                        </li>
<li className="requirement-item flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant transition-colors" id="req_match">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
                            Passwords must match
                        </li>
</ul>
</div>
{/* Primary Action */}
<button className="w-full h-12 bg-secondary text-white font-label-md text-label-md rounded-xl hover:bg-[#B45309] transition-all transform active:scale-[0.98] shadow-sm flex items-center justify-center gap-2" type="submit">
                    Reset Password
                    <span className="material-symbols-outlined">lock_reset</span>
</button>
{/* Encryption Badge */}
<div className="flex items-center justify-center gap-2 pt-2">
<div className="bg-[#DCFCE7] text-[#16A34A] px-3 py-1.5 rounded-lg flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1", }}>verified_user</span>
<span className="text-label-sm font-label-sm">Secure End-to-End Encryption</span>
</div>
</div>
</form>
</div>
</main>
      </div>
    </AppLayout>
  );
}
