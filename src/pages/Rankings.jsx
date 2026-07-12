import Footer from "../components/Footer.jsx"

const rankings = [
  { rank: 1, name: "Erik Lindqvist", country: "Norway", event: "Men's Downhill", points: 1000 },
  { rank: 2, name: "Hans Muller", country: "Germany", event: "Men's Downhill", points: 940 },
  { rank: 3, name: "Marco Rossi", country: "Italy", event: "Men's Downhill", points: 880 },
  { rank: 4, name: "Anna Kovac", country: "Austria", event: "Women's Slalom", points: 860 },
  { rank: 5, name: "Yuki Tanaka", country: "Japan", event: "500m Speed Skating", points: 820 },
  { rank: 6, name: "Sofia Petrova", country: "Russia", event: "Figure Skating", points: 800 },
  { rank: 7, name: "Liam O'Connor", country: "Canada", event: "Ice Hockey", points: 780 },
  { rank: 8, name: "Emma Berg", country: "Sweden", event: "Women's Slalom", points: 760 },
]

function medalClass(rank) {
  if (rank === 1) return "bg-yellow-100 text-yellow-800"
  if (rank === 2) return "bg-gray-200 text-gray-700"
  if (rank === 3) return "bg-orange-100 text-orange-800"
  return "bg-secondary text-secondary-foreground"
}

export default function Rankings() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Rankings</h1>
        <p className="mb-8 text-muted-foreground">
          Latest athlete rankings and standings across all events.
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Rank</th>
                <th className="px-5 py-3 font-semibold">Athlete</th>
                <th className="px-5 py-3 font-semibold">Country</th>
                <th className="px-5 py-3 font-semibold">Event</th>
                <th className="px-5 py-3 text-right font-semibold">Points</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((r) => (
                <tr key={r.rank} className="border-t border-border">
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${medalClass(
                        r.rank,
                      )}`}
                    >
                      {r.rank}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-medium text-card-foreground">{r.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{r.country}</td>
                  <td className="px-5 py-3 text-muted-foreground">{r.event}</td>
                  <td className="px-5 py-3 text-right font-semibold text-card-foreground">{r.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </>
  )
}
