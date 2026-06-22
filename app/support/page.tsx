import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="SUPPORT CENTER" showBackButton={true}>
      <div className="w-full">
        <div className="p-margin-mobile space-y-4">
          {/* Page Header & Action */}
          <div>
            <h2 className="font-headline-md text-[18px] font-bold text-primary">Support Center</h2>
            <p className="font-body-md text-[13px] text-text-muted mt-1 leading-relaxed">Manage active inquiries and access technical documentation.</p>
          </div>

          {/* Raise New Ticket Button - full width horizontal */}
          <Link href="/support/new" className="w-full bg-surface text-primary border border-border font-label-md text-label-md px-4 py-3 shadow-[0_1px_2px_rgba(17,24,39,0.06)] hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 uppercase tracking-wide rounded-[6px]">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Raise New Support Ticket
          </Link>

          {/* Search Bar */}
          <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex items-center px-4 py-3 rounded-[6px]">
            <span className="material-symbols-outlined text-text-muted mr-3">search</span>
            <input className="flex-1 bg-transparent border-none outline-none font-body-md text-[14px] text-on-surface placeholder:text-text-muted focus:ring-0 p-0" placeholder="Search for topics, guides..." type="text" />
          </div>

          {/* Quick Support Cards */}
          <section className="space-y-3">
            <h3 className="font-data-sm text-data-sm text-text-muted uppercase">Quick Help Topics</h3>
            <div className="flex flex-col gap-3">
              {/* Card 1: Payment Issues */}
              <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 rounded-[6px] hover:border-primary-container transition-colors cursor-pointer group">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors text-[28px] shrink-0 mt-0.5">payments</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-label-md text-[15px] text-primary mb-1">Payment Issues</h3>
                    <p className="font-body-md text-[13px] text-text-muted leading-relaxed">Resolve transaction failures and bill discrepancies.</p>
                  </div>
                  <span className="material-symbols-outlined text-text-muted shrink-0">arrow_forward</span>
                </div>
              </div>

              {/* Card 2: Scheme Eligibility */}
              <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 rounded-[6px] hover:border-primary-container transition-colors cursor-pointer group">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors text-[28px] shrink-0 mt-0.5">fact_check</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-label-md text-[15px] text-primary mb-1">Scheme Eligibility</h3>
                    <p className="font-body-md text-[13px] text-text-muted leading-relaxed">Check qualifications for civic programs and grants.</p>
                  </div>
                  <span className="material-symbols-outlined text-text-muted shrink-0">arrow_forward</span>
                </div>
              </div>

              {/* Card 3: Document Vault Help */}
              <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 rounded-[6px] hover:border-primary-container transition-colors cursor-pointer group">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors text-[28px] shrink-0 mt-0.5">folder_managed</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-label-md text-[15px] text-primary mb-1">Document Vault Help</h3>
                    <p className="font-body-md text-[13px] text-text-muted leading-relaxed">Assistance with uploading and verifying IDs.</p>
                  </div>
                  <span className="material-symbols-outlined text-text-muted shrink-0">arrow_forward</span>
                </div>
              </div>
            </div>
          </section>

          {/* Active Support Tickets */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-label-md text-[13px] text-text-muted uppercase tracking-wider">Active Tickets</h3>
              <div className="flex items-center gap-1 text-text-muted">
                <span className="material-symbols-outlined text-[14px]">sync</span>
                <span className="font-data-sm text-[10px] uppercase">2 min ago</span>
              </div>
            </div>
            <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] divide-y divide-border">
              {/* Ticket 1 */}
              <div className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-data-md text-[12px] text-primary bg-primary-fixed/30 px-2 py-0.5 rounded-[4px]">TKT-8821</span>
                      <span className="bg-warning text-white font-data-sm text-[10px] uppercase px-2 py-0.5 rounded-[4px]">In Progress</span>
                    </div>
                    <h4 className="font-label-md text-[14px] text-on-surface mb-1">Water Bill Discrepancy</h4>
                    <p className="font-body-md text-[12px] text-text-muted leading-relaxed">Oct 12, 2023 • Dept. of Water Services</p>
                  </div>
                  <span className="material-symbols-outlined text-text-muted shrink-0">chevron_right</span>
                </div>
              </div>
              {/* Ticket 2 */}
              <div className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-data-md text-[12px] text-text-muted bg-background px-2 py-0.5 rounded-[4px]">TKT-9920</span>
                      <span className="bg-success text-white font-data-sm text-[10px] uppercase px-2 py-0.5 rounded-[4px]">Resolved</span>
                    </div>
                    <h4 className="font-label-md text-[14px] text-text-muted mb-1">Address Verification Delay</h4>
                    <p className="font-body-md text-[12px] text-text-muted leading-relaxed">Oct 05, 2023 • Civic Registration Office</p>
                  </div>
                  <span className="material-symbols-outlined text-text-muted shrink-0">chevron_right</span>
                </div>
              </div>
            </div>
          </section>

          {/* Most Read Guides */}
          <section className="space-y-3">
            <h3 className="font-label-md text-[13px] text-text-muted uppercase tracking-wider">Most Read Guides</h3>
            <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] divide-y divide-border">
              <a className="flex items-center justify-between p-3 hover:bg-surface-container-low transition-colors group" href="#">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">article</span>
                  <span className="font-body-md text-[13px] text-primary group-hover:text-primary-container truncate">Updating Residential Address</span>
                </div>
                <span className="material-symbols-outlined text-text-muted shrink-0">chevron_right</span>
              </a>
              <a className="flex items-center justify-between p-3 hover:bg-surface-container-low transition-colors group" href="#">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">article</span>
                  <span className="font-body-md text-[13px] text-primary group-hover:text-primary-container truncate">Understanding Property Tax</span>
                </div>
                <span className="material-symbols-outlined text-text-muted shrink-0">chevron_right</span>
              </a>
              <a className="flex items-center justify-between p-3 hover:bg-surface-container-low transition-colors group" href="#">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">article</span>
                  <span className="font-body-md text-[13px] text-primary group-hover:text-primary-container truncate">Digital ID Verification</span>
                </div>
                <span className="material-symbols-outlined text-text-muted shrink-0">chevron_right</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
