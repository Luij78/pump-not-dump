'use client';

import Link from 'next/link';

export default function Docs() {
  const sections = [
    {
      title: 'Getting Started',
      items: [
        'What is pump.notdump.fun?',
        'How vesting works',
        'Launching your first token',
        'Understanding risk scores',
      ],
    },
    {
      title: 'For Creators',
      items: [
        'Token launch guide',
        'Vesting period selection',
        'Distribution strategies',
        'Post-launch best practices',
      ],
    },
    {
      title: 'For Investors',
      items: [
        'How to scan tokens',
        'Reading trust scores',
        'Community voting',
        'Spotting red flags',
      ],
    },
    {
      title: 'Technical',
      items: [
        'Smart contract architecture',
        'Solana program details',
        'API documentation',
        'Integration guides',
      ],
    },
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
                { href: '/leaderboard', label: 'Leaderboard' },
                { href: '/analytics', label: 'Analytics' },
                { href: '/docs', label: 'Docs', active: true },
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Documentation</span>
          </h1>
          <p className="text-xl text-gray-400">Everything you need to know about the protocol</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="glass-card rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-all">
              <h2 className="text-2xl font-black text-white mb-6">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border border-purple-500/20">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-2xl font-black text-white mb-4">Full Documentation Coming Soon</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Comprehensive guides, tutorials, and technical documentation will be available before mainnet launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Luij78/pumpnotdump"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-bold text-white glass-card rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500/50"
              >
                View on GitHub
              </a>
              <span className="px-6 py-3 font-mono text-sm text-gray-500 glass-card rounded-xl border border-white/5">
                Program ID: D5Hsj...QBvB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
