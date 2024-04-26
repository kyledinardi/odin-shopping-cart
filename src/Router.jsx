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
