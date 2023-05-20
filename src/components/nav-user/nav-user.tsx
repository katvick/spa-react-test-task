import { Col, Container, Image, Row } from "react-bootstrap";


function NavUser(): JSX.Element {
  return (
    <Container className="mt-4">
      <Row className="d-flex align-items-center">
        <Col md='2'>
          <Image
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVH0h1OwJsUSQVr-yAC0L9MzciamkLT1jPh1yDJVJMMbGG4z86qgTeKywIPNGZCAuGw0&usqp=CAU'
            rounded
            height={40}
          />
        </Col>
        <Col md='6'>
          <span>Екатерина \n katy@ya.ru</span>
        </Col>
      </Row>
    </Container>
    
  )
}

export default NavUser;