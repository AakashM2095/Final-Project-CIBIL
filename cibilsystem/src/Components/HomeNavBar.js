import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export function HomeNavBar() {
    return (
        <>
            <div class="shadow p-3 mb-5 bg-white rounded">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            src="Logo.png"
                            width="80"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home"><h3> Cibil System </h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <LinkContainer to={'/'}>
                                <Nav.Link  className="mx-3"><h4> Home </h4></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/about'}>
                                <Nav.Link  className="mx-3"><h4> About </h4></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/login'}>
                                <Nav.Link  className="mx-3"><h4> Login </h4></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}
