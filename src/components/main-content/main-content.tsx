import { Container } from 'react-bootstrap';
import PostsList from '../posts-list/posts-list';
import { useAppSelector } from '../../hooks';
import Search from '../search/search';
import Sort from '../sort/sort';

function MainContent(): JSX.Element {  
  const posts = useAppSelector((state) => state.POSTS.postsSorted);

  return (
    <main className="main">
      <Container>
        <div className="wrapper-list-posts mx-auto" style={{ width: '80%' }}>
          <h1 className="display-5 text-center mb-5">Список постов</h1>
          <Search />
          <Sort />
          <PostsList posts={posts}/>
        </div>
      </Container>
    </main>
  )
}

export default MainContent;