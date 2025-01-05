import "./ContactContent.scss";
import boxData from "./BoxData";
import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm";

const ContactContent = () => {
	return (
		<section className="contact">
			<div className="contact__container">
				<div className="contact__boxes">
					{boxData.map((box) => (
						<ContactBox {...box} key={box.id} />
					))}
				</div>
				<div className="contact__wrapper container">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactContent;
