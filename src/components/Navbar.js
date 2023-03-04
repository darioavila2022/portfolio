import '../App.css'
import { Container, Nav, Navbar } from "react-bootstrap";

const AppNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="logo" href="#home">Darío Ávila </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">• Projects</Nav.Link>
                    <Nav.Link href="#features">•  Socials</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default AppNav;

