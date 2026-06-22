"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useToast } from "@/components/ui/ToastProvider";
import { useRouter } from "next/navigation";

export default function Page() {
  const { showToast } = useToast();
  const router = useRouter();

  const handleDownload = (docName: string) => {
    showToast(`Downloading ${docName} to local storage...`, "info");
    setTimeout(() => {
      showToast(`${docName} downloaded successfully!`, "success");
    }, 1500);
  };

  const handleView = (docName: string) => {
    showToast(`Opening secure viewer for ${docName}...`, "info");
  };

  return (
    <AppLayout title="DIGITAL VAULT" showBackButton={true}>
      <div className="w-full">
        {/* Status Rail */}
        <div className="h-rail-height bg-surface border-b border-border flex items-center justify-between px-margin-mobile w-full">
          <div className="flex items-center gap-3">
            <span className="font-data-sm text-data-sm text-text-muted uppercase">SECURE VAULT: ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success"></span>
            <span className="font-data-sm text-data-sm text-text-muted uppercase">ONLINE</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-margin-mobile space-y-6">
          
          {/* Linked Identities Section */}
          <section>
            <div className="mb-stack-md">
              <h2 className="font-headline-md text-[18px] font-semibold text-primary">Linked Identities</h2>
              <p className="font-body-md text-[13px] text-text-muted mt-1">Core identity documents verified by state authority.</p>
            </div>
            <div className="flex flex-col gap-3">
              {/* Aadhaar Card */}
              <div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-container text-on-primary flex items-center justify-center rounded-[4px] shrink-0">
                      <span className="material-symbols-outlined">badge</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Aadhaar Card</h3>
                      <span className="font-data-sm text-data-sm text-text-muted uppercase">UIDAI • GOV OF INDIA</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 bg-success/10 text-success border border-success/20 rounded-[4px] font-data-sm text-data-sm uppercase shrink-0">
                    Verified
                  </span>
                </div>
                <div className="mb-3">
                  <p className="font-data-md text-data-md text-primary tracking-widest">XXXX-XXXX-8829</p>
                  <p className="font-data-sm text-data-sm text-text-muted mt-1 uppercase">S. RAJESH KUMAR</p>
                </div>
                <div className="pt-2 border-t border-border flex justify-end">
                  <button onClick={() => handleView("Aadhaar Card")} className="font-label-sm text-label-sm text-primary uppercase hover:bg-surface-container-low px-3 py-1.5 transition-colors rounded-[4px] border border-transparent hover:border-border">View Document</button>
                </div>
              </div>
              
              {/* PAN Card */}
              <div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-container text-on-primary flex items-center justify-center rounded-[4px] shrink-0">
                      <span className="material-symbols-outlined">credit_card</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wide">PAN Card</h3>
                      <span className="font-data-sm text-data-sm text-text-muted uppercase">INCOME TAX DEPT</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 bg-success/10 text-success border border-success/20 rounded-[4px] font-data-sm text-data-sm uppercase shrink-0">
                    Verified
                  </span>
                </div>
                <div className="mb-3">
                  <p className="font-data-md text-data-md text-primary tracking-widest">ABCDE1234F</p>
                  <p className="font-data-sm text-data-sm text-text-muted mt-1 uppercase">S. RAJESH KUMAR</p>
                </div>
                <div className="pt-2 border-t border-border flex justify-end">
                  <button onClick={() => handleView("PAN Card")} className="font-label-sm text-label-sm text-primary uppercase hover:bg-surface-container-low px-3 py-1.5 transition-colors rounded-[4px] border border-transparent hover:border-border">View Document</button>
                </div>
              </div>
            </div>
          </section>

          {/* Issued Documents Section */}
          <section>
            <div className="flex justify-between items-end mb-stack-md border-b border-border pb-2">
              <div>
                <h2 className="font-headline-md text-[18px] font-semibold text-primary">Issued Documents</h2>
                <p className="font-body-md text-[13px] text-text-muted mt-1">Official certificates synced from departmental databases.</p>
              </div>
            </div>
            <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] divide-y divide-border">
              
              {/* Document Row 1: Driving License */}
              <div className="p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-surface-dim flex items-center justify-center rounded-[4px] border border-border shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "20px" }}>directions_car</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-label-md text-[13px] text-on-surface uppercase truncate">Driving License</h4>
                  <p className="font-data-sm text-data-sm text-text-muted mt-0.5">Min. of Road Transport • 12 JAN 2021</p>
                  <p className="font-data-sm text-data-sm text-primary mt-0.5">DL-14-2021-9982</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => handleDownload("Driving License")} className="p-1.5 text-text-muted hover:text-primary transition-colors" title="Download">
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>download</span>
                  </button>
                  <button onClick={() => handleView("Driving License")} className="p-1.5 text-text-muted hover:text-primary transition-colors" title="View">
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>chevron_right</span>
                  </button>
                </div>
              </div>

              {/* Document Row 2: COVID Vaccine */}
              <div className="p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-surface-dim flex items-center justify-center rounded-[4px] border border-border shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "20px" }}>vaccines</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-label-md text-[13px] text-on-surface uppercase truncate">COVID-19 Vaccination</h4>
                  <p className="font-data-sm text-data-sm text-text-muted mt-0.5">Min. of Health • 05 AUG 2021</p>
                  <p className="font-data-sm text-data-sm text-primary mt-0.5">COV-992-110</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => handleDownload("COVID-19 Vaccination")} className="p-1.5 text-text-muted hover:text-primary transition-colors" title="Download">
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>download</span>
                  </button>
                  <button onClick={() => handleView("COVID-19 Vaccination")} className="p-1.5 text-text-muted hover:text-primary transition-colors" title="View">
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>chevron_right</span>
                  </button>
                </div>
              </div>

              {/* Document Row 3: Income Certificate */}
              <div className="p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-surface-dim flex items-center justify-center rounded-[4px] border border-border shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "20px" }}>request_quote</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-label-md text-[13px] text-on-surface uppercase truncate">Income Certificate</h4>
                  <p className="font-data-sm text-data-sm text-text-muted mt-0.5">Revenue Department • 18 MAR 2023</p>
                  <p className="font-data-sm text-data-sm text-primary mt-0.5">INC-TN-23-441</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => handleDownload("Income Certificate")} className="p-1.5 text-text-muted hover:text-primary transition-colors" title="Download">
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>download</span>
                  </button>
                  <button onClick={() => handleView("Income Certificate")} className="p-1.5 text-text-muted hover:text-primary transition-colors" title="View">
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>chevron_right</span>
                  </button>
                </div>
              </div>

              {/* Add Document CTA */}
              <div className="p-3 bg-surface-container-low flex justify-center">
                <button onClick={() => router.push('/vault/add')} className="flex items-center gap-2 font-label-md text-label-md text-primary uppercase hover:text-primary-container transition-colors py-2 px-4 border border-border rounded-[6px] bg-surface hover:bg-surface-bright">
                  <span className="material-symbols-outlined text-sm">post_add</span>
                  Add New Document
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
