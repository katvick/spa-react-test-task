import { Image } from 'react-bootstrap';

function NavUser(): JSX.Element {
  return (
    <div className="mt-4 d-flex align-items-center">
      <div className="avatar avatar--nav d-flex justify-content-center">
        <Image
          src='https://m.buro247.ru/images/senina/aiony-haust-3TLl_97HNJo-unspl.jpg'
          roundedCircle
        />
      </div>
      <div className="mx-3">
        <span>Екатерина
          <span className="d-block">
            katy@ya.ru
          </span>
        </span>
      </div>
    </div>    
  )
}

export default NavUser;