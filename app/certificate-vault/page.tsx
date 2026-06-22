"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useToast } from "@/components/ui/ToastProvider";
import { useRouter } from "next/navigation";

export default function Page() {
  const { showToast } = useToast();
  const router = useRouter();

  const handleDownload = (doc: string) => {
    showToast(`Downloading ${doc} to local storage...`, "info");
    setTimeout(() => {
      showToast(`${doc} downloaded successfully!`, "success");
    }, 1500);
  };

  const handleShare = (doc: string) => {
    showToast(`Opening share sheet for ${doc}...`, "info");
  };

  return (
    <AppLayout title="CERTIFICATE VAULT | CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        <main className="pt-6 pb-24 px-4 max-w-screen-md mx-auto">
          {/* Security Status Banner */}
          <section className="mb-6">
            <div className="flex items-center gap-3 p-4 bg-[#DCFCE7] border border-[#16A34A] rounded-xl">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-[#16A34A]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <div>
                <h2 className="font-headline-sm text-[16px] text-[#111827] font-bold">Security Status: High</h2>
                <p className="font-body-md text-[13px] text-[#111827] mt-1 leading-relaxed">Your digital vault is encrypted with government-grade security protocols. Only you can access these documents.</p>
              </div>
            </div>
          </section>

          {/* Document List Section */}
          <div className="grid grid-cols-1 gap-4">
            {/* Document Card 1: Caste Certificate */}
            <article className="bg-surface border border-border p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center shrink-0 border border-border">
                  <span className="material-symbols-outlined text-primary">badge</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-headline-sm text-[14px] font-bold text-on-surface">Caste Certificate</h3>
                    <span className="px-2 py-0.5 bg-[#DCFCE7] text-[#16A34A] rounded-[4px] font-label-sm text-[10px] uppercase tracking-wider font-bold">Verified</span>
                  </div>
                  <p className="font-body-md text-[12px] text-text-muted">Issued: Oct 20, 2023</p>
                  <p className="font-label-sm text-[11px] text-primary mt-1 font-mono">ID: CS-CAST-882190-KL</p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end md:self-center">
                <button onClick={() => handleDownload("Caste Certificate")} className="w-10 h-10 flex items-center justify-center border border-border text-primary hover:bg-primary-container hover:text-on-primary-container rounded-lg transition-colors" title="Download PDF">
                  <span className="material-symbols-outlined">download</span>
                </button>
                <button onClick={() => handleShare("Caste Certificate")} className="w-10 h-10 flex items-center justify-center border border-border text-primary hover:bg-primary-container hover:text-on-primary-container rounded-lg transition-colors" title="Share Document">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </article>

            {/* Document Card 2: Income Certificate */}
            <article className="bg-surface border border-border p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center shrink-0 border border-border">
                  <span className="material-symbols-outlined text-primary">account_balance</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-headline-sm text-[14px] font-bold text-on-surface">Income Certificate</h3>
                    <span className="px-2 py-0.5 bg-[#DCFCE7] text-[#16A34A] rounded-[4px] font-label-sm text-[10px] uppercase tracking-wider font-bold">Verified</span>
                  </div>
                  <p className="font-body-md text-[12px] text-text-muted">Issued: Sep 12, 2023</p>
                  <p className="font-label-sm text-[11px] text-primary mt-1 font-mono">ID: CS-INC-445129-KL</p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end md:self-center">
                <button onClick={() => handleDownload("Income Certificate")} className="w-10 h-10 flex items-center justify-center border border-border text-primary hover:bg-primary-container hover:text-on-primary-container rounded-lg transition-colors" title="Download PDF">
                  <span className="material-symbols-outlined">download</span>
                </button>
                <button onClick={() => handleShare("Income Certificate")} className="w-10 h-10 flex items-center justify-center border border-border text-primary hover:bg-primary-container hover:text-on-primary-container rounded-lg transition-colors" title="Share Document">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </article>

            {/* Document Card 3: Domicile Certificate */}
            <article className="bg-surface border border-border p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center shrink-0 border border-border">
                  <span className="material-symbols-outlined text-primary">home_pin</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-headline-sm text-[14px] font-bold text-on-surface">Domicile Certificate</h3>
                    <span className="px-2 py-0.5 bg-[#DCFCE7] text-[#16A34A] rounded-[4px] font-label-sm text-[10px] uppercase tracking-wider font-bold">Verified</span>
                  </div>
                  <p className="font-body-md text-[12px] text-text-muted">Issued: Aug 05, 2023</p>
                  <p className="font-label-sm text-[11px] text-primary mt-1 font-mono">ID: CS-DOM-991023-KL</p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end md:self-center">
                <button onClick={() => handleDownload("Domicile Certificate")} className="w-10 h-10 flex items-center justify-center border border-border text-primary hover:bg-primary-container hover:text-on-primary-container rounded-lg transition-colors" title="Download PDF">
                  <span className="material-symbols-outlined">download</span>
                </button>
                <button onClick={() => handleShare("Domicile Certificate")} className="w-10 h-10 flex items-center justify-center border border-border text-primary hover:bg-primary-container hover:text-on-primary-container rounded-lg transition-colors" title="Share Document">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </article>

            {/* Request New Section (Bento Style) */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest border-2 border-dashed border-border p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-outline text-[32px] mb-3">add_circle</span>
                <h3 className="font-headline-sm text-[16px] font-bold text-on-surface mb-2">Missing a document?</h3>
                <p className="font-body-md text-[13px] text-text-muted mb-4 max-w-[250px]">Apply for new certificates or link existing ones from other departments.</p>
                <button onClick={() => router.push('/vault/add')} className="px-4 py-2 bg-primary text-on-primary rounded-xl font-label-md text-[14px] font-bold hover:opacity-90 transition-opacity">Request New Document</button>
              </div>
            </div>
          </div>
        </main>
        
        {/* BottomNavBar */}
        <nav className="sticky bottom-0 left-0 w-full z-50 bg-surface border-t border-border flex justify-around items-center px-4 py-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <Link href="/" className="flex flex-col items-center justify-center text-text-muted px-2 py-1 hover:text-primary transition-transform active:scale-95">
            <span className="material-symbols-outlined">home</span>
            <span className="font-label-sm text-[10px] mt-1 font-bold">Home</span>
          </Link>
          <Link href="/vault" className="flex flex-col items-center justify-center bg-primary/10 text-primary rounded-xl px-4 py-1 transition-transform active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
            <span className="font-label-sm text-[10px] mt-1 font-bold">Vault</span>
          </Link>
          <Link href="/payments" className="flex flex-col items-center justify-center text-text-muted px-2 py-1 hover:text-primary transition-transform active:scale-95">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="font-label-sm text-[10px] mt-1 font-bold">Payments</span>
          </Link>
          <Link href="/user-profile" className="flex flex-col items-center justify-center text-text-muted px-2 py-1 hover:text-primary transition-transform active:scale-95">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-sm text-[10px] mt-1 font-bold">Profile</span>
          </Link>
        </nav>
    </AppLayout>
  );
}
