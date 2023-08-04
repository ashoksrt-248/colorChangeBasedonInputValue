import React, { useState } from "react";
import "./styles.css";
import Callback from "./Callback";

export default function App() {
  const [uiColor, setUiColor] = useState(null);

  const getColor = (color) => {
    setUiColor(color);
  };
  return (
    <div className="App">
      <h1> PROJECT 5: Color Change box</h1>
      <div className="appContainer" style={{ background: `${uiColor}` }}></div>
      <Callback getColor={getColor} />
    </div>
  );
}
