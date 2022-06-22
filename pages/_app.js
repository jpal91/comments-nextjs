import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";

import theme from "../assets";

const App = ({ Component, pageProps }) => {

  //theme is provided from /assets folder, defaults set for a few components through MUI
  //future plan to clean other code up would be to add more default settings used often
  //especially on <Grid>

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fluid="true" sx={{ mt: "5%" }}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
};

export default App;