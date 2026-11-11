// Google Material Symbols icon, e.g. <Icon name="call" />
export default function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`.trim()} aria-hidden="true">
      {name}
    </span>
  );
}
