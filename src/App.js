import React from "react";
import { Grommet } from "grommet";
import {createGlobalStyle, ThemeProvider} from 'styled-components';

// components
import Home from "./Home";
import theme, {palette} from "./theme";

const GlobalStyle = createGlobalStyle`
  p {
    color: grey;
  }
`;

function App() {
  return (
    <div className="App">
        <Grommet theme={theme}>
      <ThemeProvider theme={palette}>
          <Home />
      </ThemeProvider>
        </Grommet>
      <GlobalStyle />
    </div>
  );
}

export default App;
