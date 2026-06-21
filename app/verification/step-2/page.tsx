import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="NAME VERIFICATION WORKFLOW - DOCUMENT UPLOAD" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar JSON Structure Applied */}

{/* Main Layout with NavDrawer */}
<div className="flex flex-1 overflow-hidden">
{/* NavigationDrawer JSON Structure Applied */}
<nav className="hidden md:flex flex-col pt-8 fixed left-0 top-0 h-full w-[240px] bg-primary border-r border-border text-on-primary font-label-md text-label-md z-40 transition-all duration-150 ease-in-out mt-[64px]">
<div className="px-4 py-4 mb-4">
<h2 className="font-headline-lg text-headline-lg text-on-primary">Verification Workflow</h2>
</div>
<ul className="flex flex-col w-full">
<li className="flex items-center gap-stack-md text-on-primary/70 px-4 py-3 hover:bg-primary-fixed-dim/10 hover:text-on-primary transition-all duration-150 ease-in-out cursor-pointer">
<span className="material-symbols-outlined" data-icon="edit_square">edit_square</span>
                    Request Details
                </li>
{/* Active State */}
<li className="flex items-center gap-stack-md border-l-4 border-secondary-container bg-primary-container text-on-primary-container px-4 py-3 transition-all duration-150 ease-in-out">
<span className="material-symbols-outlined" data-icon="upload_file" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1", }}>upload_file</span>
                    Document Upload
                </li>
<li className="flex items-center gap-stack-md text-on-primary/70 px-4 py-3 hover:bg-primary-fixed-dim/10 hover:text-on-primary transition-all duration-150 ease-in-out cursor-pointer">
<span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
                    Final Review
                </li>
<li className="flex items-center gap-stack-md text-on-primary/70 px-4 py-3 hover:bg-primary-fixed-dim/10 hover:text-on-primary transition-all duration-150 ease-in-out cursor-pointer">
<span className="material-symbols-outlined" data-icon="task_alt">task_alt</span>
                    Submission Status
                </li>
</ul>
</nav>
{/* Main Content Area */}
<main className="flex-1 md:ml-[240px] p-margin-mobile md:p-margin-desktop overflow-y-auto">
<div className="max-w-4xl mx-auto space-y-stack-lg">
{/* Header & Progress */}
<div className="space-y-stack-md">
<h2 className="font-headline-lg text-headline-lg text-primary font-bold">Document Upload</h2>
{/* Segmented Progress Bar */}
<div className="w-full flex items-center gap-1">
<div className="h-2 flex-1 bg-success rounded-l-full"></div>
<div className="h-2 flex-1 bg-secondary-container"></div>
<div className="h-2 flex-1 bg-surface-variant rounded-r-full"></div>
</div>
<div className="flex justify-between font-data-sm text-data-sm text-text-muted uppercase">
<span>Step 1: Details</span>
<span className="text-secondary-container font-bold">Step 2: Uploads</span>
<span>Step 3: Review</span>
</div>
</div>
{/* Info Banner */}
<div className="bg-surface border border-border rounded-DEFAULT p-4 flex gap-stack-md shadow-elevation">
<span className="material-symbols-outlined text-secondary-container" data-icon="info">info</span>
<div>
<h3 className="font-label-md text-label-md text-on-surface">Required Documentation</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Please provide clear, legible scans of the following documents to verify your name change request.</p>
</div>
</div>
{/* Upload Modules Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Document 1 */}
<div className="bg-surface border border-border rounded-DEFAULT shadow-elevation flex flex-col">
<div className="p-4 border-b border-border bg-surface-bright">
<h3 className="font-label-md text-label-md text-primary font-bold">Gazette Notification</h3>
<p className="font-data-sm text-data-sm text-text-muted uppercase mt-1">Official publication proof</p>
</div>
<div className="p-4 flex-1 flex flex-col justify-center items-center">
{/* Dropzone */}
<div className="w-full border-2 border-dashed border-outline-variant rounded-DEFAULT p-8 flex flex-col items-center justify-center bg-surface-bright hover:bg-surface-container-low transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-4xl mb-2" data-icon="cloud_upload">cloud_upload</span>
<span className="font-label-md text-label-md text-primary">Drag &amp; Drop</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase mt-2">PDF, JPG up to 5MB</span>
</div>
</div>
<div className="p-4 border-t border-border flex justify-end">
<button className="bg-surface border border-border text-primary font-label-md text-label-md px-4 py-2 rounded-DEFAULT hover:bg-surface-container-low transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="attach_file">attach_file</span>
                                Browse Files
                            </button>
</div>
</div>
{/* Document 2 */}
<div className="bg-surface border border-border rounded-DEFAULT shadow-elevation flex flex-col">
<div className="p-4 border-b border-border bg-surface-bright">
<h3 className="font-label-md text-label-md text-primary font-bold">Identity Proof (Old Name)</h3>
<p className="font-data-sm text-data-sm text-text-muted uppercase mt-1">Passport, Driver's License, or National ID</p>
</div>
<div className="p-4 flex-1 flex flex-col justify-center items-center">
{/* Uploaded State Example */}
<div className="w-full border border-success rounded-DEFAULT p-4 flex items-center justify-between bg-surface-bright">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-success" data-icon="description">description</span>
<div>
<p className="font-label-md text-label-md text-on-surface">old_passport_scan.pdf</p>
<p className="font-data-sm text-data-sm text-text-muted uppercase">2.4 MB • Complete</p>
</div>
</div>
<button className="text-danger hover:bg-error-container p-2 rounded-DEFAULT transition-colors">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</div>
<div className="p-4 border-t border-border flex justify-between items-center bg-surface-container-low">
<div className="flex items-center gap-2 text-success">
<span className="material-symbols-outlined text-sm" data-icon="check_circle" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1", }}>check_circle</span>
<span className="font-label-sm text-label-sm">Verified</span>
</div>
<button className="text-primary font-label-md text-label-md hover:underline">Replace</button>
</div>
</div>
</div>
{/* Footer Actions */}
<div className="mt-stack-lg pt-stack-md border-t border-border flex justify-end gap-stack-md">
<button className="bg-surface border border-border text-primary font-label-md text-label-md px-6 py-2 rounded-DEFAULT hover:bg-surface-container-low transition-colors">
                        Save Draft
                    </button>
<button className="bg-primary-container text-on-primary px-6 py-2 rounded-DEFAULT font-label-md text-label-md font-bold hover:bg-primary transition-colors flex items-center gap-2">
                        Continue
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Status Rail Bottom */}
<div className="fixed bottom-0 left-0 w-full md:pl-[240px] h-rail-height bg-surface border-t border-border flex items-center px-4 z-30 shadow-elevation">
<span className="font-data-sm text-data-sm text-text-muted uppercase">System Status: Operational • Last Saved: 10:42 AM</span>
</div>
</main>
</div>
      </div>
    </AppLayout>
  );
}
