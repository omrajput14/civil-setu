import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - WARD 4 POLL" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* TopAppBar */}

{/* Main Content Canvas */}
<main className="flex-grow pt-[80px] pb-[80px] md:pb-[32px] px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full flex flex-col gap-stack-lg">
{/* Header Section */}
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg flex flex-col gap-stack-md">
<div>
<div className="flex justify-between items-start mb-stack-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface">Ward 4: Neighborhood Park Renovation</h1>
<span className="bg-primary-container text-on-primary px-2 py-1 rounded text-label-sm font-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">how_to_vote</span> Active Poll
                    </span>
</div>
<p className="text-on-surface-variant font-body-lg text-body-lg">Select the proposed renovation plan for Centennial Park. This decision will determine the allocation of municipal funds for the next fiscal year.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter border-t border-border pt-stack-md mt-stack-sm">
<div>
<span className="text-text-muted font-data-sm text-data-sm uppercase block mb-1">Estimated Budget</span>
<span className="font-data-lg text-data-lg text-on-surface">$250,000</span>
</div>
<div>
<span className="text-text-muted font-data-sm text-data-sm uppercase block mb-1">Voting Deadline</span>
<span className="font-data-lg text-data-lg text-on-surface">OCT 24, 18:00 EST</span>
</div>
</div>
</div>
{/* Impact Analysis Section */}
<div className="bg-surface border border-border rounded shadow-[0_1px_2px_rgba(17,24,39,0.06)] p-stack-lg">
<h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md">Impact Analysis</h2>
<div className="bg-surface-container-low border border-border rounded p-stack-md font-data-md text-data-md text-on-surface-variant overflow-x-auto">
<pre className="m-0">METRIC                 OPTION A    OPTION B    ABSTAIN
------------------------------------------------------
Maintenance Cost/Yr    $12k        $18k        N/A
Green Space Increase   15%         5%          0%
New Play Equipment     Basic       Advanced    None
Timeline (Months)      3           5           0
Risk Assessment        Low         Med         N/A
                 </pre>
</div>
</div>
{/* Voting Form */}
<form className="flex flex-col gap-stack-lg">
<div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
{/* Option A */}
<label className="relative flex flex-col bg-surface border border-border rounded p-stack-md cursor-pointer hover:bg-surface-container-low transition-colors group">
<input className="peer sr-only" name="vote_option" type="radio" defaultValue="option_a" />
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-primary rounded pointer-events-none transition-colors"></div>
<div className="flex justify-between items-center mb-stack-md">
<span className="font-label-md text-label-md text-primary">Option A</span>
<div className="w-5 h-5 rounded-full border border-border flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
<span className="material-symbols-outlined text-[14px] text-surface hidden peer-checked:block">check</span>
</div>
</div>
<div className="mb-stack-sm flex-grow">
<h3 className="font-body-md text-body-md font-bold mb-1">Eco-Focus Plan</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Prioritizes native plant landscaping, walking trails, and basic playground updates.</p>
</div>
<img className="w-full h-32 object-cover border border-border rounded" data-alt="A modern architectural rendering of a small city park focusing on green spaces. The design is utilitarian and clean, featuring native plants, simple concrete walking paths, and minimalist playground equipment. The lighting is bright daylight, creating a sharp, functional, and modern civic aesthetic in light mode colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQUkVhP3FmY4WPfk1zKyhZF-MpNHI39Jr51QHAHqKUDnudE5RrbQweNKwT1MLHH7XTUOzPG-vOwf10ibCSez6Fg2mk0KXLMjFe52vrqUvllpmwrcnkJ3OnMIwVhgc0U8iV8aLSP3U2fD8NYEK_aN7B2ioC3JEsUCkQG_cm-hbhPGLtjhARLRvNy1rxVlTfBTFESK4ULKmaEc-ETeMlVvBtNrCmvBYAiBImDWLc5Ha1OpvqCcPlBQWsxaUGDPMY_vwSgr3v6PV_XZZm" />
</label>
{/* Option B */}
<label className="relative flex flex-col bg-surface border border-border rounded p-stack-md cursor-pointer hover:bg-surface-container-low transition-colors group">
<input className="peer sr-only" name="vote_option" type="radio" defaultValue="option_b" />
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-primary rounded pointer-events-none transition-colors"></div>
<div className="flex justify-between items-center mb-stack-md">
<span className="font-label-md text-label-md text-primary">Option B</span>
<div className="w-5 h-5 rounded-full border border-border flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
<span className="material-symbols-outlined text-[14px] text-surface hidden peer-checked:block">check</span>
</div>
</div>
<div className="mb-stack-sm flex-grow">
<h3 className="font-body-md text-body-md font-bold mb-1">Recreation Plan</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Focuses on extensive playground structures, a splash pad, and a basketball court.</p>
</div>
<img className="w-full h-32 object-cover border border-border rounded" data-alt="A detailed architectural rendering of a city park designed for active recreation. The image shows a complex playground structure, a splash pad area, and a fenced basketball court. The style is highly structured, geometric, and functional, resembling a professional urban planning document. Bright, flat lighting with a light mode color palette emphasizing high-contrast utility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnEoKtG6LVZJuvn1uFpwgt8HWDO4o3PZ3pKBFYZOrF_ouBM7L_OjEhilgOly52FtliGSZ5zIj51sI3hpY_8Hs5IeGeROfXMJcbi6LGfVEtWgNTFA_6wj3YRLZctT7WMFDC06pDYQwfn0OSoraVnsNr4TpbSeFm7jyyPtVRGnL7qsgmEen7L-rsd4A-d-YOlNgRisQyw6VdMXccnlJ93O-jwd95F5y4U0kytgpa_TFc-TEq5sT7NvWPTHfuNoTQ5EdWY5nX4sWZCZoN" />
</label>
{/* Abstain */}
<label className="relative flex flex-col bg-surface border border-border rounded p-stack-md cursor-pointer hover:bg-surface-container-low transition-colors group">
<input className="peer sr-only" name="vote_option" type="radio" defaultValue="abstain" />
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-primary rounded pointer-events-none transition-colors"></div>
<div className="flex justify-between items-center mb-stack-md">
<span className="font-label-md text-label-md text-text-muted">Abstain</span>
<div className="w-5 h-5 rounded-full border border-border flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-colors">
<span className="material-symbols-outlined text-[14px] text-surface hidden peer-checked:block">check</span>
</div>
</div>
<div className="flex-grow flex items-center justify-center py-stack-lg">
<p className="font-body-md text-body-md text-on-surface-variant text-center">I choose not to vote on this particular issue, but acknowledge my participation.</p>
</div>
</label>
</div>
{/* Action Area */}
<div className="flex flex-col md:flex-row justify-between items-center bg-surface border border-border rounded p-stack-md shadow-[0_1px_2px_rgba(17,24,39,0.06)] mt-stack-md">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="material-symbols-outlined text-success filled-icon">verified_user</span>
<span className="font-data-sm text-data-sm text-text-muted uppercase">Blockchain Verified Connection</span>
</div>
<button className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-8 py-3 rounded transition-colors w-full md:w-auto shadow-[0_1px_2px_rgba(17,24,39,0.06)] border border-transparent" type="button">
                    SECURE VOTE
                </button>
</div>
</form>
</main>
{/* BottomNavBar (Mobile Only) */}
      </div>
    </AppLayout>
  );
}
