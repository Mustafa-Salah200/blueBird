import Slot from "./Slot.jsx";

export default function SolutionCard({ icon, slot, title, text }) {
  return (
    <a className="card" href="#">
      <Slot icon={icon} label={slot} />
      <div className="body">
        <h3>{title}</h3>
        <p>{text}</p>
        <span className="more">Learn more</span>
      </div>
    </a>
  );
}
