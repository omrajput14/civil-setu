import AppLayout from "@/components/layout/AppLayout";

export default function GrievancesPage() {
  const statusRail = (
    <span className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest w-full">
      1 ACTIVE &nbsp;·&nbsp; 4 RESOLVED &nbsp;·&nbsp; WARD 4
    </span>
  );

  return (
    <AppLayout title="GOVERNMENT SERVICES" showBackButton={true} statusRail={statusRail}>
      <div className="max-w-3xl mx-auto flex flex-col gap-stack-lg pt-4">
        {/* Page Header & Context */}
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-stack-sm">Grievances</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage and track your reported civic issues.</p>
        </div>

        {/* Primary Action */}
        <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-sm hover:bg-primary-container">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Report New Issue
        </button>

        {/* Active Grievances Section */}
        <section className="flex flex-col gap-stack-sm">
          <h3 className="font-label-sm text-label-sm uppercase text-text-muted tracking-widest pl-1">Active Grievances</h3>
          <div className="flex flex-col gap-stack-md">
            
            {/* Active Card 1 */}
            <article className="bg-surface border border-border rounded-xl p-4 shadow-sm relative overflow-hidden flex flex-col gap-2">
              <div className="absolute top-0 left-0 w-1 h-full bg-warning"></div>
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <h4 className="font-label-md text-label-md text-on-surface">Broken Street Light</h4>
                  <span className="font-data-sm text-data-sm text-text-muted mt-1">ID: GRV-2024-0012</span>
                </div>
                <div className="bg-surface-bright border border-warning/30 text-warning px-2 py-1 rounded flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>pending</span>
                  <span className="font-data-sm text-data-sm uppercase tracking-wider font-semibold">In Progress</span>
                </div>
              </div>
              <div className="bg-background rounded-lg p-3 mt-1 border border-border flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <span className="font-body-md text-[14px] text-on-surface-variant">Technician assigned</span>
                  <span className="font-data-sm text-data-sm text-on-surface font-semibold">40%</span>
                </div>
                <div className="w-full bg-surface-dim rounded-full h-1.5 overflow-hidden border border-border/50">
                  <div className="bg-warning h-full rounded-full transition-all duration-500" style={{ width: "40%" }}></div>
                </div>
              </div>
            </article>

            {/* Active Card 2 */}
            <article className="bg-surface border border-border rounded-xl p-4 shadow-sm relative overflow-hidden flex flex-col gap-2">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary-container"></div>
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <h4 className="font-label-md text-label-md text-on-surface">Water Supply Leakage</h4>
                  <span className="font-data-sm text-data-sm text-text-muted mt-1">ID: GRV-2024-0009</span>
                </div>
                <div className="bg-surface-bright border border-secondary-container/30 text-secondary-container px-2 py-1 rounded flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">find_in_page</span>
                  <span className="font-data-sm text-data-sm uppercase tracking-wider font-semibold">Under Review</span>
                </div>
              </div>
              <div className="bg-background rounded-lg p-3 mt-1 border border-border flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <span className="font-body-md text-[14px] text-on-surface-variant">Initial assessment</span>
                  <span className="font-data-sm text-data-sm text-on-surface font-semibold">15%</span>
                </div>
                <div className="w-full bg-surface-dim rounded-full h-1.5 overflow-hidden border border-border/50">
                  <div className="bg-secondary-container h-full rounded-full transition-all duration-500" style={{ width: "15%" }}></div>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* Resolved Section */}
        <section className="flex flex-col gap-stack-sm mb-stack-lg">
          <h3 className="font-label-sm text-label-sm uppercase text-text-muted tracking-widest pl-1">Resolved</h3>
          <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
            
            {/* Resolved Row 1 */}
            <div className="p-3 px-4 border-b border-border flex justify-between items-center last:border-b-0 hover:bg-background transition-colors cursor-pointer">
              <div className="flex flex-col">
                <h4 className="font-label-md text-label-md text-on-surface">Waste Collection Delay</h4>
                <span className="font-data-sm text-data-sm text-text-muted mt-0.5">ID: GRV-2023-0982</span>
              </div>
              <div className="flex items-center gap-1.5 bg-success/10 text-success px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-data-sm text-data-sm uppercase tracking-wider font-semibold">Resolved</span>
              </div>
            </div>

            {/* Resolved Row 2 */}
            <div className="p-3 px-4 border-b border-border flex justify-between items-center last:border-b-0 hover:bg-background transition-colors cursor-pointer">
              <div className="flex flex-col">
                <h4 className="font-label-md text-label-md text-on-surface">Pothole Repair</h4>
                <span className="font-data-sm text-data-sm text-text-muted mt-0.5">ID: GRV-2023-0850</span>
              </div>
              <div className="flex items-center gap-1.5 bg-success/10 text-success px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-data-sm text-data-sm uppercase tracking-wider font-semibold">Resolved</span>
              </div>
            </div>

          </div>
        </section>
      </div>
    </AppLayout>
  );
}
