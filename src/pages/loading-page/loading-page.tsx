import { Container, Spinner } from 'react-bootstrap';

function LoadingPage(): JSX.Element {
  return (
    <Container>
      <div className="spinner-wrapper mt-5 d-flex justify-content-center">
        <Spinner animation="border" role="status" />
      </div>
    </Container>
  )
}

export default LoadingPage;