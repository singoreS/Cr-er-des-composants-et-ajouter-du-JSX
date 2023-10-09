import Icon from "./Icon";

const IconsReseauxSociaux = () => {
	const icons = [
		{
			imgIcon: "facebook.png",
		},
		{
			imgIcon: "twitter.png",
		},
		{
			imgIcon: "instagram.png",
		},
		{
			imgIcon: "snapchat.png",
		},
		{
			imgIcon: "pinterest.png",
		},
		{
			imgIcon: "youtube.png",
		},
	];
	return (
		<>
			<p className="footer-socials">
				{icons.map((value) => (
					<Icon imgIcon={value.imgIcon} key={crypto.randomUUID()} />
				))}
			</p>
		</>
	);
};

export default IconsReseauxSociaux;
