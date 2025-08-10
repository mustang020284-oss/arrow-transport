export default function Pricing() {
  const rows = [
    { label: "Koperta", range: "—", price: 300 },
    { label: "Paczka do 5 kg", range: "≤ 5 kg", price: 400 },
    { label: "Paczka 6–10 kg", range: "6–10 kg", price: 500 },
    { label: "Paczka 11–20 kg", range: "11–20 kg", price: 600 },
    { label: "Paczka 21–30 kg", range: "21–30 kg", price: 700 },
  ];

  return (
    <section id="cennik" className="scroll-mt-24 max-w-5xl mx-auto px-4 py-16 text-white">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Cennik</h2>
        <p className="mt-2 text-sm text-gray-300">
          Do podanych cen należy doliczyć <span className="font-semibold">MVA 25%</span>.
        </p>
      </header>

      <div className="overflow-x-auto rounded-lg border border-white/10 bg-white/5 backdrop-blur">
        <table className="min-w-full text-left">
          <thead className="bg-white/10 text-gray-200">
            <tr>
              <th className="px-4 py-3">Rodzaj przesyłki</th>
              <th className="px-4 py-3">Waga / zakres</th>
              <th className="px-4 py-3 text-right">Cena (NOK)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((r) => (
              <tr key={r.label} className="hover:bg-white/5">
                <td className="px-4 py-3">{r.label}</td>
                <td className="px-4 py-3">{r.range}</td>
                <td className="px-4 py-3 text-right font-semibold">{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 text-lg font-semibold">Dopłaty i zasady</h3>
          <ul className="list-disc space-y-2 pl-5 text-gray-200">
            <li>
              <span className="font-semibold">Powyżej 30 kg</span>: dopłata{" "}
              <span className="font-semibold">+300 NOK</span> +{" "}
              <span className="font-semibold">+30 NOK</span> za każdy dodatkowy kilogram.
            </li>
            <li>
              <span className="font-semibold">Paczki niestandardowe</span> (owalne, elementy wystające, walizki):{" "}
              dopłata <span className="font-semibold">+100 NOK</span>.
            </li>
            <li>
              <span className="font-semibold">Przesyłki dłużycowe</span> (powyżej 150 cm): dopłata{" "}
              <span className="font-semibold">+250 NOK</span>.
            </li>
            <li>
              Współpraca z DHL – paczkę z dowolnej lokalizacji w Polsce odbiera kurier DHL.
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 text-lg font-semibold">Wytyczne DHL</h3>
          <ul className="list-disc space-y-2 pl-5 text-gray-200">
            <li>Maksymalne wymiary paczki dla DHL: <span className="font-semibold">0.6 × 0.6 × 0.6 m</span>.</li>
            <li>Maksymalna waga jednej paczki: <span className="font-semibold">30 kg</span>.</li>
            <li>Paczka powinna być zapakowana w karton/pudło.</li>
            <li>
              Przekroczenie wymiarów traktowane jako przesyłka niestandardowa – DHL pobiera{" "}
              <span className="font-semibold">+100 NOK</span>; w takim przypadku również my możemy naliczyć
              dodatkową opłatę.
            </li>
            <li>Prosimy o dokładne podanie wymiarów i wagi przed zleceniem odbioru.</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-400">
        * Ceny orientacyjne. Zastrzegamy możliwość korekt w przypadku przesyłek odbiegających od standardu.
      </p>
    </section>
  );
}
