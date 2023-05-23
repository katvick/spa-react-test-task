import { Container } from 'react-bootstrap';
import AboutInfo from '../about-info/about-info';

function AboutContent(): JSX.Element {
  return (
    <main className="main">
      <Container>
        <h1 className="display-5 text-center mb-5">Обо мне</h1>
        <AboutInfo />
      </Container>
    </main>
  )
}

export default AboutContent;