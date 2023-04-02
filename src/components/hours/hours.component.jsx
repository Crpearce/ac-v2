import "./hours.styles.css";

const Hours = () => {
  return (
    <div className="hours-container">
      <h2 className="hours-title">ALIGNMENT CONSTRUCTION LLC</h2>
      <span>LITTLETON, CO 80121</span>
      <a className="phone-number-hours" href="tel:(720)282-1210">
        (720) 282-1210
      </a>
      <ul className="hours-operation">
        <li className="hours">Mon: 7:00am - 7:00pm</li>
        <li className="hours">Tue: 7:00am - 7:00pm</li>
        <li className="hours">Wed: 7:00am - 7:00pm</li>
        <li className="hours">Thu: 7:00am - 7:00pm</li>
        <li className="hours">Fri: 7:00am - 7:00pm</li>
        <li className="hours">Sat: Closed</li>
        <li className="hours">Sun: Closed</li>
      </ul>
    </div>
  );
};

export default Hours;
