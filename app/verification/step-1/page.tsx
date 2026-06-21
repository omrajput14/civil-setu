import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="NAME VERIFICATION WORKFLOW - REQUEST DETAILS" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* NavigationDrawer (Desktop) */}
<nav className="hidden md:flex flex-col pt-8 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container border-r border-border dark:border-outline-variant fixed left-0 top-0 h-full w-[240px] shrink-0 z-40">
<div className="px-6 pb-6 border-b border-on-primary/20 mb-4">
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">Verification Workflow</h2>
</div>
<ul className="flex flex-col gap-1 w-full font-label-md text-label-md">
{/* Active State */}
<li>
<a className="flex items-center gap-stack-md border-l-4 border-secondary-container bg-primary-container text-on-primary-container px-4 py-3 transition-all duration-150 ease-in-out w-full" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0", }}>edit_square</span>
<span>Request Details</span>
</a>
</li>
{/* Inactive States */}
<li>
<a className="flex items-center gap-stack-md text-on-primary/70 dark:text-on-primary-container/70 px-4 py-3 hover:text-on-primary hover:bg-primary-fixed-dim/10 dark:hover:bg-primary/20 transition-all duration-150 ease-in-out w-full border-l-4 border-transparent" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0", }}>upload_file</span>
<span>Document Upload</span>
</a>
</li>
<li>
<a className="flex items-center gap-stack-md text-on-primary/70 dark:text-on-primary-container/70 px-4 py-3 hover:text-on-primary hover:bg-primary-fixed-dim/10 dark:hover:bg-primary/20 transition-all duration-150 ease-in-out w-full border-l-4 border-transparent" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0", }}>fact_check</span>
<span>Final Review</span>
</a>
</li>
<li>
<a className="flex items-center gap-stack-md text-on-primary/70 dark:text-on-primary-container/70 px-4 py-3 hover:text-on-primary hover:bg-primary-fixed-dim/10 dark:hover:bg-primary/20 transition-all duration-150 ease-in-out w-full border-l-4 border-transparent" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0", }}>task_alt</span>
<span>Submission Status</span>
</a>
</li>
</ul>
<div className="mt-auto p-4 border-t border-on-primary/20 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-label-md">
                 JS
             </div>
<div>
<div className="font-label-md text-label-sm text-on-primary">J. Smith</div>
<div className="font-data-sm text-data-sm text-on-primary/70 uppercase">ID: 884-A9B</div>
</div>
</div>
</nav>
{/* Main Canvas */}
<main className="flex-1 md:ml-[240px] flex flex-col min-h-screen w-full relative">
{/* Desktop Header Substitute (Since TopAppBar is hidden on md per mobile instructions, but contextually we need a header area) */}
<div className="hidden md:flex justify-between items-center h-[88px] px-margin-desktop w-full border-b border-border bg-surface shrink-0">
<div className="flex items-center gap-stack-md">
<h1 className="font-headline-lg text-headline-lg font-bold text-primary">Name Change Request</h1>
</div>
<button className="flex items-center gap-2 text-on-surface-variant border border-border px-4 py-2 rounded font-label-md text-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]">help_outline</span>
                Need Help?
            </button>
</div>
<div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-[800px] mx-auto w-full flex flex-col gap-stack-lg">
{/* Progress / Status Rail */}
<div className="w-full flex flex-col gap-2">
<div className="flex justify-between items-center px-1">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Step 1 of 3</span>
<span className="font-label-sm text-label-sm text-primary">Request Details</span>
</div>
<div className="h-2 w-full bg-border rounded-full overflow-hidden flex">
<div className="h-full bg-primary w-1/3"></div>
</div>
</div>
{/* Form Card */}
<div className="bg-surface border border-border rounded elevation-1 flex flex-col overflow-hidden">
<div className="bg-surface h-rail-height border-b border-border flex items-center px-4 shrink-0">
<span className="font-data-sm text-data-sm text-text-muted uppercase tracking-wider">Citizen Identity Data</span>
</div>
<form className="p-6 flex flex-col gap-stack-lg">
<div className="bg-surface-container-low border border-border rounded p-4 flex gap-4 items-start">
<span className="material-symbols-outlined text-primary mt-0.5">verified_user</span>
<div>
<h3 className="font-label-md text-label-md text-primary mb-1">Verified Current Identity</h3>
<p className="font-body-md text-[14px] leading-snug text-on-surface-variant">This information is pulled from the central registry and cannot be modified directly.</p>
</div>
</div>
<div className="flex flex-col gap-stack-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="currentName">Current Legal Name</label>
<input className="w-full bg-background border border-border rounded-[6px] px-4 py-3 font-data-md text-data-md text-text-muted focus:outline-none cursor-not-allowed" id="currentName" readonly="" type="text" defaultValue="JOHNATHAN ALBERT SMITH"/>
</div>
<div className="w-full h-px bg-border my-2"></div>
<div className="flex flex-col gap-stack-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="newName">Requested Legal Name <span className="text-danger">*</span></label>
<input className="w-full bg-surface border border-border rounded-[6px] px-4 py-3 font-data-md text-data-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors" id="newName" placeholder="Enter full new name" required="" type="text"/>
<span className="font-data-sm text-data-sm text-text-muted mt-1">Must match supporting documentation exactly.</span>
</div>
<div className="flex flex-col gap-stack-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="reason">Reason for Change <span className="text-danger">*</span></label>
<div className="relative">
<select className="w-full bg-surface border border-border rounded-[6px] px-4 py-3 font-body-md text-on-surface appearance-none focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors pr-10" id="reason" required="">
<option disabled="" selected="" value="">Select an administrative reason...</option>
<option value="marriage">Marriage</option>
<option value="divorce">Divorce</option>
<option value="court_order">Court Order</option>
<option value="correction">Correction of Error</option>
<option value="other">Other Administrative Reason</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">expand_more</span>
</div>
</div>
</form>
</div>
{/* Action Area */}
<div className="flex justify-end gap-4 mt-4 pt-6 border-t border-border">
<button className="px-6 py-2 border border-border rounded text-primary font-label-md text-label-md hover:bg-surface-container-low transition-colors" type="button">
                    Cancel
                </button>
<button className="px-8 py-2 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm" type="button">
                    Continue to Document Upload
                </button>
</div>
</div>
</main>
      </div>
    </AppLayout>
  );
}
