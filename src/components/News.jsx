import { Newspaper, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function News() {
  const [articles, setArticles] = useState([
    {
      title: "Update DLC Terbaru: Area dan Pokemon Baru!",
      excerpt: "Ekspansi terbaru menghadirkan area eksplorasi baru dan beberapa spesies yang kembali.",
      url: "https://www.pokemon.com/us/pokemon-news/",
      date: "2025-01-10",
    },
    {
      title: "Event Raid Spesial Minggu Ini",
      excerpt: "Siapkan tim terbaikmu untuk menghadapi boss Tera Raid dengan hadiah eksklusif!",
      url: "https://scarletviolet.pokemon.com/en-us/tera-raid-battles/",
      date: "2025-01-05",
    },
  ]);

  useEffect(() => {
    // In production, fetch from backend that aggregates Pokemon news safely
    // setArticles(fetched)
  }, []);

  return (
    <section id="berita" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-black text-white grid place-items-center">
            <Newspaper className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Berita Pokemon Terbaru</h2>
            <p className="text-gray-600">Sorotan resmi dan event komunitas terbaru.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a key={a.title} href={a.url} target="_blank" rel="noreferrer" className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-gray-500">{new Date(a.date).toLocaleDateString("id-ID")}</p>
                  <h3 className="mt-1 font-semibold group-hover:underline">{a.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-black" />
              </div>
              <p className="mt-3 text-sm text-gray-600">{a.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
