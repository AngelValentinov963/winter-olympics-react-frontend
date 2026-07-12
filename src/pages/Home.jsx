import { Link } from "react-router-dom";
import Footer from "../components/Footer"

function Home(){

    return (
        <>

            <div className="container py-5">

                <div className="text-center mb-5">

                    <h1 className="display-4 fw-bold">
                        Winter Olympics Management System
                    </h1>

                    <p className="lead text-secondary">
                        Browse competitions, rankings and medal statistics
                        from the Winter Olympic Games.
                    </p>

                </div>


                <div className="row g-4">


                    <div className="col-lg-4">

                        <div className="card h-100 shadow-sm">

                            <div className="card-body text-center">

                                <div className="display-4 mb-3">
                                    🏆
                                </div>


                                <h4 className="card-title">
                                    Competitions
                                </h4>


                                <p className="card-text">
                                    View all Winter Olympic competitions
                                    and their details.
                                </p>


                                <Link
                                    className="btn btn-primary"
                                    to="/competitions"
                                >
                                    Browse
                                </Link>


                            </div>

                        </div>

                    </div>




                    <div className="col-lg-4">

                        <div className="card h-100 shadow-sm">

                            <div className="card-body text-center">


                                <div className="display-4 mb-3">
                                    🥇
                                </div>


                                <h4 className="card-title">
                                    Rankings
                                </h4>


                                <p className="card-text">
                                    Check the latest athlete rankings
                                    and standings.
                                </p>


                                <Link className="btn btn-primary" to="/rankings">View Rankings</Link>


                            </div>

                        </div>

                    </div>





                    <div className="col-lg-4">

                        <div className="card h-100 shadow-sm">

                            <div className="card-body text-center">


                                <div className="display-4 mb-3">
                                    🌍
                                </div>


                                <h4 className="card-title">
                                    Statistics
                                </h4>


                                <p className="card-text">
                                    Explore medals by country and other
                                    Olympic statistics.
                                </p>


                                <Link
                                    className="btn btn-primary"
                                    to="/statistics"
                                >
                                    View Statistics
                                </Link>


                            </div>

                        </div>

                    </div>


                </div>




            </div>


           <Footer/>

        </>
    );
}


export default Home;