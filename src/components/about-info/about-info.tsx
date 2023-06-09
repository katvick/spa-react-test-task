import { Card, Col, Image, Row, } from 'react-bootstrap';

function AboutInfo(): JSX.Element {
  return (
        <Row className="my-4">
          <Col md="3" className="px-4 mb-4">
            <div className="avatar avatar--about d-flex">
              <Image
                src='img/about.jpg'
                roundedCircle
              />
            </div>
          </Col>

          <Col className="px-4">
            <Card.Title className="mb-3">
              Столярова Екатерина
            </Card.Title>

            <Card.Text style={{fontSize: 16}}>
              <p>
                Я начинающий Frontend-разработчик. Мне очень нравится создавать красивые и удобные интерфейсы.
              </p>
              <p>
                Почему я решила этим заниматься?
              </p>
              <p>
                Долгое время работала в сфере маркетинга, разрабатывала интернет-рекламу. Давно думала о смене сферы деятельности. При обучении в университете заметила, что мне нравится работать с сайтами, их версткой и дизайном, нравится разбираться в их функционале. Какое-то время выбирала между дизайном и разработкой и остановилась на втором.
              </p>
              <p>
              3 года назад начала обучение. За это время я прошла несколько курсов. Изучила много разных технологий:
              </p>
              
              <ul>
                <li>HTML, CSS</li>
                <li>JavaScript ES6</li>
                <li>TypeScript</li>
                <li>React, React+Redux, ReactRouter, ReactHooks, Redux toolkit</li>
                <li>npm, Webpack, Babel</li>
                <li>REST API</li>
              </ul>

              <p>
                Освоила систему контроля версий git. Верстала проекты с использованием БЭМ. Умею пользоваться графическими редакторами Figma, Photoshop.
              </p>              
            </Card.Text>
          </Col>
        </Row>
  )
}

export default AboutInfo;