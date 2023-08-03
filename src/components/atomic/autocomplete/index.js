const { useState, useCallback, useEffect } = require("react");
import Image from "next/image";
import "./index.css";
import drop from "../../../assets/images/icons/drop.svg";

const Autocomplete = ({ list }) => {
  const [chosen, setChosen] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchText, setSearchText] = useState("");

  const filteredCities =
    searchText?.length > 0
      ? list?.filter((city) =>
          city.name.toLowerCase().includes(searchText?.toLowerCase())
        )
      : list;

  const handleSelection = (key) => {
    const array = value.length > 0 ? value.split(", ") : [];
    array.pop();
    array.push(key);
    setValue("");
    let temp = "";
    array.map((k) => {
      temp += k + ", ";
    });
    setValue(temp);
    setOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const array = value.length > 0 ? value.split(", ") : [];
    setChosen(array);
    console.log(chosen);
    setSearchText(array[array.length - 1]);
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="Autocomplete_Backdrop"
        ></div>
      )}
      <div className="Autocomplete_Main">
        <input
          onChange={handleChange}
          value={value}
          onClick={() => setOpen(true)}
        />
        <Image src={drop} style={{ rotate: open ? "180deg" : null }} />
        {open && (
          <div className="Autocomplete_Dropdown">
            {filteredCities.map((el) => (
              <p
                key={el.alpha2Code}
                style={{}}
                onClick={() => handleSelection(el.name)}
              >
                {el.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Autocomplete;
