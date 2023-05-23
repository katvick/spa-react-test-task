import { Container } from 'react-bootstrap';
import PostsList from '../posts-list/posts-list';
import { useAppSelector } from '../../hooks';

function MainContent(): JSX.Element {  
  const posts = useAppSelector((state) => state.POSTS.posts);

  return (
    <main className="main">
      <Container>
        <h1 className="display-5 text-center mb-5">Список постов</h1>
        <PostsList posts={posts}/>
      </Container>
    </main>
  )
}

export default MainContent;