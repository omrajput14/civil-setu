import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Home() {
  const statusRail = (
    <span className="font-data-sm text-data-sm text-text-muted tracking-widest uppercase flex items-center">
      AADHAAR LINKED 
      <span className="material-symbols-outlined text-[12px] mx-2 opacity-50">fiber_manual_record</span> 
      WARD 4 
      <span className="material-symbols-outlined text-[12px] mx-2 opacity-50">fiber_manual_record</span>
      <span className="text-success font-bold flex items-center gap-1 ml-2">
        <span className="material-symbols-outlined text-[14px]">check_circle</span> STATUS: VERIFIED
      </span>
    </span>
  );

  return (
    <AppLayout title="Rural Connect" statusRail={statusRail}>
      <div className="max-w-[1024px] mx-auto flex flex-col gap-stack-lg">
        {/* Welcome Section */}
        <section>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-1">Welcome back, Ramesh.</h1>
          <p className="font-body-md text-body-md text-text-muted">Overview of your current civic engagements and active services.</p>
        </section>

        {/* Section 1: Active Applications (KPI Cards) */}
        <section>
          <h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest mb-stack-md flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">folder_open</span> Active Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface border border-border rounded elevation-card p-stack-md relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-1 h-full bg-warning"></div>
              <div className="flex justify-between items-start mb-3">
                <span className="bg-surface-container border border-outline-variant px-2 py-0.5 rounded font-data-sm text-data-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px] text-warning">pending</span> IN PROGRESS
                </span>
                <span className="font-data-sm text-data-sm text-text-muted">Updated: 09:42 AM</span>
              </div>
              <h3 className="font-body-lg text-body-lg text-on-surface font-semibold">Agricultural Subsidy</h3>
              <div className="font-data-md text-data-md text-primary bg-primary-fixed/30 px-2 py-1 rounded inline-block self-start mt-2 border border-primary-fixed-dim">
                ID: SUB-2023-891A
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between font-data-sm text-data-sm mb-1 text-text-muted">
                  <span>Step 2 of 4: Verification</span>
                  <span className="text-on-surface font-bold">50%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded overflow-hidden">
                  <div className="h-full bg-primary w-2/4"></div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface border border-border rounded elevation-card p-stack-md relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-1 h-full bg-success"></div>
              <div className="flex justify-between items-start mb-3">
                <span className="bg-surface-container border border-outline-variant px-2 py-0.5 rounded font-data-sm text-data-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px] text-success">task_alt</span> APPROVED
                </span>
                <span className="font-data-sm text-data-sm text-text-muted">Updated: Yesterday</span>
              </div>
              <h3 className="font-body-lg text-body-lg text-on-surface font-semibold">Housing Expansion Permit</h3>
              <div className="font-data-md text-data-md text-primary bg-primary-fixed/30 px-2 py-1 rounded inline-block self-start mt-2 border border-primary-fixed-dim">
                ID: PRM-442-99B
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-text-muted">Ready for final execution.</span>
                <button className="font-label-sm text-label-sm text-primary hover:text-primary-container flex items-center gap-1 uppercase tracking-wide">
                  View Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Recommended Schemes */}
        <section>
          <h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest mb-stack-md flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">lightbulb</span> Recommended Schemes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Scheme Card 1 */}
            <Link href="/schemes" className="bg-surface border border-border rounded elevation-card p-stack-md flex flex-col justify-between group hover:border-primary-fixed-dim transition-colors block">
              <div>
                <div className="w-10 h-10 rounded bg-tertiary-fixed-dim/20 flex items-center justify-center mb-3 border border-tertiary-fixed">
                  <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                </div>
                <h3 className="font-label-md text-label-md text-on-surface mb-1">Solar Water Pump Yojana</h3>
                <p className="font-body-md text-body-md text-text-muted">Up to 80% capital subsidy for eligible farmers to install off-grid solar water pumps.</p>
              </div>
              <div className="mt-stack-md pt-stack-sm border-t border-border flex justify-between items-center">
                <span className="font-data-sm text-data-sm text-success font-bold">HIGH MATCH</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">east</span>
              </div>
            </Link>

            {/* Scheme Card 2 */}
            <Link href="/schemes" className="bg-surface border border-border rounded elevation-card p-stack-md flex flex-col justify-between group hover:border-primary-fixed-dim transition-colors block">
              <div>
                <div className="w-10 h-10 rounded bg-secondary-fixed/50 flex items-center justify-center mb-3 border border-secondary-fixed-dim">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <h3 className="font-label-md text-label-md text-on-surface mb-1">Youth Skill Initiative</h3>
                <p className="font-body-md text-body-md text-text-muted">Technical training grants for family dependents aged 18-25 in the rural technology sector.</p>
              </div>
              <div className="mt-stack-md pt-stack-sm border-t border-border flex justify-between items-center">
                <span className="font-data-sm text-data-sm text-on-surface-variant font-bold">ELIGIBLE</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">east</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section 3: Recent Activity (List View) */}
        <section>
          <h2 className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest mb-stack-md flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">history</span> Recent Activity
          </h2>
          <div className="bg-surface border border-border rounded elevation-card">
            {/* List Item 1 */}
            <div className="p-stack-md border-b border-border last:border-0 flex gap-stack-md items-start hover:bg-surface-container-lowest transition-colors">
              <div className="mt-1 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">upload_file</span>
              </div>
              <div className="flex-1">
                <h4 className="font-label-md text-label-md text-on-surface">Document Upload Successful</h4>
                <p className="font-body-md text-body-md text-text-muted mt-0.5">Land Registry Form.pdf was attached to SUB-2023-891A.</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-data-sm text-data-sm text-text-muted block">Today</span>
                <span className="font-data-sm text-data-sm text-text-muted opacity-60">09:42 AM</span>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="p-stack-md border-b border-border last:border-0 flex gap-stack-md items-start hover:bg-surface-container-lowest transition-colors">
              <div className="mt-1 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">gavel</span>
              </div>
              <div className="flex-1">
                <h4 className="font-label-md text-label-md text-on-surface">Grievance Case Closed</h4>
                <p className="font-body-md text-body-md text-text-muted mt-0.5">Water supply disruption report #GRV-110 resolved.</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-data-sm text-data-sm text-text-muted block">Oct 24</span>
                <span className="font-data-sm text-data-sm text-text-muted opacity-60">14:15 PM</span>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="p-stack-md border-b border-border last:border-0 flex gap-stack-md items-start hover:bg-surface-container-lowest transition-colors">
              <div className="mt-1 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">login</span>
              </div>
              <div className="flex-1">
                <h4 className="font-label-md text-label-md text-on-surface">System Login</h4>
                <p className="font-body-md text-body-md text-text-muted mt-0.5">Authenticated via Mobile OTP.</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-data-sm text-data-sm text-text-muted block">Oct 22</span>
                <span className="font-data-sm text-data-sm text-text-muted opacity-60">08:00 AM</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
