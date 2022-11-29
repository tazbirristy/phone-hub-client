import { createBrowserRouter } from "react-router-dom";
import Main from "./../../layout/Main/Main";
import Error from "./../../components/Error/Error";
import Home from "./../../pages/Home/Home/Home";
import About from "./../../pages/About/About";
import Blog from "./../../pages/Blog/Blog";
import Login from "./../../pages/Home/Login/Login/Login";
import Register from "./../../pages/Home/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CategoryProducts from "../../pages/Home/Categories/CategoryProducts/CategoryProducts";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import SellersRoute from "../SellersRoute/SellersRoute";
import MyProducts from "../../pages/Dashboard/Seller/MyProducts/MyProducts";
import AddProducts from "../../pages/Dashboard/Seller/AddProducts/AddProducts";
import MyBookings from "../../pages/Dashboard/Buyers/MyBookings/MyBookings";
import WishList from "../../pages/Dashboard/Buyers/WishList/WishList";
import Payment from "../../pages/Dashboard/Payment/Payment";

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
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <CategoryProducts></CategoryProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://phone-hub-server.vercel.app/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellersRoute>
            <MyProducts></MyProducts>
          </SellersRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellersRoute>
            <AddProducts></AddProducts>
          </SellersRoute>
        ),
      },
      {
        path: "/dashboard/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://phone-hub-server.vercel.app/booking/${params.id}`),
      },
    ],
  },
]);
