const Service = ({ imgService, titleService }) => {
	return (
		<>
			<article className="article-service">
				<img src={`img/${imgService}`} alt="" key={crypto.randomUUID()} />
				<h3 className="article-service-title" key={crypto.randomUUID()}>
					{titleService}
				</h3>
			</article>
		</>
	);
};
export default Service;
