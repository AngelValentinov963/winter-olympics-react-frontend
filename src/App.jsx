import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Athlete from "./pages/Athlete"
import RankingPage from "./pages/Rankings";

function App(){

    return (

        <BrowserRouter>

            <Navbar />


            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />


                <Route
                    path="/competitions"
                    element={<h1>Competitions</h1>}
                />


                <Route
                    path="/rankings"
                    element={<RankingPage/>}
                />


                <Route
                    path="/statistics"
                    element={<Statistics/>}
                />

                <Route path="/athlete" element={<Athlete/>}
                />

                <Route
                    path="/login"
                    element={<h1>Login</h1>}
                />

            </Routes>


        </BrowserRouter>

    );
}


export default App;