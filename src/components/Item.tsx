function Item({ isPacked, label }) {
  return (
    <div>
      <span>{label}</span>
      <span>{isPacked ? "✅" : ""}</span>
    </div>
  );
}
export default Item;
