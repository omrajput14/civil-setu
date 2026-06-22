import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="IDENTITY REGISTRATION - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top Navigation Anchor (Manual for Transactional Flow) */}

<main className="flex-grow flex items-center justify-center pt-24 pb-12 px-md">
<div className="w-full max-w-xl">
{/* Bento Layout Container */}
<div className="grid grid-cols-1 gap-lg">
{/* Progress Header */}
<div className="surface-level-1 p-lg flex flex-col gap-md">
<div className="flex justify-between items-center">
<h1 className="font-headline-md text-headline-md text-primary">Identity Linking</h1>
<span className="font-label-sm text-label-sm px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full">Step 2 of 3</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="progress-fill h-full bg-primary" style={{ width: "66%", }}></div>
</div>
<div className="flex justify-between text-label-sm text-on-surface-variant">
<span>Profile Details</span>
<span className="text-primary font-bold">Aadhaar Verification</span>
<span>Biometric Auth</span>
</div>
</div>
{/* Main Form Card */}
<div className="surface-level-1 p-lg flex flex-col gap-xl">
<div className="flex flex-col gap-sm">
<div className="flex items-center gap-sm text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", }}>fingerprint</span>
<h2 className="font-headline-sm text-headline-sm">Aadhaar Number Linking</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Please provide your 12-digit unique identification number to link your digital identity with the rural governance portal.
                        </p>
</div>
<form className="flex flex-col gap-lg" onsubmit="return false;">
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="aadhaar_input">Aadhaar Number</label>
<div className="relative group">
<input className="governance-input w-full h-12 px-md rounded-lg border border-outline-variant font-body-lg text-body-lg tracking-[0.2em] focus:ring-0" id="aadhaar_input" maxlength="14" oninput="this.value = this.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()" placeholder="0000 0000 0000" type="text"/>
<div className="absolute right-md top-1/2 -translate-y-1/2 text-outline">
<span className="material-symbols-outlined text-md">verified_user</span>
</div>
</div>
<p className="font-label-sm text-label-sm text-outline">Format: 12 numeric digits only.</p>
</div>
<div className="flex flex-col gap-md">
<button className="bg-primary text-on-primary h-12 rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
<span>Verify Identity</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="bg-transparent text-primary h-10 border border-primary rounded-lg font-label-md text-label-md flex items-center justify-center hover:bg-surface-container-low transition-colors">
                                Back to Step 1
                            </button>
</div>
</form>
</div>
{/* Data Privacy Box (Asymmetric/Highlighted) */}
<div className="bg-surface-container border-l-4 border-secondary p-lg rounded-r-xl flex gap-md items-start">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1", }}>security</span>
<div className="flex flex-col gap-xs">
<h3 className="font-label-md text-label-md text-on-surface font-bold">Data Privacy &amp; Security</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Your Aadhaar data is encrypted using AES-256 standards before transmission. CivicSetu does not store your full Aadhaar number; we only use secure tokens for identity validation through government-approved gateways.
                        </p>
</div>
</div>
{/* Informational Image Card (Visual Anchor) */}
<div className="relative h-48 rounded-xl overflow-hidden border border-outline-variant group">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A clean, professional macro shot of a sleek biometric fingerprint scanner on a minimalist white glass desk. Soft blue corporate lighting illuminates the device, creating a secure, government-grade technological atmosphere. The scene is high-contrast with deep navy and crisp white tones, reflecting a state-of-the-art security infrastructure for rural governance." style={{ backgroundImage: "url('https", }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
<div className="absolute bottom-md left-md text-on-primary">
<p className="font-label-sm text-label-sm opacity-80">Security Protocol</p>
<p className="font-headline-sm text-headline-sm">Meets ISO 27001 Compliance</p>
</div>
</div>
</div>
</div>
</main>
{/* Footer Identity (Non-Nav) */}
<footer className="py-md px-lg text-center">
<p className="font-label-sm text-label-sm text-outline">
            © 2024 Ministry of Rural Development. All data processing follows National Data Privacy Policy.
        </p>
</footer>
      </div>
    </AppLayout>
  );
}
