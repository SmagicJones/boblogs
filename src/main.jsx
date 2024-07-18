import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bridge from "./pages/Bridge.jsx";
import TOT from "./pages/TOT.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/boblogs",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/tot",
        element: <TOT />,
      },
      {
        path: "/bridgfest",
        element: <Bridge />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
