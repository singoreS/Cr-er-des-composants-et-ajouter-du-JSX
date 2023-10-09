import IconsReseauxSociaux from "../IconsReseauxSociaux/IconsReseauxSociaux";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<h2 className="footer-logo">agency</h2>
			<IconsReseauxSociaux />
			<p className="footer-links">
				<a href="#">Privacy</a>
				<a href="#">Support</a>
				<a href="#">Helpdesk</a>
				<a href="#">Faq</a>
			</p>
		</footer>
	);
};

export default Footer;
