"use client";

import AppLayout from "@/components/layout/AppLayout";
import { useRouter } from "next/navigation";
import { useGrievance } from "../../GrievanceContext";

export default function Page() {
  const router = useRouter();
  const { landmark, setLandmark } = useGrievance();

  const handleNext = () => {
    router.push("/grievances/report/step-3");
  };

  return (
    <AppLayout title="REPORT ISSUE - STEP 2" showBackButton={true}>
      <div className="w-full h-full relative">
        <div className="h-rail-height bg-surface border-b border-border flex items-center px-margin-mobile gap-4 shrink-0 z-10 relative">
          <div className="font-data-sm text-data-sm text-text-muted uppercase tracking-widest w-24 shrink-0">STEP 2 OF 3</div>
          <div aria-valuemax={3} aria-valuemin={1} aria-valuenow={2} className="flex-1 flex gap-1 h-1.5" role="progressbar">
            <div className="flex-1 bg-primary rounded-full"></div>
            <div className="flex-1 bg-primary rounded-full"></div>
            <div className="flex-1 bg-surface-variant rounded-full"></div>
          </div>
        </div>
        
        <main className="flex-1 overflow-y-auto px-margin-mobile py-stack-lg flex flex-col gap-stack-lg pb-32">
          <section className="bg-surface border border-border rounded-sys p-4 flex flex-col gap-3 shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
            <div className="flex flex-col gap-1">
              <h2 className="font-label-md text-label-md text-primary">Capture/Upload Photo</h2>
              <p className="font-body-md text-[14px] leading-[20px] text-text-muted">Evidence required for verification</p>
            </div>
            <button className="w-full border-2 border-dashed border-outline-variant hover:border-primary rounded-sys bg-surface-bright h-36 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all group focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" type="button">
              <div className="w-12 h-12 bg-surface-container-low group-hover:bg-primary-container/10 rounded-full flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-2xl">add_a_photo</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">Tap to select or capture</span>
            </button>
          </section>
          
          <section className="bg-surface border border-border rounded-sys p-4 flex flex-col gap-stack-md shadow-[0_1px_2px_rgba(17,24,39,0.06)]">
            <h2 className="font-label-md text-label-md text-primary">Identify Location</h2>
            <div className="relative w-full h-48 border border-border rounded-sys overflow-hidden bg-surface-variant isolate">
              <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=28.6139,77.2090&zoom=15&size=600x300&maptype=roadmap&style=feature:all|element:geometry.fill|color:0xf4f4f4&style=feature:water|element:geometry|color:0xc8d7d4&style=feature:landscape.man_made|element:geometry.fill|color:0xe9e5dc')" }}></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="relative -top-3">
                  <span className="material-symbols-outlined text-danger text-4xl drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-black/20 blur-[2px] rounded-[100%]"></div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 flex flex-col gap-1 z-10">
                <div className="w-8 h-8 bg-surface border border-border rounded-sys shadow-sm flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </div>
                <div className="w-8 h-8 bg-surface border border-border rounded-sys shadow-sm flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-bright border border-border rounded-sys p-3 flex items-start gap-3">
              <span className="material-symbols-outlined text-outline-variant mt-0.5">my_location</span>
              <div className="flex flex-col gap-1">
                <span className="font-data-sm text-data-sm text-text-muted uppercase">Current Location Auto-detected</span>
                <span className="font-data-md text-data-md text-primary tracking-tight">GPS: 28.6139° N, 77.2090° E</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 pt-2">
              <label className="font-label-sm text-label-sm text-on-surface" htmlFor="landmark">Landmark/Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">signpost</span>
                <input 
                  className="w-full bg-surface border border-border rounded-sys pl-10 pr-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-shadow" 
                  id="landmark" 
                  placeholder="e.g. Near Ward 4 Primary School" 
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />
              </div>
            </div>
          </section>
        </main>
        
        <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-border p-margin-mobile shadow-[0_-1px_2px_rgba(17,24,39,0.06)] z-40">
          <button 
            onClick={handleNext}
            className="w-full bg-primary text-on-primary font-label-md text-label-md py-3.5 rounded-sys hover:bg-on-primary-fixed transition-colors active:scale-[0.98] shadow-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
            type="button"
          >
            <span>Continue</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
