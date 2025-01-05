import "./Counter.scss";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="counter">
      {inView && (
        <div className="counter__box">
          <CountUp end={1200} duration={3} className="counter__number" />
          <p className="counter__text">Total Member</p>
        </div>
      )}
      {inView && (
        <div className="counter__box">
          <CountUp end={500} duration={4} className="counter__number" />
          <p className="counter__text">Equipment</p>
        </div>
      )}
      {inView && (
        <div className="counter__box">
          <CountUp end={150} duration={4} className="counter__number" />
          <p className="counter__text">Total Trainer</p>
        </div>
      )}
      {inView && (
        <div className="counter__box">
          <CountUp end={30} duration={4} className="counter__number" />
          <p className="counter__text">Win Awards</p>
        </div>
      )}
    </section>
  );
};

export default Counter;
