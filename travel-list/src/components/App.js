import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Item from "./Item";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);
  function handleItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleChange(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function deleteItems() {
    const confirmed = window.confirm("Are you sure you wanna delete all?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app>">
      <Logo />
      <Form toAddItems={handleItem} />
      <PackingList
        items={items}
        toDeleteItem={handleDelete}
        toChangeItem={handleChange}
        clearList={deleteItems}
      />
      <Stats items={items} />
    </div>
  );
}
