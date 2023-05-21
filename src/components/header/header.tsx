import {
  Container,
 } from 'react-bootstrap';
import NavBar from '../nav-bar/nav-bar';

function Header(): JSX.Element {
  return (
    <header className="header">
      <Container>
        <NavBar />
      </Container>
    </header>
  )
}

export default Header;