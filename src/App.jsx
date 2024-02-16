import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const defaultInputValues = {
    catname: "",
    goOutside: true,
    foundHome: false,
  };

  const [formData, setFormData] = useState(defaultInputValues);

  const [cats, setCats] = useState([
    {
      id: Math.random(),
      catname: "Jojo",
      goOutside: true,
      foundHome: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = {
      id: Math.random(),
      catname: formData.catname,
      goOutside: formData.goOutside,
      foundHome: formData.foundHome,
    };
    console.log("newCat: ", newCat);
    setCats([...cats, newCat]);
    setFormData(defaultInputValues);
  };

  const toggleFoundHome = (id) => {
    const updatedCats = cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, foundHome: !cat.foundHome };
      } else return cat;
    });
    console.log("updatedCats: ", updatedCats);
    setCats(updatedCats);
  };

  const handleDelete = (id) => {
    const updatedCats = cats.filter((cat) => {
      return cat.id !== id;
    });
    setCats(updatedCats);
  };

  useEffect(() => {
    console.log("formData.catname: ", formData.catname);
    console.log("cats: ", cats);
  }, [formData, cats]);

  return (
    <>
      <Header />
      <section className="shelter-section">
        <h1>Cat shelter</h1>
        <p className="preamble">
          Current inhabitants in the Cat Shelter. <br />
          If the house icon is enabled, the cat has found a new home.
        </p>

        <ItemList
          items={cats}
          handleDelete={handleDelete}
          toggleFoundHome={toggleFoundHome}
        />

        {/* add cat */}
        <form className="new-cat-form" onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                id="catname"
                required
                value={formData.catname}
                onChange={(e) => {
                  setFormData({ ...formData, catname: e.target.value });
                }}
              />{" "}
            </label>

            <br />

            <div>
              <label>
                <input
                  type="checkbox"
                  id="goOutside"
                  checked={formData.goOutside}
                  onChange={() => {
                    setFormData({
                      ...formData,
                      goOutside: !formData.goOutside,
                    });
                  }}
                />
                <span>Wants to go outside</span>
              </label>
            </div>
          </div>
          <section className="btn-section">
            {" "}
            <button>Add cat</button>
          </section>
        </form>
      </section>
    </>
  );
}

export default App;
