// Import libraries
import React from "react";
import { render } from "react-dom";

const themes = {
  light: {
    color: "#000",
    background: "#fff"
  },
  dark: {
    color: "#fff",
    background: "#000"
  }
};

const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});

const ThemedButton = props => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <button
        onClick={toggleTheme}
        style={{ color: theme.color, background: theme.background }}
      >
        Toggle theme
      </button>
    )}
  </ThemeContext.Consumer>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () =>
      this.setState(prevState => ({
        theme: prevState.theme === themes.light ? themes.dark : themes.light
      }));

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemedButton />
      </ThemeContext.Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
