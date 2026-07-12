import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                🏅 Winter Olympics
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/competitions">Competitions</Link>
                <Link to="/rankings">Rankings</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/athlete">Athletes</Link>
            </div>

            <button className="login-btn">
                Login
            </button>
        </nav>
    );
}