import "./Map.scss";

const Map = () => {
  return (
    <div className="map">
      <iframe
        className="map__frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192485128646!2d144.96305771531646!3d-37.813627979751524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f04a5a5b%3A0xf577ebbf8562a1c!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1696409486045!5m2!1sen!2sus"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="FitnessGym Location"></iframe>
    </div>
  );
};

export default Map;
