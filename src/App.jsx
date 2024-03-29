import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import AddItemForm from "./components/AddItemForm/AddItemForm";

function App() {
  const [cats, setCats] = useState([
    {
      id: Math.random(),
      name: "Jojo",
      goOutside: true,
      foundHome: false,
    },
  ]);
  const addItem = (addedItem) => {
    setCats([...cats, addedItem]);
  };

  const toggleFoundHome = (id) => {
    const updatedCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, foundHome: !cat.foundHome };
      } else return cat;
    });
    setCats(updatedCats);
  };

  const handleDelete = (id) => {
    const updatedCats = cats.filter((cat) => {
      return cat.id !== id;
    });
    setCats(updatedCats);
  };

  return (
    <>
      <Header />
      <section className="shelter-section">
        <h1>Cat shelter.</h1>
        <p className="preamble">
          Current inhabitants at the Cat Shelter. <br />
          If the house icon is enabled, the cat has found a new home.
        </p>

        <ItemsList
          items={cats}
          handleDelete={handleDelete}
          toggleFoundHome={toggleFoundHome}
        />

        <AddItemForm addItem={addItem} />
      </section>
    </>
  );
}

export default App;
