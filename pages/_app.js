import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";

import theme from "../assets";
import { ReplyContextProvider } from "../helpers/context";

const App = ({ Component, pageProps }) => {

  //theme is provided from /assets folder, defaults set for a few components through MUI

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReplyContextProvider>
        <Container fluid="true" sx={{ mt: "5%" }}>
          <Component {...pageProps} />
        </Container>
      </ReplyContextProvider>
    </ThemeProvider>
  );
};

export default App;