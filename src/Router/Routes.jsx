import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../data.json')
            },
            {
                path: '/donate/:donateId',
                element: <DonationDetails />,
                loader: () => fetch('../data.json')
            },
            {
                path: '/donation',
                element: <Donation />,
                loader: () => fetch('../data.json')
            },
            {
                path: '/statistics',
                element: <Statistics />,
                loader: () => fetch('../data.json')
            },
        ]
    }
])

export default router;