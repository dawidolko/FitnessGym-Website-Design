import "./Pricing.scss";
import pricingData from "./PricingData";
import PricingItem from "./PricingItem";
import AnimationVariants from "../AnimationVariants/AnimationVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Pricing = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.section
			variants={AnimationVariants.slideIn}
			initial="initial"
			animate={isInView ? "animate" : "initial"}
			ref={ref}
			className="pricing"
		>
			<h2 className="pricing__title">Best Pricing Plan For You</h2>
			<div className="pricing__container ">
				{pricingData.map((data) => (
					<PricingItem key={data.id} {...data} />
				))}
			</div>
		</motion.section>
	);
};

export default Pricing;
