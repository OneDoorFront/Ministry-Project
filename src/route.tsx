import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import AuthPage from "./pages/Auth/AuthPage";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Navigate to="/login" replace />, 
    },
    {
        path : '/login',
        element : <AuthPage/>
    },
    {
        path: '/signup',
        element: <AuthPage />,
    },
    {
        path: '/home',
        element: <Home/>
    }
]);

export default router;
