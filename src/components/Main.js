import { Link } from "react-router-dom";
import resume from '../data/resume.pdf'
import { main } from '../data/main'
import { Container } from "react-bootstrap";
import '../App.css'

const photo = "https://i.postimg.cc/R9jGqR4Z/IMG-20190917-190205-754.jpg";
const techs = "https://i.postimg.cc/DzVgpHMY/mern.png";

const Main = () => {
    return (
        <Container>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">

                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000">

                            <img src={techs} height="30" className="mx-0 mb-4"></img>
                            <h4 className="display-8 fw-bold lh-5 subtitle">Web developer student</h4>
                            <h1 className="display-4 fw-bold lh-5 mt-2 mytitle">Darío Ávila</h1>
                            <h1 className="lead mt-2 content">
                                I'm a former English teacher, now a MERN web developer student with a passion for creating new things. I love playing music and sharing experiences with others. I would like you to see the projects I've been working on.
                            </h1>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-4">

                            <div data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1000">

                                <a href={resume} target="_blank">
                                    <button type="button" className="btn btn-dark btn-lg px-4 me-md-2 btns">
                                        <h6 className="mb-0">
                                            Download CV
                                        </h6>
                                    </button>
                                </a>

                                <Link to="mailto:darioaaron.avila@gmail.com?subject='Hello from the web!'&body='Just popped in to say hello. Let's talk business.'">
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 btns">
                                        <h6 className="mb-0">
                                            Email Me
                                        </h6>
                                    </button>
                                </Link>
                            </div>


                        </div>

                    </div>


                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg d-flex justify-content-center">
                        <img src={photo} width="600" alt="Front"></img>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Main;
