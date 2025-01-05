import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Hero from "../components/Hero/Hero";
import ContactContent from "../components/ContactContent/ContactContent";
import Map from "../components/Map/Map";

const Contact = () => {
	return (
		<AnimatedPage>
			<Hero title="CONTACT" cName="hero__img" />
			<ContactContent />
			<Map />
		</AnimatedPage>
	);
};

export default Contact;
