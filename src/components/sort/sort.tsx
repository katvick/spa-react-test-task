import { ToggleButton } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks';
import { useState } from 'react';
import { cancelSortPosts, sortPosts } from '../../store/posts/reducer';

function Sort(): JSX.Element {
  const [checked, setChecked] = useState(false);

  const dispatch = useAppDispatch();

  if (checked === true) {
    dispatch(sortPosts());
  } else {
    dispatch(cancelSortPosts());
  }

  return (
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => {
          setChecked(e.currentTarget.checked);

        }}
      >
        <b>a-z</b>
      </ToggleButton>
  )
}

export default Sort;