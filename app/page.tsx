'use client';

import { useState } from 'react';
import { AddressInput } from '@/components/AddressInput';
import { DataCard } from '@/components/DataCard';
import { ChartWrapper } from '@/components/ChartWrapper';
import { AlertConfigurator } from '@/components/AlertConfigurator';
import { WalletInsights } from '@/components/WalletInsights';
import { FloatingElements } from '@/components/FloatingElements';
import { Activity, BarChart3, Zap, TrendingUp } from 'lucide-react';
import { formatAddress, generateMockData } from '@/lib/utils';

export default function Home() {
  const [searchedAddress, setSearchedAddress] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [walletData, setWalletData] = useState<any>(null);

  const handleSearch = async (address: string) => {
    setIsLoading(true);
    setSearchedAddress(address);
    
    // Simulate API call
    setTimeout(() => {
      setWalletData({
        address,
        balance: '12.45 ETH',
        totalValue: '$25,430.50',
        tokenCount: 15,
        nftCount: 8,
        recentTransactions: [
          { hash: '0x123...', type: 'send', value: '0.5 ETH', timestamp: new Date() },
          { hash: '0x456...', type: 'receive', value: '100 USDC', timestamp: new Date() },
          { hash: '0x789...', type: 'swap', value: '1000 USDC → 0.4 ETH', timestamp: new Date() }
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen relative">
      <FloatingElements />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <Activity className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Onchain Pulse
            </h1>
          </div>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Real-time blockchain insights, simplified. Get instant analysis of wallets, transactions, and on-chain activity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <AddressInput 
              onSearch={handleSearch}
              disabled={isLoading}
            />
            <button className="btn-primary flex items-center gap-2">
              <Zap size={16} />
              Get Insights
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="metric-card text-center">
            <BarChart3 className="mx-auto mb-2 text-purple-400" size={24} />
            <div className="text-2xl font-bold text-text-primary">1.2M+</div>
            <div className="text-sm text-text-secondary">Wallets Analyzed</div>
          </div>
          <div className="metric-card text-center">
            <TrendingUp className="mx-auto mb-2 text-green-400" size={24} />
            <div className="text-2xl font-bold text-text-primary">$2.4B</div>
            <div className="text-sm text-text-secondary">Volume Tracked</div>
          </div>
          <div className="metric-card text-center">
            <Activity className="mx-auto mb-2 text-blue-400" size={24} />
            <div className="text-2xl font-bold text-text-primary">15</div>
            <div className="text-sm text-text-secondary">Chains Supported</div>
          </div>
          <div className="metric-card text-center">
            <Zap className="mx-auto mb-2 text-yellow-400" size={24} />
            <div className="text-2xl font-bold text-text-primary">&lt; 2s</div>
            <div className="text-sm text-text-secondary">Response Time</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Search Results */}
          <div className="lg:col-span-2 space-y-6">
            {isLoading && (
              <DataCard title="Analyzing Wallet..." variant="walletSummary">
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-600 rounded w-2/3"></div>
                </div>
              </DataCard>
            )}

            {walletData && !isLoading && (
              <>
                <DataCard title={`Wallet Analysis: ${formatAddress(walletData.address)}`} variant="walletSummary">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-text-secondary">Balance</div>
                      <div className="text-lg font-semibold text-text-primary">{walletData.balance}</div>
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Total Value</div>
                      <div className="text-lg font-semibold text-text-primary">{walletData.totalValue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Tokens</div>
                      <div className="text-lg font-semibold text-text-primary">{walletData.tokenCount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">NFTs</div>
                      <div className="text-lg font-semibold text-text-primary">{walletData.nftCount}</div>
                    </div>
                  </div>
                </DataCard>

                <DataCard title="Recent Transactions" variant="transactionList">
                  <div className="space-y-3">
                    {walletData.recentTransactions.map((tx: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-surface/30 rounded-lg">
                        <div>
                          <div className="text-sm font-medium text-text-primary capitalize">{tx.type}</div>
                          <div className="text-xs text-text-secondary">{tx.hash}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-text-primary">{tx.value}</div>
                          <div className="text-xs text-text-secondary">Just now</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </DataCard>

                <ChartWrapper 
                  title="Transaction Volume (7 days)" 
                  variant="transactionFlow"
                  data={generateMockData()}
                />
              </>
            )}

            {!walletData && !isLoading && (
              <div className="text-center py-12">
                <Activity className="mx-auto mb-4 text-text-secondary" size={48} />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Ready to Analyze
                </h3>
                <p className="text-text-secondary">
                  Enter a wallet address or ENS name above to get started
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Wallet Connection & Alerts */}
          <div className="space-y-6">
            <WalletInsights />
            <AlertConfigurator />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Activity className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Instant Lookup</h3>
            <p className="text-text-secondary text-sm">
              Get immediate insights for any wallet or transaction across multiple blockchains.
            </p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <BarChart3 className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Visual Analytics</h3>
            <p className="text-text-secondary text-sm">
              Interactive charts and graphs make complex on-chain data easy to understand.
            </p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Smart Alerts</h3>
            <p className="text-text-secondary text-sm">
              Set custom alerts for important on-chain events and never miss critical activity.
            </p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Portfolio Insights</h3>
            <p className="text-text-secondary text-sm">
              Connect your wallet for personalized insights and portfolio tracking.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
