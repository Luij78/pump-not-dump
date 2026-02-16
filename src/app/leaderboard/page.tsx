'use client';

import Link from 'next/link';

export default function Leaderboard() {
  const leaders = [
    { rank: 1, name: '$AGENT_X', trustScore: 98, vesting: '12mo', holders: 2341 },
    { rank: 2, name: '$VESTED_AI', trustScore: 96, vesting: '6mo', holders: 1823 },
    { rank: 3, name: '$SAFE_PUMP', trustScore: 94, vesting: '12mo', holders: 1456 },
    { rank: 4, name: '$NORUG', trustScore: 92, vesting: '3mo', holders: 1122 },
    { rank: 5, name: '$TRUST_AI', trustScore: 89, vesting: '6mo', holders: 987 },
  ];

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
                { href: '/leaderboard', label: 'Leaderboard', active: true },
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Leaderboard</span>
          </h1>
          <p className="text-xl text-gray-400">Top vetted tokens ranked by community trust</p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-white/10">
          <div className="space-y-3">
            {leaders.map((token) => (
              <div key={token.rank} className="glass-card rounded-xl p-6 border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${
                      token.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                      token.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                      token.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                      'bg-white/5 text-gray-400'
                    }`}>
                      #{token.rank}
                    </div>
                    <div>
                      <h3 className="font-black text-white text-lg">{token.name}</h3>
                      <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                        <span>🔒 {token.vesting}</span>
                        <span>•</span>
                        <span>👥 {token.holders} holders</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-green-400">{token.trustScore}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Trust Score</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-purple-500/30">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-bold text-purple-400 uppercase tracking-wide">
              Full leaderboard coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
