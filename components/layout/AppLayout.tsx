import TopAppBar from "./TopAppBar";
import BottomNavBar from "./BottomNavBar";

export default function AppLayout({
  children,
  title = "Rural Connect",
  showBackButton = false,
  showBottomNav = true,
  statusRail,
}: {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  showBottomNav?: boolean;
  statusRail?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full relative bg-background">
      <TopAppBar title={title} showBackButton={showBackButton} />
      {statusRail && (
        <div className="h-rail-height bg-surface border-b border-border flex items-center px-margin-mobile shadow-[0_1px_2px_rgba(17,24,39,0.06)] shrink-0 z-20 overflow-x-auto whitespace-nowrap">
          {statusRail}
        </div>
      )}
      <main className={`flex-1 overflow-y-auto bg-background ${showBottomNav ? 'pb-20' : ''}`}>
        {children}
      </main>
      {showBottomNav && <BottomNavBar />}
    </div>
  );
}
