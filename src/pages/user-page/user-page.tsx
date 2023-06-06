import { useEffect } from 'react';
import UserContent from '../../components/user-content/user-content';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchPostsAction, fetchUsersAction } from '../../store/api-actions';
import LoadingPage from '../loading-page/loading-page';

function UserPage(): JSX.Element {
  const posts = useAppSelector((state) => state.POSTS.postsDefault);
  const comments = useAppSelector((state) => state.POSTS.comments);
  const users = useAppSelector((state) => state.USER.users);

  const isPostsLoading = useAppSelector((state) => state.POSTS.isPostsLoading);
  const isCommentsLoading = useAppSelector((state) => state.POSTS.isCommentsLoading);
  const isUsersLoading = useAppSelector((state) => state.USER.isUsersLoading)

  const dispatch = useAppDispatch();

  const checkData = posts.length === 0 || comments.length === 0 || users.length === 0;
  const checkLoading = isPostsLoading || isCommentsLoading || isUsersLoading;

  const isDataLoading = checkData || checkLoading;

  useEffect(() => {
    dispatch(fetchPostsAction());
    dispatch(fetchCommentsAction());
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <>
      {
        isDataLoading
          ? <LoadingPage />
          : <UserContent />
      }
    </>
  )
}

export default UserPage;