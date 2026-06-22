import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="USAGE ANALYTICS" showBackButton={true}>
      <div className="w-full">
        {/* Main Content */}
        <div className="p-margin-mobile space-y-4">
          
          {/* Page Header & Filters */}
          <div>
            <h2 className="font-headline-md text-[18px] font-bold text-on-surface tracking-tight">Usage Analytics</h2>
            <p className="font-body-md text-[13px] text-text-muted mt-1">Detailed consumption data and efficiency metrics.</p>
          </div>
          
          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-2">
            <select className="bg-surface border border-border text-on-surface font-label-md text-[13px] py-2 px-3 rounded-[6px] focus:border-primary focus:ring-0 h-[36px] flex-1 min-w-[100px]">
              <option>Electricity</option>
              <option>Water</option>
              <option>Gas</option>
            </select>
            <select className="bg-surface border border-border text-on-surface font-label-md text-[13px] py-2 px-3 rounded-[6px] focus:border-primary focus:ring-0 h-[36px] flex-1 min-w-[100px]">
              <option>Last 6 Months</option>
              <option>Year to Date</option>
              <option>Last 12 Months</option>
            </select>
            <button className="bg-primary-container text-on-primary font-label-md text-[13px] font-bold px-3 h-[36px] rounded-[6px] hover:bg-primary transition-colors flex items-center gap-1 shrink-0">
              <span className="material-symbols-outlined text-[16px]">download</span>
              Export
            </button>
          </div>

          {/* KPI Cards - 3 stacked cards */}
          <div className="grid grid-cols-3 gap-2">
            {/* KPI 1 */}
            <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-3 rounded-[6px] flex flex-col">
              <h4 className="font-label-sm text-[10px] text-text-muted uppercase tracking-wider mb-1">Avg. Monthly</h4>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-data-lg text-[22px] text-on-surface font-bold leading-none">482</span>
                <span className="font-data-sm text-[10px] text-text-muted mb-0.5">kWh</span>
              </div>
              <div className="flex items-center gap-1 text-danger">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span className="font-data-sm text-[10px]">+4.2%</span>
              </div>
            </div>
            {/* KPI 2 */}
            <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-3 rounded-[6px] flex flex-col">
              <h4 className="font-label-sm text-[10px] text-text-muted uppercase tracking-wider mb-1">YoY Change</h4>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-data-lg text-[22px] text-on-surface font-bold leading-none">-12.5</span>
                <span className="font-data-sm text-[10px] text-text-muted mb-0.5">%</span>
              </div>
              <div className="flex items-center gap-1 text-success">
                <span className="material-symbols-outlined text-[14px]">trending_down</span>
                <span className="font-data-sm text-[10px]">Reduced</span>
              </div>
            </div>
            {/* KPI 3 */}
            <div className="bg-primary border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-3 rounded-[6px] flex flex-col relative overflow-hidden">
              <h4 className="font-label-sm text-[10px] text-on-primary/80 uppercase tracking-wider mb-1 relative z-10">Score</h4>
              <div className="flex items-end gap-1 mb-1 relative z-10">
                <span className="font-data-lg text-[22px] text-on-primary font-bold leading-none">A-</span>
              </div>
              <div className="flex items-center gap-1 text-on-primary/80 relative z-10">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span className="font-data-sm text-[10px]">Top 15%</span>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] flex flex-col">
            <div className="p-3 border-b border-border flex justify-between items-center bg-surface-bright">
              <h3 className="font-label-md text-[13px] text-on-surface uppercase tracking-wider">Consumption Trend (kWh)</h3>
              <span className="font-data-sm text-[10px] text-text-muted uppercase">SYNCED 2H AGO</span>
            </div>
            <div className="p-4">
              {/* Bar Graph */}
              <div className="flex items-end justify-between gap-2 h-[120px] border-b border-border pb-2">
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-primary rounded-sm" style={{ height: "60%" }}></div>
                  <span className="font-data-sm text-[10px] text-text-muted">JAN</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-primary rounded-sm" style={{ height: "45%" }}></div>
                  <span className="font-data-sm text-[10px] text-text-muted">FEB</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-primary rounded-sm" style={{ height: "75%" }}></div>
                  <span className="font-data-sm text-[10px] text-text-muted">MAR</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-primary rounded-sm" style={{ height: "85%" }}></div>
                  <span className="font-data-sm text-[10px] text-text-muted">APR</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-primary rounded-sm" style={{ height: "50%" }}></div>
                  <span className="font-data-sm text-[10px] text-text-muted">MAY</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-primary rounded-sm" style={{ height: "65%" }}></div>
                  <span className="font-data-sm text-[10px] text-text-muted">JUN</span>
                </div>
              </div>
            </div>
            <div className="h-rail-height bg-surface border-t border-border flex items-center px-3">
              <span className="font-data-sm text-[10px] text-text-muted uppercase flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Projected usage for current month is 12% below average.
              </span>
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px]">
            <div className="p-3 border-b border-border bg-surface-bright">
              <h3 className="font-label-md text-[13px] text-on-surface uppercase tracking-wider">Device Breakdown Estimate</h3>
            </div>
            <div className="divide-y divide-border">
              {/* Device Row 1 */}
              <div className="p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-surface-container flex items-center justify-center border border-border rounded-[4px] shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-primary">ac_unit</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label-md text-[13px] text-on-surface">HVAC Systems</p>
                  <p className="font-data-sm text-data-sm text-text-muted">Primary Load</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-data-md text-data-md text-on-surface font-bold">45%</p>
                  <p className="font-data-sm text-data-sm text-text-muted">~216 kWh</p>
                </div>
              </div>
              {/* Device Row 2 */}
              <div className="p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-surface-container flex items-center justify-center border border-border rounded-[4px] shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-primary">water_heater</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label-md text-[13px] text-on-surface">Water Heating</p>
                  <p className="font-data-sm text-data-sm text-text-muted">Secondary Load</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-data-md text-data-md text-on-surface font-bold">25%</p>
                  <p className="font-data-sm text-data-sm text-text-muted">~120 kWh</p>
                </div>
              </div>
              {/* Device Row 3 */}
              <div className="p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-surface-container flex items-center justify-center border border-border rounded-[4px] shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-primary">kitchen</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label-md text-[13px] text-on-surface">Appliances</p>
                  <p className="font-data-sm text-data-sm text-text-muted">Base Load</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-data-md text-data-md text-on-surface font-bold">20%</p>
                  <p className="font-data-sm text-data-sm text-text-muted">~96 kWh</p>
                </div>
              </div>
              {/* Device Row 4 */}
              <div className="p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-surface-container flex items-center justify-center border border-border rounded-[4px] shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-primary">lightbulb</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label-md text-[13px] text-on-surface">Lighting &amp; Misc</p>
                  <p className="font-data-sm text-data-sm text-text-muted">Variable Load</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-data-md text-data-md text-on-surface font-bold">10%</p>
                  <p className="font-data-sm text-data-sm text-text-muted">~48 kWh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Peak Usage Hours */}
          <div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] rounded-[6px] flex flex-col">
            <div className="p-3 border-b border-border bg-surface-bright flex justify-between items-center gap-2">
              <h3 className="font-label-md text-[13px] text-on-surface uppercase tracking-wider">Peak Usage</h3>
              <span className="font-data-sm text-[10px] text-warning bg-warning/10 px-2 py-1 rounded-[4px] border border-warning/20 whitespace-nowrap">4PM - 8PM</span>
            </div>
            <div className="p-3 grid grid-cols-4 gap-2">
              <div className="bg-surface border border-border p-2 flex flex-col items-center justify-center rounded-[4px]">
                <span className="font-data-sm text-[10px] text-text-muted">00:00</span>
                <div className="w-full h-2 bg-success/20 mt-1.5 rounded-sm"></div>
              </div>
              <div className="bg-surface border border-border p-2 flex flex-col items-center justify-center rounded-[4px]">
                <span className="font-data-sm text-[10px] text-text-muted">06:00</span>
                <div className="w-full h-2 bg-warning/50 mt-1.5 rounded-sm"></div>
              </div>
              <div className="bg-surface border border-border p-2 flex flex-col items-center justify-center rounded-[4px]">
                <span className="font-data-sm text-[10px] text-text-muted">12:00</span>
                <div className="w-full h-2 bg-warning/40 mt-1.5 rounded-sm"></div>
              </div>
              <div className="bg-surface border border-border p-2 flex flex-col items-center justify-center rounded-[4px]">
                <span className="font-data-sm text-[10px] text-text-muted">16:00</span>
                <div className="w-full h-2 bg-danger mt-1.5 rounded-sm"></div>
              </div>
              <div className="bg-surface border border-border p-2 flex flex-col items-center justify-center rounded-[4px]">
                <span className="font-data-sm text-[10px] text-text-muted">18:00</span>
                <div className="w-full h-2 bg-danger mt-1.5 rounded-sm"></div>
              </div>
              <div className="bg-surface border border-border p-2 flex flex-col items-center justify-center rounded-[4px]">
                <span className="font-data-sm text-[10px] text-text-muted">20:00</span>
                <div className="w-full h-2 bg-danger/80 mt-1.5 rounded-sm"></div>
              </div>
              <div className="bg-surface border border-border p-2 flex flex-col items-center justify-center rounded-[4px]">
                <span className="font-data-sm text-[10px] text-text-muted">22:00</span>
                <div className="w-full h-2 bg-success/40 mt-1.5 rounded-sm"></div>
              </div>
              <div className="bg-surface border border-border p-2 flex flex-col items-center justify-center rounded-[4px]">
                <span className="font-data-sm text-[10px] text-text-muted">23:59</span>
                <div className="w-full h-2 bg-success/20 mt-1.5 rounded-sm"></div>
              </div>
            </div>
            <div className="p-3 bg-background border-t border-border">
              <p className="font-body-md text-[12px] text-text-muted leading-relaxed">
                Shifting heavy appliance usage to off-peak hours (10PM - 6AM) could reduce your bill by an estimated <strong>₹1,200/month</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
