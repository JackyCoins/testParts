//region Import libraries
import React from "react";
//endregion

//region Button
const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);
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
