import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="NOTIFICATIONS - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top App Bar */}

{/* Filter Tabs (Horizontal Scrollable) */}
<nav className="bg-surface border-b border-outline-variant overflow-x-auto hide-scrollbar sticky top-14 z-40">
<div className="flex px-gutter py-3 space-x-2 min-w-max">
<button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-5 py-1.5 rounded-xl transition-colors">
                All
            </button>
<button className="text-on-surface-variant hover:bg-surface-container-low font-label-md text-label-md px-5 py-1.5 rounded-xl transition-colors">
                Schemes
            </button>
<button className="text-on-surface-variant hover:bg-surface-container-low font-label-md text-label-md px-5 py-1.5 rounded-xl transition-colors">
                Complaints
            </button>
<button className="text-on-surface-variant hover:bg-surface-container-low font-label-md text-label-md px-5 py-1.5 rounded-xl transition-colors">
                Public Notices
            </button>
</div>
</nav>
{/* Content Area */}
<main className="max-w-screen-md mx-auto px-gutter py-lg">
{/* Section: Today */}
<div className="mb-xl">
<h2 className="text-label-sm font-label-sm text-on-surface-variant mb-md tracking-wider uppercase">Today</h2>
<div className="space-y-sm">
{/* Scheme Update (New) */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex gap-md relative overflow-hidden active:bg-surface-container-low transition-colors cursor-pointer group">
{/* Status Indicator */}
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
<div className="flex-shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", }}>info</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-secondary mb-1">Scheme Update</span>
<span className="text-label-sm text-on-surface-variant">2 hours ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-tight mb-2">
                            Application for <span className="font-semibold">PM Awas Yojana (Gramin)</span> has been approved. Click to view details.
                        </p>
<div className="flex gap-2">
<span className="bg-secondary/10 text-secondary font-label-sm text-[10px] px-2 py-0.5 rounded-md uppercase tracking-tighter">New</span>
</div>
</div>
</div>
{/* Complaint Status (New) */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex gap-md relative overflow-hidden active:bg-surface-container-low transition-colors cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
<div className="flex-shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-tertiary-container">
<span className="material-symbols-outlined">check_circle</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-secondary mb-1">Complaint Status</span>
<span className="text-label-sm text-on-surface-variant">5 hours ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-tight mb-2">
                            Your complaint regarding <span className="italic text-on-surface-variant">'Street Light Repair'</span> has been marked as <span className="text-tertiary-container font-semibold">Resolved</span>.
                        </p>
<div className="flex gap-2">
<span className="bg-secondary/10 text-secondary font-label-sm text-[10px] px-2 py-0.5 rounded-md uppercase tracking-tighter">New</span>
</div>
</div>
</div>
</div>
</div>
{/* Section: Yesterday */}
<div className="mb-xl">
<h2 className="text-label-sm font-label-sm text-on-surface-variant mb-md tracking-wider uppercase">Yesterday</h2>
<div className="space-y-sm">
{/* Budget Alert (Read) */}
<div className="bg-surface-container-lowest border border-outline-variant opacity-80 rounded-xl p-md flex gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex-shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">assessment</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-on-surface-variant mb-1">Budget Alert</span>
<span className="text-label-sm text-on-surface-variant">Yesterday</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-tight">
                            Ward 4 Monthly Budget Report for Oct 2023 is now available for public review.
                        </p>
</div>
</div>
{/* Meeting Invite (Read) */}
<div className="bg-surface-container-lowest border border-outline-variant opacity-80 rounded-xl p-md flex gap-md active:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex-shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">event</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-on-surface-variant mb-1">Meeting Invite</span>
<span className="text-label-sm text-on-surface-variant">Yesterday</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-tight mb-2">
                            Gram Sabha meeting scheduled for <span className="font-semibold">Nov 15th</span> at Panchayat Bhawan. All members requested to attend.
                        </p>
<button className="border border-outline px-4 py-1.5 rounded-lg text-label-md font-label-md hover:bg-surface-container transition-colors">
                            RSVP
                        </button>
</div>
</div>
</div>
</div>
{/* Atmospheric Element: Empty State Placeholder Logic */}
<div className="mt-20 text-center pb-10">
<div className="w-16 h-16 bg-surface-container-high rounded-full mx-auto flex items-center justify-center mb-4 opacity-30">
<span className="material-symbols-outlined text-4xl">notifications_off</span>
</div>
<p className="text-label-md text-on-surface-variant opacity-40">No more notifications</p>
</div>
</main>
{/* Bottom Navigation Bar */}
<footer className="sticky bottom-0 w-full z-50 border-t border-outline-variant flex justify-around items-center h-16 px-xs bg-surface">
{/* Home */}
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-sm text-label-sm-mobile">Home</span>
</button>
{/* Services */}
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-label-sm text-label-sm-mobile">Services</span>
</button>
{/* Requests */}
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-sm text-label-sm-mobile">Requests</span>
</button>
{/* Profile */}
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm-mobile">Profile</span>
</button>
</footer>
{/* Micro-interaction Script */}
      </div>
    </AppLayout>
  );
}
