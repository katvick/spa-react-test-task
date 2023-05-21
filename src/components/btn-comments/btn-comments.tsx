import { Button } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

type BtnCommentsProps = {
  children: JSX.Element,
  eventKey: string,
}

function BtnComments({ children, eventKey }: BtnCommentsProps) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <div className="d-grid gap-2">
      <Button
        variant="outline-secondary"
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    </div>
  );
}

export default BtnComments;