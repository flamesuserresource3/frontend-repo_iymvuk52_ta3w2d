import { Check, Flame, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0.99',
    diamonds: '14 Diamonds',
    highlight: false,
    perks: ['Fast delivery', 'Official channel', 'Email receipt'],
  },
  {
    name: 'Pro',
    price: '$4.99',
    diamonds: '86 Diamonds',
    highlight: true,
    perks: ['Priority delivery', 'Best value', '24/7 support'],
  },
  {
    name: 'Elite',
    price: '$24.99',
    diamonds: '514 Diamonds',
    highlight: false,
    perks: ['VIP queue', 'Premium support', 'Exclusive offers'],
  },
];

export default function Pricing() {
  return (
    <section id="packs" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 via-transparent to-cyan-500/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200/90">
            <Flame size={14} /> Popular Packs
          </span>
          <h2 className="mt-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Choose your diamond top-up
          </h2>
          <p className="mt-2 text-white/60">Instant top-up for MLBB and more. No login required — we use your Player ID and Server.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border ${t.highlight ? 'border-white/30 bg-white/5' : 'border-white/10 bg-white/5'} p-6 shadow-lg backdrop-blur transition hover:border-white/30`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-gray-900 shadow">BEST VALUE</div>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">{t.name}</h3>
                <Zap className="text-cyan-300" size={18} />
              </div>
              <p className="mt-2 text-3xl font-semibold text-white">{t.price}</p>
              <p className="text-sm text-white/60">{t.diamonds}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400" /> {p}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-md bg-white py-2.5 font-medium text-gray-900 transition hover:bg-white/90">Buy now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
