import AboutContent from "../AboutContent/AboutContent";
import about from "../../assets/about.webp";

const AboutUs = () => {
  return (
    <>
      <AboutContent
        img={about}
        alt="An athlete lifting weights at FitnessGym, showcasing strength and determination."
        title="We Build Your Strength"
        span="And Break Every Limitation"
        text="At FitnessGym, we are a community driven by passion and a commitment to health and well-being. Our mission is to empower you to reach your fitness goals while embracing a positive mindset. With a focus on growth and self-improvement, we provide a space where challenges become opportunities. Together, we inspire and support one another to build a stronger, healthier future. Join us to become part of a fitness family that motivates and celebrates every milestone."
      />
    </>
  );
};

export default AboutUs;
