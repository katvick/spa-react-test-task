import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import BtnComments from '../btn-comments/btn-comments';
import CommentItem from '../comment-item/comment-item';
import { Comment } from '../../types/user-data';

type CommentsListProps = {
  comments: Comment[]
}

function CommentsList({comments}: CommentsListProps): JSX.Element {
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
            {comments.map((comment) => {
              const keyValue = `${comment.id}-comment`
              return (
                <CommentItem
                  key={keyValue}
                  email={comment.email}
                  body={comment.body}
                />
              )
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default CommentsList;