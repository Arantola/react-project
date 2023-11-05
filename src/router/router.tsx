import { createBrowserRouter } from 'react-router-dom';

import { fetchDataWithID } from '../services/apiService';

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
        loader: async ({ params }) => {
          const data = await fetchDataWithID(params.id || '');
          return data;
        },
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
