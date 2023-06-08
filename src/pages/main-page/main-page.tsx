import { useEffect } from 'react';
import Header from '../../components/header/header';
import MainContent from '../../components/main-content/main-content';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchPostsAction } from '../../store/api-actions';
import LoadingPage from '../loading-page/loading-page';
import ErrorPage from '../error-page/error-page';

function MainPage(): JSX.Element {
  const posts = useAppSelector((state) => state.POSTS.postsDefault);
  const comments = useAppSelector((state) => state.POSTS.comments);
  const isPostsLoading = useAppSelector((state) => state.POSTS.isPostsLoading);
  const isCommentsLoading = useAppSelector((state) => state.POSTS.isCommentsLoading);
  const errorPostLoading = useAppSelector((state) => state.POSTS.errorPostLoading);
  const errorCommentsLoading = useAppSelector((state) => state.POSTS.errorCommentsLoading);

  const dispatch = useAppDispatch();

  const checkData = posts.length === 0 || comments.length === 0;
  const checkLoading = isPostsLoading || isCommentsLoading;
  const checkError = errorPostLoading || errorCommentsLoading;

  const isDataLoading = checkData || checkLoading;

  useEffect(() => {
    dispatch(fetchPostsAction())
    dispatch(fetchCommentsAction());
  }, [dispatch]);

  if (checkError) {
    return <ErrorPage />
  }

  return (
    <>
      <Header />
      {
        isDataLoading
          ? <LoadingPage />
          : <MainContent />
      }
    </>
  )
}

export default MainPage;