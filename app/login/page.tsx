import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - LOGIN" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Main Card Container */}
<main className="w-full max-w-[420px]">
<div className="bg-surface border border-border rounded-[8px] p-[40px] card-elevation mb-stack-md">
{/* Header Section */}

{/* State 1: Login Form */}
<div className="block" id="view-login">
<form className="flex flex-col gap-[20px]" onsubmit="event.preventDefault(); toggleView();">
{/* Dropdown */}
<div><label className="block font-data-sm text-label-sm uppercase text-text-muted mb-stack-sm" htmlFor="mobile">Mobile Number</label><input autocomplete="tel" className="w-full bg-surface border border-border instrument-input px-3 py-2 text-on-surface font-body-md" id="mobile" placeholder="Enter 10-digit mobile number" type="tel"/></div>
{/* Username */}
{/* Password */}
<div>
<label className="block font-data-sm text-data-sm uppercase text-text-muted mb-stack-sm" htmlFor="password">Account Password</label>
<input autocomplete="current-password" className="w-full bg-surface border border-border instrument-input px-3 py-2 text-on-surface font-body-md" id="password" placeholder="••••••••" type="password"/>
</div>
{/* Submit Action */}
<div className="mt-2"><button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-3 rounded-[6px] hover:bg-primary transition-colors active:scale-[0.98] mb-stack-sm" type="submit">Login to Citizen Portal</button><button className="w-full bg-surface border border-border text-primary font-label-md text-label-md py-3 rounded-[6px] hover:bg-surface-container-low transition-colors active:scale-[0.98]" type="button">Register with Aadhaar</button></div>
</form>
</div>
{/* State 2: Role Selection (Hidden by default) */}
<div className="hidden" id="view-roles">
<div className="mb-[24px]">
<h2 className="font-label-md text-label-md text-on-surface mb-1">Select Access Profile</h2>
<p className="font-body-md text-body-md text-text-muted text-sm">Multiple authorizations detected for your account.</p>
</div>
<div className="flex flex-col gap-stack-sm">
{/* Role: Sarpanch (Selected Example) */}
<button className="w-full flex items-center justify-between p-4 bg-surface border-y border-r border-l-4 border-l-warning border-y-border border-r-border rounded-[6px] hover:bg-surface-container-low transition-colors text-left group">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">Sarpanch</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase mt-0.5">ID: GP-AUTH-01A</span>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors">
                            chevron_right
                        </span>
</button>
{/* Role: Secretary */}
<button className="w-full flex items-center justify-between p-4 bg-surface border border-border rounded-[6px] hover:bg-surface-container-low transition-colors text-left group">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">Secretary</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase mt-0.5">ID: GP-SEC-892</span>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors">
                            chevron_right
                        </span>
</button>
{/* Role: Field Officer */}
<button className="w-full flex items-center justify-between p-4 bg-surface border border-border rounded-[6px] hover:bg-surface-container-low transition-colors text-left group">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">Field Officer</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase mt-0.5">ID: FLD-OPS-404</span>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors">
                            chevron_right
                        </span>
</button>
{/* Role: Citizen Desk */}
<button className="w-full flex items-center justify-between p-4 bg-surface border border-border rounded-[6px] hover:bg-surface-container-low transition-colors text-left group">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors">Citizen Desk</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase mt-0.5">ID: PUB-SVC-100</span>
</div>
<span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors">
                            chevron_right
                        </span>
</button>
</div>
<div className="mt-6 text-center">
<button className="font-data-sm text-data-sm uppercase text-primary hover:underline cursor-pointer bg-transparent border-none" onclick="toggleView()">
                        Cancel &amp; Return
                    </button>
</div>
</div>
</div>
{/* External Footer */}
<div className="text-center">
<p className="font-data-sm text-data-sm uppercase text-text-muted tracking-widest">CIVICSETU CITIZEN v1.0 · PUBLIC SERVICES ACCESS</p>
</div>
</main>
      </div>
    </AppLayout>
  );
}
