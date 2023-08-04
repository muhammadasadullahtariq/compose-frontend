const { useState, useCallback, useEffect } = require("react");
import Image from "next/image";
import "./index.css";
import drop from "../../../assets/images/icons/drop.svg";
import { ReactCountryFlag } from "react-country-flag";
import { Box } from "@mui/material";
const Autocomplete = ({ list, setCountry, country }) => {
  //const [chosen, setChosen] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(country || "");
  const [searchText, setSearchText] = useState("");

  const filteredCities =
    searchText?.length > 0
      ? list?.filter((city) =>
          city.name.toLowerCase().includes(searchText?.toLowerCase())
        )
      : list;

  const handleSelection = (key) => {
    setValue(key);
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
    setValue(country);
  }, [country]);

  useEffect(() => {
    // const array = value.length > 0 ? value.split(", ") : [];
    setCountry(value);
    //setChosen(array);
    //console.log(chosen);
    setSearchText(value);
  }, [value]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="AutocompleteSingle_Backdrop"
        ></div>
      )}
      <div className="AutocompleteSingle_Main">
        <input
          onChange={handleChange}
          value={value}
          onClick={() => setOpen(true)}
        />
        <Image src={drop} style={{ rotate: open ? "180deg" : null }} />
        {open && (
          <div className="AutocompleteSingle_Dropdown">
            {filteredCities.map((el) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 10px",
                  width: "100%",
                  gap: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleSelection(el.name)}
                key={el.alpha2Code}
                className="country-div"
              >
                <Box sx={{ display: "block" }}>
                  <ReactCountryFlag
                    countryCode={el.alpha2Code}
                    style={{
                      fontSize: "22px",
                    }}
                  />
                </Box>
                <p style={{}}>{el.name}</p>
              </Box>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Autocomplete;
