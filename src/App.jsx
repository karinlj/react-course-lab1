import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <>
      <section className="shelter-section">
        <h1>Cat shelter</h1>
        <p className="preamble">
          Current inhabitants in the Cat Shelter. <br />
          If the house icon is enabled, the cat has found a home.
        </p>
      </section>
    </>
  );
}

export default App;
