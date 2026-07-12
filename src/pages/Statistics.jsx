import { Link } from "react-router-dom";

function StatisticsPage({
    competitions = [],
    medalTable = {},
    averageAge,
    youngestMedalist,
    oldestMedalist
}) {
    return (
        <div className="container mt-4">

            <h2>Olympic Statistics</h2>

            <hr />

            <h3>Competitions</h3>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Min Age</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {competitions.map((competition) => (
                        <tr key={competition.id}>
                            <td>{competition.name}</td>
                            <td>{competition.allowedGender}</td>
                            <td>{competition.minAge}</td>

                            <td>
                                <Link
                                    to={`/statistics/${competition.id}`}
                                    className="btn btn-primary"
                                >
                                    Results
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr />

            <h3>Medal Table</h3>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Medals</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.entries(medalTable).map(([country, medals]) => (
                        <tr key={country}>
                            <td>{country}</td>
                            <td>{medals}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr />

            <h3>Average Age</h3>

            <h4>{averageAge}</h4>

            <hr />

            <h3>Youngest Medalist</h3>

            {youngestMedalist && (
                <div>
                    <b>
                        {youngestMedalist.firstName}{" "}
                        {youngestMedalist.lastName}
                    </b>{" "}
                    ({youngestMedalist.country})
                </div>
            )}

            <hr />

            <h3>Oldest Medalist</h3>

            {oldestMedalist && (
                <div>
                    <b>
                        {oldestMedalist.firstName}{" "}
                        {oldestMedalist.lastName}
                    </b>{" "}
                    ({oldestMedalist.country})
                </div>
            )}

        </div>
    );
}

export default StatisticsPage;