import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - MANAGE DOCUMENTS" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Main Canvas */}
<main className="flex-grow flex flex-col items-center py-margin-desktop px-margin-mobile md:px-margin-desktop w-full max-w-4xl mx-auto space-y-stack-lg">
{/* Linked Identities Section */}
<section className="w-full bg-surface border border-border rounded-DEFAULT shadow-sm overflow-hidden">
<div className="p-4 border-b border-border bg-surface-container-lowest flex justify-between items-center">
<h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Linked Identities</h2>
<span className="font-data-sm text-data-sm text-text-muted">2 VERIFIED</span>
</div>
<div className="p-stack-md space-y-stack-md">
{/* Aadhaar Card */}
<div className="flex items-center justify-between p-4 border border-border rounded-DEFAULT hover:border-primary-container transition-colors">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container shrink-0">
<span className="material-symbols-outlined">badge</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-body-md text-body-md font-medium text-on-surface">Aadhaar Card</h3>
<span className="px-2 py-0.5 rounded-full bg-success/10 text-success font-data-sm text-data-sm flex items-center gap-1 border border-success/20">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Verified
                                </span>
</div>
<p className="font-data-md text-data-md text-text-muted tracking-wider">XXXX XXXX 4921</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-2">
<button className="px-4 py-2 border border-border rounded-DEFAULT font-label-sm text-label-sm text-primary-container hover:bg-surface-container-low transition-colors">View</button>
<button className="px-4 py-2 bg-primary-container text-on-primary rounded-DEFAULT font-label-sm text-label-sm hover:bg-primary transition-colors">Update</button>
</div>
</div>
{/* Voter ID Card */}
<div className="flex items-center justify-between p-4 border border-border rounded-DEFAULT hover:border-primary-container transition-colors">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container shrink-0">
<span className="material-symbols-outlined">how_to_vote</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-body-md text-body-md font-medium text-on-surface">Voter ID (EPIC)</h3>
<span className="px-2 py-0.5 rounded-full bg-success/10 text-success font-data-sm text-data-sm flex items-center gap-1 border border-success/20">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Verified
                                </span>
</div>
<p className="font-data-md text-data-md text-text-muted tracking-wider">ABC*******89</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-2">
<button className="px-4 py-2 border border-border rounded-DEFAULT font-label-sm text-label-sm text-primary-container hover:bg-surface-container-low transition-colors">View</button>
<button className="px-4 py-2 bg-primary-container text-on-primary rounded-DEFAULT font-label-sm text-label-sm hover:bg-primary transition-colors">Update</button>
</div>
</div>
</div>
</section>
{/* Document Vault Section */}
<section className="w-full bg-surface border border-border rounded-DEFAULT shadow-sm overflow-hidden">
<div className="p-4 border-b border-border bg-surface-container-lowest flex justify-between items-center">
<h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Document Vault</h2>
<span className="font-data-sm text-data-sm text-text-muted">2 UPLOADED</span>
</div>
<div className="divide-y divide-border">
{/* Birth Certificate */}
<div className="p-4 flex items-center justify-between hover:bg-surface-bright transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">description</span>
<div>
<p className="font-body-md text-body-md text-on-surface">Birth Certificate</p>
<p className="font-data-sm text-data-sm text-text-muted">UPLOADED: 2024-01-15 • PDF • 1.2 MB</p>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 text-primary-container hover:bg-surface-container-low rounded-DEFAULT transition-colors" title="Replace">
<span className="material-symbols-outlined">find_replace</span>
</button>
<button className="p-2 text-danger hover:bg-error-container rounded-DEFAULT transition-colors" title="Remove">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
{/* Income Certificate */}
<div className="p-4 flex items-center justify-between hover:bg-surface-bright transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">description</span>
<div>
<p className="font-body-md text-body-md text-on-surface">Income Certificate</p>
<p className="font-data-sm text-data-sm text-text-muted">UPLOADED: 2023-11-02 • JPG • 850 KB</p>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 text-primary-container hover:bg-surface-container-low rounded-DEFAULT transition-colors" title="Replace">
<span className="material-symbols-outlined">find_replace</span>
</button>
<button className="p-2 text-danger hover:bg-error-container rounded-DEFAULT transition-colors" title="Remove">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
</div>
{/* Add New Document */}
<div className="p-stack-md bg-surface-container-lowest border-t border-border">
<button className="w-full border-2 border-dashed border-outline hover:border-primary-container hover:bg-surface-container-low rounded-lg p-6 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary-container flex items-center justify-center text-outline group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined">upload_file</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary-container">Upload New Document</span>
<span className="font-data-sm text-data-sm text-text-muted">Support PDF, JPG up to 5MB</span>
</button>
</div>
</section>
</main>
      </div>
    </AppLayout>
  );
}
