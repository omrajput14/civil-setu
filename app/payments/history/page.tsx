import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="PAYMENT HISTORY" showBackButton={true}>
      <div className="w-full">
        <div className="p-margin-mobile space-y-4">
          
          {/* Sub-Navigation Chips */}
          <div className="flex overflow-x-auto gap-2 pb-1" style={{ scrollbarWidth: 'none' }}>
            <Link href="/payments" className="flex-shrink-0 bg-surface text-on-surface-variant px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-border hover:bg-surface-container-low transition-colors">Hub</Link>
            <Link href="/payments/history" className="flex-shrink-0 bg-primary-container text-on-primary px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-primary-container">History</Link>
            <Link href="/autopay" className="flex-shrink-0 bg-surface text-on-surface-variant px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-border hover:bg-surface-container-low transition-colors">Autopay</Link>
            <Link href="/payments/bill" className="flex-shrink-0 bg-surface text-on-surface-variant px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-border hover:bg-surface-container-low transition-colors">Bill Detail</Link>
          </div>

          {/* Page Header & Actions */}
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="font-headline-md text-[18px] font-bold text-on-surface">Payment History</h2>
              <p className="font-body-md text-[13px] text-text-muted mt-1 leading-relaxed">Archive of all processed civic transactions.</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full mt-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[18px]">search</span>
              <input className="w-full bg-surface border border-border text-on-surface font-body-md text-[14px] pl-9 pr-3 py-2 rounded-[6px] focus:outline-none focus:border-primary placeholder:text-text-muted transition-colors shadow-[0_1px_2px_rgba(17,24,39,0.06)]" placeholder="Search by ID or service..." type="text"/>
            </div>
          </div>

          {/* Filters & Summary Rail */}
          <div className="flex flex-col gap-3 bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 rounded-[6px]">
            <div className="flex items-center justify-between">
              <span className="font-data-sm text-[12px] text-text-muted uppercase tracking-wider">This Month</span>
              <span className="font-data-lg text-[22px] font-bold text-on-surface leading-none">₹12,450</span>
            </div>
            <div className="flex overflow-x-auto gap-2 pb-1" style={{ scrollbarWidth: 'none' }}>
              <button className="px-3 py-1.5 bg-primary text-on-primary font-label-sm text-[12px] border border-primary rounded-[4px] whitespace-nowrap transition-colors">All Services</button>
              <button className="px-3 py-1.5 bg-surface text-primary font-label-sm text-[12px] border border-border rounded-[4px] hover:bg-surface-container-low whitespace-nowrap transition-colors">Water</button>
              <button className="px-3 py-1.5 bg-surface text-primary font-label-sm text-[12px] border border-border rounded-[4px] hover:bg-surface-container-low whitespace-nowrap transition-colors">Electricity</button>
              <button className="px-3 py-1.5 bg-surface text-primary font-label-sm text-[12px] border border-border rounded-[4px] hover:bg-surface-container-low whitespace-nowrap transition-colors">Taxes</button>
            </div>
          </div>

          {/* High-Density Transaction List */}
          <section className="space-y-3">
            <h3 className="font-data-sm text-[12px] text-text-muted uppercase tracking-wider">Transactions</h3>
            <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] divide-y divide-border">
              
              {/* Item 1 */}
              <div className="p-3 hover:bg-surface-container-lowest transition-colors cursor-pointer flex items-start gap-3">
                <div className="w-10 h-10 bg-surface-container-high border border-border flex items-center justify-center rounded-[4px] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">water_drop</span>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-label-md text-[14px] text-on-surface font-medium truncate">Water Utility Bill - Q3</span>
                    <span className="font-data-md text-[14px] font-bold text-on-surface shrink-0">₹1,250</span>
                  </div>
                  <div className="flex items-center gap-2 font-data-sm text-[11px] text-text-muted flex-wrap">
                    <span>24 OCT 2023</span>
                    <span className="text-border">|</span>
                    <span>TXN-88921-A</span>
                  </div>
                  <div className="mt-1">
                    <span className="px-2 py-0.5 bg-success/10 text-success border border-success/20 font-data-sm text-[10px] uppercase tracking-wider inline-flex items-center gap-1 rounded-[4px]">
                      <span className="material-symbols-outlined text-[12px]">check_circle</span> SUCCESS
                    </span>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-3 hover:bg-surface-container-lowest transition-colors cursor-pointer flex items-start gap-3">
                <div className="w-10 h-10 bg-surface-container-high border border-border flex items-center justify-center rounded-[4px] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-label-md text-[14px] text-on-surface font-medium truncate">Property Tax - FY 2023-24</span>
                    <span className="font-data-md text-[14px] font-bold text-on-surface shrink-0">₹8,500</span>
                  </div>
                  <div className="flex items-center gap-2 font-data-sm text-[11px] text-text-muted flex-wrap">
                    <span>15 OCT 2023</span>
                    <span className="text-border">|</span>
                    <span>TXN-77210-P</span>
                  </div>
                  <div className="mt-1">
                    <span className="px-2 py-0.5 bg-success/10 text-success border border-success/20 font-data-sm text-[10px] uppercase tracking-wider inline-flex items-center gap-1 rounded-[4px]">
                      <span className="material-symbols-outlined text-[12px]">check_circle</span> SUCCESS
                    </span>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="p-3 hover:bg-surface-container-lowest transition-colors cursor-pointer flex items-start gap-3">
                <div className="w-10 h-10 bg-surface-container-high border border-border flex items-center justify-center rounded-[4px] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">electric_bolt</span>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-label-md text-[14px] text-on-surface font-medium truncate">Electricity Board - SEP</span>
                    <span className="font-data-md text-[14px] font-bold text-on-surface shrink-0">₹2,700</span>
                  </div>
                  <div className="flex items-center gap-2 font-data-sm text-[11px] text-text-muted flex-wrap">
                    <span>02 OCT 2023</span>
                    <span className="text-border">|</span>
                    <span>TXN-66104-E</span>
                  </div>
                  <div className="mt-1">
                    <span className="px-2 py-0.5 bg-success/10 text-success border border-success/20 font-data-sm text-[10px] uppercase tracking-wider inline-flex items-center gap-1 rounded-[4px]">
                      <span className="material-symbols-outlined text-[12px]">check_circle</span> SUCCESS
                    </span>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="p-3 hover:bg-surface-container-lowest transition-colors cursor-pointer flex items-start gap-3 bg-surface-bright border-l-4 border-l-warning">
                <div className="w-10 h-10 bg-surface-container-high border border-border flex items-center justify-center rounded-[4px] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">directions_car</span>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-label-md text-[14px] text-on-surface font-medium truncate">Vehicle Registration Renewal</span>
                    <span className="font-data-md text-[14px] font-bold text-on-surface shrink-0">₹1,500</span>
                  </div>
                  <div className="flex items-center gap-2 font-data-sm text-[11px] text-text-muted flex-wrap">
                    <span>28 SEP 2023</span>
                    <span className="text-border">|</span>
                    <span>TXN-55099-V</span>
                  </div>
                  <div className="mt-1">
                    <span className="px-2 py-0.5 bg-warning/10 text-warning border border-warning/20 font-data-sm text-[10px] uppercase tracking-wider inline-flex items-center gap-1 rounded-[4px]">
                      <span className="material-symbols-outlined text-[12px]">pending</span> PENDING
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <button className="px-4 py-2 bg-surface text-primary font-label-md text-[13px] border border-border hover:bg-surface-container-low transition-colors flex items-center gap-2 rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
                <span>Load More Records</span>
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
