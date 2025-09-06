'use client';

import { useState } from 'react';
import { Bell, Plus, X } from 'lucide-react';

interface Alert {
  id: string;
  address: string;
  eventType: string;
  threshold: string;
  status: 'active' | 'inactive';
}

interface AlertConfiguratorProps {
  variant?: 'light' | 'default';
}

export function AlertConfigurator({ variant = 'default' }: AlertConfiguratorProps) {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      address: '0x742d35Cc6634C0532925a3b8D',
      eventType: 'Large Transfer Out',
      threshold: '> 1000 USDC',
      status: 'active'
    }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newAlert, setNewAlert] = useState({
    address: '',
    eventType: 'Large Transfer Out',
    threshold: ''
  });

  const handleAddAlert = () => {
    if (newAlert.address && newAlert.threshold) {
      const alert: Alert = {
        id: Date.now().toString(),
        ...newAlert,
        status: 'active'
      };
      setAlerts([...alerts, alert]);
      setNewAlert({ address: '', eventType: 'Large Transfer Out', threshold: '' });
      setShowForm(false);
    }
  };

  const handleRemoveAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <Bell size={20} />
          Alert Configuration
        </h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-secondary flex items-center gap-2"
        >
          <Plus size={16} />
          Add Alert
        </button>
      </div>

      {showForm && (
        <div className="mb-6 p-4 bg-surface/40 rounded-lg border border-gray-600/30">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Wallet address"
              value={newAlert.address}
              onChange={(e) => setNewAlert({ ...newAlert, address: e.target.value })}
              className="input-field w-full"
            />
            <select
              value={newAlert.eventType}
              onChange={(e) => setNewAlert({ ...newAlert, eventType: e.target.value })}
              className="input-field w-full"
            >
              <option value="Large Transfer Out">Large Transfer Out</option>
              <option value="Large Transfer In">Large Transfer In</option>
              <option value="Smart Contract Interaction">Smart Contract Interaction</option>
              <option value="Token Swap">Token Swap</option>
            </select>
            <input
              type="text"
              placeholder="Threshold (e.g., > 1000 USDC)"
              value={newAlert.threshold}
              onChange={(e) => setNewAlert({ ...newAlert, threshold: e.target.value })}
              className="input-field w-full"
            />
            <div className="flex gap-2">
              <button onClick={handleAddAlert} className="btn-primary">
                Create Alert
              </button>
              <button 
                onClick={() => setShowForm(false)} 
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center justify-between p-3 bg-surface/30 rounded-lg border border-gray-600/20">
            <div className="flex-1">
              <div className="text-sm text-text-primary font-medium">
                {alert.eventType}
              </div>
              <div className="text-xs text-text-secondary">
                {alert.address.slice(0, 10)}...{alert.address.slice(-8)} • {alert.threshold}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 text-xs rounded-full ${
                alert.status === 'active' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-gray-500/20 text-gray-400'
              }`}>
                {alert.status}
              </span>
              <button
                onClick={() => handleRemoveAlert(alert.id)}
                className="text-red-400 hover:text-red-300 transition-colors duration-200"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
