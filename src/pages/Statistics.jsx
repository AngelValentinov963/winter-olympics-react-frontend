import Footer from "../components/Footer.jsx"

const competitions = [
  { id: 1, name: "Men's Downhill", allowedGender: "Male", minAge: 18 },
  { id: 2, name: "Women's Slalom", allowedGender: "Female", minAge: 18 },
  { id: 3, name: "500m Speed Skating", allowedGender: "Mixed", minAge: 16 },
  { id: 4, name: "Figure Skating Free", allowedGender: "Female", minAge: 15 },
]

const medalTable = {
  Norway: 16,
  Germany: 12,
  Canada: 11,
  "United States": 9,
  Japan: 7,
  Austria: 6,
}

const averageAge = 24.8
const youngestMedalist = { firstName: "Mila", lastName: "Andersen", country: "Norway", age: 16 }
const oldestMedalist = { firstName: "Viktor", lastName: "Petrov", country: "Russia", age: 38 }

function StatCard({ label, children }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <div className="mt-2 text-card-foreground">{children}</div>
    </div>
  )
}

export default function Statistics() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Olympic Statistics</h1>
        <p className="mb-10 text-muted-foreground">
          Aggregated results, medal standings and athlete insights.
        </p>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Competitions</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-5 py-3 font-semibold">Gender</th>
                  <th className="px-5 py-3 font-semibold">Min Age</th>
                  <th className="px-5 py-3 text-right font-semibold">Results</th>
                </tr>
              </thead>
              <tbody>
                {competitions.map((c) => (
                  <tr key={c.id} className="border-t border-border">
                    <td className="px-5 py-3 font-medium text-card-foreground">{c.name}</td>
                    <td className="px-5 py-3 text-muted-foreground">{c.allowedGender}</td>
                    <td className="px-5 py-3 text-muted-foreground">{c.minAge}</td>
                    <td className="px-5 py-3 text-right">
                      <button className="rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                        Results
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold text-foreground">Medal Table</h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-5 py-3 font-semibold">Country</th>
                  <th className="px-5 py-3 text-right font-semibold">Medals</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(medalTable).map(([country, medals]) => (
                  <tr key={country} className="border-t border-border">
                    <td className="px-5 py-3 font-medium text-card-foreground">{country}</td>
                    <td className="px-5 py-3 text-right font-semibold text-card-foreground">{medals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 sm:grid-cols-3">
          <StatCard label="Average Age">
            <span className="text-3xl font-bold">{averageAge}</span>
          </StatCard>
          <StatCard label="Youngest Medalist">
            <span className="text-lg font-semibold">
              {youngestMedalist.firstName} {youngestMedalist.lastName}
            </span>
            <span className="block text-sm text-muted-foreground">
              {youngestMedalist.country} · {youngestMedalist.age} yrs
            </span>
          </StatCard>
          <StatCard label="Oldest Medalist">
            <span className="text-lg font-semibold">
              {oldestMedalist.firstName} {oldestMedalist.lastName}
            </span>
            <span className="block text-sm text-muted-foreground">
              {oldestMedalist.country} · {oldestMedalist.age} yrs
            </span>
          </StatCard>
        </section>
      </main>

      <Footer />
    </>
  )
}
