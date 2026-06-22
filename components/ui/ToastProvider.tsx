"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none w-[90%] max-w-[380px]">
        {toasts.map((toast) => (
          <div 
            key={toast.id}
            className={`
              flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg pointer-events-auto transform transition-all animate-in fade-in slide-in-from-bottom-4 duration-300
              ${toast.type === 'success' ? 'bg-[#DCFCE7] text-[#16A34A] border border-[#16A34A]/20' : ''}
              ${toast.type === 'error' ? 'bg-[#FEE2E2] text-[#DC2626] border border-[#DC2626]/20' : ''}
              ${toast.type === 'info' ? 'bg-surface-container-highest text-on-surface border border-outline-variant' : ''}
            `}
          >
            <span className="material-symbols-outlined text-[20px]">
              {toast.type === 'success' && 'check_circle'}
              {toast.type === 'error' && 'error'}
              {toast.type === 'info' && 'info'}
            </span>
            <p className="font-label-md text-[13px] font-bold">{toast.message}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
