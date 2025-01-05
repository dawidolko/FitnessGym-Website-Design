import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Team from "../components/Team/Team";
import FixedBg from "../components/FixedBg/FixedBg";
import Message from "../components/Message/Message";

const About = () => {
  return (
    <AnimatedPage>
      <Hero title="ABOUT" cName="hero__img" />
      <AboutUs />
      <Testimonials />
      <Team />
      <FixedBg
        cName="fixed__secondary"
        text="Welcome To FitnessGym…"
        title="… Your ultimate partner for achieving fitness goals"
      />
      <Message />
    </AnimatedPage>
  );
};

export default About;
