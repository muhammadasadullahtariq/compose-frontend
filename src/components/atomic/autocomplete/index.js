import { useState, useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import "./index.css";
import drop from "../../../assets/images/icons/drop.svg";

const Autocomplete = ({ list, cities, setCities, setDestinationId }) => {
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
    const array = value.length > 0 ? [value] : [];
    setDestinationId(key.destId);
    array.pop();
    array.push(key.name);
    setValue("");
    let temp = "";
    array.map((k) => {
      temp += k;
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
    const array = value.length > 0 ? [value] : [];
    setCities(array);
    setSearchText(array[array.length - 1]);
  }, [value]);

  useEffect(() => {
    if (cities.length) {
      const citiesValue = cities[0];
      setValue(citiesValue);
    }
  }, [cities]);

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
      <Box className="Autocomplete_Main">
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
                onClick={() => handleSelection(el)}
              >
                {el.name}
              </p>
            ))}
          </div>
        )}
      </Box>
    </>
  );
};

export default Autocomplete;
