import {
  Container,
  Row,
  Col,

 } from 'react-bootstrap';
import NavBar from '../nav-bar/nav-bar';

function Header(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
    </Container>
  )
}

export default Header;