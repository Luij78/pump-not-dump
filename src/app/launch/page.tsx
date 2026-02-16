'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Launch() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#030014]">
      <nav className="glass-nav border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-black text-xl">P</span>
              </div>
              <div className="hidden sm:block text-lg font-black text-white tracking-tight">
                pump<span className="text-purple-400">.</span>notdump<span className="text-pink-400">.</span>fun
              </div>
            </Link>
            <div className="flex items-center gap-2">
              {[
                { href: '/scanner', label: 'Scanner' },
                { href: '/vote', label: 'Vote' },
                { href: '/monitor', label: 'Monitor' },
                { href: '/leaderboard', label: 'Leaderboard' },
                { href: '/analytics', label: 'Analytics' },
                { href: '/docs', label: 'Docs' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tight">
            Launch Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Token</span>
          </h1>
          <p className="text-xl text-gray-400">Deploy an AI agent token with mandatory vesting</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-all ${
                step >= num ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' : 'bg-white/5 text-gray-600'
              }`}>
                {num}
              </div>
              {num < 4 && (
                <div className={`w-12 h-1 mx-2 rounded transition-all ${
                  step > num ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white/5'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Token Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Token Name</label>
                  <input type="text" placeholder="My AI Agent Token" className="w-full px-4 py-3 glass-card rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-white/5" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Symbol</label>
                  <input type="text" placeholder="$AGENT" className="w-full px-4 py-3 glass-card rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-white/5" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Supply</label>
                  <input type="number" placeholder="1000000000" className="w-full px-4 py-3 glass-card rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-white/5" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Vesting Schedule</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {['3 Months', '6 Months', '12 Months'].map((period) => (
                  <button key={period} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/50 transition-all text-center">
                    <div className="text-3xl font-black text-purple-400 mb-2">{period.split(' ')[0]}</div>
                    <div className="text-sm text-gray-400">months</div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6 text-center">
                Your creator allocation will unlock linearly over this period. No exceptions.
              </p>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Distribution</h2>
              <div className="space-y-4">
                {[
                  { label: 'Creator (Vested)', value: '20%', color: 'purple' },
                  { label: 'Public Sale', value: '50%', color: 'pink' },
                  { label: 'Liquidity Pool', value: '20%', color: 'cyan' },
                  { label: 'Marketing', value: '10%', color: 'green' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between glass-card rounded-xl p-4 border border-white/5">
                    <span className="font-medium text-gray-300">{item.label}</span>
                    <span className={`font-black text-${item.color}-400 text-lg`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-2xl font-black text-white mb-4">Review & Launch</h2>
              <p className="text-gray-400 mb-8">
                Double check everything. Once deployed, the vesting schedule is immutable.
              </p>
              <button className="px-8 py-4 font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all">
                Deploy Token
              </button>
            </div>
          )}

          <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/5">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="px-6 py-3 font-bold text-gray-400 hover:text-white transition-colors">
                ← Back
              </button>
            ) : <div />}
            {step < 4 && (
              <button onClick={() => setStep(step + 1)} className="px-6 py-3 font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all">
                Continue →
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-purple-500/30">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-bold text-purple-400 uppercase tracking-wide">
              Mainnet launch coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
