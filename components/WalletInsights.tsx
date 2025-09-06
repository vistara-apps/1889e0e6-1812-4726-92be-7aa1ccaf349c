'use client';

import { useState, useEffect } from 'react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar, Address } from '@coinbase/onchainkit/identity';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { useAccount } from 'wagmi';
import { DataCard } from './DataCard';
import { ChartWrapper } from './ChartWrapper';
import { TrendingUp, DollarSign, Activity, Zap } from 'lucide-react';

export function WalletInsights() {
  const { setFrameReady } = useMiniKit();
  const { address, isConnected } = useAccount();
  const [insights, setInsights] = useState({
    totalValue: '$72,593.00',
    pendingTx: 3,
    taxBalance: '$7,165.5',
    settings: '$177'
  });

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  if (!isConnected) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="mb-6">
          <Zap className="mx-auto mb-4 text-accent" size={48} />
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Connect Your Wallet
          </h3>
          <p className="text-text-secondary">
            Get personalized insights for your on-chain activity
          </p>
        </div>
        <Wallet>
          <ConnectWallet className="btn-primary">
            Connect Wallet
          </ConnectWallet>
        </Wallet>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <DataCard title="Connected Wallet" variant="walletSummary">
        <div className="flex items-center gap-4 mb-4">
          <Avatar address={address} className="w-12 h-12" />
          <div>
            <Name address={address} className="text-text-primary font-medium" />
            <Address address={address} className="text-text-secondary text-sm" />
          </div>
        </div>
      </DataCard>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="metric-card">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={16} className="text-accent" />
            <span className="text-xs text-text-secondary">Total Value</span>
          </div>
          <div className="text-lg font-semibold text-text-primary">
            {insights.totalValue}
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={16} className="text-blue-400" />
            <span className="text-xs text-text-secondary">Pending Tx</span>
          </div>
          <div className="text-lg font-semibold text-text-primary">
            {insights.pendingTx}
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} className="text-green-400" />
            <span className="text-xs text-text-secondary">Tax Balance</span>
          </div>
          <div className="text-lg font-semibold text-text-primary">
            {insights.taxBalance}
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-purple-400" />
            <span className="text-xs text-text-secondary">Settings</span>
          </div>
          <div className="text-lg font-semibold text-text-primary">
            {insights.settings}
          </div>
        </div>
      </div>

      <ChartWrapper 
        title="Portfolio Performance" 
        variant="tokenBalance"
      />
    </div>
  );
}
