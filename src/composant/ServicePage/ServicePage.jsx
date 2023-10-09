import Article from "../Article/Article";
import ListMarques from "../ListMarques/ListMarques";
import ListServices from "../ListServices/ListServices";

const ServicePage = () => {
	return (
		<>
			<Article
				title="our vision & mission"
				subtitle="Innovate with the tech trends"
				content="There are many variations of passages of Lorem Ipsum available but the
					majority have suffered"
				btn="Read More"
				positionImg="about-image-right.png"
			/>
			<ListMarques />
			<ListServices />
		</>
	);
};

export default ServicePage;
