import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Competitions from "./components/Competitions.jsx"
import Rankings from "./pages/Rankings.jsx"
import Statistics from "./pages/Statistics.jsx"
import Athlete from "./pages/RegisterAthlete.jsx"
import LoginPage from "./pages/LoginPage.jsx"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/athlete" element={<Athlete />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  )
}
