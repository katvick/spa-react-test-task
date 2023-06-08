import { Container } from 'react-bootstrap';
import { useAppSelector } from '../../hooks';

function ErrorPage(): JSX.Element {
  const errorText = useAppSelector((state) => state.POSTS.errorText);

  return (
    <Container>
      <h1 className="display-5 text-center mt-5">{errorText}</h1>
    </Container>
  )
}

export default ErrorPage;