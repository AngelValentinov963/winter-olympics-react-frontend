import { Link } from "react-router-dom";

export default function Card({ image, title, text, to }) {
  return (
    <Link
      to={to}
      className="group block overflow-hidden rounded-2xl bg-[#f5f5f5] shadow-md transition hover:shadow-xl"
    >
      {/* Image */}
      <div className="h-[170px] w-full overflow-hidden">
        <img
        src={image}
        alt={title}
      />
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{text}</p>

        <a
          href={to}
          className="inline-block font-semibold text-blue-600"
        >
          Explore →
        </a>
      </div>
    </Link>
  );
}