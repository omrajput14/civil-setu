import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="RESOLUTION DETAIL" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Desktop Sidebar */}
<nav className="hidden md:flex flex-col h-full w-[240px] bg-primary-container text-on-primary-container py-stack-lg border-r border-border fixed left-0 top-0 z-40">
<div className="px-margin-desktop mb-8">
<h1 className="font-headline-md text-headline-md text-on-primary font-bold">Rural Connect</h1>
</div>
<div className="flex-1 space-y-2">
<a className="flex items-center space-x-3 px-margin-desktop py-3 text-on-primary-container hover:bg-surface-container-low/10 transition-colors" href="#">
<span className="material-symbols-outlined">report_problem</span>
<span className="font-label-md text-label-md">Grievance Redressal</span>
</a>
<a className="flex items-center space-x-3 px-margin-desktop py-3 text-on-primary-container hover:bg-surface-container-low/10 transition-colors" href="#">
<span className="material-symbols-outlined">assignment</span>
<span className="font-label-md text-label-md">Scheme Tracking</span>
</a>
<a className="flex items-center space-x-3 px-margin-desktop py-3 text-on-primary-container hover:bg-surface-container-low/10 transition-colors" href="#">
<span className="material-symbols-outlined">contact_phone</span>
<span className="font-label-md text-label-md">Local Directory</span>
</a>
<a className="flex items-center space-x-3 px-margin-desktop py-3 text-on-primary-container hover:bg-surface-container-low/10 transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
<div className="px-margin-desktop pt-4 border-t border-surface-container-low/20">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined">person</span>
</div>
<div>
<div className="font-label-md text-label-md text-on-primary">Ramesh Kumar</div>
<div className="font-label-sm text-label-sm">ID: 4829-1029-4821</div>
</div>
</div>
</div>
</nav>
{/* Header */}

<div className="hidden md:flex bg-surface w-full top-0 sticky z-30 shadow-[0_1px_2px_rgba(17,24,39,0.06)] h-14 items-center px-margin-desktop border-b border-border">
<button aria-label="Back" className="mr-4 text-on-surface p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 flex items-center space-x-2">
<span className="material-symbols-outlined">arrow_back</span>
<span className="font-label-md text-label-md">Back</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-on-surface ml-4 border-l border-border pl-4">Resolution Detail</h1>
</div>
{/* Status Rail */}
<div className="h-rail-height bg-surface w-full border-b border-border flex items-center px-margin-mobile md:px-margin-desktop z-20">
<div className="font-data-sm text-data-sm text-text-muted uppercase flex items-center space-x-2">
<span className="text-success font-semibold">RESOLVED</span>
<span>·</span>
<span>ID: GRV-2023-0982</span>
<span>·</span>
<span>WARD 4</span>
</div>
</div>
{/* Main Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop space-y-stack-lg max-w-4xl mx-auto w-full">
{/* Grievance Summary Card */}
<section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-md rounded">
<div className="flex justify-between items-start mb-4">
<div>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-1">Waste Collection Delay</h2>
<div className="font-data-sm text-data-sm text-text-muted uppercase space-x-2">
<span>ID: GRV-2023-0982</span>
<span>|</span>
<span>08 OCT 2023</span>
</div>
</div>
<div className="bg-success/10 text-success font-label-sm text-label-sm px-2 py-1 rounded flex items-center space-x-1">
<span className="material-symbols-outlined filled-icon" style={{ fontSize: "16px", }}>check_circle</span>
<span>RESOLVED</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Scheduled waste collection vehicle has not visited Sector 4 for the past three days. Bins are overflowing and causing a health hazard.
            </p>
</section>
{/* Resolution Section */}
<section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-md rounded">
<h3 className="font-label-md text-label-md text-text-muted uppercase mb-4 tracking-wider">Resolution Details</h3>
<div className="space-y-6">
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">Resolution Summary</h4>
<p className="font-body-md text-body-md text-on-surface-variant bg-background p-4 rounded border border-border">
                        The waste collection route for Sector 4 has been optimized. Additional collection vehicles deployed to clear the backlog. Regular schedule will resume immediately.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-background p-4 rounded border border-border">
<h4 className="font-label-md text-label-md text-text-muted mb-1">Resolved By</h4>
<div className="font-body-md text-body-md text-on-surface font-medium flex items-center space-x-2">
<span className="material-symbols-outlined text-primary-container">badge</span>
<span>Sanitation Dept. Supervisor</span>
</div>
</div>
<div className="bg-background p-4 rounded border border-border">
<h4 className="font-label-md text-label-md text-text-muted mb-1">Completion Date</h4>
<div className="font-data-md text-data-md text-on-surface font-medium flex items-center space-x-2">
<span className="material-symbols-outlined text-primary-container">event</span>
<span>12 OCT 2023</span>
</div>
</div>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-2">Evidence</h4>
<div className="w-32 h-32 rounded border border-border overflow-hidden bg-background relative cursor-pointer hover:opacity-90 transition-opacity">
<img alt="Evidence Photo" className="w-full h-full object-cover" data-alt="A clear, daytime photograph showing a clean, empty street corner in a residential area, indicating that waste bins have been emptied. The lighting is bright and even, capturing a tidy urban environment. The aesthetic is documentary and realistic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjTPbYiyWbzLQ1Gh-DWDhpCGAHlk8ssDJkHP-V1i2oiCb9W94EKA8uMIa1jAaMC3Om_JZYmkIWEoF72LGU99bki8OtvV-cWK6chddzBCYIYY9mczrJIpHP2GqRNotM_2W_eBHyV5HIzzUaAhcZ2-6fsk6KSPu6ULSyjJ015hrpdrrTUqtWw22zhd_qhnIvulPVdHuuhlgqFlomNRNQj848kwfRr8eoywRGzMY9umxX-C4sESCCGekoPUnd9Qkg05AWb0p-xZZy-V0j"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white">zoom_in</span>
</div>
</div>
</div>
</div>
</section>
{/* Rating Section */}
<section className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-md rounded flex flex-col items-center justify-center text-center">
<h3 className="font-label-md text-label-md text-on-surface mb-4">Rate this resolution</h3>
<div className="flex space-x-2 mb-2">
<button className="text-warning hover:scale-110 transition-transform"><span className="material-symbols-outlined filled-icon" style={{ fontSize: "32px", }}>star</span></button>
<button className="text-warning hover:scale-110 transition-transform"><span className="material-symbols-outlined filled-icon" style={{ fontSize: "32px", }}>star</span></button>
<button className="text-warning hover:scale-110 transition-transform"><span className="material-symbols-outlined filled-icon" style={{ fontSize: "32px", }}>star</span></button>
<button className="text-warning hover:scale-110 transition-transform"><span className="material-symbols-outlined filled-icon" style={{ fontSize: "32px", }}>star</span></button>
<button className="text-outline-variant hover:text-warning hover:scale-110 transition-all"><span className="material-symbols-outlined" style={{ fontSize: "32px", }}>star</span></button>
</div>
<p className="font-data-sm text-data-sm text-text-muted">Your feedback helps us improve services.</p>
</section>
{/* Action Buttons */}
<section className="flex flex-col md:flex-row gap-4 pt-4">
<button className="w-full md:w-auto bg-primary-container text-on-primary font-label-md text-label-md py-3 px-6 rounded hover:bg-primary-container/90 transition-colors active:scale-95 flex items-center justify-center space-x-2">
<span className="material-symbols-outlined">dashboard</span>
<span>Back to Dashboard</span>
</button>
<button className="w-full md:w-auto bg-surface text-primary-container border border-primary-container font-label-md text-label-md py-3 px-6 rounded hover:bg-surface-container-low transition-colors active:scale-95 flex items-center justify-center space-x-2">
<span className="material-symbols-outlined">chat_bubble</span>
<span>File Feedback</span>
</button>
</section>
</main>
{/* Mobile Bottom Navigation (Suppressed per "Transactional/Sub-page" rule, but user prompt explicitly requested "Persistent bottom nav", so it is included) */}
      </div>
    </AppLayout>
  );
}
