"use client";

import AppLayout from "@/components/layout/AppLayout";
import { useRouter } from "next/navigation";
import { useGrievance } from "../../GrievanceContext";

export default function Page() {
  const router = useRouter();
  const { category, setCategory } = useGrievance();

  const handleNext = () => {
    router.push("/grievances/report/step-2");
  };

  const categories = [
    { id: "water", title: "Water & Sanitation", desc: "Leaks, drainage, waste collection" },
    { id: "electricity", title: "Electricity", desc: "Street lights, power outages" },
    { id: "roads", title: "Roads & Infrastructure", desc: "Potholes, broken footpaths" },
    { id: "health", title: "Public Health", desc: "Cleanliness, vector control" },
    { id: "other", title: "Other", desc: "General issues" }
  ];

  return (
    <AppLayout title="REPORT NEW GRIEVANCE - STEP 1" showBackButton={true}>
      <div className="w-full h-full relative">
        <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-8 flex flex-col gap-stack-lg">
          <div className="w-full flex flex-col gap-stack-sm">
            <div className="flex justify-between items-center">
              <span className="font-data-sm text-data-sm text-text-muted uppercase tracking-wider">STEP 1 OF 3</span>
            </div>
            <div className="w-full flex gap-2 h-2 rounded-full overflow-hidden bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-0.5">
              <div className="h-full bg-primary flex-1 rounded-sm"></div>
              <div className="h-full bg-surface-variant flex-1 rounded-sm"></div>
              <div className="h-full bg-surface-variant flex-1 rounded-sm"></div>
            </div>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Select Category</h2>
          
          <form className="flex flex-col gap-stack-md flex-grow">
            {categories.map(cat => {
              const isSelected = category === cat.id;
              return (
                <label key={cat.id} className={`group relative flex items-start gap-4 p-4 bg-surface rounded-lg cursor-pointer shadow-[0_1px_2px_rgba(17,24,39,0.06)] overflow-hidden transition-colors ${isSelected ? 'border-2 border-primary' : 'border border-border hover:bg-surface-container-lowest'}`}>
                  {isSelected && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-warning"></div>}
                  <input 
                    className={`mt-1 shrink-0 w-5 h-5 focus:ring-primary ${isSelected ? 'text-primary border-primary' : 'text-primary border-outline'}`} 
                    name="issue_category" 
                    type="radio" 
                    value={cat.id}
                    checked={isSelected}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <div className={`flex flex-col ${isSelected ? 'pl-2' : ''}`}>
                    <span className={`font-label-md text-label-md text-on-surface ${isSelected ? 'font-semibold' : ''}`}>{cat.title}</span>
                    <span className="font-body-md text-body-md text-text-muted">{cat.desc}</span>
                  </div>
                </label>
              );
            })}
          </form>
        </main>
        
        <div className="w-full bg-surface border-t border-border p-4 mt-auto">
          <div className="w-full max-w-3xl mx-auto flex">
            <button 
              onClick={handleNext}
              className="w-full bg-primary-container text-on-primary font-label-md text-label-md font-bold py-3 px-6 rounded-DEFAULT hover:bg-primary transition-colors flex justify-center items-center gap-2 shadow-[0_1px_2px_rgba(17,24,39,0.06)]" 
              type="button"
            >
              Continue
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
