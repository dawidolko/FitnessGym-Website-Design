import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const FormComponent = ({
	handleSubmit,
	setIsMessageSent,
	setMessage,
	isMessageSent,
	message,
}) => {
	const initialValues = {
		name: "",
		phone: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string()
			.required("Name is required")
			.min(2, "Name must be at least 2 characters")
			.max(20, "Name can't be longer than 20 characters"),
		phone: Yup.string()
			.required("Phone number is required")
			.matches(/^[0-9]+$/, "Must be only digits")
			.min(10, "Phone number must be at least 10 characters")
			.max(15, "Phone number can't be longer than 15 characters"),
	});

	return (
		<Formik
			onSubmit={(values, actions) => {
				handleSubmit(values, actions);
				setIsMessageSent(true);
				setMessage("Message sent successfully!");
			}}
			initialValues={initialValues}
			validationSchema={validationSchema}
		>
			<Form>
				<div className="modal__form">
					<Field
						type="text"
						name="name"
						placeholder="Name"
						className="modal__input"
					/>
					<ErrorMessage name="name" className="modal__error" component="span" />
					<Field
						type="text"
						name="phone"
						placeholder="Your Phone"
						className="modal__input"
					/>
					<ErrorMessage
						name="phone"
						className="modal__error"
						component="span"
					/>
					{isMessageSent && <p className="modal__success">{message}</p>}
					<button type="submit" className="modal__btn">
						Send
					</button>
				</div>
			</Form>
		</Formik>
	);
};

export default FormComponent;
