"use client";

import AppLayout from "@/components/layout/AppLayout";
import { useRouter } from "next/navigation";
import { useGrievance } from "../../GrievanceContext";

export default function Page() {
  const router = useRouter();
  const { category, landmark, submitGrievance } = useGrievance();

  const handleFinish = () => {
    submitGrievance();
    router.push("/grievances");
  };

  const handleAnother = () => {
    submitGrievance();
    router.push("/grievances/report/step-1");
  };

  return (
    <AppLayout title="CIVICSETU CITIZEN - REPORT ISSUE CONFIRMATION" showBackButton={true}>
      <div className="w-full h-full relative">
        <main className="flex-grow flex flex-col items-center py-stack-lg px-margin-mobile sm:px-margin-desktop w-full max-w-3xl mx-auto">
          <div className="w-full flex flex-col gap-2 mb-stack-lg">
            <div className="flex justify-between items-center">
              <span className="font-data-sm text-data-sm text-text-muted uppercase">STEP 3 OF 3: CONFIRMATION</span>
              <span className="font-data-sm text-data-sm text-success font-semibold uppercase">100% COMPLETE</span>
            </div>
            <div className="h-2 w-full bg-border rounded-full overflow-hidden flex">
              <div className="h-full bg-success w-full transition-all duration-500 ease-out"></div>
            </div>
          </div>
          
          <div className="w-full bg-surface border border-border rounded-lg shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg flex flex-col items-center text-center mb-stack-lg">
            <div className="h-20 w-20 rounded-full bg-primary-fixed flex items-center justify-center mb-stack-md text-primary">
              <span className="material-symbols-outlined fill text-5xl" data-icon="check_circle">check_circle</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">Report Submitted Successfully</h2>
            <p className="font-body-md text-text-muted max-w-md">Your issue has been logged into the civic management system. Please save your tracking ID for future reference.</p>
          </div>
          
          <div className="w-full bg-surface border border-border rounded-lg shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg mb-stack-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-stack-md border-b border-border pb-stack-md mb-stack-md">
              <div>
                <span className="font-label-sm text-label-sm text-text-muted uppercase block mb-1">TRACKING ID</span>
                <span className="font-data-lg text-data-lg text-primary tracking-tight">GRV-2024-0012</span>
              </div>
              <button className="bg-surface-variant hover:bg-surface-dim text-on-surface-variant px-4 py-2 rounded-lg font-label-md text-label-md transition-colors flex items-center gap-2 border border-border">
                <span className="material-symbols-outlined text-sm" data-icon="content_copy">content_copy</span>
                COPY ID
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-md">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-text-muted uppercase mb-1">CATEGORY</span>
                <span className="font-body-md text-on-surface font-medium flex items-center gap-2 capitalize">
                  <span className="material-symbols-outlined text-primary text-sm" data-icon="category">category</span>
                  {category}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-text-muted uppercase mb-1">LOCATION</span>
                <span className="font-body-md text-on-surface font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm" data-icon="location_on">location_on</span>
                  {landmark || "Auto-detected"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-text-muted uppercase mb-1">DATE / TIME</span>
                <span className="font-data-md text-data-md text-on-surface">{new Date().toISOString().slice(0, 16).replace('T', ' ')}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-surface border border-border rounded-lg shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg mb-stack-lg">
            <h3 className="font-label-md text-label-md text-text-muted uppercase mb-stack-md tracking-wider">NEXT STEPS</h3>
            <div className="relative border-l-2 border-border ml-3 pl-6 py-2 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-warning border-2 border-surface"></div>
                <h4 className="font-label-md text-label-md text-on-surface mb-1 flex items-center gap-2">
                  Verification
                  <span className="bg-surface-variant text-on-surface-variant font-data-sm text-data-sm px-2 py-0.5 rounded uppercase">In Progress</span>
                </h4>
                <p className="font-body-md text-text-muted text-sm">A field officer will verify the report within 24 hours.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-surface border-2 border-border"></div>
                <h4 className="font-label-md text-label-md text-text-muted mb-1">Allocation</h4>
                <p className="font-body-md text-text-muted text-sm">The issue will be assigned to the relevant department.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-surface border-2 border-border"></div>
                <h4 className="font-label-md text-label-md text-text-muted mb-1">Resolution</h4>
                <p className="font-body-md text-text-muted text-sm">You will be notified once the issue is resolved.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full flex flex-col gap-stack-md mt-auto">
            <button 
              onClick={handleFinish}
              className="w-full bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-label-md text-label-md py-3 px-4 rounded-lg shadow-[0_1px_2px_rgba(17,24,39,0.06)] transition-colors text-center uppercase tracking-wider"
            >
              BACK TO DASHBOARD
            </button>
            <button 
              onClick={handleAnother}
              className="w-full bg-surface hover:bg-surface-variant text-primary border border-border font-label-md text-label-md py-3 px-4 rounded-lg transition-colors text-center uppercase tracking-wider"
            >
              FILE ANOTHER ISSUE
            </button>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
