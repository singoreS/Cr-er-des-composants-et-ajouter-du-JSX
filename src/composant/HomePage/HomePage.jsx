import Article from "../Article/Article";
import Hearder from "../Hearder/Hearder";
import WhyChooseUS from "../WhyChooseUS/WhyChooseUS";
import "./HomePage.css";

const HomePage = () => {
	return (
		<>
			<Hearder
				title="managed it services"
				subtitle="Global Managed  IT Services"
			/>
			<Article
				title="about our company"
				subtitle="We do design, code & develop."
				content="There are many variations of passages of Lorem Ipsum available but the
					majority have suffered"
				btn="Read More"
				positionImg="about-image-left.png"
			/>
			<WhyChooseUS />
		</>
	);
};

export default HomePage;
