import { Container } from 'react-bootstrap';
import PostsList from '../posts-list/posts-list';
import { useAppSelector } from '../../hooks';
import Search from '../search/search';

function MainContent(): JSX.Element {  
  const posts = useAppSelector((state) => state.POSTS.postsSorted);

  return (
    <main className="main">
      <Container>
        <h1 className="display-5 text-center mb-5">Список постов</h1>
        <Search />
        <PostsList posts={posts}/>
      </Container>
    </main>
  )
}

export default MainContent;