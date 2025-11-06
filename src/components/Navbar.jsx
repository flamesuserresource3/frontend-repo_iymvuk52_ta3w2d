import { Sparkles, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600 grid place-items-center text-white shadow-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">PokeInfo ID</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#beranda" className="hover:text-black transition-colors">Beranda</a>
          <a href="#pokedex" className="hover:text-black transition-colors">Pokedex</a>
          <a href="#berita" className="hover:text-black transition-colors">Berita</a>
        </nav>
        <a
          href="#pokedex"
          className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-3 py-2 text-sm font-medium shadow hover:shadow-md active:scale-[0.99] transition"
        >
          <Search className="h-4 w-4" />
          Cari Pokemon
        </a>
      </div>
    </header>
  );
}
