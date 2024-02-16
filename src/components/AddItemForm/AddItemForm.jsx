import "./AddItemForm.scss";
import { useState, useRef } from "react";
import Button from "../Button/Button";

const AddItemForm = ({ addItem }) => {
  const defaultInputValues = {
    catname: "",
    goOutside: true,
    foundHome: false,
  };

  const [formData, setFormData] = useState(defaultInputValues);

  const inputText = useRef();
  const focusInput = () => {
    inputText.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = {
      id: Math.random(),
      catname: formData.catname,
      goOutside: formData.goOutside,
      foundHome: formData.foundHome,
    };
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
            ref={inputText}
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
        <Button handleClick={focusInput} />
      </section>
    </form>
  );
};

export default AddItemForm;
