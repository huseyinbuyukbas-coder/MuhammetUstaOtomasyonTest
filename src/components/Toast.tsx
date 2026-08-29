import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm bg-slate-900 border border-emerald-500/40 text-white p-4 rounded-2xl shadow-2xl shadow-black flex items-start gap-3 animate-in slide-in-from-top-4 duration-300">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
      <div className="flex-1 text-xs sm:text-sm text-slate-200">
        {message}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1"
        aria-label="Kapat"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
