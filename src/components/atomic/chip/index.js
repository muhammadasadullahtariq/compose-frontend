const { default: Image } = require("next/image");
import balloon from "../../../assets/images/activities/balloon.svg";
import "./index.css";

const Chip = ({ icon, name, selected }) => {
  return (
    <div
      className="Chip_Main"
      style={{ border: selected ? "1.5px solid #2B92D5" : "" }}
    >
      <Image src={icon ? icon : balloon} />
      <p>{name}</p>
    </div>
  );
};

export default Chip;
