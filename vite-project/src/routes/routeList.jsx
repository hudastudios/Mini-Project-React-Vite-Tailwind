import Home from "../components/StartingPage";
import SignUp from "../components/SignUp";
import Dashboard from "../components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import StartingPage from "../components/StartingPage";
import DetailUser from "../components/DetailUser";

export const routeList = [
    {
        path: '/',
        element: <StartingPage></StartingPage>
    },
    {
        path: '/SignUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/Dashboard',
        element: (<ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>)
    },
    {
        path: '/DetailUser/:id',
        element: <DetailUser></DetailUser>
    },

]