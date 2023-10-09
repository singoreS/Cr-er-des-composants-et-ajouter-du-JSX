const Icon = ({ imgIcon }) => {
	return (
		<>
			<a href="#" target="_blank">
				<img src={`img/${imgIcon}`} alt="" key={crypto.randomUUID()} />
			</a>
		</>
	);
};

export default Icon;
