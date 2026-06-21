import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="DOCUMENT VIEWER - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top App Bar */}

{/* Status Rail */}
<div className="bg-surface h-rail-height border-b border-border flex items-center px-margin-mobile md:px-margin-desktop gap-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-success"></span>
<span className="font-data-sm text-data-sm text-text-muted uppercase">ENCRYPTION: AES-256</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px] text-success" data-icon="verified">verified</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase">VERIFIED: SYSTEM TRUST</span>
</div>
</div>
{/* Main Content Area */}
<main className="flex-grow p-margin-mobile md:p-margin-desktop flex flex-col gap-stack-lg max-w-4xl mx-auto w-full pb-32">
{/* Document Preview Card */}
<div className="bg-surface border border-border relative overflow-hidden flex flex-col p-8 gap-6 shadow-[0_1px_2px_rgba(17,24,39,0.06)] min-h-[600px]">
<div className="watermark">OFFICIAL COPY</div>
{/* Document Header */}
<div className="flex justify-between items-start border-b border-border pb-6">
<div>
<h2 className="font-headline-md text-headline-md text-primary">INCOME CERTIFICATE</h2>
<p className="font-body-md text-body-md text-text-muted mt-2">Government of State, Revenue Department</p>
</div>
<div className="text-right">
<p className="font-data-sm text-data-sm text-text-muted">CERTIFICATE NO.</p>
<p className="font-data-md text-data-md text-primary">INC-2023-8829-XJ</p>
</div>
</div>
{/* Citizen Info & Photo */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6 border-b border-border">
<div className="md:col-span-1">
<div className="w-32 h-40 border border-border bg-background p-1">
<img className="w-full h-full object-cover grayscale" data-alt="A formal, official-looking passport-style photograph of an adult male citizen named Aarav Sharma, wearing professional attire against a plain white background. The image should look like a standard identification photo, well-lit and high contrast, fitting a modern government document viewer interface. Strict lighting and sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR1Wk-hifmz838FLYhrUjoHdzmAJvRMBTEKPFO2siBOP7gFEazr2W346yEGfrnFsFVZ9RBP_mMdOoMGSWJtjKHezQzaR0gHUHBZng2HISAmI-nSyAKx8GRYl-XhhvqwHyIS2fnR--IQKl3oQNsq2Fz9DrLfG4aKRDihanOvKIcXTizpu77u-j-iq-g5hDJDgEm1a1nDUXexIaMQrCY-lVkLshb3sz8YA2v7x2KQPWYYfjP-0WA8oMXqO8-fiUae7YLGAsZNs25w76U"/>
</div>
</div>
<div className="md:col-span-3 flex flex-col gap-4 justify-center">
<div>
<p className="font-label-sm text-label-sm text-text-muted uppercase">Name</p>
<p className="font-body-lg text-body-lg text-on-surface font-semibold">Aarav Sharma</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-text-muted uppercase">Annual Income</p>
<p className="font-data-lg text-data-lg text-primary">₹ 4,50,000</p>
</div>
</div>
</div>
{/* Verification Elements */}
<div className="flex justify-between items-end pt-6 mt-auto">
<div className="w-24 h-24 border border-border bg-background p-2">
<img className="w-full h-full object-contain" data-alt="A clean, sharp, scannable QR code graphic representing secure verification data. The QR code should be stark black and white, perfectly square, and look like a standard digital verification code found on official government certificates or tickets. It should be high resolution and free of any blurs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDSbufA55wkBgh0CDkJ2v82o99MTWvd7R3cOWiy40HQ1om-l1QYLSsUTuF3tY2EgThLtS94n4MiXlAQKSjqT7d3RcU4KP8K6EbOylqYnsMi39HP7enppITPBPtTT8sNAHY9Pt7JnVY8ylOBcb4JMGUOx-RYiPVtaHaONp5m4a8EZ4TGC1W-jY75-EW_BzjZIEuCoLIRvFU_SSi9RBxcX9rJj0pn_vvumZ-xEX28QjDyqWEahhwKRaQ0oODhB2qrAxtMYWjLJJUb6Ow"/>
</div>
<div className="text-center">
<div className="w-20 h-20 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 opacity-50">
<span className="material-symbols-outlined text-primary text-[32px]" data-icon="account_balance">account_balance</span>
</div>
<p className="font-label-sm text-label-sm text-primary uppercase">Official Seal</p>
</div>
</div>
</div>
{/* Metadata Section */}
<div className="bg-surface border border-border p-6 shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
<h3 className="font-label-md text-label-md text-primary mb-4 border-b border-border pb-2">VERIFICATION DETAILS</h3>
<ul className="flex flex-col gap-4">
<li className="flex flex-col md:flex-row md:justify-between border-b border-border/50 pb-2">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Issuing Authority</span>
<span className="font-body-md text-body-md text-on-surface">Revenue Department</span>
</li>
<li className="flex flex-col md:flex-row md:justify-between border-b border-border/50 pb-2">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Issued Date</span>
<span className="font-body-md text-body-md text-on-surface">18 Mar 2023</span>
</li>
<li className="flex flex-col md:flex-row md:justify-between">
<span className="font-label-sm text-label-sm text-text-muted uppercase">Verification Hash</span>
<span className="font-data-md text-data-md text-primary">8829-XJ21-4821-LS99</span>
</li>
</ul>
</div>
</main>
{/* Floating Action Button Area */}
<div className="fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-sm border-t border-border p-margin-mobile md:p-margin-desktop z-20 flex justify-center shadow-[0_-1px_2px_rgba(17,24,39,0.06)]">
<button className="bg-primary-container text-on-primary w-full max-w-4xl font-label-md text-label-md uppercase h-12 flex items-center justify-center gap-2 hover:bg-primary transition-colors rounded-none">
<span className="material-symbols-outlined" data-icon="lock">lock</span>
            SHARE SECURE LINK
        </button>
</div>
      </div>
    </AppLayout>
  );
}
