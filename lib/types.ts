export interface User {
  userId: string;
  farcasterId: string;
  connectedWalletAddress?: string;
  subscriptionTier: 'free' | 'pro' | 'enterprise';
  alertSettings: AlertSettings;
}

export interface WatchedAddress {
  address: string;
  userId: string;
  blockchain: string;
}

export interface Alert {
  alertId: string;
  userId: string;
  address: string;
  eventType: 'large_transfer_in' | 'large_transfer_out' | 'smart_contract_interaction' | 'token_swap';
  threshold: string;
  status: 'active' | 'inactive';
  createdAt: Date;
}

export interface AlertSettings {
  maxAlerts: number;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export interface WalletData {
  address: string;
  balance: string;
  tokenBalances: TokenBalance[];
  recentTransactions: Transaction[];
  nftCount: number;
  defiPositions: DefiPosition[];
}

export interface TokenBalance {
  token: string;
  symbol: string;
  balance: string;
  value: string;
  price: string;
}

export interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: Date;
  type: 'send' | 'receive' | 'swap' | 'contract';
  status: 'success' | 'failed' | 'pending';
}

export interface DefiPosition {
  protocol: string;
  type: 'lending' | 'borrowing' | 'staking' | 'liquidity';
  value: string;
  apy: string;
}

export interface ChartData {
  name: string;
  value: number;
  timestamp?: Date;
}
