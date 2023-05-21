import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import BtnComments from '../btn-comments/btn-comments';
import Comment from '../comment/comment';

function CommentsList() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <BtnComments eventKey="1">
            <span>
              Комментарии
            </span>
          </BtnComments>
        </Card.Header>

        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Comment />
            <Comment />
            <Comment />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default CommentsList;