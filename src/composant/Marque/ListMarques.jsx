import "./ListMarques.css";
import Article from "../Article/Article";
import Marque from "./Marque";

const ListMarques = () => {
	const marques = [
		{
			imgMarque: "client1.png",
		},
		{
			imgMarque: "client2.png",
		},
		{
			imgMarque: "client3.png",
		},
		{
			imgMarque: "client4.png",
		},
	];
	return (
		<>
			<div className="clients">
				{marques.map((value) => (
					<Marque img={value.imgMarque} key={crypto.randomUUID()} />
				))}
			</div>
		</>
	);
};

export default ListMarques;
