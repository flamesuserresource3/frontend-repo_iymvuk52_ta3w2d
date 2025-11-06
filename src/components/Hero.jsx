import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0a0a14] to-black pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-24 text-center sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200/90">
          Top Up Diamond Resmi MLBB
        </span>
        <h1 className="bg-gradient-to-br from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Cepat, Aman, Resmi
          <span className="block text-xl font-normal text-white/70 sm:text-2xl">Layanan top up terpercaya untuk Mobile Legends</span>
        </h1>
        <p className="max-w-2xl text-balance text-white/70">
          Isi diamond Mobile Legends: Bang Bang secara instan. Pembayaran aman, tanpa login akun game, cukup ID & Server.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a href="#packs" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-gray-900 shadow-sm shadow-white/10 transition hover:bg-white/90">
            <Rocket size={18} /> Lihat Paket Diamond
          </a>
          <a href="#faq" className="rounded-md border border-white/20 px-5 py-3 font-medium text-white/80 transition hover:bg-white/10">Cara Kerja</a>
        </div>
      </div>
    </section>
  );
}
