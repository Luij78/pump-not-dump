'use client';

import Link from 'next/link';

export default function Vote() {
  const tokens = [
    { name: '$AGENT_X', votes: 1247, trend: 'up', vestingCompliant: true },
    { name: '$VESTED_AI', votes: 892, trend: 'up', vestingCompliant: true },
    { name: '$SAFE_PUMP', votes: 654, trend: 'neutral', vestingCompliant: true },
    { name: '$NORUG', votes: 423, trend: 'down', vestingCompliant: false },
  ];

  return (
    <div className="min-h-screen bg-[#030014]">
      {/* Navigation */}
      <nav className="glass-nav border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
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
                { href: '/scanner', label: 'Scanner' },
                { href: '/vote', label: 'Vote', active: true },
                { href: '/monitor', label: 'Monitor' },
                { href: '/leaderboard', label: 'Leaderboard' },
                { href: '/analytics', label: 'Analytics' },
                { href: '/docs', label: 'Docs' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    link.active ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tight">
            Community <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Voting</span>
          </h1>
          <p className="text-xl text-gray-400">
            Vote on token legitimacy and help build trust scores
          </p>
        </div>

        <div className="space-y-4">
          {tokens.map((token) => (
            <div key={token.name} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-white">
                    {token.name.charAt(1)}
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg">{token.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {token.vestingCompliant && (
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 font-bold">
                          ✓ Vesting Compliant
                        </span>
                      )}
                      <span className="text-sm text-gray-500">{token.votes} votes</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 font-bold transition-all">
                    👍 Legit
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 font-bold transition-all">
                    👎 Sus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-purple-500/30">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-bold text-purple-400 uppercase tracking-wide">
              Full voting system coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
