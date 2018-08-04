//region Import libraries
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
//endregion

//region Import components
import App from "./App";
import Button from "./Button";
//endregion

storiesOf("Example storybook", module)
  .add("App", () => <App />)
  .add("Button", () => <Button onClick={action("clicked")}>Button</Button>);
