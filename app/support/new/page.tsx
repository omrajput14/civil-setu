import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="RAISE NEW TICKET" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Main Content */}
<main className="flex-grow flex justify-center items-start pt-[80px] pb-rail-height px-margin-mobile md:px-margin-desktop">
<div className="w-full max-w-2xl bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex flex-col p-6 md:p-8 rounded-none">
<form className="flex flex-col gap-stack-lg w-full">
{/* Category */}
<div className="flex flex-col gap-stack-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="category">Issue Category</label>
<div className="relative">
<select className="w-full h-12 bg-surface border border-border rounded-none px-4 appearance-none focus:outline-none focus:border-primary focus:border-2 font-body-md text-body-md text-on-surface cursor-pointer" id="category">
<option disabled="" selected="" value="">Select category</option>
<option value="network">Network Connectivity</option>
<option value="hardware">Hardware Failure</option>
<option value="software">Software Bug</option>
<option value="access">Access Control</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-muted">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
{/* Service ID */}
<div className="flex flex-col gap-stack-sm">
<label className="font-label-md text-label-md text-on-surface flex justify-between" htmlFor="service-id">
                        Service ID 
                        <span className="font-data-sm text-data-sm text-text-muted uppercase">Optional</span>
</label>
<input className="w-full h-12 bg-surface border border-border rounded-none px-4 focus:outline-none focus:border-primary focus:border-2 font-data-md text-data-md text-on-surface uppercase placeholder:text-text-muted placeholder:normal-case placeholder:font-body-md" id="service-id" placeholder="e.g., SRV-10294" type="text"/>
</div>
{/* Describe Issue */}
<div className="flex flex-col gap-stack-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="description">Describe your Issue</label>
<textarea className="w-full bg-surface border border-border rounded-none p-4 focus:outline-none focus:border-primary focus:border-2 font-body-md text-body-md text-on-surface resize-y placeholder:text-text-muted" id="description" placeholder="Provide a detailed description of the problem..." rows="5"></textarea>
</div>
{/* Upload Attachment */}
<div className="flex flex-col gap-stack-sm">
<label className="font-label-md text-label-md text-on-surface">Upload Attachment</label>
<div className="w-full h-32 border border-dashed border-border flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors text-3xl">upload_file</span>
<span className="font-body-md text-body-md text-text-muted group-hover:text-primary transition-colors">Click to upload or drag files here</span>
<input className="hidden" id="file-upload" type="file"/>
</div>
</div>
{/* Action */}
<div className="pt-stack-md flex justify-end">
<button className="bg-primary-container text-on-primary rounded-none h-12 px-6 font-label-md text-label-md uppercase tracking-wider hover:bg-primary transition-colors active:opacity-80 flex items-center justify-center" type="submit">
                        Submit Support Request
                    </button>
</div>
</form>
</div>
</main>
{/* Technical Metadata Rail */}
<footer className="sticky bottom-0 w-full h-rail-height bg-surface border-t border-border z-50 flex items-center px-margin-mobile md:px-margin-desktop justify-between shadow-[0_-1px_2px_rgba(17,24,39,0.06)]">
<div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide w-full">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px] text-text-muted">memory</span>
<span className="font-data-sm text-data-sm uppercase text-text-muted">DEVICE ID: CS-9928</span>
</div>
<div className="w-px h-4 bg-border hidden sm:block"></div>
<div className="flex items-center gap-2 hidden sm:flex">
<span className="material-symbols-outlined text-[14px] text-text-muted">terminal</span>
<span className="font-data-sm text-data-sm uppercase text-text-muted">OS VERSION: 2.4.1-STABLE</span>
</div>
<div className="w-px h-4 bg-border hidden md:block"></div>
<div className="flex items-center gap-2 ml-auto">
<span className="material-symbols-outlined text-[14px] text-warning">priority_high</span>
<span className="font-data-sm text-data-sm uppercase text-text-muted">TICKET PRIORITY: AUTOMATIC</span>
</div>
</div>
</footer>
      </div>
    </AppLayout>
  );
}
