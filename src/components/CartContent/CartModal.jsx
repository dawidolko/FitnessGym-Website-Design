import "./CartContent.scss";
import { motion } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

const CartModal = ({ isOpen, closeModal }) => {
  return (
    isOpen && (
      <motion.div
        variants={AnimationVariants.overlayAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        key="modal"
        className="cart__modal-overlay">
        <motion.div
          variants={AnimationVariants.modalAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="cart__modal">
          <h2 className="cart__modal-title">Order Confirmed!</h2>
          <p className="cart__modal-text">
            Your order has been successfully placed.
          </p>
          <button className="cart__modal-btn" onClick={closeModal}>
            Close
          </button>
        </motion.div>
      </motion.div>
    )
  );
};

export default CartModal;
