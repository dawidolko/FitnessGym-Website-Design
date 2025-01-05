import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";
import { useRef } from "react";

const MainBackgroundItem = ({ item, currentSlide }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<div
			className="mainBackground__slider"
			style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
		>
			<div className="mainBackground__img">
				<img className="mainBackground__image" src={item.img} alt={item.alt} />
			</div>
			<div className="mainBackground__content">
				<motion.h1
					variants={AnimationVariants.fadeIn}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					ref={ref}
					className="mainBackground__title"
				>
					{item.title}
				</motion.h1>
				<motion.p
					variants={AnimationVariants.fadeIn2}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					ref={ref}
					className="mainBackground__text"
				>
					{item.text}
				</motion.p>
				<motion.div
					variants={AnimationVariants.fadeIn2}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					ref={ref}
				>
					<Link className="mainBackground__link" to="/StrongZone/contact">
						Join Us
					</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default MainBackgroundItem;
