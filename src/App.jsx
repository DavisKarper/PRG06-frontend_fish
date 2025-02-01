import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import Main from './pages/Main';
import Create from './pages/Create';
import Details from './pages/Details';
import Edit from './pages/Edit';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/fish/:id',
        element: <Details />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/fishes/${params.id}`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              },
            });

            if (!response.ok) {
              throw new Error('Fout bij het ophalen van de gegevens.');
            }

            return await response.json();
          } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            throw new Error('Fout bij het ophalen van data.');
          }
        },
      },
      {
        path: '/fish/edit/:id',
        element: <Edit />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/fishes/${params.id}`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              },
            });

            if (!response.ok) {
              throw new Error('Fout bij het ophalen van de gegevens.');
            }

            return await response.json();
          } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            throw new Error('Fout bij het ophalen van data.');
          }
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
