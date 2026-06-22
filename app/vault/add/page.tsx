"use client";

import AppLayout from "@/components/layout/AppLayout";
import { useToast } from "@/components/ui/ToastProvider";
import { useRouter } from "next/navigation";

export default function VaultAddPage() {
  const { showToast } = useToast();
  const router = useRouter();

  const handleSimulateAdd = () => {
    showToast("Document upload simulated successfully.", "success");
    router.back();
  };

  return (
    <AppLayout title="ADD DOCUMENT" showBackButton={true}>
      <div className="p-margin-mobile flex flex-col gap-6">
        <div className="bg-surface border border-border p-6 rounded-xl shadow-sm text-center">
          <span className="material-symbols-outlined text-[48px] text-primary mb-4">upload_file</span>
          <h2 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">Upload New Document</h2>
          <p className="font-body-md text-[14px] text-text-muted mb-6 max-w-[280px] mx-auto">
            This is a mock page. In a real application, you would be able to upload a document or link it via Digilocker.
          </p>
          <button 
            onClick={handleSimulateAdd}
            className="w-full bg-primary text-on-primary font-label-lg font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Simulate Document Add
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
