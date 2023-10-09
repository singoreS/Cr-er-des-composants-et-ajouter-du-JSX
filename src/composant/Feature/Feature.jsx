import "./Feature.css";

const Feature = ({ imgFeature, title }) => {
	return (
		<article className="section-col section-col-red">
			<img src={`img/${imgFeature}`} alt="" />
			<h3 className="section-col-title">{title}</h3>
		</article>
	);
};

export default Feature;
