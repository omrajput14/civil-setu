import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function ProfilePage() {
  const statusRail = (
    <span className="font-data-sm text-data-sm uppercase text-text-muted">
      VERIFIED CITIZEN · ID: CS-2024-8821 · WARD 4
    </span>
  );

  return (
    <AppLayout title="CivicSetu" showBackButton={true} statusRail={statusRail}>
      <div className="max-w-3xl mx-auto space-y-stack-lg pt-4">
        {/* Screen Title */}
        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Profile Overview</h2>

        {/* Profile Summary Section */}
        <section className="bg-surface border border-border elevation-card rounded-lg p-stack-lg flex flex-col md:flex-row items-start gap-stack-md">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-surface-container shrink-0 border border-border">
            <img 
              className="w-full h-full object-cover" 
              alt="Profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdbKXmautqLHvP3Tuc1wHkhMPTam6VFYvq48jhkdy_srwNEN9YfL9Ti7sHM9D2l8czH06NNhkX1GdUwKGZJB3zlkbIwg4739PcQMcQFANpt5FluJn3on4hHns5_fCAI_3Sn_YODONZ3SFruhJizTDCuF82ZROrDNxCq5S4tTTqJ0c4gyFG3HKErXLMtVrPxZwa8sSNYpPnz_PkqOTQPShT9PTeXU75eiG6aljbRkVq6I_amJfIhNFAImLJ6b1UCf9GfXctKfoi1QIB" 
            />
          </div>
          <div className="flex-1 w-full space-y-stack-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">Ramesh Kumar</h3>
              <span className="inline-flex items-center gap-1 bg-success/10 text-success border border-success/20 px-2 py-0.5 rounded-full font-label-sm text-label-sm w-max">
                <span className="material-symbols-outlined text-[14px]">verified</span> Verified
              </span>
            </div>
            <div className="font-body-md text-body-md text-text-muted space-y-2 pt-2 border-t border-border/50">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">call</span> +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">mail</span> ramesh.k@example.com
              </div>
            </div>
          </div>
        </section>

        {/* Identity & Verification Section */}
        <section className="space-y-stack-sm">
          <h4 className="font-data-sm text-data-sm uppercase text-text-muted tracking-wider">Identity & Verification</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            {/* Aadhaar Card */}
            <div className="bg-surface border border-border elevation-card rounded-lg p-stack-md flex flex-col justify-between h-24">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary">Aadhaar</span>
                <span className="text-success font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Linked
                </span>
              </div>
              <div className="font-data-md text-data-md text-on-surface tracking-widest mt-auto">XXXX XXXX 8821</div>
            </div>

            {/* Voter ID Card */}
            <div className="bg-surface border border-border elevation-card rounded-lg p-stack-md flex flex-col justify-between h-24">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary">Voter ID</span>
                <span className="text-success font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Verified
                </span>
              </div>
              <div className="font-data-md text-data-md text-on-surface tracking-widest mt-auto">ABC1234567</div>
            </div>
          </div>
        </section>

        {/* Document Vault Summary */}
        <Link href="/vault" className="bg-surface border border-border elevation-card rounded-lg p-stack-md flex items-center justify-between group cursor-pointer hover:border-primary transition-colors block">
          <div className="flex items-center gap-stack-md">
            <div className="w-12 h-12 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">folder_open</span>
            </div>
            <div>
              <div className="font-label-md text-label-md text-primary font-bold">3 SAVED DOCUMENTS</div>
              <div className="font-data-sm text-data-sm text-text-muted uppercase mt-1">Residence · Income · Birth</div>
            </div>
          </div>
          <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">chevron_right</span>
        </Link>

        {/* Account Settings Section */}
        <section className="space-y-stack-sm">
          <h4 className="font-data-sm text-data-sm uppercase text-text-muted tracking-wider">Account & Security</h4>
          <div className="bg-surface border border-border elevation-card rounded-lg divide-y divide-border">
            <Link href="/profile/edit" className="w-full flex items-center gap-stack-md p-stack-md hover:bg-surface-container-low transition-colors text-left">
              <span className="material-symbols-outlined text-text-muted">contact_mail</span>
              <span className="flex-1 font-label-md text-label-md text-primary">Contact Information</span>
              <span className="material-symbols-outlined text-text-muted">chevron_right</span>
            </Link>
            <button className="w-full flex items-center gap-stack-md p-stack-md hover:bg-surface-container-low transition-colors text-left">
              <span className="material-symbols-outlined text-text-muted">location_on</span>
              <span className="flex-1 font-label-md text-label-md text-primary">Address Details</span>
              <span className="material-symbols-outlined text-text-muted">chevron_right</span>
            </button>
            <button className="w-full flex items-center gap-stack-md p-stack-md hover:bg-surface-container-low transition-colors text-left">
              <span className="material-symbols-outlined text-text-muted">language</span>
              <span className="flex-1 font-label-md text-label-md text-primary">Language Preferences (English)</span>
              <span className="material-symbols-outlined text-text-muted">chevron_right</span>
            </button>
            <Link href="/profile/security" className="w-full flex items-center gap-stack-md p-stack-md hover:bg-surface-container-low transition-colors text-left">
              <span className="material-symbols-outlined text-text-muted">lock</span>
              <span className="flex-1 font-label-md text-label-md text-primary">Security & Password</span>
              <span className="material-symbols-outlined text-text-muted">chevron_right</span>
            </Link>
          </div>
        </section>

        {/* Logout Action */}
        <section className="pt-stack-md pb-stack-lg">
          <Link href="/login" className="flex justify-center w-full border border-primary text-primary bg-surface font-label-md text-label-md uppercase tracking-widest py-4 rounded-lg hover:bg-surface-container-low transition-colors active:scale-[0.99]">
            Logout
          </Link>
        </section>
      </div>
    </AppLayout>
  );
}
