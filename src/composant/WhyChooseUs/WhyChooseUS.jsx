import Feature from "../Feature/Feature";

import "./WhyChooseUS.css";

const WhyChooseUS = () => {
	const features = [
		{ img: "features1.png", title: "Dedicated IT Solution" },
		{ img: "features2.png", title: "Expertise & Leadership" },
		{ img: "features3.png", title: "IT Industry Expertise" },
	];
	return (
		<>
			<section className="section section-content-center">
				<p className="suptitle">why choose us</p>
				<h2 className="subtitle">For over 12 years in the tech area.</h2>
				<p className="article-content text-center">
					There are many variations of passages of Lorem Ipsum available but the
					majority have suffered alteration
				</p>
				<div className="section-3cols">
					{features.map((value) => (
						<Feature
							key={crypto.randomUUID()}
							imgFeature={value.img}
							title={value.title}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default WhyChooseUS;
