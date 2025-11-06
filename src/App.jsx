import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeaknessChart from "./components/WeaknessChart";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WeaknessChart />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
