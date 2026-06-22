"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  
  return (
    <AppLayout title="SUCCESS" showBackButton={true}>
      <div className="w-full">
        <div className="p-margin-mobile space-y-4">
          
          {/* Success Hero Section */}
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-4 border border-success/20">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h1 className="font-headline-md text-[20px] font-bold text-on-surface mb-1">Member Added Successfully</h1>
            <p className="font-body-md text-[13px] text-text-muted leading-relaxed">The profile has been verified and successfully linked to your digital household registry.</p>
          </div>

          {/* Household Summary Card */}
          <section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] flex flex-col overflow-hidden">
            <div className="p-3 border-b border-border bg-surface-bright flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">groups</span>
                <h2 className="font-headline-sm text-[14px] font-bold text-primary">Household Summary</h2>
              </div>
              <span className="bg-success/10 text-success border border-success/20 px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-wider uppercase">Active</span>
            </div>
            
            <div className="flex flex-col divide-y divide-border">
              
              {/* Household Identity */}
              <div className="p-4 flex flex-col gap-4 bg-surface-container-lowest">
                <div>
                  <p className="font-label-sm text-[10px] text-text-muted uppercase tracking-wider mb-0.5">Household ID</p>
                  <p className="font-data-md text-[16px] font-bold text-primary">HH-9823-4412</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-text-muted text-[18px] shrink-0 mt-0.5">location_on</span>
                    <div className="flex flex-col min-w-0">
                      <p className="font-label-sm text-[11px] text-text-muted">Primary Residence</p>
                      <p className="font-body-md text-[13px] text-on-surface leading-tight mt-0.5">Ward 04, Panchayat Bhavan Road, Raipur Village</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-text-muted text-[18px] shrink-0 mt-0.5">contact_phone</span>
                    <div className="flex flex-col min-w-0">
                      <p className="font-label-sm text-[11px] text-text-muted">Head of Family</p>
                      <p className="font-body-md text-[13px] text-on-surface leading-tight mt-0.5">Rajesh Kumar Sharma</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Members List */}
              <div className="p-4 bg-surface">
                <p className="font-label-sm text-[11px] text-text-muted uppercase tracking-wider mb-3">Linked Members (4)</p>
                
                <div className="flex flex-col gap-2">
                  {/* Head */}
                  <div className="flex items-center gap-3 p-3 border border-border rounded-[6px] bg-surface-container-lowest">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="font-label-md text-[14px] font-bold text-on-surface truncate">Rajesh Kumar Sharma</p>
                      <p className="font-label-sm text-[11px] text-text-muted mt-0.5">Head of Family • 45 yrs</p>
                    </div>
                  </div>
                  
                  {/* Existing Member */}
                  <div className="flex items-center gap-3 p-3 border border-border rounded-[6px] bg-surface-container-lowest">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="font-label-md text-[14px] font-bold text-on-surface truncate">Meena Devi</p>
                      <p className="font-label-sm text-[11px] text-text-muted mt-0.5">Spouse • 41 yrs</p>
                    </div>
                  </div>
                  
                  {/* Newly Added Member */}
                  <div className="flex items-center gap-3 p-3 border-2 border-success rounded-[6px] bg-success/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-success text-white px-2 py-0.5 font-label-sm text-[9px] font-bold rounded-bl-[4px] tracking-wider uppercase">Newly Added</div>
                    <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0 mt-1">
                      <p className="font-label-md text-[14px] font-bold text-success truncate">Amit Kumar Sharma</p>
                      <p className="font-label-sm text-[11px] text-success/80 mt-0.5">Son • 19 yrs</p>
                    </div>
                  </div>
                  
                  {/* Existing Member */}
                  <div className="flex items-center gap-3 p-3 border border-border rounded-[6px] bg-surface-container-lowest">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="font-label-md text-[14px] font-bold text-on-surface truncate">Priya Sharma</p>
                      <p className="font-label-sm text-[11px] text-text-muted mt-0.5">Daughter • 16 yrs</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </section>

          {/* Action Buttons Section */}
          <div className="flex flex-col gap-3 mt-4">
            <button onClick={() => router.push('/family/search')} className="w-full flex items-center justify-center gap-2 border border-border bg-surface text-on-surface px-4 py-3 rounded-[6px] font-label-md text-[14px] hover:bg-surface-container-low transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Add Another Member
            </button>
            <button onClick={() => router.push('/user-profile')} className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary px-4 py-3 rounded-[6px] font-label-md text-[14px] font-bold hover:opacity-90 transition-opacity shadow-sm">
              <span className="material-symbols-outlined text-[18px]">account_circle</span>
              Go to Profile
            </button>
          </div>

          {/* Sub-actions */}
          <div className="mt-4 flex flex-col items-center gap-3">
            <a className="font-label-md text-[13px] text-primary flex items-center gap-1 hover:underline text-center" href="#">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download Household Certificate
            </a>
            <p className="font-label-sm text-[11px] text-text-muted text-center max-w-[280px]">
              Data will be synced with central systems within 24 hours.
            </p>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
