import "./index.css";

const Input = ({ value, setValue }) => {
  return (
    <div className="Input_Main">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
