//region Import libraries
import React from "react";
import { storiesOf } from '@storybook/react';
//endregion

//region Import components
import App from "./App";
//endregion

storiesOf("Example storybook", module).add("App", () => <App />);