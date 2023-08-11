import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import HomePage from "./pages/HomePage/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/oferta",
        element: (
          <>
            <div>Oferta</div>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "/oferta/wesele",
            element: <h1>Wesele</h1>,
          },
        ],
      },
      {
        path: "/kontakt",
        element: <div>Kontakt</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
