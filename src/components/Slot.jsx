import { sceneMarkup } from "../data/scenes.js";
import Icon from "./Icon.jsx";

// Image placeholder: an illustrated scene chosen from the label text.
export default function Slot({ label, icon, ...rest }) {
  return (
    <div className="slot sc" {...rest}>
      <svg
        className="bg"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: sceneMarkup(label) }}
      />
      {icon && <Icon name={icon} />}
      <span>{label}</span>
    </div>
  );
}
