import { motion } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";
import FormComponent from "./FormComponent";
import { AiOutlineClose } from "react-icons/ai";

const ModalComponent = ({
	onClose,
	handleSubmit,
	setIsMessageSent,
	setMessage,
	isMessageSent,
	message,
}) => {
	const handleClose = () => {
		setIsMessageSent(false);
		setMessage("");
		onClose();
	};

	return (
		<motion.div
			variants={AnimationVariants.overlayAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
			key="modal"
			onClick={handleClose}
			className="modal__overlay"
		>
			<motion.div
				variants={AnimationVariants.modalAnimation}
				initial="initial"
				animate="animate"
				exit="exit"
				onClick={(e) => e.stopPropagation()}
				className="modal"
			>
				<h2 className="modal__title">REQUEST A CALLBACK</h2>
				<p className="modal__text">
					We can call you in 30 seconds, just enter your number
				</p>
				<FormComponent
					handleSubmit={handleSubmit}
					setIsMessageSent={setIsMessageSent}
					setMessage={setMessage}
					isMessageSent={isMessageSent}
					message={message}
				/>
				<span className="modal__close" onClick={handleClose}>
					<AiOutlineClose />
				</span>
			</motion.div>
		</motion.div>
	);
};

export default ModalComponent;
