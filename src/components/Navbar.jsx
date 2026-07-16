import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo_color.svg";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav
      className="
        sticky top-0 z-50
        h-[70px]
        bg-card
        shadow-sm
      "
    >
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
        {/* Left */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          <img
            src={logo}
            alt="Winter Olympics logo"
            className="h-20 w-20"
          />
          <span>Winter Olympics</span>
        </Link>

        {/* Center */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8">
          <NavLink
            to="/competitions"
            className="transition hover:text-primary"
          >
            Competitions
          </NavLink>

          <NavLink
            to="/rankings"
            className="transition hover:text-primary"
          >
            Rankings
          </NavLink>

          <NavLink
            to="/statistics"
            className="transition hover:text-primary"
          >
            Statistics
          </NavLink>
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center gap-4">
          {user?.role === "ATHLETE" && (
            <NavLink
              to="/athlete"
              className="rounded-lg bg-primary px-5 py-2 font-medium text-white"
            >
              Register Athlete
            </NavLink>
          )}

          <Link
            to="/login"
            className="rounded-lg bg-primary px-5 py-2 font-medium text-white hover:opacity-90"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}