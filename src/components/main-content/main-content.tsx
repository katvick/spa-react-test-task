import { Container } from 'react-bootstrap';
import Post from '../post/post';

function MainContent(): JSX.Element {
  return (
    <main className="main">
      <Container>
        <h1 className="display-5 mb-5">Список постов</h1>
        <Post />
        <Post />
        <Post />
      </Container>
    </main>
  )
}

export default MainContent;