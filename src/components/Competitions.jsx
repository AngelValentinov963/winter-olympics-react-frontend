import Footer from "./Footer.jsx"

const competitions = [
  { id: 1, name: "Men's Downhill", discipline: "Alpine Skiing", gender: "Male", minAge: 18, venue: "Alpine Centre" },
  { id: 2, name: "Women's Slalom", discipline: "Alpine Skiing", gender: "Female", minAge: 18, venue: "Alpine Centre" },
  { id: 3, name: "500m Speed Skating", discipline: "Speed Skating", gender: "Mixed", minAge: 16, venue: "Ice Oval" },
  { id: 4, name: "Ice Hockey Final", discipline: "Ice Hockey", gender: "Male", minAge: 18, venue: "National Arena" },
  { id: 5, name: "Figure Skating Free", discipline: "Figure Skating", gender: "Female", minAge: 15, venue: "Ice Palace" },
  { id: 6, name: "Ski Jumping Large Hill", discipline: "Ski Jumping", gender: "Male", minAge: 16, venue: "Jump Tower" },
]

export default function Competitions() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Competitions</h1>
        <p className="mb-8 text-muted-foreground">
          All Winter Olympic competitions currently registered in the system.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {competitions.map((c) => (
            <div
              key={c.id}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {c.discipline}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-card-foreground">{c.name}</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Gender</dt>
                  <dd className="font-medium text-card-foreground">{c.gender}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Minimum age</dt>
                  <dd className="font-medium text-card-foreground">{c.minAge}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Venue</dt>
                  <dd className="font-medium text-card-foreground">{c.venue}</dd>
                </div>
              </dl>
              <button className="mt-5 w-full rounded-lg border border-primary bg-transparent px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                View details
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
