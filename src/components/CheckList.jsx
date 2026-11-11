export default function CheckList({ items, twoCol = false }) {
  const list = (
    <ul className="check-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
  return twoCol ? <div className="two-col">{list}</div> : list;
}
