import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
	return (
		<nav className="menu">
			<Link to={"/"}>home</Link>
			<Link to={"/services"}>services</Link>
			<a href="projects.html">projects</a>
			<a href="blog.html">blog</a>
			<a href="#">contact</a>
		</nav>
	);
};

export default Menu;
