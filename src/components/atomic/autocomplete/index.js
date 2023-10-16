import { useState, useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import "./index.css";
import drop from "../../../assets/images/icons/drop.svg";

const Autocomplete = ({ list, cities, setCities, setDestinationId }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleSelection = (key) => {
    setCities([key.name]);
    setDestinationId(key.destId);
    setSearchText(key.name);

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
    console.log("search text", searchText);
    const array =
      searchText?.length > 0
        ? list?.filter((city) =>
            city.name.toLowerCase().includes(searchText?.toLowerCase())
          )
        : list;
    console.log(array);
    setFilteredCities(array);
  }, [searchText]);

  useEffect(() => {
    if (cities.length) {
      const citiesValue = cities[0];
      setValue(citiesValue);
    }
  }, [cities]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
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
          value={searchText}
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
