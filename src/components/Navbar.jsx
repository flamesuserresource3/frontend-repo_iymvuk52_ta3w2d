import { ShoppingCart, ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-fuchsia-500 shadow-lg shadow-fuchsia-500/30 transition-transform group-hover:rotate-6" />
          <span className="text-white/90 transition-colors group-hover:text-white">
            Lumos Diamond
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#packs" className="transition hover:text-white">
            Diamond MLBB
          </a>
          <a href="#faq" className="transition hover:text-white">
            Pusat Bantuan
          </a>
          <a href="#support" className="transition hover:text-white">
            Kontak
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300/90 sm:flex">
            <ShieldCheck size={14} /> Transaksi Aman
          </span>
          <a
            href="#packs"
            className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-white/90"
          >
            <ShoppingCart size={16} /> Beli Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
