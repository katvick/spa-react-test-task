import { Image } from 'react-bootstrap';

function NavUser(): JSX.Element {
  return (
    <div className="mt-4 d-flex align-items-center">
      <div className="d-flex justify-content-center">
        <Image
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVH0h1OwJsUSQVr-yAC0L9MzciamkLT1jPh1yDJVJMMbGG4z86qgTeKywIPNGZCAuGw0&usqp=CAU'
          rounded
          height={50}
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