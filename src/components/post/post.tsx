import { Card, Col, Image, Row, } from 'react-bootstrap';
import CommentsList from '../comments-list/comments-list';

function Post(): JSX.Element {
  return (
    <Card className='mx-auto my-4'>
      <Card.Body className="post">
        <Row className="mb-4">
          <Col className="post d-flex align-items-start">
            <div className="user-avatar d-flex  justify-content-center">
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVH0h1OwJsUSQVr-yAC0L9MzciamkLT1jPh1yDJVJMMbGG4z86qgTeKywIPNGZCAuGw0&usqp=CAU'
                rounded
                height={70}
              />
            </div>
            
            <div className="post__content mx-2">
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