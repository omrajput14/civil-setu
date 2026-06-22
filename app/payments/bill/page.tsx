import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="BILL DETAILS" showBackButton={true}>
      <div className="w-full">
        <div className="p-margin-mobile space-y-4">
          
          {/* Sub-Navigation Chips */}
          <div className="flex overflow-x-auto gap-2 pb-1" style={{ scrollbarWidth: 'none' }}>
            <Link href="/payments" className="flex-shrink-0 bg-surface text-on-surface-variant px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-border hover:bg-surface-container-low transition-colors">Hub</Link>
            <Link href="/payments/history" className="flex-shrink-0 bg-surface text-on-surface-variant px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-border hover:bg-surface-container-low transition-colors">History</Link>
            <Link href="/autopay" className="flex-shrink-0 bg-surface text-on-surface-variant px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-border hover:bg-surface-container-low transition-colors">Autopay</Link>
            <Link href="/payments/bill" className="flex-shrink-0 bg-primary-container text-on-primary px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-primary-container">Bill Detail</Link>
          </div>

          <div className="flex flex-col gap-4">
            {/* Amount Summary Card */}
            <section className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] overflow-hidden flex flex-col">
              <div className="p-4 border-b border-border flex-1 flex flex-col justify-center bg-surface-bright">
                <div className="font-label-sm text-label-sm text-text-muted uppercase mb-2">Total Amount Due</div>
                <div className="font-data-lg text-[40px] leading-[48px] text-primary flex items-baseline gap-2">
                  <span className="text-headline-md text-text-muted font-normal">₹</span>
                  4,250.00
                </div>
                <div className="font-body-md text-[13px] text-danger mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">warning</span>
                  Due in 14 Days (Oct 31, 2023)
                </div>
              </div>
              
              {/* Breakdown Grid */}
              <div className="grid grid-cols-3 bg-surface divide-x divide-border">
                <div className="p-3 flex flex-col gap-1">
                  <div className="font-label-sm text-[11px] text-text-muted">Principal</div>
                  <div className="font-data-md text-[14px] font-bold text-on-surface leading-none">₹4,100</div>
                </div>
                <div className="p-3 flex flex-col gap-1">
                  <div className="font-label-sm text-[11px] text-text-muted">Interest</div>
                  <div className="font-data-md text-[14px] font-bold text-on-surface leading-none">₹50</div>
                </div>
                <div className="p-3 flex flex-col gap-1">
                  <div className="font-label-sm text-[11px] text-text-muted">Penalties</div>
                  <div className="font-data-md text-[14px] font-bold text-on-surface leading-none">₹100</div>
                </div>
              </div>
            </section>

            {/* Payment Action Area */}
            <section className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-4 flex flex-col gap-4">
              <h2 className="font-headline-md text-[16px] font-bold text-primary">Payment Options</h2>
              
              {/* Payment Methods List */}
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 p-3 border border-primary/20 bg-primary/5 rounded-[6px] cursor-pointer">
                  <input defaultChecked className="text-primary focus:ring-primary h-4 w-4 border-outline shrink-0 mt-0.5" name="payment_method" type="radio"/>
                  <span className="material-symbols-outlined text-primary shrink-0">account_balance</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-label-md text-[14px] text-on-surface">ACH Bank Transfer</div>
                    <div className="font-body-sm text-[12px] text-text-muted">No processing fee</div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 border border-border hover:border-outline-variant bg-surface rounded-[6px] cursor-pointer transition-colors">
                  <input className="text-primary focus:ring-primary h-4 w-4 border-outline shrink-0 mt-0.5" name="payment_method" type="radio"/>
                  <span className="material-symbols-outlined text-text-muted shrink-0">credit_card</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-label-md text-[14px] text-on-surface">Credit / Debit Card</div>
                    <div className="font-body-sm text-[12px] text-text-muted">2.9% processing fee applies</div>
                  </div>
                </label>
              </div>

              <button className="w-full bg-primary-container text-on-primary py-3 px-4 rounded-[6px] flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-[0_1px_2px_rgba(17,24,39,0.06)] font-label-md text-label-md uppercase tracking-wide">
                <span className="material-symbols-outlined text-[18px]">lock</span>
                Pay ₹4,250.00 Now
              </button>
              
              <div className="font-body-sm text-[11px] text-text-muted text-center flex justify-center items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">shield</span>
                Secure transaction via GovPay
              </div>
            </section>

            {/* Property Details Card */}
            <section className="bg-surface border border-border rounded-[6px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex flex-col">
              <div className="p-3 border-b border-border bg-surface-bright flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">real_estate_agent</span>
                <h2 className="font-label-md text-[14px] text-primary uppercase">Assessment Basis</h2>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="w-full h-32 bg-surface-variant border border-border rounded-[4px] relative overflow-hidden">
                  <div className="bg-cover bg-center w-full h-full absolute inset-0 opacity-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=2000&auto=format&fit=crop')" }}></div>
                  <div className="absolute bottom-2 right-2 bg-surface/90 border border-border px-2 py-1 font-data-sm text-[10px] text-primary backdrop-blur-sm rounded-[4px]">PARCEL: 849-B</div>
                </div>
                
                <ul className="flex flex-col gap-3 font-body-md text-[13px]">
                  <li className="flex justify-between items-baseline border-b border-border pb-2">
                    <span className="text-text-muted">Property Area</span>
                    <span className="font-data-md text-[13px] font-medium text-on-surface">2,450 sq ft</span>
                  </li>
                  <li className="flex justify-between items-baseline border-b border-border pb-2">
                    <span className="text-text-muted">Usage Type</span>
                    <span className="font-label-md text-[13px] font-medium text-on-surface">Residential (R-1)</span>
                  </li>
                  <li className="flex justify-between items-baseline border-b border-border pb-2">
                    <span className="text-text-muted">Assessed Value</span>
                    <span className="font-data-md text-[13px] font-medium text-on-surface">₹4,25,000</span>
                  </li>
                  <li className="flex justify-between items-baseline">
                    <span className="text-text-muted">Millage Rate</span>
                    <span className="font-data-md text-[13px] font-medium text-on-surface">1.0%</span>
                  </li>
                </ul>
              </div>
              
              {/* Status Rail (Internal) */}
              <div className="bg-surface-container-low border-t border-border px-4 py-2 flex items-center justify-between font-data-sm text-[10px] text-text-muted uppercase">
                <span>Valuation Date: Jan 1, 2023</span>
                <span>Ref: VAL-8821</span>
              </div>
            </section>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}
