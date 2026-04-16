function Item({ isPacked, label }) {
  let item = label;
  if (isPacked) {
    item = label + "✅";
  }
  return (
    // <div>
    //   {isPacked ? <del>{label}</del> : <span>{label}</span>}
    //   <span>{isPacked ? "✅" : ""}</span>
    // </div>
    <div>{item}</div>
  );
}
export default Item;
