//region Import libraries
import React from "react";
import { render } from "react-dom";
import styled, { css } from "styled-components";
//endregion

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const App = props => (
  <div>
    <Button>Button</Button>
    <Button primary>Primary Button</Button>
  </div>
);

render(<App />, document.getElementById("root"));
