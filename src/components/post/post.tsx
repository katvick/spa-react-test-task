import { Card, Col, Image, Row, } from 'react-bootstrap';
import CommentsList from '../comments-list/comments-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type PostProps = {
  title: string;
  body: string;
}

function Post({title, body}: PostProps): JSX.Element {
  return (
    <Card className='mx-auto my-4'>
      <Card.Body className="post mx-1 my-1">
        <Row className="mb-4">
          <Col className="post d-flex align-items-start">
            <Link to={AppRoute.User} className="avatar avatar--post d-flex justify-content-center">
              <Image
                src='https://m.buro247.ru/images/senina/aiony-haust-3TLl_97HNJo-unspl.jpg'
                roundedCircle
              />
            </Link>
            
            <div className="post__content mx-3">
              <Card.Title>
                {title}
              </Card.Title>

              <Card.Text>
                {body}
              </Card.Text>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <CommentsList />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Post;