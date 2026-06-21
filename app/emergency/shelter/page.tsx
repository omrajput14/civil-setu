import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="EMERGENCY SHELTERS - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Emergency Status Rail - Red Mode */}
<div className="h-rail-height bg-danger text-on-error flex items-center justify-between px-margin-mobile md:px-margin-desktop font-data-sm uppercase tracking-widest border-b border-[#93000a] sticky top-0 z-[60]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px] fill">warning</span>
<span className="">CRITICAL ALERT ACTIVE</span>
</div>
<div className="flex items-center gap-4 hidden sm:flex">
<span className="">SYS: SECURE</span>
<span className="">LAT: 40.7128 N, LON: 74.0060 W</span>
<span id="live-time" className="">2026-06-21 17:34:21 UTC</span>
</div>
</div>
{/* TopAppBar */}

{/* Main Canvas */}
<main className="flex-grow pt-[calc(32px+64px)] pb-[56px] md:pb-0 flex flex-col md:flex-row">
{/* Left Sidebar - Map Area */}
<section className="w-full md:w-1/2 lg:w-3/5 h-[40vh] md:h-[calc(100vh-96px)] relative border-b md:border-b-0 md:border-r border-border bg-surface-variant">
{/* Simulated Map Container */}
<div className="absolute inset-0 w-full h-full bg-surface-variant flex items-center justify-center overflow-hidden">
{/* Using a placeholder image with data-location for map */}
<img className="w-full h-full object-cover opacity-80" data-alt="A detailed, high-contrast digital map interface showing a city grid. The map uses a minimalist, modern corporate style with a strict color palette of light grays, whites, and deep navy blues for water features. Sharp geometric lines define the streets. Bright saffron amber and danger red markers are visible, indicating critical locations. The overall mood is precise, technical, and authoritative." data-location="New York City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQHJ6Tmy8-aFeiM5T2iN-SEyO9xlFXAJvBIxzuo6AAuG_SKYPX_ZH7FfkmyHcQd6xMBZL2QD9IdHCIs5R5HeDF2-PEHmeEFzoknwYLmQrqFZ-r1kN9mVojSSyv2adMlxeRhBAfYspddT9l-uh0TYADYrwehHqOkjg80stg6DrgkggRuiZQUx_Cjz4EHtwTS5rpAGfczhep_MZr0jpnSS4WYIy8ZBFoHJLdlCq-LCfP4UEPTtDhesFEg3P7JLO7k-Y44RYvYPynvb3d" />
{/* Map Overlay UI Controls */}
<div className="absolute top-4 left-4 flex flex-col gap-2">
<button className="w-10 h-10 bg-surface border border-border text-primary flex items-center justify-center shadow-[0_1px_2px_rgba(17,24,39,0.06)] hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
<button className="w-10 h-10 bg-surface border border-border text-primary flex items-center justify-center shadow-[0_1px_2px_rgba(17,24,39,0.06)] hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">remove</span>
</button>
</div>
<div className="absolute bottom-4 right-4 bg-surface border border-border px-3 py-2 shadow-[0_1px_2px_rgba(17,24,39,0.06)] font-data-sm text-data-sm text-on-surface">
                    DATA REF: SAT-COMM-99 | OFFLINE CACHE
                </div>
{/* Simulated Pins */}
<div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-8 h-8 bg-danger border-2 border-surface flex items-center justify-center shadow-lg relative z-10 cursor-pointer animate-pulse">
<span className="material-symbols-outlined text-surface text-[18px]">medical_services</span>
</div>
<div className="mt-1 bg-surface border border-border px-2 py-1 font-data-sm text-data-sm shadow-[0_1px_2px_rgba(17,24,39,0.06)] whitespace-nowrap">
                        POINT ALPHA
                    </div>
</div>
<div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-6 h-6 bg-warning border-2 border-surface flex items-center justify-center shadow-lg relative z-10 cursor-pointer">
<span className="material-symbols-outlined text-surface text-[14px]">pets</span>
</div>
</div>
</div>
</section>
{/* Right Sidebar - Data Panel */}
<section className="w-full md:w-1/2 lg:w-2/5 bg-background flex flex-col h-auto md:h-[calc(100vh-96px)] overflow-y-auto">
{/* Filters Header */}
<div className="bg-surface border-b border-border p-margin-mobile md:p-margin-desktop sticky top-0 z-20">
<h1 className="font-headline-md text-headline-md text-primary mb-4">OFFICIAL REFUGE POINTS</h1>
{/* Filter Chips */}
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 border border-primary text-primary font-label-sm text-label-sm uppercase hover:bg-surface-container transition-colors bg-surface-container-low">
                        All Shelters
                    </button>
<button className="px-3 py-1.5 border border-border text-on-surface-variant font-label-sm text-label-sm uppercase bg-surface hover:bg-surface-container transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">medical_services</span>
                        Medical Needed
                    </button>
<button className="px-3 py-1.5 border border-border text-on-surface-variant font-label-sm text-label-sm uppercase bg-surface hover:bg-surface-container transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">pets</span>
                        Pet Friendly
                    </button>
<button className="px-3 py-1.5 border border-border text-on-surface-variant font-label-sm text-label-sm uppercase bg-surface hover:bg-surface-container transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">family_restroom</span>
                        Family Units
                    </button>
</div>
</div>
{/* List Container */}
<div className="p-margin-mobile md:p-margin-desktop flex flex-col gap-stack-lg">
{/* Primary Shelter Card */}
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex flex-col">
<div className="p-4 border-b border-border flex justify-between items-start">
<div>
<div className="font-data-sm text-data-sm text-text-muted mb-1">ID: SHLT-001</div>
<h2 className="font-headline-md text-[20px] text-primary leading-tight mb-2">Central High School Gymnasium</h2>
<div className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                1240 Main St, Downtown Dist.
                            </div>
</div>
<div className="bg-success text-surface font-data-sm text-data-sm px-2 py-1 uppercase tracking-wider">
                            OPEN
                        </div>
</div>
<div className="grid grid-cols-2 border-b border-border">
<div className="p-4 border-r border-border">
<div className="font-data-sm text-data-sm text-text-muted mb-1 uppercase">Capacity</div>
<div className="font-data-lg text-data-lg text-primary">85<span className="text-[16px] text-text-muted">/200</span></div>
</div>
<div className="p-4">
<div className="font-data-sm text-data-sm text-text-muted mb-1 uppercase">Distance</div>
<div className="font-data-lg text-data-lg text-primary">1.2<span className="text-[16px] text-text-muted">mi</span></div>
</div>
</div>
<div className="p-4 border-b border-border">
<div className="font-data-sm text-data-sm text-text-muted mb-2 uppercase">Amenities</div>
<div className="flex flex-wrap gap-2 font-label-sm text-label-sm text-on-surface">
<span className="bg-surface-container px-2 py-1 border border-border">Medical</span>
<span className="bg-surface-container px-2 py-1 border border-border">Food</span>
<span className="bg-surface-container px-2 py-1 border border-border">Power</span>
<span className="bg-surface-container px-2 py-1 border border-border">Family Units</span>
</div>
</div>
<div className="p-4 bg-background flex flex-col sm:flex-row gap-3">
<button className="flex-1 bg-primary-container text-on-primary font-label-md text-label-md uppercase py-3 px-4 flex items-center justify-center gap-2 hover:bg-primary transition-colors active:opacity-80">
<span className="material-symbols-outlined text-[18px]">directions</span>
                            GET DIRECTIONS
                        </button>
<button className="flex-1 bg-surface border border-primary text-primary font-label-md text-label-md uppercase py-3 px-4 flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors active:opacity-80">
<span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                            REPORT ARRIVAL
                        </button>
</div>
</div>
{/* Secondary Shelter Card (Warning state) */}
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] flex flex-col opacity-90">
<div className="p-4 border-b border-border flex justify-between items-start">
<div>
<div className="font-data-sm text-data-sm text-text-muted mb-1">ID: SHLT-042</div>
<h2 className="font-headline-md text-[20px] text-primary leading-tight mb-2">Westside Community Center</h2>
<div className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                890 Oak Ave, West Dist.
                            </div>
</div>
<div className="bg-warning text-on-tertiary font-data-sm text-data-sm px-2 py-1 uppercase tracking-wider">
                            AT CAPACITY
                        </div>
</div>
<div className="grid grid-cols-2 border-b border-border">
<div className="p-4 border-r border-border">
<div className="font-data-sm text-data-sm text-text-muted mb-1 uppercase">Capacity</div>
<div className="font-data-lg text-data-lg text-warning">150<span className="text-[16px] text-text-muted">/150</span></div>
</div>
<div className="p-4">
<div className="font-data-sm text-data-sm text-text-muted mb-1 uppercase">Distance</div>
<div className="font-data-lg text-data-lg text-primary">3.4<span className="text-[16px] text-text-muted">mi</span></div>
</div>
</div>
<div className="p-4 border-b border-border">
<div className="font-data-sm text-data-sm text-text-muted mb-2 uppercase">Amenities</div>
<div className="flex flex-wrap gap-2 font-label-sm text-label-sm text-on-surface">
<span className="bg-surface-container px-2 py-1 border border-border">Food</span>
<span className="bg-surface-container px-2 py-1 border border-border">Pet Friendly</span>
</div>
</div>
<div className="p-4 bg-background flex flex-col sm:flex-row gap-3">
<button className="flex-1 bg-surface border border-border text-on-surface-variant font-label-md text-label-md uppercase py-3 px-4 flex items-center justify-center gap-2 cursor-not-allowed opacity-50" disabled="">
<span className="material-symbols-outlined text-[18px]">directions</span>
                            REDIRECTING
                        </button>
</div>
</div>
</div>
</section>
</main>
{/* BottomNavBar (Mobile Only) - Suppressed per task intent (Linear/Transactional/Dead End relative to global nav) */}
{/* The user is looking at a specific emergency locator map. */}
      </div>
    </AppLayout>
  );
}
