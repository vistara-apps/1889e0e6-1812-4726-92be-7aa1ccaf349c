export const SUBSCRIPTION_TIERS = {
  FREE: {
    name: 'Free',
    price: 0,
    lookups: 10,
    alerts: 1,
    features: ['Basic wallet lookup', 'Simple visualizations', '1 custom alert']
  },
  PRO: {
    name: 'Pro',
    price: 15,
    lookups: -1, // unlimited
    alerts: 10,
    features: ['Unlimited lookups', 'Advanced visualizations', '10 custom alerts', 'Historical data']
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 'Custom',
    lookups: -1,
    alerts: -1,
    features: ['API access', 'Bulk analysis', 'Dedicated support', 'Custom integrations']
  }
} as const;

export const SUPPORTED_CHAINS = [
  { id: 1, name: 'Ethereum', symbol: 'ETH' },
  { id: 8453, name: 'Base', symbol: 'ETH' },
  { id: 137, name: 'Polygon', symbol: 'MATIC' },
  { id: 42161, name: 'Arbitrum', symbol: 'ETH' },
  { id: 10, name: 'Optimism', symbol: 'ETH' }
] as const;

export const EVENT_TYPES = [
  { value: 'large_transfer_in', label: 'Large Transfer In' },
  { value: 'large_transfer_out', label: 'Large Transfer Out' },
  { value: 'smart_contract_interaction', label: 'Smart Contract Interaction' },
  { value: 'token_swap', label: 'Token Swap' }
] as const;

export const DEMO_ADDRESSES = [
  '0x742d35Cc6634C0532925a3b8D',
  '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
  '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
] as const;

export const API_ENDPOINTS = {
  ALCHEMY: 'https://eth-mainnet.g.alchemy.com/v2/',
  AIRSTACK: 'https://api.airstack.xyz/gql',
  OPENAI: 'https://api.openai.com/v1/chat/completions'
} as const;
