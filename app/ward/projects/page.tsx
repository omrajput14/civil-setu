import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="WARD PROJECTS DASHBOARD - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Main Content */}
<main className="flex-1 w-full max-w-7xl mx-auto px-md py-lg pb-32">
{/* Ward Summary Card */}
<section className="mb-xl">
<div className="bg-surface border border-outline-variant rounded-xl p-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-lg opacity-10">
<span className="material-symbols-outlined text-[80px]" data-icon="analytics">analytics</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">Ward No. 14 Overview</h2>
<div className="grid grid-cols-2 gap-md">
<div className="space-y-xs">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Projects</p>
<p className="text-display-lg-mobile font-display-lg-mobile text-primary">12</p>
</div>
<div className="space-y-xs border-l border-outline-variant pl-md">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Budget</p>
<p className="text-display-lg-mobile font-display-lg-mobile text-secondary">₹4.2 Cr</p>
</div>
</div>
<div className="mt-lg pt-md border-t border-outline-variant flex items-center gap-xs">
<span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="trending_up">trending_up</span>
<span className="font-label-sm text-label-sm text-tertiary-container">8% increase from last quarter</span>
</div>
</div>
</section>
{/* Filter Tabs */}
<section className="mb-lg overflow-x-auto no-scrollbar">
<div className="flex gap-sm min-w-max pb-xs">
<button className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md">Ongoing</button>
<button className="bg-surface border border-outline-variant text-on-surface-variant px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Completed</button>
<button className="bg-surface border border-outline-variant text-on-surface-variant px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Upcoming</button>
</div>
</section>
{/* Project Cards List */}
<section className="space-y-md">
{/* Project 1: Main Street Paving */}
<div className="bg-surface border border-outline-variant rounded-xl overflow-hidden hover:border-primary transition-all duration-200">
<div className="flex h-32">
<div className="w-1/3 h-full">
<img className="w-full h-full object-cover" data-alt="A cinematic wide shot of a modern urban road construction site during golden hour. Large paving machinery is laying fresh black asphalt on a wide street lined with colonial-style administrative buildings. The lighting is warm and dramatic, highlighting the texture of the materials. The overall aesthetic is professional, clean, and representative of civic progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJXicCu-_KzYifFJ5TVrhw1QmwcAFXZcnhuOlkH82EhbEJoLhFtwmUwICqkLhmUU-gCC939GiGHuUwfpkUTjFS1KdZ-EXua5KvJv_JiUvI6M3BFSACgvTVgugrpu4wGb_ok-_nMTR4oBMCz_G-ckQTqUe2GUSntv_xj_dKKL6l1J-HvkxiTmE_fioostRPfr7WEwJH10oML2zS87HhQbXHSbSZ4HAtgbFVeO_nWNFSVJbp5DRfCCXIQShWrSO2ddGzXqmmozuXPkjx"/>
</div>
<div className="w-2/3 p-md flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-sm text-headline-sm text-primary">Main Street Paving</h3>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-sm py-[2px] rounded text-[10px] font-bold uppercase">On Track</span>
</div>
<div className="flex items-center gap-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
<span className="font-label-sm text-label-sm">Block 4</span>
</div>
</div>
<div className="space-y-xs">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Progress</span>
<span className="font-label-sm text-label-sm font-bold text-primary">75%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{ width: "75%", }}></div>
</div>
</div>
</div>
</div>
<div className="border-t border-outline-variant px-md py-sm flex justify-end">
<button className="text-primary font-label-md text-label-md flex items-center gap-xs hover:gap-sm transition-all">
                        View Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
{/* Project 2: Primary School Renovation */}
<div className="bg-surface border border-outline-variant rounded-xl overflow-hidden hover:border-error transition-all duration-200">
<div className="flex h-32">
<div className="w-1/3 h-full">
<img className="w-full h-full object-cover" data-alt="A bright, airy photo of a rural primary school building undergoing renovation. The architecture is simple and functional with large windows allowing natural light to flood the classrooms. Scaffolding is visible on one side of the white-washed walls, surrounded by lush green trees. The scene is clean and high-contrast, fitting a government transparency portal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYbNylwx7MTCSau4chKvniJlj1_2pddHPy4PbcN52B1QmvwpctH0D8Ugusdhid8n-gsJfoK_82M856PADzI3d3Yav630YzR1t835LfX4FT6G5ZxlI4BXC5zQO1qcr6Gk4AkRA4kodj4foFq-qLoJY0GfD83N-EtHGqWHhBdUR4xq-VbI3hLbJdMa2b3zdS-tS41GcXaP-30-HkK8-LavnZXD-UmgByNpyt_J9pxQ9K8zh0pKkJFC0Iqwv1Ww72Gyb0MEREdjsQC3SJ"/>
</div>
<div className="w-2/3 p-md flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-sm text-headline-sm text-primary">Primary School Renovation</h3>
<span className="bg-error-container text-on-error-container px-sm py-[2px] rounded text-[10px] font-bold uppercase">Delayed</span>
</div>
<div className="flex items-center gap-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
<span className="font-label-sm text-label-sm">Block 7</span>
</div>
</div>
<div className="space-y-xs">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Progress</span>
<span className="font-label-sm text-label-sm font-bold text-error">40%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{ width: "40%", }}></div>
</div>
</div>
</div>
</div>
<div className="border-t border-outline-variant px-md py-sm flex justify-end">
<button className="text-primary font-label-md text-label-md flex items-center gap-xs hover:gap-sm transition-all">
                        View Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
{/* Project 3: New Water Pipeline */}
<div className="bg-surface border border-outline-variant rounded-xl overflow-hidden hover:border-secondary transition-all duration-200">
<div className="flex h-32">
<div className="w-1/3 h-full">
<img className="w-full h-full object-cover" data-alt="A high-quality technical shot of large industrial water pipes being laid into a deep, clean trench in a suburban area. The pipes are high-density blue plastic, positioned neatly by professional workers in safety gear. The lighting is bright daylight, emphasizing the scale of the infrastructure project. The visual style is crisp and documentary-like, representing municipal efficiency." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgCqGM6pygOgLYk7F7bqp616-p3XH1Cc9MWo25R8_cy4VYQdJUyQYNwSvCKBCnl81tgrHD3bZ3zpbjUWRYp_dRkJS1GjiMyU-Cj4S42coYGQrM1FLFBRbIpgwrDSTBE1BkebinDESk994Kwselytkg3kHnRvPVQeCs-umgLg9WjSTRUjFG43KOr5b3qjv8SiqTXyEfw8R8lJw5Y88UDpBPcI7hLjMQ9OQPN7jScONsAXflPz31DytqEtbDij9i4mC77vLnWv8I2m5l"/>
</div>
<div className="w-2/3 p-md flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-xs">
<h3 className="font-headline-sm text-headline-sm text-primary">New Water Pipeline</h3>
<span className="bg-secondary-fixed text-on-secondary-fixed-variant px-sm py-[2px] rounded text-[10px] font-bold uppercase">Just Started</span>
</div>
<div className="flex items-center gap-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
<span className="font-label-sm text-label-sm">Block 2</span>
</div>
</div>
<div className="space-y-xs">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Progress</span>
<span className="font-label-sm text-label-sm font-bold text-secondary">10%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: "10%", }}></div>
</div>
</div>
</div>
</div>
<div className="border-t border-outline-variant px-md py-sm flex justify-end">
<button className="text-primary font-label-md text-label-md flex items-center gap-xs hover:gap-sm transition-all">
                        View Details <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</section>
</main>
{/* BottomNavBar */}
<nav className="sticky bottom-0 left-0 w-full z-50 flex justify-around items-center bg-surface border-t border-outline-variant px-xs py-sm">
{/* Projects (Inactive) */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container transition-transform duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="list_alt">list_alt</span>
<span className="font-label-sm text-label-sm-mobile">Projects</span>
</a>
{/* Track (Active) */}
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-1 transition-transform duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="analytics" style={{ fontVariationSettings: "'FILL' 1", }}>analytics</span>
<span className="font-label-sm text-label-sm-mobile">Track</span>
</a>
{/* Budget (Inactive) */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container transition-transform duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm-mobile">Budget</span>
</a>
{/* Profile (Inactive) */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container transition-transform duration-150 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm-mobile">Profile</span>
</a>
</nav>
      </div>
    </AppLayout>
  );
}
