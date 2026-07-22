import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAthlete } from "../api/athleteApi";

import Navbar from "../components/Navbar";
import keycloak from "../auth/keycloak";

function AthletePage() {

    const [athlete, setAthlete] = useState(null);

    const { id } = useParams();

useEffect(() => {
    const token = localStorage.getItem("token");

    getAthlete(id, token)
        .then(res => setAthlete(res.data))
        .catch(console.error);
}, [id]);

    if (!athlete) {
        return (
            <>
                <div className="container mt-5">
                    Loading...
                </div>
            </>
        );
    }

    return (
        <>

            <div className="container mt-5">
                <h2>
                    {athlete.firstName} {athlete.lastName}
                </h2>

                <p>
                    <strong>Country:</strong> {athlete.country}
                </p>

                <p>
                    <strong>Gender:</strong> {athlete.gender}
                </p>

                <p>
                    <strong>Birth Date:</strong> {athlete.birthDate}
                </p>
            </div>
        </>
    );
}

export default AthletePage;