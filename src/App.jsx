import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <HowItWorks />
        <FAQ />
      </main>
      <footer id="support" className="border-t border-white/10 bg-black/80 py-10 text-center">
        <p className="text-white/60">Need help? Contact support@crystaldiamonds.gg</p>
        <p className="mt-2 text-xs text-white/40">Mobile Legends: Bang Bang and all related logos are trademarks of their respective owners.</p>
      </footer>
    </div>
  );
}

export default App;
