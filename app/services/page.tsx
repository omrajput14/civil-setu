import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function ServicesHubPage() {
  const statusRail = (
    <span className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest w-full">
      Global Directory Index // Active
    </span>
  );

  return (
    <AppLayout title="CITIZEN SERVICES" statusRail={statusRail}>
      <div className="max-w-7xl mx-auto space-y-stack-lg">
        {/* Search Section */}
        <section className="bg-surface p-6 border border-border elevation-card relative overflow-hidden mt-4">
          <div>
            <label className="sr-only" htmlFor="service-search">Search for services or documents</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">search</span>
              <input 
                className="w-full bg-surface border border-border pl-12 pr-4 py-4 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                id="service-search" 
                placeholder="Search for services or documents..." 
                type="text" 
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-on-primary px-4 py-2 font-label-md text-label-md uppercase hover:bg-primary-container transition-colors">
                Locate
              </button>
            </div>
          </div>
        </section>

        {/* Primary Services Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-label-md text-label-md uppercase text-text-muted tracking-wide">Primary Modules</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Payments Module */}
            <Link href="/payments" className="bg-surface border border-border elevation-card flex flex-col group hover:border-primary transition-colors block">
              <div className="h-rail-height bg-surface border-b border-border flex items-center justify-between px-4">
                <span className="font-data-sm text-data-sm text-text-muted uppercase">SYS.01 // Financial</span>
                <span className="w-2 h-2 rounded-full bg-warning"></span>
              </div>
              <div className="p-6 flex-1 flex flex-col items-start">
                <div className="w-12 h-12 bg-surface-container-high border border-border flex items-center justify-center mb-4 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Payments & Utilities</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-1">Manage water, electricity, and property taxes. View upcoming due dates.</p>
                <div className="mt-6 flex items-center text-primary font-label-md text-label-md uppercase">
                  <span>Access Module</span>
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Digital Vault */}
            <Link href="/vault" className="bg-surface border border-border elevation-card flex flex-col group hover:border-primary transition-colors block">
              <div className="h-rail-height bg-surface border-b border-border flex items-center justify-between px-4">
                <span className="font-data-sm text-data-sm text-text-muted uppercase">SYS.02 // Identity</span>
                <span className="w-2 h-2 rounded-full bg-success"></span>
              </div>
              <div className="p-6 flex-1 flex flex-col items-start">
                <div className="w-12 h-12 bg-surface-container-high border border-border flex items-center justify-center mb-4 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">badge</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Digital Vault</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-1">Access verified ID cards, certificates, and securely stored personal documents.</p>
                <div className="mt-6 flex items-center text-primary font-label-md text-label-md uppercase">
                  <span>Access Module</span>
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Gov Schemes */}
            <Link href="/schemes" className="bg-surface border border-border elevation-card flex flex-col group hover:border-primary transition-colors block">
              <div className="h-rail-height bg-surface border-b border-border flex items-center justify-between px-4">
                <span className="font-data-sm text-data-sm text-text-muted uppercase">SYS.03 // Welfare</span>
                <span className="w-2 h-2 rounded-full bg-success"></span>
              </div>
              <div className="p-6 flex-1 flex flex-col items-start">
                <div className="w-12 h-12 bg-surface-container-high border border-border flex items-center justify-center mb-4 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Gov Schemes</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-1">Discover and apply for matched welfare programs and state initiatives.</p>
                <div className="mt-6 flex items-center text-primary font-label-md text-label-md uppercase">
                  <span>Access Module</span>
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Grievances */}
            <Link href="/grievances" className="bg-surface border border-border elevation-card flex flex-col group hover:border-primary transition-colors block">
              <div className="h-rail-height bg-surface border-b border-border flex items-center justify-between px-4">
                <span className="font-data-sm text-data-sm text-text-muted uppercase">SYS.04 // Reporting</span>
                <span className="w-2 h-2 rounded-full bg-success"></span>
              </div>
              <div className="p-6 flex-1 flex flex-col items-start">
                <div className="w-12 h-12 bg-surface-container-high border border-border flex items-center justify-center mb-4 group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">report_problem</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Grievances</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-1">Report civic issues, log complaints, and track resolution status in real-time.</p>
                <div className="mt-6 flex items-center text-primary font-label-md text-label-md uppercase">
                  <span>Access Module</span>
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Secondary Services */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-label-md text-label-md uppercase text-text-muted tracking-wide">Utility Functions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Autopay */}
            <Link href="/autopay" className="bg-surface border border-border elevation-card p-4 flex items-center hover:bg-surface-container-low transition-colors block">
              <div className="w-10 h-10 border border-border flex items-center justify-center mr-4 bg-background">
                <span className="material-symbols-outlined text-primary">autorenew</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Autopay Config</h4>
                <span className="font-data-sm text-data-sm text-text-muted uppercase">Manage Rules</span>
              </div>
            </Link>
            
            {/* Analytics */}
            <Link href="/analytics" className="bg-surface border border-border elevation-card p-4 flex items-center hover:bg-surface-container-low transition-colors block">
              <div className="w-10 h-10 border border-border flex items-center justify-center mr-4 bg-background">
                <span className="material-symbols-outlined text-primary">insights</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Usage Analytics</h4>
                <span className="font-data-sm text-data-sm text-text-muted uppercase">View Metrics</span>
              </div>
            </Link>
            
            {/* Support */}
            <Link href="/support" className="bg-surface border border-border elevation-card p-4 flex items-center hover:bg-surface-container-low transition-colors block">
              <div className="w-10 h-10 border border-border flex items-center justify-center mr-4 bg-background">
                <span className="material-symbols-outlined text-primary">support_agent</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Support Center</h4>
                <span className="font-data-sm text-data-sm text-text-muted uppercase">Get Assistance</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
