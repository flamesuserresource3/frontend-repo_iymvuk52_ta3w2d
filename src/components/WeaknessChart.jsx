const TYPES = [
  "normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"
];

const TYPE_COLORS = {
  normal: "bg-stone-400/80", fire: "bg-orange-500/80", water: "bg-sky-500/80", electric: "bg-yellow-400/80",
  grass: "bg-green-500/80", ice: "bg-cyan-400/80", fighting: "bg-red-600/80", poison: "bg-purple-500/80",
  ground: "bg-amber-600/80", flying: "bg-indigo-400/80", psychic: "bg-pink-500/80", bug: "bg-lime-500/80",
  rock: "bg-yellow-700/80", ghost: "bg-violet-600/80", dragon: "bg-indigo-700/80", dark: "bg-zinc-700/80",
  steel: "bg-slate-500/80", fairy: "bg-rose-400/80",
};

function Badge({ type }) {
  return (
    <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wide ${TYPE_COLORS[type]}`}>
      {type}
    </span>
  );
}

export default function WeaknessChart() {
  return (
    <section id="pokedex" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Chart Kelemahan Tipe</h2>
            <p className="text-gray-600 mt-1">Pahami efektivitas serangan antartipe. 2× = sangat efektif, 0.5× = kurang efektif, 0× = tidak berefek.</p>
          </div>
        </div>

        <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left font-semibold sticky left-0 bg-gray-50">Serang →</th>
                {TYPES.map((t) => (
                  <th key={t} className="p-3 text-center font-semibold uppercase text-xs text-gray-600">{t}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TYPES.map((atk) => (
                <tr key={atk} className="border-t">
                  <td className="p-3 sticky left-0 bg-white"><Badge type={atk} /></td>
                  {TYPES.map((def) => (
                    <td key={def} className="p-2 text-center align-middle">
                      {renderMultiplier(atk, def)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Basic effectiveness chart derived from standard type matchups
const EFFECTIVENESS = {
  normal: { rock: 0.5, ghost: 0, steel: 0.5 },
  fire: { grass: 2, ice: 2, bug: 2, steel: 2, fire: 0.5, water: 0.5, rock: 0.5, dragon: 0.5 },
  water: { fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, dragon: 0.5 },
  electric: { water: 2, flying: 2, ground: 0, electric: 0.5, grass: 0.5, dragon: 0.5 },
  grass: { water: 2, ground: 2, rock: 2, fire: 0.5, grass: 0.5, poison: 0.5, flying: 0.5, bug: 0.5, dragon: 0.5, steel: 0.5 },
  ice: { grass: 2, ground: 2, flying: 2, dragon: 2, fire: 0.5, water: 0.5, ice: 0.5, steel: 0.5 },
  fighting: { normal: 2, ice: 2, rock: 2, dark: 2, steel: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, fairy: 0.5, ghost: 0 },
  poison: { grass: 2, fairy: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0 },
  ground: { fire: 2, electric: 2, poison: 2, rock: 2, steel: 2, grass: 0.5, bug: 0.5, flying: 0 },
  flying: { grass: 2, fighting: 2, bug: 2, electric: 0.5, rock: 0.5, steel: 0.5 },
  psychic: { fighting: 2, poison: 2, psychic: 0.5, steel: 0.5, dark: 0 },
  bug: { grass: 2, psychic: 2, dark: 2, fire: 0.5, fighting: 0.5, poison: 0.5, flying: 0.5, ghost: 0.5, steel: 0.5, fairy: 0.5 },
  rock: { fire: 2, ice: 2, flying: 2, bug: 2, fighting: 0.5, ground: 0.5, steel: 0.5 },
  ghost: { psychic: 2, ghost: 2, dark: 0.5, normal: 0 },
  dragon: { dragon: 2, steel: 0.5, fairy: 0 },
  dark: { psychic: 2, ghost: 2, fighting: 0.5, dark: 0.5, fairy: 0.5 },
  steel: { ice: 2, rock: 2, fairy: 2, fire: 0.5, water: 0.5, electric: 0.5, steel: 0.5 },
  fairy: { fighting: 2, dragon: 2, dark: 2, fire: 0.5, poison: 0.5, steel: 0.5 },
};

function renderMultiplier(atk, def) {
  const mult = EFFECTIVENESS[atk]?.[def] ?? 1;
  if (mult === 1) return <span className="text-gray-400">1×</span>;
  const cls = mult === 2 ? "text-emerald-700 font-semibold" : mult === 0.5 ? "text-amber-700 font-semibold" : "text-red-700 font-bold";
  return <span className={cls}>{mult === 0 ? "0×" : `${mult}×`}</span>;
}
