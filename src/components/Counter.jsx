import { useEffect, useRef, useState } from "react";

// Counts up to n the first time it scrolls into view.
export default function Counter({ n, s = "" }) {
  const ref = useRef(null);
  const [text, setText] = useState("0");

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          io.disconnect();
          if (reduce) {
            setText(n + s);
            return;
          }
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min((t - t0) / 1400, 1);
            const v = Math.round(n * (1 - Math.pow(1 - p, 3)));
            setText(v + s);
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          tick(t0);
        }),
      { threshold: 0.6 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [n, s]);

  return <b ref={ref}>{text}</b>;
}
