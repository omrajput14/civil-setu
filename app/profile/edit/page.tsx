import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="EDIT PROFILE - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar Component (Transactional/Task Focused variant - no trailing nav) */}

{/* Main Content Canvas */}
<main className="flex-grow pt-[80px] pb-[100px] px-margin-mobile md:px-margin-desktop w-full max-w-2xl mx-auto">
<form action="#" className="flex flex-col gap-stack-lg" method="POST">
{/* Section 1: Profile Picture */}
<section aria-labelledby="section-avatar" className="bg-surface p-stack-md border border-border rounded-lg shadow-sm flex flex-col items-center justify-center gap-stack-md">
<h2 className="sr-only" id="section-avatar">Profile Picture</h2>
<div className="relative group cursor-pointer">
<div className="w-24 h-24 rounded-full border-2 border-border overflow-hidden bg-surface-container-highest flex items-center justify-center">
<img alt="Current profile photo" className="w-full h-full object-cover" data-alt="A professional headshot of a person looking directly at the camera. The lighting is studio-quality with soft white tones fitting a modern corporate identity system. The background is a stark, clean white to match a bright user interface. The overall aesthetic is serious, clean, and highly functional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBF93zChEOdH39FMLtb2rMVh_87_jxCZ2V2GVWQxKwyE3gaS2mEuanwjxsWB7lO7bVn_X5Rg0ysCjKkTRghgWgub0lpdWqc4uVBJCynBkKxAVbg-j4LDT92KQ5dGSHfIVh5CdMqPtyeI8I4GmaSjiej5k1SBzkKBP-2T2HCnWdQtPmKJggA6McUfpjwI9U5UILyk3pKWKk9eY0xw2UUHWADlnnmvSAdaO7-KUc61qeJn61QnUKrb4vyjux3ItgkyKSAsOPWQNUhFzZ"/>
</div>
{/* Overlay for hover state */}
<div className="absolute inset-0 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-on-primary">photo_camera</span>
</div>
</div>
<button className="font-label-md text-label-md text-primary-container border border-border px-4 py-2 rounded hover:bg-surface-container-low transition-colors active:scale-95" type="button">
                    Change Photo
                </button>
</section>
{/* Section 2: Personal Information */}
<section aria-labelledby="section-personal" className="bg-surface p-stack-md border border-border rounded-lg shadow-sm flex flex-col gap-stack-md">

{/* Full Name (Disabled/Verified) */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between" htmlFor="fullName">
                        Full Name
                        <span className="flex items-center text-success font-data-sm text-[10px] uppercase border border-success/30 bg-success/10 px-1 rounded">
<span className="material-symbols-outlined text-[12px] mr-1">verified</span> Verified
                        </span>
</label>
<input className="w-full h-10 px-3 bg-surface border border-border rounded text-on-surface-variant font-data-md" disabled="" id="fullName" name="fullName" type="text" defaultValue="Aarav Sharma"/>
<p className="font-data-sm text-data-sm text-text-muted mt-1">Name changes require formal verification via CivicSetu Portal.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
{/* Mobile Number */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="mobileNumber">Mobile Number</label>
<input className="w-full h-10 px-3 bg-surface border border-border rounded text-on-surface focus:border-primary-container focus:ring-0 transition-colors font-data-md" id="mobileNumber" name="mobileNumber" type="tel" defaultValue="+91 9876543210"/>
</div>
{/* Email Address */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="emailAddress">Email Address</label>
<input className="w-full h-10 px-3 bg-surface border border-border rounded text-on-surface focus:border-primary-container focus:ring-0 transition-colors font-data-md" id="emailAddress" name="emailAddress" type="email" defaultValue="aarav.sharma@example.com"/>
</div>
</div>
</section>
{/* Section 3: Residential Address */}
<section aria-labelledby="section-address" className="bg-surface p-stack-md border border-border rounded-lg shadow-sm flex flex-col gap-stack-md">

<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
{/* House/Flat No */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="houseNo">House/Flat No.</label>
<input className="w-full h-10 px-3 bg-surface border border-border rounded text-on-surface focus:border-primary-container focus:ring-0 transition-colors font-data-md" id="houseNo" name="houseNo" type="text" defaultValue="B-402, Skyline Apts"/>
</div>
{/* Street/Area */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="streetArea">Street/Area</label>
<input className="w-full h-10 px-3 bg-surface border border-border rounded text-on-surface focus:border-primary-container focus:ring-0 transition-colors font-data-md" id="streetArea" name="streetArea" type="text" defaultValue="MG Road, Indiranagar"/>
</div>
{/* Landmark */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="landmark">Landmark</label>
<input className="w-full h-10 px-3 bg-surface border border-border rounded text-on-surface focus:border-primary-container focus:ring-0 transition-colors font-data-md" id="landmark" name="landmark" type="text" defaultValue="Near Metro Station"/>
</div>
{/* Pincode */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="pincode">Pincode</label>
<input className="w-full h-10 px-3 bg-surface border border-border rounded text-on-surface focus:border-primary-container focus:ring-0 transition-colors font-data-md tracking-widest" id="pincode" maxlength="6" name="pincode" type="text" defaultValue="560038"/>
</div>
</div>
</section>
{/* Section 4: Security */}
<section aria-labelledby="section-security" className="bg-surface p-stack-md border border-border rounded-lg shadow-sm flex flex-col gap-stack-md">

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Account Password</span>
<span className="font-data-sm text-data-sm text-text-muted">Last updated: 45 days ago</span>
</div>
<button className="font-label-sm text-label-sm text-primary-container hover:text-secondary underline underline-offset-4 transition-colors" type="button">
                        Update Password
                    </button>
</div>
</section>
</form>
</main>
{/* Fixed Bottom Action Bar for Transactional Screen */}
<div className="fixed bottom-0 w-full bg-surface border-t border-border p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<div className="max-w-2xl mx-auto flex items-center justify-end gap-4">
<button className="font-label-md text-label-md px-6 py-3 rounded border border-border text-primary-container hover:bg-surface-container-low transition-colors" onclick="history.back()" type="button">
                Cancel
            </button>
<button className="font-label-md text-label-md px-8 py-3 rounded bg-primary-container text-on-primary hover:bg-primary transition-colors flex items-center gap-2 active:scale-95 shadow-sm" type="submit">
<span className="material-symbols-outlined text-[18px]">save</span>
                Save Changes
            </button>
</div>
</div>
{/* Footer Component (Status Rail variant) */}
<footer className="fixed bottom-[72px] md:bottom-0 w-full h-[32px] bg-surface-container-lowest border-t border-border z-30 hidden md:flex items-center justify-between px-margin-desktop w-full">
<div className="font-data-sm text-data-sm uppercase text-text-muted">
            CIVICSETU OPERATIONAL UNIT • SYSTEM STATUS: OPTIMAL
        </div>
<div className="flex gap-4 font-data-sm text-data-sm uppercase text-text-muted">
<span>ID: CS-8821</span>
<span>REF: 2024-ALPHA</span>
</div>
</footer>
      </div>
    </AppLayout>
  );
}
