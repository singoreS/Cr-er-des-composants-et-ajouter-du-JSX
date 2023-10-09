import { Outlet } from "react-router-dom";
import Top from "../components/Top/Top";
import Footer from "../components/Footer/Footer";
import ArrowPointing from "../components/ArrowPointing/ArrowPointing";

const RootLayout = () => {
	return (
		<>
			<div className="container">
				<Top />
				<Outlet />
				<Footer />
			</div>
			<ArrowPointing />
		</>
	);
};

export default RootLayout;