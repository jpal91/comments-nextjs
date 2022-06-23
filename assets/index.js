import { createTheme } from "@mui/material";

import typography from "./base/typography";
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import borders from "./base/borders";
import card from "./components/card";
import container from "./components/container";
import grid from "./components/grid";
import textfield from "./components/textfield";

export default createTheme({
    typography: { ...typography },
    palette: { ...colors },
    breakpoints: { ...breakpoints },
    borders: { ...borders },
    components: {
        MuiCard: { ...card },
        MuiContainer: { ...container },
        MuiGrid: { ...grid },
        //MuiTextField: { ...textfield },
        //MuiOutlinedInput: { ...textfield }
    },
});

