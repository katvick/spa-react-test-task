import { Container } from 'react-bootstrap';
import Post from '../post/post';

function MainContent(): JSX.Element {
  return (
    <main className="main">
      <Container>
        <Post />
        <Post />
        <Post />
      </Container>
    </main>
  )
}

export default MainContent;