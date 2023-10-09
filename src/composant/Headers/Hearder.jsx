import "./Hearder.css";

const Hearder = ({ title, subtitle }) => {
	return (
		<header className="header">
			<p className="suptitle suptitle-light">{title}</p>
			<h2 className="subtitle subtitle-light subtitle-hero">{subtitle}</h2>
			<a href="#" className="btn">
				Get Started
			</a>
		</header>
	);
};

export default Hearder;
