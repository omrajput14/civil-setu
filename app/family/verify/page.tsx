"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('selector');

  return (
    <AppLayout title="SECURE VERIFICATION" showBackButton={true}>
      <div className="w-full">
        <div className="p-margin-mobile space-y-4">
          
          {/* Security Canvas */}
          <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] overflow-hidden">
            
            {/* Header Banner */}
            <div className="p-4 bg-primary-container text-center relative overflow-hidden">
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 bg-on-primary/10 rounded-full flex items-center justify-center mb-3 border border-on-primary/20">
                  <span className="material-symbols-outlined text-[24px] text-white">verified_user</span>
                </div>
                <h1 className="font-headline-md text-[18px] font-bold text-white">Identity Verification</h1>
                <p className="font-body-md text-[13px] text-white/70 mt-1">Verify the new member's addition to the registry.</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 flex flex-col gap-5">
              
              {/* Method Selector */}
              <div className={`flex flex-col gap-3 ${activeTab === 'selector' ? 'block' : 'hidden'}`}>
                <h2 className="font-label-md text-[13px] text-text-muted uppercase tracking-wider">Choose Method</h2>
                
                {/* OTP Option */}
                <button className="w-full flex items-center p-3 border border-border rounded-[6px] hover:bg-surface-container-low transition-all group shadow-[0_1px_2px_rgba(17,24,39,0.06)]" onClick={() => setActiveTab('otp')}>
                  <div className="w-10 h-10 rounded-[4px] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">sms</span>
                  </div>
                  <div className="ml-3 text-left flex-1 min-w-0">
                    <h3 className="font-headline-sm text-[14px] font-bold text-on-surface truncate">One-Time Password</h3>
                    <p className="font-body-sm text-[11px] text-text-muted mt-0.5">Sent to +91 ••••• ••452</p>
                  </div>
                  <span className="material-symbols-outlined text-text-muted shrink-0 text-[20px]">chevron_right</span>
                </button>
                
                {/* Biometric Option */}
                <button className="w-full flex items-center p-3 border border-border rounded-[6px] hover:bg-surface-container-low transition-all group shadow-[0_1px_2px_rgba(17,24,39,0.06)]" onClick={() => setActiveTab('biometric')}>
                  <div className="w-10 h-10 rounded-[4px] bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">fingerprint</span>
                  </div>
                  <div className="ml-3 text-left flex-1 min-w-0">
                    <h3 className="font-headline-sm text-[14px] font-bold text-on-surface truncate">Biometric Auth</h3>
                    <p className="font-body-sm text-[11px] text-text-muted mt-0.5">Fingerprint or Face ID</p>
                  </div>
                  <span className="material-symbols-outlined text-text-muted shrink-0 text-[20px]">chevron_right</span>
                </button>
              </div>

              {/* OTP Interface */}
              <div className={`flex flex-col gap-4 ${activeTab === 'otp' ? 'block' : 'hidden'}`}>
                <div className="text-center">
                  <h2 className="font-headline-md text-[16px] font-bold text-on-surface">Enter 6-Digit OTP</h2>
                  <p className="font-body-md text-[13px] text-text-muted mt-1 leading-relaxed">We've sent a code to the member's registered mobile number.</p>
                </div>
                
                <div className="flex justify-between gap-2">
                  <input className="w-10 h-12 text-center text-lg font-bold border border-border rounded-[6px] bg-surface focus:border-primary focus:ring-0" maxLength={1} type="text"/>
                  <input className="w-10 h-12 text-center text-lg font-bold border border-border rounded-[6px] bg-surface focus:border-primary focus:ring-0" maxLength={1} type="text"/>
                  <input className="w-10 h-12 text-center text-lg font-bold border border-border rounded-[6px] bg-surface focus:border-primary focus:ring-0" maxLength={1} type="text"/>
                  <input className="w-10 h-12 text-center text-lg font-bold border border-border rounded-[6px] bg-surface focus:border-primary focus:ring-0" maxLength={1} type="text"/>
                  <input className="w-10 h-12 text-center text-lg font-bold border border-border rounded-[6px] bg-surface focus:border-primary focus:ring-0" maxLength={1} type="text"/>
                  <input className="w-10 h-12 text-center text-lg font-bold border border-border rounded-[6px] bg-surface focus:border-primary focus:ring-0" maxLength={1} type="text"/>
                </div>
                
                <div className="text-center mt-1">
                  <p className="font-label-sm text-[11px] text-text-muted">Didn't receive the code? <button className="text-primary font-bold hover:underline">Resend in 0:45</button></p>
                </div>
                
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 px-4 py-2 border border-border text-on-surface font-label-md text-[13px] rounded-[6px] hover:bg-surface-container-low" onClick={() => setActiveTab('selector')}>Back</button>
                  <button onClick={() => router.push('/family/success')} className="flex-[2] px-4 py-2 bg-primary text-on-primary font-label-md text-[13px] font-bold rounded-[6px] hover:opacity-90 shadow-sm">Verify & Add</button>
                </div>
              </div>

              {/* Biometric Interface */}
              <div className={`flex flex-col gap-5 text-center ${activeTab === 'biometric' ? 'block' : 'hidden'}`}>
                <div className="py-4 flex flex-col items-center">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 rounded-full border-[3px] border-dashed border-secondary/30 flex items-center justify-center animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[48px] text-secondary">fingerprint</span>
                    </div>
                  </div>
                  <h2 className="font-headline-md text-[16px] font-bold text-on-surface mt-4">Ready to Scan</h2>
                  <p className="font-body-md text-[13px] text-text-muted mt-1 max-w-[200px]">Place the member's finger on the scanner.</p>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 border border-border text-on-surface font-label-md text-[13px] rounded-[6px] hover:bg-surface-container-low" onClick={() => setActiveTab('selector')}>Cancel</button>
                  <button onClick={() => router.push('/family/success')} className="flex-[2] px-4 py-2 bg-secondary text-white font-label-md text-[13px] font-bold rounded-[6px] hover:opacity-90 shadow-sm">Initiate Scan</button>
                </div>
              </div>

            </div>
            
            {/* Privacy Footnote */}
            <div className="p-3 bg-surface-container-lowest border-t border-border flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">lock</span>
              <p className="text-[10px] leading-relaxed text-text-muted">
                <strong>Secure Data:</strong> Biometric and verification data is encrypted. CivicSetu does not store raw biometric patterns, only secure mathematical hashes.
              </p>
            </div>
          </div>
          
          {/* Additional Support Link */}
          <div className="mt-4 text-center">
            <a className="font-label-sm text-[12px] text-text-muted hover:text-primary flex items-center justify-center gap-1" href="#">
              <span className="material-symbols-outlined text-[16px]">help</span>
              Having trouble? Contact local admin
            </a>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
