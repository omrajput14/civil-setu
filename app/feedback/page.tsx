import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="PROJECT FEEDBACK - ROAD RESURFACING" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Main Content Canvas */}
<main className="pt-[80px] pb-[80px] md:pb-[32px] px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto space-y-stack-lg">
{/* Header & Breadcrumbs (Transactional, so no side nav) */}
<div>
<div className="flex items-center gap-2 text-text-muted font-label-sm text-label-sm mb-2">
<span className="hover:text-primary cursor-pointer">Works</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span>Feedback Submission</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary">Road Resurfacing - Main St</h1>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Left Column: Project Metadata & Progress */}
<div className="md:col-span-4 space-y-gutter">
{/* Progress Card */}
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-md flex flex-col">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide mb-4">Project Status</span>
<div className="flex items-end justify-between mb-2">
<span className="font-data-lg text-data-lg text-primary">65%</span>
<span className="font-data-md text-data-md text-text-muted mb-1">Complete</span>
</div>
<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full" style={{ width: "65%", }}></div>
</div>
<div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
<span className="font-label-sm text-label-sm text-text-muted">Target Completion</span>
<span className="font-data-sm text-data-sm">2023-11-15</span>
</div>
</div>
{/* Metadata Card */}
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-md">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide mb-4 block">Officer in Charge</span>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center text-primary font-label-md text-label-md">
                            JD
                        </div>
<div>
<div className="font-label-md text-label-md">Jane Doe</div>
<div className="font-data-sm text-data-sm text-text-muted">ID: #ENG-9942</div>
</div>
</div>
<div className="space-y-2 border-t border-border pt-4">
<div className="flex justify-between">
<span className="font-label-sm text-label-sm text-text-muted">Contractor</span>
<span className="font-data-sm text-data-sm">Apex Infrastructure</span>
</div>
<div className="flex justify-between">
<span className="font-label-sm text-label-sm text-text-muted">Budget Allocation</span>
<span className="font-data-sm text-data-sm">$1.2M</span>
</div>
</div>
</div>
{/* Technical Specs Rail */}
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
<div className="h-rail-height bg-surface border-b border-border flex items-center px-4">
<span className="font-data-sm text-data-sm text-text-muted uppercase">Technical Specs</span>
</div>
<div className="p-4 space-y-3">
<div>
<span className="font-label-sm text-label-sm text-text-muted block">Material</span>
<span className="font-data-md text-data-md">Asphalt Concrete Type B</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-text-muted block">Length</span>
<span className="font-data-md text-data-md">2.4 km</span>
</div>
</div>
</div>
</div>
{/* Right Column: Feedback Form */}
<div className="md:col-span-8">
<form className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex flex-col h-full">
<div className="p-stack-lg flex-grow space-y-8">
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-1">Quality Assessment</h2>
<p className="font-body-md text-body-md text-text-muted mb-4">Select the option that best describes the observed work quality.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="flex items-center p-4 border border-border rounded cursor-pointer hover:bg-surface-container-lowest focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
<input className="w-4 h-4 text-primary bg-surface border-border focus:ring-primary" name="quality" type="radio" defaultValue="excellent"/>
<span className="ml-3 font-label-md text-label-md">Excellent</span>
</label>
<label className="flex items-center p-4 border border-border rounded cursor-pointer hover:bg-surface-container-lowest focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
<input className="w-4 h-4 text-primary bg-surface border-border focus:ring-primary" name="quality" type="radio" defaultValue="good"/>
<span className="ml-3 font-label-md text-label-md">Good</span>
</label>
<label className="flex items-center p-4 border border-border rounded cursor-pointer hover:bg-surface-container-lowest focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
<input className="w-4 h-4 text-primary bg-surface border-border focus:ring-primary" name="quality" type="radio" defaultValue="fair"/>
<span className="ml-3 font-label-md text-label-md">Fair</span>
</label>
<label className="flex items-center p-4 border border-border rounded cursor-pointer hover:bg-surface-container-lowest focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
<input className="w-4 h-4 text-primary bg-surface border-border focus:ring-primary" name="quality" type="radio" defaultValue="poor"/>
<span className="ml-3 font-label-md text-label-md">Poor</span>
</label>
</div>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-1">Safety Observations</h2>
<p className="font-body-md text-body-md text-text-muted mb-4">Detail any safety concerns or protocol violations observed on site.</p>
<textarea className="w-full bg-surface border border-border rounded p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary resize-y" placeholder="Describe observations here..." rows="4"></textarea>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-1">Photo Evidence</h2>
<p className="font-body-md text-body-md text-text-muted mb-4">Upload high-resolution images supporting your assessment.</p>
<div className="border-2 border-dashed border-border rounded p-8 flex flex-col items-center justify-center text-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer">
<span className="material-symbols-outlined text-4xl text-text-muted mb-2">upload_file</span>
<span className="font-label-md text-label-md text-primary block mb-1">Click to upload or drag and drop</span>
<span className="font-label-sm text-label-sm text-text-muted">JPG, PNG up to 10MB</span>
</div>
</div>
</div>
<div className="p-stack-md bg-surface-container-lowest border-t border-border flex justify-end">
<button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded hover:bg-primary-container transition-colors shadow-sm" type="button">
                            Submit Feedback
                        </button>
</div>
</form>
</div>
</div>
</main>
{/* BottomNavBar (Hidden on desktop, visible on mobile) */}
      </div>
    </AppLayout>
  );
}
