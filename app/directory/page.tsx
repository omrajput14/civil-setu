import AppLayout from "@/components/layout/AppLayout";

export default function DirectoryPage() {
  return (
    <AppLayout title="LOCAL DIRECTORY" showBackButton={true}>
      <div className="max-w-7xl mx-auto flex flex-col gap-stack-lg pt-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-stack-sm">Local Directory</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Find important contacts, local businesses, and community services.</p>
        </div>
        
        <div className="bg-surface border border-border elevation-card p-6 flex flex-col items-center justify-center min-h-[300px] text-center">
          <span className="material-symbols-outlined text-4xl text-text-muted mb-4">construction</span>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Page Under Construction</h3>
          <p className="font-body-md text-body-md text-text-muted max-w-md">
            This module is currently being implemented. Check back soon for the full Local Directory experience.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
