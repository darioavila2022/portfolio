import '../App.css'
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-scroll'
import Credly from './Credly';

const AppNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="logo">DA</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">•</Nav.Link>
                    <Link className="nav-link" activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                        Projects
                    </Link>
                    <Nav.Link href="#home">•</Nav.Link>
                    <Link className="nav-link" activeClass="active" to="socials" spy={true} smooth={true} duration={500}>
                        Socials
                    </Link>
                </Nav>

                <Nav>
                    <Credly />
                </Nav>

            </Container>
        </Navbar>
    )
};

export default AppNav;

