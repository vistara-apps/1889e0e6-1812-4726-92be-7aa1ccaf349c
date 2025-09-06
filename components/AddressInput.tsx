'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface AddressInputProps {
  onSearch: (address: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function AddressInput({ 
  onSearch, 
  placeholder = "Wallet address or ENS name",
  disabled = false 
}: AddressInputProps) {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="input-field w-full pr-12"
      />
      <button
        type="submit"
        disabled={disabled || !address.trim()}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-primary transition-colors duration-200 disabled:opacity-50"
      >
        <Search size={20} />
      </button>
    </form>
  );
}
