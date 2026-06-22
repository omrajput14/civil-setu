"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/family/member");
  };

  return (
    <AppLayout title="SEARCH & IDENTIFY" showBackButton={true}>
      <div className="w-full">
        <div className="p-margin-mobile space-y-4">
          
          {/* Main Search Card */}
          <section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] p-4 flex flex-col gap-4">
            <div>
              <h2 className="font-headline-md text-[16px] font-bold text-primary mb-1">Identify Member</h2>
              <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">Enter official identification details to locate a resident within the rural governance database.</p>
            </div>
            
            <form onSubmit={handleSearch} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-[13px] font-bold text-on-surface" htmlFor="identifier">Family ID or Aadhaar</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-text-muted text-[18px]">search</span>
                  <input className="w-full pl-9 pr-3 py-2.5 rounded-[6px] border border-border focus:ring-0 focus:border-primary font-body-md text-[14px]" id="identifier" placeholder="e.g. 1234 5678 9012" type="text"/>
                </div>
                <p className="font-data-sm text-[11px] text-text-muted mt-1">Verify the 12-digit number carefully.</p>
              </div>
              <button className="w-full bg-[#1A3A5C] text-on-primary py-2.5 px-4 rounded-[6px] font-label-md text-[14px] flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98] mt-1 shadow-sm" type="submit">
                <span className="material-symbols-outlined text-[18px]">person_search</span>
                Search Member
              </button>
            </form>
            
            <div className="p-3 bg-brand-accent/5 rounded-[6px] border border-brand-accent/20 flex gap-3">
              <span className="material-symbols-outlined text-brand-accent text-[18px] shrink-0 mt-0.5">info</span>
              <p className="font-body-md text-[12px] text-on-surface-variant leading-relaxed italic">Data integrity is essential for subsidy distribution. Ensure all IDs are typed accurately.</p>
            </div>
          </section>

          {/* Quick Stats/Guide Card */}
          <section className="bg-primary-container text-white rounded-[6px] p-4 flex flex-col gap-3 shadow-[0_1px_2px_rgba(17,24,39,0.06)] overflow-hidden relative">
            <h3 className="font-headline-md text-[14px] font-bold">Search Insights</h3>
            
            <div className="flex flex-col gap-2 relative z-10">
              <div className="flex items-start gap-3 bg-white/10 p-3 rounded-[6px]">
                <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5">verified_user</span>
                <div className="flex flex-col">
                  <p className="font-label-md text-[13px] font-bold">Verified Database</p>
                  <p className="font-body-sm text-[11px] opacity-80 mt-0.5 leading-tight">Cross-synced with national registry</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 p-3 rounded-[6px]">
                <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5">history</span>
                <div className="flex flex-col">
                  <p className="font-label-md text-[13px] font-bold">Real-time Updates</p>
                  <p className="font-body-sm text-[11px] opacity-80 mt-0.5 leading-tight">Last synced 12 minutes ago</p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 flex items-center gap-2 mt-1">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="font-data-sm text-[10px] font-bold tracking-wider uppercase">System Online</span>
            </div>
          </section>

          {/* Recently Added / Suggestions Section */}
          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="font-headline-sm text-[13px] font-bold text-text-muted uppercase">Recent Members</h3>
              <button className="text-primary font-label-md text-[12px] hover:underline">View All</button>
            </div>
            
            <div className="flex flex-col gap-2">
              {/* Member Card 1 */}
              <div onClick={() => router.push('/family/member')} className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] p-3 flex items-center gap-3 hover:border-primary-container transition-all cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden shrink-0">
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Ram Charan"/>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="font-label-md text-[14px] text-on-surface font-bold truncate">Ram Charan Lal</span>
                  <span className="font-label-sm text-[11px] text-text-muted mt-0.5">ID: 8829-XXXX</span>
                </div>
                <span className="material-symbols-outlined text-text-muted text-[18px]">chevron_right</span>
              </div>
              
              {/* Member Card 2 */}
              <div onClick={() => router.push('/family/member')} className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] p-3 flex items-center gap-3 hover:border-primary-container transition-all cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden shrink-0">
                  <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Sunita"/>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="font-label-md text-[14px] text-on-surface font-bold truncate">Sunita Devi</span>
                  <span className="font-label-sm text-[11px] text-text-muted mt-0.5">ID: 4120-XXXX</span>
                </div>
                <span className="material-symbols-outlined text-text-muted text-[18px]">chevron_right</span>
              </div>
            </div>
          </section>

          {/* Suggested Members from Household */}
          <section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] flex flex-col overflow-hidden">
            <div className="p-3 border-b border-border bg-surface-bright flex items-center gap-3">
              <div className="bg-brand-accent/10 p-2 rounded-[6px] shrink-0">
                <span className="material-symbols-outlined text-brand-accent text-[20px] block">diversity_3</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-[14px] font-bold text-primary">Suggested Matches</h3>
                <p className="font-body-md text-[11px] text-text-muted">Based on recent activity in Block-14</p>
              </div>
            </div>
            
            <div className="divide-y divide-border">
              {/* Table Row 1 (Flex converted) */}
              <div className="p-3 hover:bg-surface-container-lowest transition-colors flex items-center gap-3">
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-label-md text-[14px] font-bold text-on-surface truncate">Mukesh Kumar</span>
                    <span className="bg-success/10 text-success border border-success/20 px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold tracking-wider uppercase shrink-0">VERIFIED</span>
                  </div>
                  <span className="font-body-sm text-[12px] text-text-muted">Son of Ram Charan</span>
                  <span className="font-data-sm text-[10px] text-outline mt-0.5">Aadhaar: **** 4421</span>
                </div>
                <button onClick={() => router.push('/family/member')} className="shrink-0 text-primary font-label-md text-[13px] border border-border px-4 py-1.5 rounded-[6px] hover:bg-surface-container-low transition-all">Select</button>
              </div>
              
              {/* Table Row 2 (Flex converted) */}
              <div className="p-3 hover:bg-surface-container-lowest transition-colors flex items-center gap-3">
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-label-md text-[14px] font-bold text-on-surface truncate">Anjali Kumar</span>
                    <span className="bg-warning/10 text-warning border border-warning/20 px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold tracking-wider uppercase shrink-0">PENDING</span>
                  </div>
                  <span className="font-body-sm text-[12px] text-text-muted">Daughter</span>
                  <span className="font-data-sm text-[10px] text-outline mt-0.5">Aadhaar: **** 1092</span>
                </div>
                <button onClick={() => router.push('/family/member')} className="shrink-0 text-primary font-label-md text-[13px] border border-border px-4 py-1.5 rounded-[6px] hover:bg-surface-container-low transition-all">Select</button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </AppLayout>
  );
}
