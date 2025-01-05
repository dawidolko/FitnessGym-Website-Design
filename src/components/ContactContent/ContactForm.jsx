import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import contact from "../../assets/contact.webp";

const ContactForm = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const initialValues = {
		name: "",
		email: "",
		subject: "",
		textarea: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required").max(20),
		email: Yup.string()
			.required("Email is required")
			.email("Invalid email address"),
		subject: Yup.string()
			.required("Subject is required")
			.min(5, "Subject must be at least 5 characters"),
		textarea: Yup.string()
			.required("Message is required")
			.min(15, "Textarea must be at least 15 characters"),
	});

	const handleSubmit = (_, { resetForm }) => {
		setFormSubmitted(true);
		resetForm();

		setTimeout(() => {
			setFormSubmitted(false);
		}, 2000);
	};

	return (
		<>
			<img
				src={contact}
				alt="Man exercising at the gym."
				className="contact__img"
			/>
			<div className="contact__info">
				<h2 className="contact__title">get in touch</h2>
				<p className="contact__text">
					Get in touch with us! We're ready to assist and chat about your
					questions and needs.
				</p>
				<Formik
					onSubmit={handleSubmit}
					initialValues={initialValues}
					validationSchema={validationSchema}
				>
					<Form className="contact__form">
						<div>
							<Field
								className="contact__input"
								type="text"
								name="name"
								placeholder="Your name"
							/>
							<ErrorMessage
								name="name"
								component="span"
								className="contact__error"
							/>
						</div>
						<div>
							<Field
								className="contact__input"
								type="email"
								name="email"
								placeholder="Your email"
							/>
							<ErrorMessage
								name="email"
								component="span"
								className="contact__error"
							/>
						</div>
						<div>
							<Field
								className="contact__input"
								type="text"
								name="subject"
								placeholder="Your Subject"
							/>
							<ErrorMessage
								name="subject"
								component="span"
								className="contact__error"
							/>
						</div>
						<div>
							<Field
								as="textarea"
								name="textarea"
								placeholder="Write Your Message"
								className="contact__area"
							/>
							<ErrorMessage
								name="textarea"
								component="span"
								className="contact__error contact__error-line"
							/>
						</div>
						<button className="contact__btn" type="submit">
							SEND MESSAGE
						</button>
						{formSubmitted && (
							<p className="contact__sent">
								Your message was sent successfully!
							</p>
						)}
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default ContactForm;
