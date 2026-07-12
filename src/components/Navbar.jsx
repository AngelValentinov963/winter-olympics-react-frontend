import { Link, NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "Home" },
  { to: "/competitions", label: "Competitions" },
  { to: "/rankings", label: "Rankings" },
  { to: "/statistics", label: "Statistics" },
  { to: "/athlete", label: "Athletes" },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-[70px] items-center justify-between bg-card px-6 shadow-sm md:px-10">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
        <span aria-hidden="true">🏅</span>
        <span>Winter Olympics</span>
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <Link
        to="/login"
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Login
      </Link>
    </nav>
  )
}
