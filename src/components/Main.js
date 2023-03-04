import { Link } from "react-router-dom";
import resume from '../assets/resume.pdf'
import { main } from '../assets/main'

const Main = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg">

                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">

                        <h1 className="display-8 fw-bold lh-5">Web developer student</h1>
                        <h1 className="display-3 fw-bold lh-5">Darío Ávila</h1>
                        <p className="lead">I'm a former English teacher, now a MERN web developer student with a passion for creating new things. I love playing music and sharing experiences with others. I would like you to see the projects I've been working on.</p>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            {/* <button type="button" className="btn btn-dark btn-lg px-4 me-md-2 fw-bold">Download CV</button> */}

                            <Link to={resume} role="button">

                                <button type="button" className="btn btn-dark btn-lg px-4 me-md-2 fw-bold">
                                    Download CV
                                </button>
                            </Link>

                            <Link to="mailto:darioaaron.avila@gmail.com?subject='Hello from the web!'&body='Just popped in to say hello. Let's talk business.'">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Email Me</button>
                            </Link>

                        </div>
                    </div>




                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src="https://i.postimg.cc/R9jGqR4Z/IMG-20190917-190205-754.jpg" width="600" alt="Front"></img>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Main;
