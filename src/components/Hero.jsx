import Spline from "@splinetool/react-spline";
import { Flame, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6hA5k6Q2Xq0oSHQv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 rounded-full px-3 py-1 mb-5">
          <Flame className="h-3.5 w-3.5" /> PokeInfo Indonesia
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
          Semua Informasi Pokemon dalam Bahasa Indonesia
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Cek weakness/kelemahan tiap tipe, lihat Pokemon terbaru, dan baca berita terkini seputar dunia Pokemon. Simple, cepat, dan informatif.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#pokedex" className="px-5 py-3 rounded-lg bg-black text-white font-medium shadow hover:shadow-md">Mulai Jelajah Pokedex</a>
          <a href="#berita" className="px-5 py-3 rounded-lg bg-white border border-gray-200 font-medium shadow-sm hover:shadow">Lihat Berita Terbaru</a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
          <ShieldCheck className="h-4 w-4" /> Data dari PokéAPI & sumber resmi
        </div>
      </div>
    </section>
  );
}
