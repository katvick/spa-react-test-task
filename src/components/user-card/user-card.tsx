import { Card, Col, Image, Row } from "react-bootstrap";

function UserCard(): JSX.Element {
  return (
    <Card className='mx-auto mb-5 mt-3'>
      <Card.Body>
        <Row className="my-3 mx-3">
          <Col className="d-flex align-items-center">
            <div className="avatar avatar--user-card d-flex justify-content-center">
              <Image
                src='https://m.buro247.ru/images/senina/aiony-haust-3TLl_97HNJo-unspl.jpg'
                roundedCircle
              />
            </div>
            
            <div className="about-info__content mx-5">
              <Card.Title className="mb-3">
                Sed vulputate
              </Card.Title>

              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl felis, suscipit dictum lacinia eget, tincidunt non sapien. Suspendisse turpis felis, imperdiet vitae purus et, suscipit blandit lorem. Vivamus leo risus, dapibus vel diam in, eleifend iaculis eros. Sed vulputate, nisl quis sagittis maximus, urna est facilisis mauris, non porta nunc risus sed augue.
              </Card.Text>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default UserCard;