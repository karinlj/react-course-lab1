import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";

function App() {
  const [cats, setCats] = useState([
    {
      id: Math.random(),
      catname: "Jojo",
      goOutside: true,
      foundHome: false,
    },
  ]);

  useEffect(() => {}, []);

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
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
}

export default App;
