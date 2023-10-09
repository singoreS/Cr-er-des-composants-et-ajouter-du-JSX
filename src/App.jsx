import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import "./assets/css/index.css";
import "./assets/css/style.css";
import { RouterProvider } from "react-router-dom";
import router from "./services/router";

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;