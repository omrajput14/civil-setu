import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MockRoute() {
  const router = useRouter();
  
  return (
    <AppLayout title="COMING SOON" showBackButton={true}>
      <div className="p-margin-mobile flex flex-col items-center justify-center min-h-[60vh] text-center">
        <span className="material-symbols-outlined text-[64px] text-primary mb-4 opacity-50">construction</span>
        <h2 className="font-headline-md text-[24px] font-bold text-on-surface mb-2">Module Under Construction</h2>
        <p className="font-body-md text-[14px] text-text-muted mb-8 max-w-[280px]">
          This feature is part of the CivicSetu roadmap but is not yet available in the current prototype.
        </p>
        <button 
          onClick={() => router.back()}
          className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          Go Back
        </button>
      </div>
    </AppLayout>
  );
}
