import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  toDeleteItem,
  toChangeItem,
  clearList,
}) {
  const [sortBy, setsortBy] = useState("input");

  let sortedItem;

  if (sortBy === "input") sortedItem = items;

  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            toDeleteItem={toDeleteItem}
            toChangeItem={toChangeItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
}
