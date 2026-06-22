"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  
  return (
    <AppLayout title="RELATIONSHIP DETAILS" showBackButton={true}>
      <div className="w-full">
        <div className="p-margin-mobile space-y-4">
          
          {/* Member Info Visualization */}
          <section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] p-4 flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col flex-1 min-w-0">
                <span className="w-max bg-success/10 text-success border border-success/20 px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold tracking-wider uppercase mb-2">Verified Member</span>
                <h2 className="font-headline-md text-[16px] font-bold text-primary truncate">Rajesh Kumar Verma</h2>
                <p className="font-data-sm text-[11px] text-text-muted mt-0.5">UID: 4588-XXXX-9021</p>
              </div>
              <div className="w-14 h-14 rounded-[6px] bg-surface-container-high flex items-center justify-center overflow-hidden border border-border shrink-0">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Rajesh"/>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-surface-container-lowest p-2 rounded-[6px] border border-border flex flex-col gap-0.5">
                <span className="font-label-sm text-[10px] text-text-muted">Age</span>
                <span className="font-data-md text-[13px] font-bold text-on-surface">42 Yrs</span>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-[6px] border border-border flex flex-col gap-0.5">
                <span className="font-label-sm text-[10px] text-text-muted">Gender</span>
                <span className="font-data-md text-[13px] font-bold text-on-surface">Male</span>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-[6px] border border-border flex flex-col gap-0.5">
                <span className="font-label-sm text-[10px] text-text-muted">Address</span>
                <span className="font-data-md text-[13px] font-bold text-on-surface truncate">Block C</span>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] flex flex-col overflow-hidden">
            <div className="p-3 border-b border-border bg-surface-bright flex items-center justify-between">
              <h3 className="font-headline-sm text-[14px] font-bold text-primary">Relationship Details</h3>
              <span className="font-label-sm text-[11px] text-text-muted">Step 2 / 4</span>
            </div>
            
            <form className="p-4 flex flex-col gap-5">
              
              <div className="bg-primary/5 border border-primary/20 text-on-surface rounded-[6px] p-3 flex gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">info</span>
                <p className="font-body-md text-[12px] leading-relaxed">Please specify how this member is related to the primary applicant. Required for scheme eligibility.</p>
              </div>

              {/* Relationship Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-[13px] font-bold text-on-surface" htmlFor="relationship">Define Relationship</label>
                <div className="relative">
                  <select className="w-full h-11 px-3 rounded-[6px] border border-border appearance-none focus:border-primary focus:ring-0 bg-surface font-body-md text-[14px] text-on-surface shadow-sm" id="relationship" defaultValue="">
                    <option disabled value="">Select Relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="material-symbols-outlined text-text-muted text-[20px]">expand_more</span>
                  </div>
                </div>
              </div>

              {/* File Upload Section */}
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-[13px] font-bold text-on-surface">Upload Relationship Proof</label>
                <div className="border-2 border-dashed border-border rounded-[6px] p-5 flex flex-col items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors group cursor-pointer relative">
                  <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="file-upload" type="file"/>
                  <div className="w-12 h-12 bg-surface rounded-full border border-border flex items-center justify-center mb-3 group-hover:border-primary transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]">upload_file</span>
                  </div>
                  <span className="font-label-md text-[13px] font-bold text-primary mb-1">Tap to upload proof</span>
                  <span className="font-body-sm text-[11px] text-text-muted">PDF, JPG or PNG (Max 5MB)</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-surface border border-border px-2 py-1 rounded-[4px] text-[10px] text-text-muted uppercase tracking-wider">Birth Certificate</span>
                  <span className="bg-surface border border-border px-2 py-1 rounded-[4px] text-[10px] text-text-muted uppercase tracking-wider">Ration Card</span>
                  <span className="bg-surface border border-border px-2 py-1 rounded-[4px] text-[10px] text-text-muted uppercase tracking-wider">Marriage Cert</span>
                </div>
              </div>

            </form>
          </section>

        </div>
      </div>
      
      {/* Sticky Bottom Action Bar */}
      <div className="sticky bottom-0 w-full bg-surface border-t border-border p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/family/search')} className="flex-1 font-label-md text-[14px] px-4 py-2.5 rounded-[6px] border border-border text-on-surface hover:bg-surface-container-low transition-colors" type="button">
              Back
          </button>
          <button onClick={() => router.push('/family/verify')} className="flex-[2] font-label-md text-[14px] font-bold px-4 py-2.5 rounded-[6px] bg-primary text-on-primary hover:opacity-90 transition-opacity flex items-center justify-center gap-2 active:scale-95 shadow-sm" type="button">
              Save & Continue
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
