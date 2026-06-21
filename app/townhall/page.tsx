import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="TOWN HALL MEETINGS | CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Main Content Canvas */}
<main className="pt-[96px] md:pt-[128px] px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
<div className="mb-stack-lg">
<h1 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">Upcoming Town Hall Meetings</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Participate in civic discussions. Review agendas, RSVP for upcoming sessions, and submit your questions in advance.</p>
</div>
{/* Layout Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Meetings List Canvas (Col 1-8) */}
<div className="lg:col-span-8 flex flex-col gap-stack-md">
{/* Meeting Card 1 */}
<article className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] relative flex flex-col">
{/* Status Rail */}
<div className="h-rail-height border-b border-border flex items-center px-stack-md bg-surface-container-lowest justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-success"></span>
<span className="font-data-sm text-data-sm uppercase text-text-muted">Status: Open</span>
</div>
<span className="font-data-sm text-data-sm uppercase text-text-muted">ID: TH-2023-11A</span>
</div>
<div className="p-stack-md flex-1 flex flex-col md:flex-row gap-stack-md">
<div className="flex-1">
<h2 className="font-headline-md text-headline-md text-on-surface mb-2">Quarterly Budget Review</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-sm mb-stack-md">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-text-muted text-[18px] mt-0.5">calendar_today</span>
<div>
<div className="font-label-sm text-label-sm text-text-muted uppercase">Date &amp; Time</div>
<div className="font-data-md text-data-md text-on-surface">Nov 15, 2023 | 18:00 EST</div>
</div>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-text-muted text-[18px] mt-0.5">location_on</span>
<div>
<div className="font-label-sm text-label-sm text-text-muted uppercase">Location</div>
<div className="font-body-md text-body-md text-on-surface">City Hall, Room 4B</div>
<a className="font-label-sm text-label-sm text-secondary-container hover:underline flex items-center gap-1 mt-1" href="#">
<span className="material-symbols-outlined text-[14px]">videocam</span> Join Online
                                        </a>
</div>
</div>
</div>
<div className="border-t border-border pt-stack-sm">
<h3 className="font-label-sm text-label-sm text-text-muted uppercase mb-2">Agenda</h3>
<ul className="list-none space-y-1">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-text-muted">chevron_right</span>
<span className="font-body-md text-body-md text-on-surface">Q3 Expenditure Report</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-text-muted">chevron_right</span>
<span className="font-body-md text-body-md text-on-surface">Proposed Infrastructure Allocations</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-text-muted">chevron_right</span>
<span className="font-body-md text-body-md text-on-surface">Public Q&amp;A Session</span>
</li>
</ul>
</div>
</div>
<div className="border-l-0 md:border-l border-t md:border-t-0 border-border pt-stack-md md:pt-0 md:pl-stack-md flex flex-col justify-between min-w-[180px]">
<div>
<div className="font-label-sm text-label-sm text-text-muted uppercase mb-1">Capacity</div>
<div className="font-data-lg text-data-lg text-on-surface">142<span className="font-data-sm text-data-sm text-text-muted ml-1">/ 200</span></div>
</div>
<button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-2 px-4 hover:bg-primary transition-colors flex items-center justify-center gap-2 mt-stack-sm md:mt-0">
                                RSVP Now
                                <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
</button>
</div>
</div>
</article>
{/* Meeting Card 2 */}
<article className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] relative flex flex-col">
<div className="h-rail-height border-b border-border flex items-center px-stack-md bg-surface-container-lowest justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-success"></span>
<span className="font-data-sm text-data-sm uppercase text-text-muted">Status: Open</span>
</div>
<span className="font-data-sm text-data-sm uppercase text-text-muted">ID: TH-2023-11B</span>
</div>
<div className="p-stack-md flex-1 flex flex-col md:flex-row gap-stack-md">
<div className="flex-1">
<h2 className="font-headline-md text-headline-md text-on-surface mb-2">Zoning Ordinance Update</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-sm mb-stack-md">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-text-muted text-[18px] mt-0.5">calendar_today</span>
<div>
<div className="font-label-sm text-label-sm text-text-muted uppercase">Date &amp; Time</div>
<div className="font-data-md text-data-md text-on-surface">Nov 22, 2023 | 19:00 EST</div>
</div>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-text-muted text-[18px] mt-0.5">location_on</span>
<div>
<div className="font-label-sm text-label-sm text-text-muted uppercase">Location</div>
<div className="font-body-md text-body-md text-on-surface">Community Center</div>
<a className="font-label-sm text-label-sm text-secondary-container hover:underline flex items-center gap-1 mt-1" href="#">
<span className="material-symbols-outlined text-[14px]">videocam</span> Join Online
                                        </a>
</div>
</div>
</div>
<div className="border-t border-border pt-stack-sm">
<h3 className="font-label-sm text-label-sm text-text-muted uppercase mb-2">Agenda</h3>
<ul className="list-none space-y-1">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-text-muted">chevron_right</span>
<span className="font-body-md text-body-md text-on-surface">Overview of Proposed Map Changes</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-text-muted">chevron_right</span>
<span className="font-body-md text-body-md text-on-surface">Impact on Residential Districts</span>
</li>
</ul>
</div>
</div>
<div className="border-l-0 md:border-l border-t md:border-t-0 border-border pt-stack-md md:pt-0 md:pl-stack-md flex flex-col justify-between min-w-[180px]">
<div>
<div className="font-label-sm text-label-sm text-text-muted uppercase mb-1">Capacity</div>
<div className="font-data-lg text-data-lg text-on-surface">85<span className="font-data-sm text-data-sm text-text-muted ml-1">/ 100</span></div>
</div>
<button className="w-full border border-border text-primary font-label-md text-label-md py-2 px-4 hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 mt-stack-sm md:mt-0">
                                RSVP Now
                            </button>
</div>
</div>
</article>
</div>
{/* Pre-Submit Form Area (Col 9-12) */}
<div className="lg:col-span-4">
<div className="bg-surface border border-border shadow-[0_1px_2px_rgba(17,24,39,0.06)] sticky top-[96px]">
<div className="h-rail-height border-b border-border flex items-center px-stack-md bg-primary-container text-on-primary">
<span className="font-data-sm text-data-sm uppercase tracking-wider">Direct Submission</span>
</div>
<div className="p-stack-md">
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Submit a Question</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">Pre-submit queries for the speakers. Selected questions will be addressed during the Q&amp;A segment.</p>
<form className="flex flex-col gap-stack-md">
<div>
<label className="block font-label-sm text-label-sm text-on-surface mb-1 uppercase" htmlFor="meeting-select">Select Meeting</label>
<select className="w-full bg-surface border border-border text-on-surface font-body-md text-body-md focus:border-primary focus:ring-0 p-2" id="meeting-select">
<option>Quarterly Budget Review</option>
<option>Zoning Ordinance Update</option>
</select>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface mb-1 uppercase" htmlFor="question-topic">Topic Area</label>
<input className="w-full bg-surface border border-border text-on-surface font-body-md text-body-md focus:border-primary focus:ring-0 p-2" id="question-topic" placeholder="e.g. Infrastructure, Taxes" type="text"/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface mb-1 uppercase" htmlFor="question-body">Your Question</label>
<textarea className="w-full bg-surface border border-border text-on-surface font-body-md text-body-md focus:border-primary focus:ring-0 p-2 resize-none" id="question-body" rows="4"></textarea>
</div>
<button className="bg-secondary-container text-on-primary font-label-md text-label-md py-3 px-4 hover:bg-secondary transition-colors mt-2 flex justify-center items-center gap-2" type="button">
                                Submit Query
                                <span className="material-symbols-outlined text-[18px]">send</span>
</button>
</form>
</div>
</div>
</div>
</div>
</main>
{/* BottomNavBar (Mobile Only) */}
      </div>
    </AppLayout>
  );
}
