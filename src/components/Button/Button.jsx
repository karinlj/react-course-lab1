import "./Button.scss";

const Button = ({ handleClick }) => {
  return <button onClick={handleClick}>Add cat</button>;
};

export default Button;
