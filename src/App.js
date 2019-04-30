import React from "react";
import { Grommet } from "grommet";

// components
import Home from "./Home";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      {/* // add global SASS wrapper. Maybe a Styled-Components <ThemeProvider/> here? */}
      <Grommet theme={theme}>
        <Home />
      </Grommet>
      {/* // END SASS Wrapper */}
    </div>
  );
}

export default App;
