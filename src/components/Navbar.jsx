import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="
      sticky top-0 z-50
      flex h-[70px]
      items-center justify-between
      bg-card
      px-6
      shadow-sm
      md:px-10
    ">

      <Link 
        to="/"
        className="text-xl font-bold text-primary"
      >
        🏅 Winter Olympics
      </Link>


      <div className="flex items-center gap-6">

        <NavLink
          to="/competitions"
          className="hover:text-primary transition"
        >
          Competitions
        </NavLink>


        <NavLink
          to="/rankings"
          className="hover:text-primary transition"
        >
          Rankings
        </NavLink>


        <NavLink
          to="/statistics"
          className="hover:text-primary transition"
        >
          Statistics
        </NavLink>


        {user?.role === "ATHLETE" && (
          <NavLink
            to="/athlete"
            className="rounded-lg bg-primary px-5 py-2 text-white font-medium"
          >
            Register Athlete
          </NavLink>
        )}



        <Link

          to="/login"
          className="
            rounded-lg
            bg-primary
            px-5 py-2
            text-white
            font-medium
            hover:opacity-90
          "
        >
          Login
        </Link>

      </div>

    </nav>
  );
}