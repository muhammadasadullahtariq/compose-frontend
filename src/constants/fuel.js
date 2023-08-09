import everything from "../assets/images/fuel/everything.svg";
import vegan from "../assets/images/fuel/vege.svg";
import vegetarian from "../assets/images/fuel/vegetarian.svg";
import pescetarian from "../assets/images/fuel/pesc.svg";
import * as COLORS from "@/constants/colors";
export const fuel = [
  {
    image: everything,
    name: "Everything",
    color: COLORS.questionBlockGrayColor,
  },
  { image: vegan, name: "Vegan", color: COLORS.questionBlockBlueColor },
  {
    image: vegetarian,
    name: "Vegetarian",
    color: COLORS.questionBlockBlueColor,
  },
  {
    image: pescetarian,
    name: "Pescetarian",
    color: COLORS.questionBlockGrayColor,
  },
  // { image: pescetarian, name: "Pescetarian" },
  // { image: pescetarian, name: "Pescetarian" },
  // { image: pescetarian, name: "Pescetarian" },
  // { image: pescetarian, name: "Pescetarian" },
  // { image: pescetarian, name: "Pescetarian" },
];
