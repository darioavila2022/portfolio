import '../App.css'
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-scroll'
import Credly from './Credly';

const AppNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <div data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <Navbar.Brand className="logo">DA</Navbar.Brand>
                </div>

                <Nav className="me-auto">
                    <div data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <Nav.Link href="#home">•</Nav.Link>
                    </div>

                    <Link className="nav-link" activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                        Projects
                    </Link>

                    <div data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <Nav.Link href="#home">•</Nav.Link>
                    </div>

                    <Link className="nav-link" activeClass="active" to="socials" spy={true} smooth={true} duration={500}>
                        Socials
                    </Link>

                </Nav>

                <Nav>
                    <div data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <Credly />
                    </div>
                </Nav>

            </Container>
        </Navbar>
    )
};

export default AppNav;

