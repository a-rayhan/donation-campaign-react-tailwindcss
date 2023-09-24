import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Statistics from "../Pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../data.json')
            },
            {
                path: '/donate/:donateId',
                element: <DonationDetails />
            },
            {
                path: '/donation',
                element: <Donation />
            },
            {
                path: '/statistics',
                element: <Statistics />
            }
        ]
    }
])

export default router;