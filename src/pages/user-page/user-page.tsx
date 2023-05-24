import { useEffect } from 'react';
import UserContent from "../../components/user-content/user-content";
import { useAppDispatch } from '../../hooks';
import { fetchCommentsAction, fetchPostsAction, fetchUsersAction } from '../../store/api-actions';

function UserPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
    dispatch(fetchCommentsAction());
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <UserContent />
  )
}

export default UserPage;