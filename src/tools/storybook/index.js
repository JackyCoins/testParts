//region Import libraries
import React from "react";
import { render } from "react-dom";
//endregion

const Button = props => <button>{props.children}</button>;

const App = props => <main><Button>Hello</Button></main>;

render(<App/>, document.getElementById("root"));