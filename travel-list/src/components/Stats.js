export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const perCentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {perCentage === 100
          ? "You have got everything! Ready to go!"
          : `😎You have ${numItems} items on your list, and you already packed ${numPacked}(${
              perCentage === NaN ? 0 : perCentage
            }%)`}
      </em>
    </footer>
  );
}
