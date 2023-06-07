import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import AboutPage from '../../pages/about-page/about-page';
import UserPage from '../../pages/user-page/user-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.About}
          element={<AboutPage />}
        />
        <Route
          path={AppRoute.UserCard}
          element={<UserPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
