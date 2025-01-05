const ArticleItem = (props) => {
	return (
		<div className="article__container">
			<img className="article__img" src={props.img} alt={props.alt} />
			<div className="article__content">
				<h2 className="article__title">{props.title}</h2>
				<p className="article__text">{props.text}</p>
				<p className="article__text-highlight">{props.highlight}</p>
				<p className="article__text">{props.text2}</p>
			</div>
		</div>
	);
};

export default ArticleItem;
