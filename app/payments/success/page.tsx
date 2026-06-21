import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="PAYMENT SUCCESS - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Main Content Area */}
<main className="flex-grow pt-16 px-margin-mobile md:px-margin-desktop py-stack-lg max-w-4xl mx-auto w-full flex flex-col gap-gutter">
{/* Status Rail (Top) */}
<div className="h-rail-height bg-surface border-b border-border flex items-center px-gutter font-data-sm text-data-sm text-text-muted uppercase w-full">
<span>SYS.STATUS: ONLINE</span>
<span className="mx-2">|</span>
<span>NODE: DEL-SEC-09</span>
<span className="mx-2">|</span>
<span className="text-success ml-auto flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">lock</span> SECURE CONNECTION</span>
</div>
{/* Success Banner */}
<section className="bg-surface border border-border shadow-elevation p-stack-lg flex flex-col items-center justify-center text-center">
<div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-stack-md">
<span className="material-symbols-outlined text-[40px] text-success" style={{ fontVariationSettings: "'FILL' 1", }}>check_circle</span>
</div>
<h2 className="font-headline-lg text-headline-lg font-light mb-stack-sm text-primary">Payment Success</h2>
<div className="font-data-lg text-data-lg text-on-surface mb-stack-md tracking-tight">₹ 4,250.00</div>
<p className="font-body-md text-body-md text-text-muted max-w-md">Your payment has been successfully processed and verified by the civic ledger.</p>
</section>
{/* Receipt Details Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Left Column: Details */}
<div className="bg-surface border border-border shadow-elevation flex flex-col">
<div className="border-b border-border p-stack-md bg-surface-container-lowest">
<h3 className="font-label-md text-label-md text-primary uppercase tracking-wider">Payment Receipt</h3>
</div>
<div className="p-stack-md flex flex-col gap-stack-sm flex-grow">
<div className="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Service Type</span>
<span className="font-label-md text-label-md text-on-surface">Property Tax</span>
</div>
<div className="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Reference ID</span>
<span className="font-data-md text-data-md text-primary">PTX-2324-9982-A</span>
</div>
<div className="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Transaction ID</span>
<span className="font-data-md text-data-md text-on-surface">TXN-8834-XCV-91</span>
</div>
<div className="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Date / Time</span>
<span className="font-data-sm text-data-sm text-on-surface">2023-10-27 14:32:45 IST</span>
</div>
<div className="flex justify-between pb-2">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Payment Method</span>
<span className="font-label-md text-label-md text-on-surface">ACH Bank Transfer</span>
</div>
</div>
</div>
{/* Right Column: Verification */}
<div className="bg-surface border border-border shadow-elevation flex flex-col">
<div className="border-b border-border p-stack-md bg-surface-container-lowest">
<h3 className="font-label-md text-label-md text-primary uppercase tracking-wider">Digital Verification</h3>
</div>
<div className="p-stack-md flex flex-col items-center justify-center flex-grow text-center relative overflow-hidden">
{/* Subtle watermark pattern */}
<div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]"></div>
<div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center mb-stack-md relative z-10">
<span className="material-symbols-outlined text-[48px] text-primary/40">local_police</span>
</div>
<div className="font-data-md text-data-md text-primary italic mb-1 z-10 border-b border-primary/20 px-4 inline-block">
                        J. K. Ramanathan
                    </div>
<div className="font-label-sm text-label-sm text-text-muted uppercase z-10">
                        Municipal Commissioner
                    </div>
<div className="font-data-sm text-data-sm text-success mt-4 z-10 flex items-center gap-1 bg-success/10 px-2 py-1">
<span className="material-symbols-outlined text-[12px]">verified</span> OFFICIALLY SEALED
                    </div>
</div>
</div>
</section>
{/* Technical Metadata */}
<section className="bg-surface border border-border shadow-elevation flex flex-col">
<div className="border-b border-border p-stack-sm px-stack-md bg-surface-container-lowest">
<h4 className="font-label-sm text-label-sm text-text-muted uppercase tracking-wider">System Log Metadata</h4>
</div>
<div className="p-stack-md font-data-sm text-data-sm text-text-muted grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
<div>
<span className="uppercase font-bold block mb-1">Transaction Hash (SHA-256)</span>
<span className="break-all text-xs opacity-80">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span>
</div>
<div>
<span className="uppercase font-bold block mb-1">Server Node / Env</span>
<span className="block text-xs opacity-80">PROD-DEL-CS-09.2 / K8S-CLUSTER-A</span>
<span className="uppercase font-bold block mt-2 mb-1">Encryption Protocol</span>
<span className="block text-xs opacity-80">TLS 1.3 / AES-256-GCM</span>
</div>
</div>
</section>
{/* Action Buttons */}
<section className="flex flex-col md:flex-row gap-stack-md mt-stack-md">
<button className="flex-1 bg-surface border border-border text-primary font-label-md text-label-md h-12 flex items-center justify-center hover:bg-surface-container-low transition-colors uppercase tracking-wider">
<span className="material-symbols-outlined mr-2">download</span>
                Download PDF Receipt
            </button>
<button className="flex-1 bg-primary-container text-white font-label-md text-label-md h-12 flex items-center justify-center hover:bg-primary transition-colors uppercase tracking-wider shadow-elevation">
                Return to Dashboard
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
</button>
</section>
</main>
{/* BottomNavBar */}
      </div>
    </AppLayout>
  );
}
