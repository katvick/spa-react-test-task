import { Card } from 'react-bootstrap';

type CommentItemProps = {
  email: string;
  body: string;
}

function CommentItem({email, body}: CommentItemProps): JSX.Element {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title>{email}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CommentItem;