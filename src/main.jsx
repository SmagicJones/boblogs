import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Other from "./pages/Other.jsx";
import TOT from "./pages/TOT.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/boblogs/",
    element: <App />,
    children: [
      {
        path: "/boblogs/home",
        element: <Home />,
      },
      {
        path: "/boblogs/tot",
        element: <TOT />,
      },
      {
        path: "/boblogs/other",
        element: <Other />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
