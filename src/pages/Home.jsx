import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import background from "../assets/image_milano_olympics.avif";
import Card from "../components/Card";
import competitionsImg from "../assets/competitions.avif";
import rankingsImg from "../assets/rankings.avif";
import statisticsImg from "../assets/statistics.avif";

const cards = [
  {
    image: competitionsImg,
    title: "Competitions",
    text: "View all Winter Olympic competitions and their details.",
    to: "/competitions",
  },
  {
    image: rankingsImg,
    title: "Rankings",
    text: "Check the latest athlete rankings and standings.",
    to: "/rankings",
  },
  {
    image: statisticsImg,
    title: "Statistics",
    text: "Explore medals by country and other Olympic statistics.",
    to: "/statistics",
  },
];

export default function Home() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <main className="relative z-10">

  {/* Hero Section */}
  <section className="mx-auto flex min-h-[90vh] max-w-6xl items-center px-6">
    <div className="max-w-2xl">
      <h1 className="text-5xl font-bold text-white">
        Winter Olympics Management System
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-gray-200">
        Browse competitions, rankings and medal statistics from the Winter Olympic Games.
      </p>
    </div>
  </section>

  {/* Cards Section */}
  <section className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="mb-10 text-left text-3xl font-bold">
        Explore
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
  {cards.map((card) => (
    <Card
      key={card.title}
      image={card.image}
      title={card.title}
      text={card.text}
      to={card.to}
    />
  ))}
</div>
    </div>
  </section>

</main>
      </div>

      <Footer />
    </>
  );
}