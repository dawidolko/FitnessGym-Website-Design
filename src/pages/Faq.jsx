import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Hero from "../components/Hero/Hero";
import Accordion from "../components/Accordion/Accordion";
import Message from "../components/Message/Message";

const Faq = () => {
	return (
		<AnimatedPage>
			<Hero title="FAQ" cName="hero__img" />
			<Accordion />
			<Message />
		</AnimatedPage>
	);
};

export default Faq;
