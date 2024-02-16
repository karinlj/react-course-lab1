import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";

function App() {
  const defaultInputValues = {
    catname: "",
    foundHome: false,
  };

  const [formData, setFormData] = useState(defaultInputValues);

  const [cats, setCats] = useState([
    {
      id: Math.random(),
      catname: "Jojo",
      foundHome: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = {
      id: Math.random(),
      catname: formData.catname,
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
          If the house icon is enabled, the cat has found a home.
        </p>

        <ul className="cat-list">
          {cats &&
            cats.map((cat) => {
              return (
                <li className="cat-list-item" key={cat.id}>
                  <div>
                    {" "}
                    <i className="fas fa-paw" aria-hidden="true"></i>
                    <span>{cat.catname}</span>
                  </div>

                  <div>
                    <button
                      className={`new-home ${cat.foundHome ? "found" : ""}`}
                      onClick={() => toggleFoundHome(cat.id)}
                    >
                      <i
                        className="fas fa-home"
                        title="Found home"
                        aria-hidden="true"
                      ></i>
                    </button>

                    <button onClick={() => handleDelete(cat.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>

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
