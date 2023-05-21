import { Card, Col, Image, Row, } from 'react-bootstrap';
import CommentsList from '../comments-list/comments-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Post(): JSX.Element {
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
                Card Title
              </Card.Title>

              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl felis, suscipit dictum lacinia eget, tincidunt non sapien. Suspendisse turpis felis, imperdiet vitae purus et, suscipit blandit lorem. Vivamus leo risus, dapibus vel diam in, eleifend iaculis eros. Sed vulputate, nisl quis sagittis maximus, urna est facilisis mauris, non porta nunc risus sed augue. Nam dolor velit, fringilla a commodo sit amet, luctus ac urna. Nam a porttitor ligula. Vestibulum suscipit odio nec dui accumsan placerat. Sed placerat massa mi, vitae accumsan nisi blandit et. Donec convallis urna sit amet sollicitudin elementum. Aenean pellentesque blandit ipsum at lacinia.
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