import { Button, Form, InputGroup } from 'react-bootstrap';

function Search(): JSX.Element {
  return (
    <InputGroup className="mb-3 mx-auto" style={{ width: '80%' }}>
      <Form.Control
        placeholder="Введите запрос"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Искать
      </Button>
    </InputGroup>
  )
}

export default Search;
