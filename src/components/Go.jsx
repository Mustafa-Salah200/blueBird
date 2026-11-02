import { useSite } from "../site.js";

// A link that switches page inside the app.
export default function Go({ to, children, ...rest }) {
  const { go } = useSite();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        go(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
