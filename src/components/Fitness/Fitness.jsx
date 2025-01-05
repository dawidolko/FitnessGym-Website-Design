import AboutContent from "../AboutContent/AboutContent";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimationVariants from "../AnimationVariants/AnimationVariants";
import fitness from "../../assets/fitness.webp";

const Fitness = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      variants={AnimationVariants.slideIn}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}>
      <AboutContent
        img={fitness}
        alt="Man performing exercises in a modern fitness center"
        title="Discover the Power of Fitness..."
        span="TRANSFORM YOUR BODY AND MIND WITH US!"
        text="At FitnessGym, we believe fitness is not just about workouts – it’s a way of life. From state-of-the-art equipment to a team of professional trainers, we provide a supportive environment to help you achieve your goals. Join our community and experience a lifestyle change that promotes health, strength, and well-being every day!"
        showIcons={false}
      />
    </motion.div>
  );
};

export default Fitness;
