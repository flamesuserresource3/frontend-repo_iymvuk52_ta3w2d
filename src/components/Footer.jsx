export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
        <p>
          Dibuat dengan cinta untuk komunitas Pokemon Indonesia. Sumber data: PokéAPI & situs resmi.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} PokeInfo ID</p>
      </div>
    </footer>
  );
}
