import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="NEW APPLICATION - STEP 1" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Main Content */}
<main className="flex-grow pt-24 px-margin-mobile md:px-margin-desktop pb-24 max-w-3xl mx-auto w-full flex flex-col gap-stack-lg">
{/* Step Indicator */}
<div className="flex flex-col gap-stack-sm w-full">
<span className="font-data-sm text-data-sm text-text-muted uppercase">STEP 1 OF 3</span>
<div className="flex gap-2 w-full h-2">
<div className="flex-1 bg-primary rounded-full"></div>
<div className="flex-1 bg-border rounded-full"></div>
<div className="flex-1 bg-border rounded-full"></div>
</div>
</div>
{/* Title */}
<div>
<h2 className="font-body-md text-body-md font-semibold text-on-surface">Select certificate type</h2>
</div>
{/* List of Rows */}
<div className="flex flex-col gap-stack-sm w-full">
{/* Unselected Row: Residence */}
<button className="flex items-center justify-between w-full p-4 bg-surface border border-border rounded-DEFAULT shadow-elevation hover:bg-surface-container-low transition-colors text-left group">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface">Residence Certificate</span>
</div>
<div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center group-hover:border-primary">
</div>
</button>
{/* Selected Row: Income */}
<button className="flex items-center justify-between w-full p-4 bg-surface border-2 border-primary rounded-DEFAULT shadow-elevation text-left relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"></div>
<div className="flex flex-col gap-1 pl-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Income Certificate</span>
<span className="font-label-sm text-label-sm text-text-muted">Used for tax, scholarships, and legal verification</span>
</div>
<div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
</div>
</button>
{/* Unselected Row: Birth */}
<button className="flex items-center justify-between w-full p-4 bg-surface border border-border rounded-DEFAULT shadow-elevation hover:bg-surface-container-low transition-colors text-left group">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface">Birth Certificate</span>
</div>
<div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center group-hover:border-primary">
</div>
</button>
{/* Unselected Row: Death */}
<button className="flex items-center justify-between w-full p-4 bg-surface border border-border rounded-DEFAULT shadow-elevation hover:bg-surface-container-low transition-colors text-left group">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface">Death Certificate</span>
</div>
<div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center group-hover:border-primary">
</div>
</button>
{/* Unselected Row: Character */}
<button className="flex items-center justify-between w-full p-4 bg-surface border border-border rounded-DEFAULT shadow-elevation hover:bg-surface-container-low transition-colors text-left group">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface">Character Certificate</span>
</div>
<div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center group-hover:border-primary">
</div>
</button>
{/* Unselected Row: Caste */}
<button className="flex items-center justify-between w-full p-4 bg-surface border border-border rounded-DEFAULT shadow-elevation hover:bg-surface-container-low transition-colors text-left group">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface">Caste Certificate</span>
</div>
<div className="w-5 h-5 rounded-full border border-outline flex items-center justify-center group-hover:border-primary">
</div>
</button>
</div>
<div className="flex-grow"></div>
</main>
{/* Bottom Action Bar */}
<div className="fixed bottom-0 w-full bg-surface border-t border-border px-margin-mobile md:px-margin-desktop py-4 z-40 shadow-elevation">
<div className="max-w-3xl mx-auto w-full">
<button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 px-4 rounded-DEFAULT hover:bg-primary-container transition-colors active:scale-95 font-bold uppercase tracking-wide">
                Continue
            </button>
</div>
</div>
      </div>
    </AppLayout>
  );
}
