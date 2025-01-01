<<<<<<< HEAD
import App from './App.jsx';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
=======
import App from './App.jsx';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
>>>>>>> 986ee8d3cf1e869787cd259d2201e481d36b55da
