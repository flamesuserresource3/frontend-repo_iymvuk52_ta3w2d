import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <FAQ />
      </main>
      <footer id="support" className="border-t border-white/10 bg-black/80 py-10 text-center">
        <p className="text-white/60">Butuh bantuan? Hubungi support@crystaldiamonds.gg</p>
        <p className="mt-2 text-xs text-white/40">Mobile Legends: Bang Bang dan seluruh logo terkait adalah merek dagang dari pemiliknya masing-masing.</p>
      </footer>
    </div>
  );
}

export default App;
