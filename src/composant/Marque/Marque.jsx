import ListMarques from "./ListMarques";
import "./ListMarques.css";
const Marque = ({ img }) => {
	return (
		<a href="#">
			<img src={`img/${img}`} alt="" key={crypto.randomUUID()} />
		</a>
	);
};

export default Marque;
