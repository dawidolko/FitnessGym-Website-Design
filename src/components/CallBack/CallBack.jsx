import "./CallBack.scss";
import Modal from "../Modal/Modal";
import { FaPhoneVolume } from "react-icons/fa6";
import { useState } from "react";

const CallBack = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="callBack">
      <h2 className="callBack__title">Your Fitness Journey Starts With Us</h2>
      <FaPhoneVolume className="callBack__icon" />
      <p className="callBack__text">Get a FREE consultation call</p>
      <p>
        Our dedicated team is ready to guide you on your path to fitness
        success.
      </p>
      <button className="callBack__btn" onClick={() => setOpenModal(true)}>
        Request Call
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
};

export default CallBack;
