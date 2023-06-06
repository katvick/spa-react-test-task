import { Form, InputGroup } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks';
import { ChangeEvent } from 'react';
import { searchPosts } from '../../store/posts/reducer';

function Search(): JSX.Element {
  const dispatch = useAppDispatch();

  const inputChangeHandle = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target;
    dispatch(searchPosts({searchPhrase: value}))
  }

  return (
    <InputGroup className="mb-3 mx-auto" style={{ width: '80%' }}>
      <Form.Control
        type="search"
        placeholder="Введите запрос"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={inputChangeHandle}
      >
      </Form.Control>
    </InputGroup>
  )
}

export default Search;
