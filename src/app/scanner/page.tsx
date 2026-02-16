'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Scanner() {
  const [address, setAddress] = useState('');
  const [scanning, setScanning] = useState(false);
  const [lastScan, setLastScan] = useState<Date | null>(null);

  async function handleScan(e: React.FormEvent) {
    e.preventDefault();
    setScanning(true);
    // Simulate scan
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLastScan(new Date());
    setScanning(false);
  }

  return (
    <div className="min-h-screen bg-[#030014]">
      {/* Navigation */}
      <nav className="glass-nav border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="text-white font-black text-xl">P</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-black text-white tracking-tight">
                  pump<span className="text-purple-400">.</span>notdump<span className="text-pink-400">.</span>fun
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              {[
                { href: '/scanner', label: 'Scanner', active: true },
                { href: '/vote', label: 'Vote' },
                { href: '/monitor', label: 'Monitor' },
                { href: '/leaderboard', label: 'Leaderboard' },
                { href: '/analytics', label: 'Analytics' },
                { href: '/docs', label: 'Docs' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    link.active
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/launch"
                className="ml-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all"
              >
                Launch Token
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tight">
            Token <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Scanner</span>
          </h1>
          <p className="text-xl text-gray-400">
            Analyze any Solana token for vesting compliance and rug-pull risk
          </p>
        </div>

        {/* Scanner Form */}
        <form onSubmit={handleScan} className="glass-card rounded-3xl p-8 sm:p-10 mb-8 border border-white/10">
          <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
            Token Address
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Solana token address..."
              className="flex-1 px-6 py-4 glass-card rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all border border-white/5 focus:border-purple-500/50"
              required
            />
            <button
              type="submit"
              disabled={scanning}
              className="px-8 py-4 font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {scanning ? 'Scanning...' : 'Scan Token'}
            </button>
          </div>
          {lastScan && (
            <div className="mt-4 text-sm text-gray-500">
              Last scan: {lastScan.toLocaleString()}
            </div>
          )}
        </form>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🔒',
              title: 'Vesting Status',
              desc: 'Check if creator tokens are locked and vesting schedule',
            },
            {
              icon: '📊',
              title: 'Holder Distribution',
              desc: 'Analyze token distribution and concentration risk',
            },
            {
              icon: '🛡️',
              title: 'Risk Score',
              desc: 'Comprehensive rug-pull risk assessment',
            },
            {
              icon: '💧',
              title: 'Liquidity Analysis',
              desc: 'Verify liquidity pool locks and depth',
            },
            {
              icon: '👥',
              title: 'Creator Profile',
              desc: 'Review creator history and reputation',
            },
            {
              icon: '📈',
              title: 'Price Impact',
              desc: 'Estimate price impact of large trades',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 hover:scale-105 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-black text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Coming Soon Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-purple-500/30">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-bold text-purple-400 uppercase tracking-wide">
              Full scanner coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
