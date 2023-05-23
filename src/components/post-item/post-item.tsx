import { Card, Col, Image, Row, } from 'react-bootstrap';
import CommentsList from '../comments-list/comments-list';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

type PostItemProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostItem({userId, id, title, body}: PostItemProps): JSX.Element {
  const comments = useAppSelector((state) => state.POSTS.comments);
  const commentsByPost = comments.filter((comment) => id === comment.postId);

  const linkUserCard = generatePath(AppRoute.UserCard, {id: String(userId)})

  return (
    <Card className='my-4 mx-auto' style={{ width: '80%' }}>
      <Card.Body className="post mx-1 my-1">
        <Row className="mb-4">
          <Col className="post d-flex align-items-start">
            <Link to={linkUserCard} className="avatar avatar--post d-flex justify-content-center">
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
            <CommentsList comments={commentsByPost}/>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default PostItem;