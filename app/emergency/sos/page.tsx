import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="SOS ACTIVE" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* High-Intensity Header */}

{/* Main Content Area */}
<main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop flex flex-col md:flex-row gap-stack-lg">
{/* Left Column / Map & Core Data */}
<div className="flex-1 flex flex-col gap-stack-md">
{/* Live Map Container */}
<div className="relative w-full h-[300px] md:h-full min-h-[300px] bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] overflow-hidden">
<div className="absolute inset-0 bg-surface-variant flex items-center justify-center" data-alt="A highly detailed, technical satellite map view showing a precise urban grid. The map is overlaid with stark, geometric interface elements, including a bright red pulsing beacon at the center indicating distress. The visual style is strict modern corporate, using purely technical colors, sharp vectors, and no decorative fluff. The mood is tense, precise, and mission-critical." style={{ backgroundImage: "url('https", }}></div>
{/* Map Overlay Data */}
<div className="absolute top-stack-sm left-stack-sm bg-surface/90 border border-border px-stack-sm py-1 rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] backdrop-blur-sm">
<span className="font-data-sm text-data-sm text-danger flex items-center gap-1 font-bold">
<span className="w-2 h-2 rounded-full bg-danger animate-pulse"></span>
                        LIVE TRACKING
                    </span>
</div>
{/* Status Rail Bottom */}
<div className="absolute bottom-0 left-0 w-full h-rail-height bg-surface border-t border-border flex items-center px-stack-md justify-between">
<span className="font-data-sm text-data-sm text-text-muted uppercase">GPS PRECISION: 3M</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase">LAT: 34.0522, LNG: -118.2437</span>
</div>
</div>
</div>
{/* Right Column / Status & Actions */}
<div className="w-full md:w-[400px] flex flex-col gap-stack-md shrink-0">
{/* Responder Status Panel */}
<section className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-md">
<h2 className="font-headline-md text-headline-md text-primary mb-stack-md border-b border-border pb-stack-sm">Responder Status</h2>
<div className="flex flex-col gap-stack-sm">
<div className="flex justify-between items-center bg-surface-container-lowest border border-border p-stack-sm rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant">Signal Type</span>
<span className="font-data-md text-data-md text-primary">Satellite/Cellular Hybrid</span>
</div>
<div className="flex flex-col bg-surface-container-lowest border border-border p-stack-sm rounded gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Recipients Alerted</span>
<span className="font-data-md text-data-md text-primary">Police HQ, Local Fire, Emergency Contacts</span>
</div>
<div className="flex justify-between items-center bg-surface-container-lowest border border-border p-stack-sm rounded mt-stack-sm">
<span className="font-label-md text-label-md text-primary">Estimated Arrival (ETA)</span>
<span className="font-data-lg text-data-lg text-danger">08:22 MIN</span>
</div>
</div>
</section>
{/* Technical Logs */}
<section className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex-1 min-h-[150px] flex flex-col">
<div className="h-rail-height border-b border-border flex items-center px-stack-sm bg-surface-container-low">
<span className="font-data-sm text-data-sm text-text-muted uppercase">System Event Log</span>
</div>
<div className="p-stack-sm flex flex-col gap-1 overflow-y-auto font-data-sm text-data-sm text-on-surface-variant">
<p>[14:32:01] <span className="text-success">SOS Initiated manually.</span></p>
<p>[14:32:03] <span className="text-primary">Attempting cellular uplink... Success.</span></p>
<p>[14:32:05] <span className="text-primary">Broadcasting coordinates: 34.0522, -118.2437.</span></p>
<p>[14:32:08] <span className="text-warning">Awaiting responder confirmation...</span></p>
<p>[14:32:15] <span className="text-success">Police HQ acknowledged. Units dispatched.</span></p>
</div>
</section>
{/* Action Area */}
<div className="mt-auto pt-stack-md border-t border-border">
<p className="font-label-sm text-label-sm text-text-muted mb-stack-sm text-center">To cancel this alert, you must provide your Safe PIN.</p>
<button className="w-full bg-surface border border-border text-primary font-label-md text-label-md py-stack-md rounded flex items-center justify-center gap-2 hover:bg-surface-container-low active:bg-surface-variant transition-colors" onclick="document.getElementById('cancel-modal').classList.remove('hidden')">
<span className="material-symbols-outlined">cancel</span>
                    CANCEL SOS
                </button>
</div>
</div>
</main>
{/* Cancel Modal (Hidden by default) */}
<div className="hidden fixed inset-0 z-50 bg-inverse-surface/80 flex items-center justify-center p-margin-mobile backdrop-blur-sm" id="cancel-modal">
<div className="bg-surface w-full max-w-sm rounded border border-border shadow-lg flex flex-col">
<div className="p-stack-md border-b border-border bg-surface-container-low">
<h3 className="font-headline-md text-headline-md text-primary">Verify Safe PIN</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Enter your 4-digit PIN to deactivate distress broadcast.</p>
</div>
<div className="p-stack-md flex flex-col gap-stack-md">
<input className="w-full text-center font-data-lg text-data-lg tracking-[1em] border border-border rounded focus:border-primary focus:ring-1 focus:ring-primary h-16 bg-surface" maxlength="4" placeholder="****" type="password"/>
<div className="flex gap-stack-sm">
<button className="flex-1 border border-border text-primary font-label-md text-label-md py-stack-sm rounded hover:bg-surface-container-low" onclick="document.getElementById('cancel-modal').classList.add('hidden')">Return</button>
<button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-stack-sm rounded hover:opacity-90">Confirm</button>
</div>
</div>
</div>
</div>
      </div>
    </AppLayout>
  );
}
