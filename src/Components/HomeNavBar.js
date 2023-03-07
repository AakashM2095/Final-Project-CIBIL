import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export function HomeNavBar() {
    return (
        <>
            <div className="shadow p-3 mt-0 mb-2 bg-white text-white rounded"  style={{ fontFamily: 'serif' }}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            src="Logo.png"
                            width="60"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand><h3> Cibil System </h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="text-white justify-content-end">
                        <Nav className="ml-auto">
                            <LinkContainer to={'/'}>
                                <Nav.Link className="mx-3"><h5> Home </h5></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/about'}>
                                <Nav.Link className="mx-3"><h5> About </h5></Nav.Link>
                            </LinkContainer>
                            <h5><NavDropdown
                                id="nav-dropdown-dark-example"
                                title="SignUp"
                                menuVariant=""
                                >
                                <NavDropdown.Item>
                                    <LinkContainer to={'/regUser'}>
                                        <Nav.Link> User </Nav.Link>
                                    </LinkContainer>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <LinkContainer to={'/regBank'}>
                                        <Nav.Link> Bank </Nav.Link>
                                    </LinkContainer>
                                </NavDropdown.Item>
                            </NavDropdown></h5>
                            <LinkContainer to={'/login'}>
                                <Nav.Link className="mx-3"><h5> Login </h5></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}
