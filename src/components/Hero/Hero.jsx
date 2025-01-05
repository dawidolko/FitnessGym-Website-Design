import "./Hero.scss";

const Hero = (props) => {
	return (
		<section className="hero">
			<div className={props.cName}>
				<h2 className="hero__title">{props.title}</h2>
			</div>
		</section>
	);
};

export default Hero;
