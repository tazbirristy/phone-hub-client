import { createBrowserRouter } from "react-router-dom";
import Main from "./../../layout/Main/Main";
import Error from "./../../components/Error/Error";
import Home from "./../../pages/Home/Home/Home";
import About from "./../../pages/About/About";
import Blog from "./../../pages/Blog/Blog";
import Login from "./../../pages/Home/Login/Login/Login";
import Register from "./../../pages/Home/Login/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
