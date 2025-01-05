import "./Modal.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ModalComponent from "./ModalComponent";

const Modal = ({ open, onClose }) => {
	const [message, setMessage] = useState("");
	const [isMessageSent, setIsMessageSent] = useState(false);

	const handleSubmit = (_, { resetForm }) => {
		setIsMessageSent(true);
		setMessage("Message sent successfully!");
		resetForm();
		setTimeout(() => {
			setMessage("");
			onClose();
		}, 2000);
	};

	return (
		<AnimatePresence>
			{open && (
				<ModalComponent
					open={open}
					onClose={onClose}
					handleSubmit={handleSubmit}
					setIsMessageSent={setIsMessageSent}
					setMessage={setMessage}
					isMessageSent={isMessageSent}
					message={message}
				/>
			)}
		</AnimatePresence>
	);
};

export default Modal;
