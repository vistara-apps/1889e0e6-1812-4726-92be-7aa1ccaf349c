'use client';

import { ReactNode } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface ChartWrapperProps {
  title: string;
  variant?: 'tokenBalance' | 'transactionFlow';
  data?: any[];
  children?: ReactNode;
}

export function ChartWrapper({ 
  title, 
  variant = 'tokenBalance',
  data = [],
  children 
}: ChartWrapperProps) {
  const sampleData = data.length > 0 ? data : [
    { name: 'Mon', value: 1200 },
    { name: 'Tue', value: 1900 },
    { name: 'Wed', value: 1600 },
    { name: 'Thu', value: 2100 },
    { name: 'Fri', value: 1800 },
    { name: 'Sat', value: 2400 },
    { name: 'Sun', value: 2200 },
  ];

  const renderChart = () => {
    if (children) return children;

    if (variant === 'transactionFlow') {
      return (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px'
              }} 
            />
            <Bar dataKey="value" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#EC4899" stopOpacity={0.3}/>
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px'
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#8B5CF6" 
            strokeWidth={2}
            dot={{ fill: '#EC4899', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-text-primary mb-4">{title}</h3>
      {renderChart()}
    </div>
  );
}
