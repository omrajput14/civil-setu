import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="SECURITY &AMP; PASSWORD - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar from JSON */}

{/* Metadata Rail */}
<div className="w-full h-rail-height bg-surface border-b border-border flex items-center justify-between px-margin-mobile md:px-margin-desktop shadow-[0_1px_2px_rgba(17,24,39,0.06)] sticky top-16 z-40">
<span className="font-data-sm text-data-sm uppercase text-success flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-success"></span>
            SECURE SESSION
        </span>
<span className="font-data-sm text-data-sm uppercase text-text-muted">
            ENCRYPTION: AES-256
        </span>
</div>
{/* Main Canvas */}
<main className="flex-grow w-full max-w-[800px] mx-auto p-margin-mobile space-y-stack-lg pb-32">
{/* Section 1: Change Password */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg">
<div className="flex items-center gap-3 mb-stack-md border-b border-border pb-stack-sm">
<span className="material-symbols-outlined text-text-muted" data-icon="lock">lock</span>
<h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Change Password</h2>
</div>
<form className="space-y-stack-md">
<div className="relative">
<label className="block font-label-sm text-label-sm text-text-muted mb-1" htmlFor="current_password">Current Password</label>
<div className="relative flex items-center">
<input className="tech-input w-full px-3 py-2 font-data-md text-data-md text-on-surface placeholder-text-muted/50" id="current_password" placeholder="••••••••" type="password"/>
<button className="absolute right-3 text-text-muted hover:text-primary transition-colors cursor-pointer toggle-password" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="visibility">visibility</span>
</button>
</div>
</div>
<div className="relative">
<label className="block font-label-sm text-label-sm text-text-muted mb-1" htmlFor="new_password">New Password</label>
<div className="relative flex items-center">
<input className="tech-input w-full px-3 py-2 font-data-md text-data-md text-on-surface placeholder-text-muted/50" id="new_password" placeholder="••••••••" type="password"/>
<button className="absolute right-3 text-text-muted hover:text-primary transition-colors cursor-pointer toggle-password" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="visibility">visibility</span>
</button>
</div>
</div>
<div className="relative">
<label className="block font-label-sm text-label-sm text-text-muted mb-1" htmlFor="confirm_password">Confirm New Password</label>
<div className="relative flex items-center">
<input className="tech-input w-full px-3 py-2 font-data-md text-data-md text-on-surface placeholder-text-muted/50" id="confirm_password" placeholder="••••••••" type="password"/>
<button className="absolute right-3 text-text-muted hover:text-primary transition-colors cursor-pointer toggle-password" type="button">
<span className="material-symbols-outlined text-[18px]" data-icon="visibility">visibility</span>
</button>
</div>
</div>
</form>
</section>
{/* Section 2: Multi-Factor Authentication */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg flex items-center justify-between">
<div className="pr-4">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-text-muted" data-icon="shield">shield</span>
<h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Multi-Factor Authentication</h2>
</div>
<p className="font-body-md text-body-md text-text-muted ml-8">Add an extra layer of security to your account.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in flex-shrink-0">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-text-muted z-10 transition-all duration-300" id="mfa_toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-border cursor-pointer transition-colors duration-300" htmlFor="mfa_toggle"></label>
</div>
</section>
{/* Section 3: Active Sessions */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg">
<div className="flex items-center justify-between border-b border-border mb-stack-md pb-stack-sm">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-text-muted" data-icon="devices">devices</span>
<h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Active Sessions</h2>
</div>
</div>
<div className="space-y-stack-sm mb-stack-md">
{/* Session Item 1 (Current) */}
<div className="flex items-start justify-between p-3 bg-surface-bright border border-border rounded-DEFAULT">
<div className="flex gap-3">
<span className="material-symbols-outlined text-primary mt-1" data-icon="desktop_windows">desktop_windows</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Windows 11 PC - Chrome</p>
<p className="font-data-sm text-data-sm text-text-muted mt-1 uppercase">Bangalore, India • Current Session</p>
</div>
</div>
<span className="bg-success/10 text-success font-data-sm text-data-sm px-2 py-1 rounded-DEFAULT uppercase border border-success/20">Active</span>
</div>
{/* Session Item 2 */}
<div className="flex items-start justify-between p-3 bg-surface border border-border rounded-DEFAULT hover:bg-surface-bright transition-colors">
<div className="flex gap-3">
<span className="material-symbols-outlined text-text-muted mt-1" data-icon="smartphone">smartphone</span>
<div>
<p className="font-label-md text-label-md text-on-surface">iPhone 13 - Safari</p>
<p className="font-data-sm text-data-sm text-text-muted mt-1 uppercase">Bangalore, India • Last active: 2 hrs ago</p>
</div>
</div>
</div>
</div>
<button className="w-full bg-surface border border-border text-primary font-label-md text-label-md py-2 px-4 rounded-DEFAULT hover:bg-surface-container-low transition-colors duration-200 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="logout">logout</span>
                Log out of all other sessions
            </button>
</section>
</main>
{/* Fixed Bottom Action Area */}
<div className="sticky bottom-0 left-0 w-full bg-surface border-t border-border p-margin-mobile md:px-margin-desktop md:py-4 shadow-[0_-1px_2px_rgba(17,24,39,0.06)] z-50">
<div className="max-w-[800px] mx-auto flex justify-end">
<button className="bg-primary-container text-on-primary font-label-md text-label-md px-8 py-3 rounded-DEFAULT hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center gap-2 shadow-[0_1px_2px_rgba(17,24,39,0.06)] uppercase tracking-wider">
<span className="material-symbols-outlined text-[18px]" data-icon="security">security</span>
                Update Security
            </button>
</div>
</div>
{/* Note: Footer from JSON is omitted based on structural priority for a fixed bottom action area in a focused task, but could be added below if strictly required by constraints. Here, prioritizing the primary action. */}
      </div>
    </AppLayout>
  );
}
