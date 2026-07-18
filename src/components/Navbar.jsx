import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo_color.svg";
import { getUserFromToken } from "../auth/tokenUtils";

export default function Navbar() {

  const user = getUserFromToken();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    navigate("/login");
  };


  return (
    <nav className="sticky top-0 z-50 h-[70px] bg-card shadow-sm">

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

          <NavLink to="/competitions">
            Competitions
          </NavLink>

          <NavLink to="/rankings">
            Rankings
          </NavLink>

          <NavLink to="/statistics">
            Statistics
          </NavLink>

        </div>


        {/* Right */}
        <div className="ml-auto flex items-center gap-4">

          {user?.roles.includes("athlete") && (
            <NavLink
              to="/athlete"
              className="rounded-lg bg-primary px-5 py-2 font-medium text-white"
            >
              Register Athlete
            </NavLink>
          )}


          {user ? (
            <button
              onClick={logout}
              className="rounded-lg bg-primary px-5 py-2 font-medium text-white hover:opacity-90"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-primary px-5 py-2 font-medium text-white hover:opacity-90"
            >
              Login
            </Link>
          )}

        </div>

      </div>
    </nav>
  );
}