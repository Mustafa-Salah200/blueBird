export default function Icon({ name }) {
  return (
    <svg>
      <use href={`#i-${name}`} />
    </svg>
  );
}
