import AppLayout from "@/components/layout/AppLayout";
import { SCHEMES_DATA } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function SchemeDetail({ params }: { params: { id: string } }) {
  const scheme = SCHEMES_DATA[params.id];

  if (!scheme) {
    notFound();
  }

  return (
    <AppLayout title={scheme.name.toUpperCase()} showBackButton={true}>
      <div className="w-full h-full relative">
        <main className="px-4 py-6 flex flex-col gap-6 max-w-2xl mx-auto mb-20">
          
          {/* Header Section */}
          <section className="bg-surface border border-border rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-start gap-4 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary font-label-sm text-[10px] uppercase tracking-wider font-bold rounded-md">
                {scheme.category}
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-success/10 text-success font-label-sm text-[10px] uppercase tracking-wider font-bold rounded-md">
                <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                ELIGIBLE
              </span>
            </div>
            
            <h1 className="font-headline-md text-[22px] font-bold text-on-surface mb-2 leading-tight">
              {scheme.name}
            </h1>
            <p className="font-body-md text-[14px] text-text-muted leading-relaxed">
              {scheme.benefitDescription}
            </p>

            <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
              <div>
                <p className="font-label-sm text-[11px] text-text-muted uppercase tracking-wider mb-1">Financial Benefit</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-data-lg text-[24px] font-bold text-primary font-mono">{scheme.benefitAmount}</span>
                  <span className="font-label-sm text-[12px] text-text-muted">/{scheme.frequency}</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[24px]">payments</span>
              </div>
            </div>
          </section>

          {/* Eligibility Criteria */}
          <section className="flex flex-col gap-3">
            <h2 className="font-label-md text-[13px] uppercase text-text-muted tracking-wider font-bold">Eligibility Criteria</h2>
            <div className="bg-surface border border-border rounded-xl p-5 shadow-sm">
              <ul className="flex flex-col gap-4">
                {scheme.eligibilityCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-success text-[20px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-body-md text-[14px] text-on-surface leading-snug">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Required Documents */}
          <section className="flex flex-col gap-3">
            <h2 className="font-label-md text-[13px] uppercase text-text-muted tracking-wider font-bold">Required Documents</h2>
            <div className="bg-surface border border-border rounded-xl p-0 shadow-sm overflow-hidden divide-y divide-border">
              <div className="p-4 flex items-center justify-between bg-success/5">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-success" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <h3 className="font-label-md text-[14px] font-bold text-on-surface">Aadhaar Card</h3>
                    <p className="font-body-sm text-[12px] text-text-muted mt-0.5">Available in Vault</p>
                  </div>
                </div>
                <span className="font-label-sm text-[11px] text-success font-bold uppercase">Ready</span>
              </div>
              <div className="p-4 flex items-center justify-between bg-success/5">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-success" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <h3 className="font-label-md text-[14px] font-bold text-on-surface">Income Certificate</h3>
                    <p className="font-body-sm text-[12px] text-text-muted mt-0.5">Available in Vault</p>
                  </div>
                </div>
                <span className="font-label-sm text-[11px] text-success font-bold uppercase">Ready</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-text-muted">pending_actions</span>
                  <div>
                    <h3 className="font-label-md text-[14px] font-bold text-on-surface">Bank Passbook</h3>
                    <p className="font-body-sm text-[12px] text-text-muted mt-0.5">Requires Upload</p>
                  </div>
                </div>
                <button className="text-primary font-label-sm text-[12px] font-bold uppercase hover:underline">Upload</button>
              </div>
            </div>
          </section>
        </main>

        {/* Fixed Action Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-border p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
          <div className="max-w-screen-md mx-auto flex gap-3">
            <button className="flex-1 bg-primary text-on-primary font-label-lg text-[15px] font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Apply Now
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button className="w-14 shrink-0 border border-border text-primary font-bold py-3.5 rounded-xl hover:bg-surface-container-low transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">bookmark_add</span>
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
