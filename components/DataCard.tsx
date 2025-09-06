'use client';

import { ReactNode } from 'react';

interface DataCardProps {
  title: string;
  children: ReactNode;
  variant?: 'walletSummary' | 'transactionList' | 'default';
  className?: string;
}

export function DataCard({ 
  title, 
  children, 
  variant = 'default',
  className = '' 
}: DataCardProps) {
  const variantStyles = {
    walletSummary: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20',
    transactionList: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20',
    default: 'glass-card'
  };

  return (
    <div className={`${variantStyles[variant]} p-6 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold text-text-primary mb-4">{title}</h3>
      {children}
    </div>
  );
}
