import "./index.css";

const Input = ({ value, setValue,style }) => {
  return (
    <div className="Input_Main">
      <input
        type="text"
        
        style={style}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
