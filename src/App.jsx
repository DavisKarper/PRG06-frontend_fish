import { useEffect, useState } from 'react'
import "leaflet/dist/leaflet.css";
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import Main from './pages/Main';
import Create from './pages/Create';
import Details from './pages/Details';
import Edit from './pages/Edit';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
        loader: async () => {
          try {
            const response = await fetch('http://145.24.223.116:8004/fishes/', {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              },
            });
            const data = await response.json();
            return { chessSpots: data.items };
          } catch (error) {
            console.error('Er is een fout opgetreden:', error);
            throw new Error('Fout bij het ophalen van data.');
          }
        },
      },
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/chessSpot/:id',
        element: <Details />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`https://prg06-node-express.antwan.eu/spots/${params.id}`, {
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
        path: '/chessSpot/edit/:id',
        element: <Edit />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`https://prg06-node-express.antwan.eu/spots/${params.id}`, {
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

export default App
