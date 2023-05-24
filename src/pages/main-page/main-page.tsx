import { useEffect } from 'react';
import Header from '../../components/header/header';
import MainContent from '../../components/main-content/main-content';
import { useAppDispatch } from '../../hooks';
import { fetchCommentsAction, fetchPostsAction } from '../../store/api-actions';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
    dispatch(fetchCommentsAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default MainPage;