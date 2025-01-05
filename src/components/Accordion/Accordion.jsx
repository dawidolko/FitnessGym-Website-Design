import "./Accordion.scss";
import accordionData from "./AccordionData";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import faq from "../../assets/faq.webp";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      <img
        src={faq}
        alt="A person lifting weights at the gym."
        className="accordion__img"
      />
      <div className="accordion__questions">
        <h2 className="accordion__title">Frequently Asked Questions</h2>
        {accordionData.map((q, index) => (
          <div key={index} className="accordion__item">
            <div
              className="accordion__box"
              onClick={() => toggleAccordion(index)}>
              <h3 className="accordion__question">{q.question}</h3>
              {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            {activeIndex === index && (
              <div className="accordion__answer">{q.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
