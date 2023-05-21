import { Col, Container, Image, Row } from "react-bootstrap";
function NavUser(): JSX.Element {
  return (
    <Container className="mt-4">
      <Row className="d-flex align-items-center">
        <Col md="2" className="d-flex justify-content-center">
          <Image
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVH0h1OwJsUSQVr-yAC0L9MzciamkLT1jPh1yDJVJMMbGG4z86qgTeKywIPNGZCAuGw0&usqp=CAU'
            rounded
            height={50}
          />
        </Col>
        <Col md="6">
          <span>Екатерина
            <span className="d-block">
              katy@ya.ru
            </span>
          </span>
        </Col>
      </Row>
    </Container>
    
  )
}

export default NavUser;