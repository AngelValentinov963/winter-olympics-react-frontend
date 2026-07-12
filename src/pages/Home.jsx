import { Link } from "react-router-dom"
import Footer from "../components/Footer.jsx"

const cards = [
  {
    icon: "🏆",
    title: "Competitions",
    text: "View all Winter Olympic competitions and their details.",
    to: "/competitions",
    cta: "Browse",
  },
  {
    icon: "🥇",
    title: "Rankings",
    text: "Check the latest athlete rankings and standings.",
    to: "/rankings",
    cta: "View Rankings",
  },
  {
    icon: "🌍",
    title: "Statistics",
    text: "Explore medals by country and other Olympic statistics.",
    to: "/statistics",
    cta: "View Statistics",
  },
]

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-14 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Winter Olympics Management System
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Browse competitions, rankings and medal statistics from the Winter Olympic Games.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-5xl" aria-hidden="true">
                {card.icon}
              </div>
              <h2 className="mb-2 text-xl font-semibold text-card-foreground">{card.title}</h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">{card.text}</p>
              <Link
                to={card.to}
                className="mt-auto rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
