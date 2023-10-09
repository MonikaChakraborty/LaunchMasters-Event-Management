
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import Partners from "../pages/Partners/Partners";
import Subscribe from "../pages/Subscribe/Subscribe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/services/:name',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/partners',
                element: <Partners></Partners>
            },
            {
                path: '/subscribe',
                element: <Subscribe></Subscribe>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
           
        ]
    }
]);  


export default router;