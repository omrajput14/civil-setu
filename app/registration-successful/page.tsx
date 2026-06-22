import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="REGISTRATION SUCCESSFUL - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Success Page Layout: Navigation shell suppressed per "The Destination Rule" for Transactional flows */}
<canvas className="confetti-canvas" id="confetti"></canvas>
<main className="flex-grow flex items-center justify-center p-container-margin relative z-10">
<div className="max-w-xl w-full">
{/* Professional Branding Anchor */}
<div className="flex flex-col items-center mb-xl">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">CivicSetu</h1>
</div>
</div>
{/* Main Content Card */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl text-center">
{/* Success Illustration Area */}
<div className="mb-lg flex justify-center">
<div className="w-24 h-24 bg-tertiary-fixed rounded-full flex items-center justify-center success-checkmark-animation">
<span className="material-symbols-outlined text-tertiary-container text-[64px]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1", }}>check_circle</span>
</div>
</div>
{/* Messaging */}
<h2 className="font-display-lg text-display-lg text-on-background mb-sm">Registration Successful</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-md mx-auto">
                    Your civic identity has been verified and registered. Your account is now active and ready for use in the Rural Governance ecosystem.
                </p>
{/* Information Bento Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-md text-left mb-xl">
<div className="bg-surface-container-low p-md rounded-lg border border-outline-variant">
<div className="flex items-center gap-sm mb-xs">
<span className="material-symbols-outlined text-primary text-sm" data-icon="verified_user">verified_user</span>
<span className="font-label-sm text-label-sm text-primary uppercase">Identity ID</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-background">CS-9928-4402</p>
</div>
<div className="bg-surface-container-low p-md rounded-lg border border-outline-variant">
<div className="flex items-center gap-sm mb-xs">
<span className="material-symbols-outlined text-primary text-sm" data-icon="event_available">event_available</span>
<span className="font-label-sm text-label-sm text-primary uppercase">Valid Until</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-background">Dec 2029</p>
</div>
</div>
{/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-md justify-center">
<button className="bg-primary text-on-primary font-headline-sm text-headline-sm px-xl py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-sm min-w-[200px]" onclick="window.location.href='#'">
                        Go to Dashboard
                        <span className="material-symbols-outlined text-xl" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="border border-primary text-primary font-headline-sm text-headline-sm px-xl py-3 rounded-lg hover:bg-primary-fixed-dim hover:bg-opacity-20 active:scale-95 transition-all min-w-[200px]" onclick="window.location.href='#'">
                        View Profile
                    </button>
</div>
</div>
{/* Footer Compliance/Support */}
<div className="mt-xl text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
                    Need assistance? <a className="text-primary font-semibold hover:underline" href="#">Contact Support</a> or visit our <a className="text-primary font-semibold hover:underline" href="#">Help Center</a>.
                </p>
<div className="mt-md flex justify-center gap-lg">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="security">security</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Government Encryption</span>
</div>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="lock">lock</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Secure Data Node</span>
</div>
</div>
</div>
</div>
</main>
{/* Contextual Decorative Background (Hidden on small screens) */}
<div className="sticky bottom-0 right-0 w-1/3 h-1/2 opacity-10 pointer-events-none hidden lg:block overflow-hidden">
<img className="object-cover w-full h-full grayscale opacity-50" data-alt="A sophisticated architectural wireframe of a modern government building with clean geometric lines and transparent layers. The aesthetic is high-end corporate minimalism with a palette of deep navy and soft greys. The lighting is ethereal and diffused, suggesting transparency and integrity in civic administration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaDUiMFW4U9v3zMqa9lriXts58l7agDCOklKcgP2PYg2wS5i8g3zHosEmwFQSf4wJywEuamgsht5tqS_U40xWK4ZPEP4HF3ANQQ4bJHAviEsC9vfLMI3Su2iJlq0X1ZalXLCs99efOKOipvCUqih3Jtr98hHxFWGsBUKY9ElGkF5oizHbG_Wa8WdXjJjAIb1pR5HHvJKoN4TAemr_i_nS8GyvZqbLKVOorHD2IUPdSo1ui1zWIRHXC2O9oo_LuYPb98pxfROJV0ThU"/>
</div>
      </div>
    </AppLayout>
  );
}
