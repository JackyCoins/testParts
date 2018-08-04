//region Import libraries
import React from "react";
//endregion

//region Import components
import Button from "../Button";
//endregion

//region App
const App = props => (
  <main>
    <h1>Application</h1>
    <Button
      onClick={() => {
        alert("click");
      }}
    >
      Hello
    </Button>
  </main>
);
//endregion

//region Export
export default App;
//endregion
