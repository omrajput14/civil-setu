import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="WARD BUDGET & PROGRESS" showBackButton={true}>
      <div className="w-full">
        {/* Status Rail */}
        <div className="h-rail-height bg-surface border-b border-border flex items-center px-margin-mobile w-full">
          <span className="font-data-sm text-data-sm text-text-muted uppercase">WARD 4 · FY 2023-24 · 8 ACTIVE PROJECTS</span>
        </div>
        
        {/* Main Content */}
        <div className="p-margin-mobile space-y-6">
          
          {/* Section 1: Budget Overview */}
          <section className="flex flex-col gap-2">
            <h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest">WARD BUDGET OVERVIEW</h2>
            <div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4">
              {/* Budget Figures - 3 columns using grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="flex flex-col">
                  <span className="font-label-sm text-[11px] text-text-muted mb-1">Total Budget</span>
                  <span className="font-data-lg text-[20px] font-bold text-primary leading-tight">₹42.5L</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[11px] text-text-muted mb-1">Utilized</span>
                  <span className="font-data-lg text-[20px] font-bold text-primary leading-tight">₹28.1L</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[11px] text-text-muted mb-1">Remaining</span>
                  <span className="font-data-lg text-[20px] font-bold text-warning leading-tight">₹14.3L</span>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-background rounded-full h-2 overflow-hidden border border-border">
                <div className="bg-primary h-2" style={{ width: "66%" }}></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-data-sm text-data-sm text-text-muted">0%</span>
                <span className="font-data-sm text-data-sm text-text-muted">66% UTILIZED</span>
                <span className="font-data-sm text-data-sm text-text-muted">100%</span>
              </div>
            </div>
          </section>

          {/* Section 2: Active Projects */}
          <section className="flex flex-col gap-2">
            <h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest">ACTIVE WARD PROJECTS</h2>
            <div className="flex flex-col gap-3">
              
              {/* Project Card 1 */}
              <div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-label-md text-label-md text-on-surface truncate">Main Road Paving - Ward 4 East</h3>
                    <span className="font-data-sm text-data-sm text-text-muted mt-1">ID: PWR-W4-001</span>
                  </div>
                  <span className="px-2 py-1 bg-surface-container-high text-primary font-data-sm text-data-sm rounded-[4px] uppercase border border-surface-tint whitespace-nowrap shrink-0">IN PROGRESS</span>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex justify-between items-center">
                    <span className="font-label-sm text-label-sm text-text-muted">Progress</span>
                    <span className="font-data-sm text-data-sm text-primary">75%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-border">
                    <div className="bg-primary h-1.5" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="mt-1 pt-2 border-t border-border">
                  <span className="font-body-md text-[13px] text-text-muted">Next Milestone: <span className="text-on-surface font-medium">Drainage completion</span></span>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-label-md text-label-md text-on-surface truncate">Solar Street Lighting - Sector B</h3>
                    <span className="font-data-sm text-data-sm text-text-muted mt-1">ID: PWR-W4-012</span>
                  </div>
                  <span className="px-2 py-1 bg-surface-bright text-success font-data-sm text-data-sm rounded-[4px] uppercase border border-success whitespace-nowrap shrink-0">ON TRACK</span>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex justify-between items-center">
                    <span className="font-label-sm text-label-sm text-text-muted">Progress</span>
                    <span className="font-data-sm text-data-sm text-success">40%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-border">
                    <div className="bg-success h-1.5" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div className="mt-1 pt-2 border-t border-border">
                  <span className="font-body-md text-[13px] text-text-muted">Next Milestone: <span className="text-on-surface font-medium">Battery installation</span></span>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-label-md text-label-md text-on-surface truncate">Primary School Renovation</h3>
                    <span className="font-data-sm text-data-sm text-text-muted mt-1">ID: PWR-W4-009</span>
                  </div>
                  <span className="px-2 py-1 bg-error-container text-on-error-container font-data-sm text-data-sm rounded-[4px] uppercase border border-error whitespace-nowrap shrink-0">DELAYED</span>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex justify-between items-center">
                    <span className="font-label-sm text-label-sm text-text-muted">Progress</span>
                    <span className="font-data-sm text-data-sm text-danger">15%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-border">
                    <div className="bg-danger h-1.5" style={{ width: "15%" }}></div>
                  </div>
                </div>
                <div className="mt-1 pt-2 border-t border-border">
                  <span className="font-body-md text-[13px] text-text-muted">Reason: <span className="text-danger font-medium">Material procurement</span></span>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
