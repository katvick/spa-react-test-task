import { Container } from 'react-bootstrap';
import PostsListMain from '../posts-list-main/posts-list-main';

function MainContent(): JSX.Element {  
  return (
    <main className="main">
      <Container>
        <h1 className="display-5 mb-5">Список постов</h1>
        <PostsListMain />
      </Container>
    </main>
  )
}

export default MainContent;