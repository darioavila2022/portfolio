import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div  >
            <nav className="  navbar navbar-expand navbar-dark bg-dark " aria-label="Second navbar example">

                <div className="container-fluid ">
                    <a className="navbar-brand">DARÍO ÁVILA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample02">
                        <ul className="navbar-nav me-auto ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Socials</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;

