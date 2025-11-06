import { Check, Flame } from 'lucide-react';

const tiers = [
  {
    name: '14 Diamonds',
    price: 'Rp 3.500',
    highlight: false,
    perks: ['Pengiriman cepat', 'Channel resmi', 'E-struk langsung'],
  },
  {
    name: '86 Diamonds',
    price: 'Rp 20.000',
    highlight: true,
    perks: ['Prioritas pengiriman', 'Best value', 'Dukungan 24/7'],
  },
  {
    name: '514 Diamonds',
    price: 'Rp 120.000',
    highlight: false,
    perks: ['Antrian VIP', 'Support premium', 'Promo eksklusif'],
  },
];

export default function Pricing() {
  return (
    <section id="packs" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 via-transparent to-cyan-500/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200/90">
            <Flame size={14} /> Paket Populer
          </span>
          <h2 className="mt-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Pilih paket top up
          </h2>
          <p className="mt-2 text-white/60">Top up instan untuk MLBB. Tanpa login — cukup ID & Server.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border ${t.highlight ? 'border-white/30 bg-white/5' : 'border-white/10 bg-white/5'} p-6 shadow-lg backdrop-blur transition hover:border-white/30`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-gray-900 shadow">PALING HEMAT</div>
              )}
              <h3 className="text-lg font-medium text-white">{t.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-white">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400" /> {p}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-md bg-white py-2.5 font-medium text-gray-900 transition hover:bg-white/90">Beli sekarang</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
