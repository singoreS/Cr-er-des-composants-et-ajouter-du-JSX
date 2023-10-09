import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../components/HomePage/HomePage";
import ServicePage from "../components/ServicePage/ServicePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "services",
				element: <ServicePage />,
			},
		],
	},
]);

export default router;