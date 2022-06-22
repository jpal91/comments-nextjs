import borders from "../base/borders";
import breakpoints from "../base/breakpoints";

const { borderRadius } = borders;
const { values } = breakpoints;

const card = {
  styleOverrides: {
    root: {
      display: "flex",
      minWidth: 275,
      borderRadius: borderRadius.xl,
      backgroundColor: "white",
      overflow: "visible"
    }
  }
};

export default card;