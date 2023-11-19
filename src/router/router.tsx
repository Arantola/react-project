import { createBrowserRouter } from 'react-router-dom';

import Catalog from '../pages/Catalog/Catalog';
import CardDetails from '../components/CardDetails/CardDetails';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalog />,
    children: [
      {
        path: ':id',
        element: <CardDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
