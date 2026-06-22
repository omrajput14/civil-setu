"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <AppLayout title="CIVICSETU - CITIZEN LOGIN" showBackButton={false}>
      <div className="w-full h-full relative bg-background flex flex-col items-center justify-center p-margin-mobile text-on-background font-body-md">
        
        <main className="w-full max-w-[420px]">
          <div className="bg-surface border border-border rounded-[8px] p-[40px] shadow-[0_1px_2px_rgba(17,24,39,0.06)] mb-stack-md">
            
            {/* Header Section */}
            <header className="mb-[32px] text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-container text-on-primary rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>account_balance</span>
              </div>
              <h1 className="font-headline-md text-headline-md font-bold text-primary-container uppercase tracking-wide">
                CivicSetu
              </h1>
              <p className="font-data-sm text-data-sm uppercase text-text-muted mt-1">Citizen Services Portal</p>
            </header>

            {/* Login Form */}
            <div className="block">
              <form className="flex flex-col gap-[20px]" onSubmit={handleLogin}>
                {/* Mobile Number */}
                <div>
                  <label className="block font-data-sm text-label-sm uppercase text-text-muted mb-stack-sm" htmlFor="mobile">Mobile Number</label>
                  <input 
                    autoComplete="tel" 
                    className="w-full bg-surface border border-border rounded-[6px] px-3 py-2 text-on-surface font-body-md focus:border-primary-container focus:border-2 focus:outline-none transition-all" 
                    id="mobile" 
                    placeholder="Enter 10-digit mobile number" 
                    type="tel"
                    required
                  />
                </div>
                
                {/* Password */}
                <div>
                  <div className="flex justify-between mb-stack-sm">
                    <label className="block font-data-sm text-data-sm uppercase text-text-muted" htmlFor="password">Account Password</label>
                    <Link href="/reset-password" className="text-[12px] text-primary hover:underline font-semibold">Forgot Password?</Link>
                  </div>
                  <input 
                    autoComplete="current-password" 
                    className="w-full bg-surface border border-border rounded-[6px] px-3 py-2 text-on-surface font-body-md focus:border-primary-container focus:border-2 focus:outline-none transition-all" 
                    id="password" 
                    placeholder="••••••••" 
                    type="password"
                    required
                  />
                </div>

                {/* Submit Action */}
                <div className="mt-2 space-y-3">
                  <button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-3 rounded-[6px] hover:bg-primary transition-colors active:scale-[0.98]" type="submit">
                    Login to Citizen Portal
                  </button>
                  <button 
                    onClick={() => router.push('/register')} 
                    className="w-full bg-surface border border-border text-primary font-label-md text-label-md py-3 rounded-[6px] hover:bg-surface-container-low transition-colors active:scale-[0.98]" 
                    type="button"
                  >
                    Register with Aadhaar
                  </button>
                </div>
              </form>
            </div>

          </div>
          
          {/* External Footer */}
          <div className="text-center">
            <p className="font-data-sm text-data-sm uppercase text-text-muted tracking-widest">CIVICSETU CITIZEN v1.0 · PUBLIC SERVICES ACCESS</p>
          </div>
        </main>

      </div>
    </AppLayout>
  );
}
