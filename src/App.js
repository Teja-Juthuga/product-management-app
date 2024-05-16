import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductProvider } from './contexts/ProductContext';
import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListPage />,
  },
  {
    path : "/add",
    element : <AddProductPage/>
  }
]);

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default App;
