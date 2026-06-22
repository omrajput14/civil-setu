"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/components/ui/ToastProvider";

const MOCK_BILLS = [
  { id: 1, provider: "MAHAVITARAN", type: "Electricity", billNo: "EL-2023-894", due: "24 Oct 2023", amount: 1850, urgent: true },
  { id: 2, provider: "PMC", type: "Property Tax", billNo: "PT-2324-112", due: "15 Nov 2023", amount: 2400, urgent: false },
  { id: 3, provider: "Jal Board", type: "Water", billNo: "WT-2324-88", due: "20 Nov 2023", amount: 450, urgent: false },
];

export default function Page() {
  const { showToast } = useToast();
  const [bills, setBills] = useState(MOCK_BILLS);
  const [filter, setFilter] = useState("All");

  const totalAmount = bills.reduce((sum, b) => sum + b.amount, 0);

  const filteredBills = bills.filter(b => filter === "All" || b.type === filter);

  const handlePay = (id?: number) => {
    showToast("Processing Payment...", "info");
    setTimeout(() => {
      if (id) {
        setBills(prev => prev.filter(b => b.id !== id));
      } else {
        setBills([]);
      }
      showToast("Payment Successful!", "success");
    }, 1500);
  };

  const categories = ["All", "Water", "Electricity", "Property Tax", "Waste"];

  return (
    <AppLayout title="PAYMENTS HUB" showBackButton={true}>
      <div className="w-full">
        {/* Status Rail */}
        <div className="h-rail-height bg-surface border-b border-border flex items-center px-margin-mobile">
          <span className="font-data-sm text-data-sm text-text-muted uppercase">Last updated: 14:32 IST | {bills.length} Active Invoices</span>
        </div>

        <div className="p-margin-mobile space-y-4">
          {/* Sub-Navigation Chips */}
          <div className="flex overflow-x-auto gap-2 pb-1" style={{ scrollbarWidth: 'none' }}>
            <Link href="/payments" className="flex-shrink-0 bg-primary-container text-on-primary px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-primary-container">Hub</Link>
            <Link href="/payments/history" className="flex-shrink-0 bg-surface text-on-surface-variant px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-border hover:bg-surface-container-low transition-colors">History</Link>
            <Link href="/autopay" className="flex-shrink-0 bg-surface text-on-surface-variant px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-border hover:bg-surface-container-low transition-colors">Autopay</Link>
            <Link href="/payments/bill" className="flex-shrink-0 bg-surface text-on-surface-variant px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border border-border hover:bg-surface-container-low transition-colors">Bill Detail</Link>
          </div>

          {/* Total Outstanding Balance */}
          <section>
            <div className="bg-surface border border-border rounded-[6px] p-4 flex flex-col gap-3 shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
              <div>
                <h2 className="font-data-sm text-data-sm text-text-muted uppercase mb-1">Total Outstanding Balance</h2>
                <div className="font-data-lg text-[28px] font-bold text-on-surface leading-tight">₹ {totalAmount.toLocaleString('en-IN')}.00</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handlePay()} disabled={bills.length === 0} className="bg-primary-container text-on-primary px-4 py-2 font-label-md text-label-md rounded-[6px] hover:opacity-90 transition-opacity flex-1 disabled:opacity-50">Pay All</button>
                <button onClick={() => showToast("Navigating to details...", "info")} className="bg-surface text-primary-container px-4 py-2 font-label-md text-label-md border border-border rounded-[6px] hover:bg-surface-container-low transition-colors flex-1">Details</button>
              </div>
            </div>
          </section>

          {/* Categories: Horizontal Scroll */}
          <section>
            <h3 className="font-data-sm text-data-sm text-text-muted uppercase mb-2">Filter by Category</h3>
            <div className="flex overflow-x-auto gap-2 pb-1" style={{ scrollbarWidth: 'none' }}>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`flex-shrink-0 px-3 py-1.5 font-label-sm text-label-sm rounded-[6px] border transition-colors ${filter === cat ? 'bg-primary-container text-on-primary border-primary-container' : 'bg-surface text-on-surface border-border hover:bg-surface-container-low'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Active Bills */}
          <section className="space-y-3">
            <h3 className="font-data-sm text-data-sm text-text-muted uppercase">Active Bills {filter !== 'All' && `(${filter})`}</h3>
            
            {filteredBills.length === 0 ? (
              <div className="bg-surface border border-border rounded-[6px] p-6 text-center shadow-sm">
                <p className="text-text-muted font-body-sm text-[13px]">No pending {filter !== 'All' ? filter : ''} bills found.</p>
              </div>
            ) : (
              filteredBills.map(bill => (
                <div key={bill.id} className="bg-surface border border-border rounded-[6px] p-4 shadow-[0_1px_2px_rgba(17,24,39,0.06)] relative overflow-hidden">
                  {bill.urgent && <div className="absolute top-0 right-0 bg-danger text-on-error px-2 py-0.5 font-data-sm text-[10px] uppercase rounded-bl-[6px]">DUE IN 2 DAYS</div>}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="font-label-md text-label-md text-on-surface">{bill.provider} - {bill.type}</div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-data-sm text-data-sm text-text-muted">Bill No: {bill.billNo}</span>
                        <span className="font-data-sm text-data-sm text-text-muted">Due: {bill.due}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <div className="font-data-md text-data-md text-on-surface font-bold">₹ {bill.amount.toLocaleString('en-IN')}</div>
                      <button onClick={() => handlePay(bill.id)} className="mt-1 text-primary font-label-sm text-label-sm uppercase hover:underline">Pay Now</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>

          {/* Quick Actions */}
          <section className="space-y-2">
            <h3 className="font-data-sm text-data-sm text-text-muted uppercase">Quick Actions</h3>
            <div className="flex flex-col gap-2">
              <Link href="/payments/bill" className="bg-surface border border-border rounded-[6px] p-3 flex items-center gap-3 hover:bg-surface-container-low transition-colors shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
                <span className="material-symbols-outlined text-primary-container">flash_on</span>
                <span className="font-label-md text-label-md text-on-surface">Quick Pay</span>
              </Link>
              <Link href="/payments/history" className="bg-surface border border-border rounded-[6px] p-3 flex items-center gap-3 hover:bg-surface-container-low transition-colors shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
                <span className="material-symbols-outlined text-primary-container">history</span>
                <span className="font-label-md text-label-md text-on-surface">View History</span>
              </Link>
              <Link href="/autopay" className="bg-surface border border-border rounded-[6px] p-3 flex items-center gap-3 hover:bg-surface-container-low transition-colors shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
                <span className="material-symbols-outlined text-primary-container">autorenew</span>
                <span className="font-label-md text-label-md text-on-surface">Manage Autopay</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
