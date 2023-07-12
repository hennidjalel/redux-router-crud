import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// pages
import RootLayout from "./pages/RootLayout";
import Edit from "./pages/Edit";
import Details from "./pages/Details";
import Index from "./pages/Index";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";

// redux
import { Provider } from "react-redux";
import store from "./redux";
import AddPost from "./pages/AddPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "post",
        element: <Index />,
      },
      {
        path: "post/add",
        element: <AddPost />,
      },
      {
        path: "post/:id",
        element: <Details />,
        loader: async ({ params }) => {
          console.log(params.id);
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "please make sure to insert correct id",
              status: 400,
            });
          }
          return null;
        },
      },
      {
        path: "post/:id/edit",
        element: <Edit />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
