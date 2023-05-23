import { Card, Col, Image, Row } from "react-bootstrap";
import { User } from "../../types/user-data";

type UserCardProps = {
  user: User | undefined;
}

function UserCard({user}: UserCardProps): JSX.Element {
  return (
    <Card className='mx-auto mb-5 mt-3'>
      <Card.Body>
        <Row className="my-3 mx-1">
          <Col className="d-flex align-items-start">
            <div className="avatar avatar--user-card d-flex justify-content-center">
              <Image
                src='https://m.buro247.ru/images/senina/aiony-haust-3TLl_97HNJo-unspl.jpg'
                roundedCircle
              />
            </div>
            
            <div className="about-info__content mx-5">
              <Card.Title className="mb-4">
                {user?.name}
              </Card.Title>

              <Card.Text>
                <p><b>Username:</b> {user?.username}</p>
                <p><b>Email:</b> {user?.email}</p>
                <p><b>Phone:</b> {user?.phone}</p>
                <p><b>О компании:</b> {user?.company.name}. {user?.company.catchPhrase}. {user?.company.bs}</p>
                <p><b>Сайт:</b> {user?.website}</p>
              </Card.Text>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default UserCard;