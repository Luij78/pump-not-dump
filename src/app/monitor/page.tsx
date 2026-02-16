'use client';

import Link from 'next/link';

export default function Monitor() {
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
                { href: '/monitor', label: 'Monitor', active: true },
                { href: '/leaderboard', label: 'Leaderboard' },
                { href: '/analytics', label: 'Analytics' },
                { href: '/docs', label: 'Docs' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-all ${link.active ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  {link.label}
                </Link>
              ))}
              <Link href="/launch" className="ml-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all">
                Launch Token
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tight">
            Token <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Monitor</span>
          </h1>
          <p className="text-xl text-gray-400">Real-time tracking of all launched tokens</p>
        </div>

        <div className="glass-card rounded-3xl p-12 text-center border border-white/10">
          <div className="text-6xl mb-6">📡</div>
          <h2 className="text-2xl font-black text-white mb-4">Monitor Dashboard Coming Soon</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Track vesting schedules, unlock events, and real-time token metrics all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
