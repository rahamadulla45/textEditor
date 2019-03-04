import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black",
    bold: "false",
    italic: "false",
    underline: "false"
  };
  chooseStyle = style => {
    const newStyle = !this.state[style];
    this.setState({ [style]: newStyle });
  };
  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button
        className = {this.state[style] ? "btn btn-primary" : "btn btn-light"}
          style={styles[style]}
          key={style}
          onClick={() => this.chooseStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.setState({ color: color })}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
