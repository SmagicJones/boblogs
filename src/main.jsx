import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Test from "./pages/Test.jsx";
import Other from "./pages/Other.jsx";

const router = createBrowserRouter([
  {
    path: "/boblogs/",
    element: <App />,
    children: [
      {
        path: "/boblogs/test",
        element: <Test />,
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
