import "./Article.css";

const Article = ({ title, subtitle, content, btn, positionImg }) => {
	return (
		<article className="article article-2cols">
			<div className="article-col">
				<img src={`img/${positionImg}`} alt="" key={crypto.randomUUID()} />
			</div>
			<div className="article-col article-col-center">
				<p className="suptitle" key={crypto.randomUUID()}>
					{title}
				</p>
				<h2 className="subtitle" key={crypto.randomUUID()}>
					{subtitle}
				</h2>
				<p className="article-content" key={crypto.randomUUID()}>
					{content}
				</p>
				<a href="#" className="btn" key={crypto.randomUUID()}>
					{btn}
				</a>
			</div>
		</article>
	);
};

export default Article;
