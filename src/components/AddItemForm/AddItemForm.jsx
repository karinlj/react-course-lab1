import "./AddItemForm.scss";
import { useState } from "react";
import Button from "../Button/Button";

const AddItemForm = ({ addItem }) => {
  const defaultInputValues = {
    catname: "",
    goOutside: true,
    foundHome: false,
  };

  const [formData, setFormData] = useState(defaultInputValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = {
      id: Math.random(),
      catname: formData.catname,
      goOutside: formData.goOutside,
      foundHome: formData.foundHome,
    };
    console.log("newCat: ", newCat);

    addItem(newCat);
    setFormData(defaultInputValues);
  };

  return (
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
        <Button />
      </section>
    </form>
  );
};

export default AddItemForm;
