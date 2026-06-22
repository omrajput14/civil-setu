import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="CIVICSETU - PASSWORD RESET SUCCESSFUL" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top Navigation Bar (Contextual Suppression applies but Logo is kept for branding) */}

{/* Main Content Area */}
<main className="flex-grow flex items-center justify-center p-gutter">
<div className="w-full max-w-[480px] bg-white border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center">
{/* Success Illustration */}
<div className="mb-lg success-animation">
<div className="w-24 h-24 bg-tertiary-fixed rounded-full flex items-center justify-center mb-md">
<svg className="text-on-tertiary-fixed-variant" fill="none" height="64" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path className="checkmark-path" d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
</svg>
</div>
</div>
{/* Text Content */}
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-sm">Password Reset Successful!</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-[320px]">
                Your account is now secure. You can log in using your new password.
            </p>
{/* Actions */}
<div className="w-full space-y-md">
<Link href="/login" className="w-full h-[48px] bg-primary text-white font-headline-sm rounded-xl hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
                    Back to Login
                </Link>
<Link href="/" className="w-full h-[48px] flex items-center justify-center text-primary font-headline-sm hover:underline transition-colors">
                    Go to Dashboard
                </Link>
</div>
{/* Divider */}
<div className="w-full h-px bg-outline-variant my-xl"></div>
{/* Encryption Disclaimer & Verification */}
<div className="flex flex-col items-center gap-md">
<div className="flex items-center gap-xs text-on-surface-variant opacity-80">
<span className="material-symbols-outlined text-[16px]" data-icon="verified_user">verified_user</span>
<span className="font-label-sm text-label-sm">End-to-End Encryption Enabled</span>
</div>
<div className="flex items-center gap-lg grayscale opacity-60">
<img className="h-8 w-auto" data-alt="Official government digital security emblem featuring a traditional crest and a circuit board motif, styled in professional navy blue and silver on a transparent background, corporate minimal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtmuRPR5pWhOIR7SVwSTWSlbMrLjeMGjwUacFRGthsEft9nWRfexhuWNe2L3-C1D5zXAeLRJdBrSkVn5sH9IHw7G9WPssktA9Ex4zMCMUNBa6iOouHupREU0Nfty4tLQWlf-_9hS8mZUn6uU-HGF9iqjJbxll5p6AhxFc9yJKolKoGoAugKduooHl1ODfHjFAXjinG-BUE3lGTR2XjIioWPqeoP0tepjSU3mW5pNjiZshZDmSp3zhrhnMoxhm_tXAWroQ5uwxGj44b"/>
<img className="h-8 w-auto" data-alt="Cybersecurity certification badge with a shield icon and 'ISO 27001 Certified' text, rendered in a crisp, vector-based administrative style with muted professional colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJFAwaxhyRBWtzn2N20bq5PZuuo291ZDWQekKNp6xso0ttf5AWmdjWKWQVCickZi0Szpw4B-2sAd9yyTe5kVv2VQqr-WcxMoahKDhJTPJBfL54IhRU5po6KtmxcNF0eBVPXkCPOAnzUyxer6lcN0lW1lpihxJtvOr46co877MNdzfrUVpTUeti5r89njJsTIhJkn7r1MuuQej9JVNkGF2pCMgVr1eJPlQJ8OdqlvjX-er7Juu5R0Om0PBo5C-vEEf3BQAdion6UhmC"/>
<img className="h-8 w-auto" data-alt="National portal trust seal, a circular emblem with national colors and 'Digital India' text, high-clarity government agency logo for trust and authenticity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUV9UGm4oaySo5lnWaYs996POyCv1_CVd8RRzkxpPKaHsNXswQXUkGlzSr4wzPd4_qkWBNKOd29YDNBxeXV8PJsq7dWAmpanO0zlWmX56DtuOKxLRTNaWymvJ1C6CvoDfRumjVITA9g292_Q8fjlzev6zbs3jdbQD90Nk5T6AeFpXzvhjJzv0sbad1Hy0ZMd_tMmtFKlGV3JycF6yyERScHw-9n4IZqxzHYmr5IF_F0dPxpblvY4jTgqK-dyCeKJDx6DHRl-UohmaI"/>
</div>
</div>
</div>
</main>
{/* Footer Security Notice */}
<footer className="w-full py-lg px-gutter flex flex-col items-center border-t border-outline-variant bg-surface-container-low mt-auto">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-xs text-center">
            © 2024 CivicSetu Governance Platform. Official Government Infrastructure.
        </p>
<p className="font-label-sm text-label-sm text-on-surface-variant opacity-60 text-center max-w-2xl">
            This is a secure system. Unauthorized access is strictly prohibited and subject to legal action under the Information Technology Act. All activities are logged for auditing purposes.
        </p>
</footer>
      </div>
    </AppLayout>
  );
}
