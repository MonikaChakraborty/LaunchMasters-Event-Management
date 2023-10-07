
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Dashboard from "../pages/Dashboard/Dashboard";
import Resources from "../pages/Resources/Resources";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/resources',
                element: <Resources></Resources>
            }
        ]
    }
]);  


export default router;