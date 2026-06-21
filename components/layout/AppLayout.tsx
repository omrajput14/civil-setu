import TopAppBar from "./TopAppBar";
import SidebarDrawer from "./SidebarDrawer";
import BottomNavBar from "./BottomNavBar";

export default function AppLayout({
  children,
  title = "Rural Connect",
  showBackButton = false,
  statusRail,
}: {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  statusRail?: React.ReactNode;
}) {
  return (
    <>
      <SidebarDrawer />
      <div className="flex-1 flex flex-col h-full relative overflow-hidden w-full">
        <TopAppBar title={title} showBackButton={showBackButton} />
        {statusRail && (
          <div className="h-rail-height bg-surface border-b border-border flex items-center px-margin-mobile md:px-margin-desktop shadow-[0_1px_2px_rgba(17,24,39,0.06)] shrink-0 z-20 overflow-x-auto whitespace-nowrap">
            {statusRail}
          </div>
        )}
        <main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop pb-24 md:pb-margin-desktop bg-background">
          {children}
        </main>
      </div>
      <BottomNavBar />
    </>
  );
}
