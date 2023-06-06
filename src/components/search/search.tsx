import { Button, Form, InputGroup } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks';
import { ChangeEvent, useState } from 'react';
import { searchPosts } from '../../store/posts/reducer';

function Search(): JSX.Element {
  const dispatch = useAppDispatch();

  const [searchData, setSearchData] = useState('');

  const inputChangeHandle = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target;
    setSearchData(value);
  }

  const setSearchPhraseHandle = () => {
    console.log(searchData);
    dispatch(searchPosts({searchPhrase: searchData}))
  }

  return (
    <InputGroup className="mb-3 mx-auto" style={{ width: '80%' }}>
      <Form.Control
        placeholder="Введите запрос"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={inputChangeHandle}
        value={searchData}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={setSearchPhraseHandle}>
        Поиск
      </Button>
    </InputGroup>
  )
}

export default Search;
