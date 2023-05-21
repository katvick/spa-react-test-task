import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import NavUser from '../nav-user/nav-user';
import { AppRoute } from '../../const';

function NavBar(): JSX.Element {
  return (
    <Navbar bg="light" expand={false} className="mb-5">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              Меню
            </Offcanvas.Title>
          </Offcanvas.Header>
          
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href={AppRoute.Main}>Список постов</Nav.Link>
              <Nav.Link href={AppRoute.About}>Обо мне</Nav.Link>
              
              <NavUser />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavBar;