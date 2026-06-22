"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/components/ui/ToastProvider";

export default function Page() {
  const { showToast } = useToast();
  const [sosActive, setSosActive] = useState(false);
  const [markedSafe, setMarkedSafe] = useState(false);

  const triggerSOS = () => {
    setSosActive(true);
    showToast("SOS Alert Broadcasted! Help is on the way.", "error");
  };

  const markSafe = () => {
    setMarkedSafe(true);
    showToast("You have been marked safe. Rescue teams notified.", "success");
  };

  const dispatchAction = (action: string) => {
    showToast(`Dispatching ${action} unit to your location.`, "info");
  };

  return (
    <AppLayout title="EMERGENCY DASHBOARD" showBackButton={true}>
      <div className="w-full">
        <div className="p-margin-mobile space-y-4">
          
          {/* Top Status Rail */}
          <div className="h-rail-height bg-surface border border-border flex items-center px-4 justify-between shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px]">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${sosActive ? 'bg-danger animate-pulse' : 'bg-warning animate-pulse'}`}></div>
              <span className="font-data-sm text-[11px] text-text-muted uppercase tracking-wider">
                System Alert Level: {sosActive ? 'CRITICAL' : 'ELEVATED'}
              </span>
            </div>
            <span className="font-data-sm text-[11px] text-text-muted uppercase tracking-wider">Sync: Live</span>
          </div>

          <div className="flex flex-col gap-4">
            {/* SOS Trigger Module */}
            <section className="flex flex-col gap-3">
              <div className={`bg-surface border ${sosActive ? 'border-danger' : 'border-border'} p-6 shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] flex flex-col items-center justify-center min-h-[260px] relative overflow-hidden transition-colors`}>
                <div className={`absolute inset-0 ${sosActive ? 'bg-danger/10' : 'bg-danger/5'} pattern-diagonal-lines pattern-danger pattern-bg-transparent pattern-size-4 pattern-opacity-20 z-0`}></div>
                <h2 className="font-headline-md text-[18px] text-danger mb-6 z-10 text-center font-bold">
                  {sosActive ? 'SOS BROADCASTING' : 'EMERGENCY TRIGGER'}
                </h2>
                
                <button 
                  onClick={triggerSOS}
                  className={`relative w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg transition-colors duration-200 z-10 cursor-pointer active:scale-95 group ${sosActive ? 'bg-error text-white animate-pulse' : 'bg-danger text-on-error hover:bg-error hold-btn sos-pulse'}`}
                >
                  <span className="material-symbols-outlined text-[36px] mb-1">sos</span>
                  <span className="font-label-md text-[13px] uppercase tracking-widest font-bold">
                    {sosActive ? 'ACTIVE' : 'Hold 3s'}
                  </span>
                </button>
                
                <p className="font-data-md text-[12px] text-text-muted text-center mt-6 z-10 max-w-[280px]">
                  {sosActive ? 'Emergency teams have received your coordinates.' : 'Hold to broadcast coordinates to all emergency units.'}
                </p>
              </div>

              {/* Quick Actions Grid */}
              <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] overflow-hidden">
                <div className="border-b border-border p-3 bg-surface-bright">
                  <h3 className="font-label-md text-[13px] uppercase text-text-muted">Quick Actions</h3>
                </div>
                <div className="grid grid-cols-2 gap-[1px] bg-border">
                  <button onClick={() => dispatchAction("Medical")} className="bg-surface p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-danger text-[24px]">local_hospital</span>
                    <span className="font-label-sm text-[12px] text-center">Medical</span>
                  </button>
                  <button onClick={() => dispatchAction("Power Maintenance")} className="bg-surface p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-warning text-[24px]">electric_bolt</span>
                    <span className="font-label-sm text-[12px] text-center">Power Outage</span>
                  </button>
                  <button onClick={() => dispatchAction("Blood Bank")} className="bg-surface p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-primary text-[24px]">water_drop</span>
                    <span className="font-label-sm text-[12px] text-center">Blood Need</span>
                  </button>
                  <button onClick={() => dispatchAction("Fire/Rescue")} className="bg-surface p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-secondary text-[24px]">fire_truck</span>
                    <span className="font-label-sm text-[12px] text-center">Fire / Rescue</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Active Alerts Feed */}
            <section className="flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <h2 className="font-headline-md text-[16px] font-bold text-on-surface uppercase">ACTIVE ALERTS</h2>
                <span className="font-data-md text-[11px] text-text-muted">Loc: Ward 7 & Surroundings</span>
              </div>

              {/* High Priority Alert Card */}
              <div className="bg-surface border border-danger shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] flex flex-col overflow-hidden">
                <div className="bg-danger p-3 flex justify-between items-center text-on-error">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">flood</span>
                    <span className="font-label-md text-[12px] uppercase tracking-wider font-bold">CRITICAL ALERT</span>
                  </div>
                  <span className="font-data-sm text-[10px] uppercase">Update: 2m ago</span>
                </div>
                
                <div className="p-4 flex flex-col gap-4">
                  <div>
                    <h3 className="font-headline-lg text-[18px] font-bold text-on-surface mb-2 leading-tight">Flash Flood Warning</h3>
                    <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">Severe water logging reported in low-lying areas of Ward 7. Immediate evacuation recommended for sectors A and B. Emergency shelters are open.</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button onClick={() => showToast("Loading evacuation route...", "info")} className="bg-danger text-on-error px-3 py-2 font-label-md text-[13px] font-bold rounded-[6px] hover:bg-error transition-colors flex-1 shadow-[0_1px_2px_rgba(17,24,39,0.06)]">View Route</button>
                    <button 
                      onClick={markSafe}
                      disabled={markedSafe}
                      className={`${markedSafe ? 'bg-success/10 text-success border-success' : 'bg-surface text-danger border-danger hover:bg-danger/10'} px-3 py-2 font-label-md text-[13px] font-bold border rounded-[6px] transition-colors flex-1 flex items-center justify-center gap-1`}
                    >
                      {markedSafe && <span className="material-symbols-outlined text-[16px]">check</span>}
                      {markedSafe ? 'Marked Safe' : 'Mark Safe'}
                    </button>
                  </div>

                  {/* Map Visual Placeholder */}
                  <div className="w-full h-32 bg-surface-container border border-border rounded-[4px] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                      <span className="material-symbols-outlined text-danger text-[32px]">location_on</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-surface/90 border-t border-border p-1.5">
                      <span className="font-data-sm text-[10px] text-text-muted">Map Data © CivicSetu GIS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Alert Card */}
              <div className="bg-surface border border-warning shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] flex flex-col overflow-hidden">
                <div className="bg-warning/20 border-b border-warning p-3 flex justify-between items-center text-on-surface">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-warning text-[18px]">power_off</span>
                    <span className="font-label-md text-[12px] uppercase tracking-wider text-warning font-bold">HIGH PRIORITY</span>
                  </div>
                  <span className="font-data-sm text-[10px] text-text-muted uppercase">Update: 15m ago</span>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div>
                    <h4 className="font-label-md text-[14px] text-on-surface mb-1 font-bold">Grid Failure - Sector C</h4>
                    <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">Restoration ETA: 4 Hours. Utility crews dispatched.</p>
                  </div>
                  <button onClick={() => showToast("Navigating to alert details...", "info")} className="bg-surface text-on-surface w-full py-2 font-label-md text-[13px] font-bold border border-border rounded-[6px] hover:bg-surface-container-low transition-colors">Details</button>

                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
