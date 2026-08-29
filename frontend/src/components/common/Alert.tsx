import React from 'react';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  onDismiss,
  className,
}) => {
  const configs = {
    info: {
      bg: 'bg-blue-50/90 border-blue-200 text-blue-800',
      icon: <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />,
    },
    success: {
      bg: 'bg-emerald-50/90 border-emerald-200 text-emerald-800',
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />,
    },
    warning: {
      bg: 'bg-amber-50/90 border-amber-200 text-amber-800',
      icon: <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />,
    },
    danger: {
      bg: 'bg-rose-50/90 border-rose-200 text-rose-800',
      icon: <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />,
    },
  };

  return (
    <div
      className={twMerge(
        clsx(
          'flex items-start gap-3 rounded-xl border p-4 text-sm transition-all',
          configs[variant].bg,
          className
        )
      )}
    >
      {configs[variant].icon}
      <div className="flex-1">
        {title && <h5 className="font-semibold mb-1">{title}</h5>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="rounded p-1 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
