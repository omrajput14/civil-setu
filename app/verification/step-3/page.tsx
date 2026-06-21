import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="NAME VERIFICATION WORKFLOW - FINAL REVIEW" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Sidebar Navigation (Desktop) */}
<nav className="hidden md:flex flex-col pt-8 bg-primary text-on-primary font-label-md text-label-md fixed left-0 top-0 h-full w-[240px] border-r border-border z-40">
<div className="px-6 pb-8 border-b border-on-primary/10">
<h2 className="font-headline-lg text-headline-lg text-on-primary">Verification Workflow</h2>
</div>
<div className="flex-1 py-4 flex flex-col gap-1">
<a className="flex items-center gap-stack-md text-on-primary/70 px-4 py-3 hover:bg-primary/20 transition-all duration-150 ease-in-out hover:text-on-primary" href="#">
<span className="material-symbols-outlined" data-icon="edit_square">edit_square</span>
                Request Details
            </a>
<a className="flex items-center gap-stack-md text-on-primary/70 px-4 py-3 hover:bg-primary/20 transition-all duration-150 ease-in-out hover:text-on-primary" href="#">
<span className="material-symbols-outlined" data-icon="upload_file">upload_file</span>
                Document Upload
            </a>
<a className="flex items-center gap-stack-md border-l-4 border-secondary-container bg-primary-container text-on-primary-container px-4 py-3 transition-all duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
                Final Review
            </a>
<a className="flex items-center gap-stack-md text-on-primary/70 px-4 py-3 hover:bg-primary/20 transition-all duration-150 ease-in-out hover:text-on-primary" href="#">
<span className="material-symbols-outlined" data-icon="task_alt">task_alt</span>
                Submission Status
            </a>
</div>
<div className="h-rail-height bg-primary border-t border-on-primary/10 flex items-center px-4">
<span className="font-data-sm text-data-sm text-on-primary/50 uppercase tracking-widest">SYS.VER.3.4.1</span>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 md:ml-[240px] flex flex-col min-h-screen">
{/* TopAppBar */}

{/* Content Canvas */}
<div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-4xl mx-auto w-full flex flex-col gap-stack-lg">
{/* Progress Rail */}
<div className="w-full bg-surface border border-border rounded-DEFAULT overflow-hidden shadow-elevation-1">
<div className="flex">
<div className="flex-1 bg-success h-2"></div>
<div className="flex-1 bg-success h-2"></div>
<div className="flex-1 bg-primary h-2 relative">
<div className="absolute right-0 top-0 bottom-0 w-2 bg-secondary-container"></div>
</div>
</div>
<div className="px-gutter py-stack-sm flex justify-between items-center bg-surface">
<span className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest">Step 3 of 3: Final Review</span>
<span className="font-data-sm text-data-sm text-primary uppercase tracking-widest">Req ID: 899-AX-24B</span>
</div>
</div>
{/* Summary Card */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-elevation-1 p-stack-lg">
<h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md border-b border-border pb-stack-sm">Identity Verification Summary</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
{/* Current Name */}
<div className="bg-surface-container-low p-gutter rounded-DEFAULT border border-border">
<span className="font-label-sm text-label-sm text-text-muted block mb-stack-sm uppercase">Current Legal Name (On Record)</span>
<div className="font-data-lg text-data-lg text-on-surface break-words">
                            Jonathan Edward Doe
                        </div>
</div>
{/* Requested Name */}
<div className="bg-primary-fixed p-gutter rounded-DEFAULT border border-primary/20">
<span className="font-label-sm text-label-sm text-primary-container block mb-stack-sm uppercase">Requested Legal Name</span>
<div className="font-data-lg text-data-lg text-primary break-words">
                            Jonathan E. Doe-Smith
                        </div>
</div>
</div>
</section>
{/* Document List */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-elevation-1">
<div className="px-stack-lg py-stack-md border-b border-border bg-surface-container-lowest">
<h3 className="font-label-md text-label-md text-on-surface uppercase">Uploaded Documentation</h3>
</div>
<div className="divide-y divide-border">
<div className="px-stack-lg py-stack-md flex justify-between items-center bg-surface">
<div className="flex items-center gap-stack-md">
<span className="material-symbols-outlined text-text-muted" data-icon="description">description</span>
<div>
<span className="font-body-md text-body-md text-on-surface block">Court Order - Name Change</span>
<span className="font-data-sm text-data-sm text-text-muted">DOC_8832_v1.pdf</span>
</div>
</div>
<div className="bg-success/10 text-success px-3 py-1 border border-success/20 rounded-full font-label-sm text-label-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] fill" data-icon="check_circle">check_circle</span>
                            Ready
                        </div>
</div>
<div className="px-stack-lg py-stack-md flex justify-between items-center bg-surface">
<div className="flex items-center gap-stack-md">
<span className="material-symbols-outlined text-text-muted" data-icon="badge">badge</span>
<div>
<span className="font-body-md text-body-md text-on-surface block">State Issued ID</span>
<span className="font-data-sm text-data-sm text-text-muted">ID_FRONT_SCAN_HQ.jpg</span>
</div>
</div>
<div className="bg-success/10 text-success px-3 py-1 border border-success/20 rounded-full font-label-sm text-label-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] fill" data-icon="check_circle">check_circle</span>
                            Ready
                        </div>
</div>
</div>
</section>
{/* Legal Declaration */}
<section className="bg-surface border border-border rounded-DEFAULT shadow-elevation-1 p-stack-lg mt-auto">
<label className="flex items-start gap-stack-md cursor-pointer group">
<div className="flex-shrink-0 pt-1">
<input className="form-checkbox h-5 w-5 text-primary border-outline rounded-DEFAULT focus:ring-primary focus:ring-offset-surface focus:ring-2 cursor-pointer" type="checkbox"/>
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block mb-1">Legal Declaration &amp; Acknowledgment</span>
<p className="font-body-md text-body-md text-text-muted">
                            I declare under penalty of perjury that the information provided in this request is true and correct. I understand that submitting false documentation constitutes a federal offense punishable by law.
                        </p>
</div>
</label>
{/* Actions */}
<div className="mt-stack-lg pt-stack-lg border-t border-border flex justify-end gap-stack-md">
<button className="px-6 py-3 border border-border text-primary bg-surface hover:bg-surface-container-low font-label-md text-label-md rounded-DEFAULT transition-colors">
                        Cancel
                    </button>
<button className="px-6 py-3 bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md rounded-DEFAULT transition-colors shadow-elevation-1 flex items-center gap-2">
                        Submit Request
                        <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</section>
</div>
{/* Bottom Status Rail */}
<div className="h-rail-height bg-surface border-t border-border mt-auto flex items-center justify-between px-margin-mobile md:px-margin-desktop w-full">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Connection: Secure</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase">Last Saved: Just Now</span>
</div>
</main>
      </div>
    </AppLayout>
  );
}
