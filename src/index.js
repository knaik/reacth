import React, { useState, useEffect, useReducer, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  // const [state, dispactch] = useReducer(reducer, initialState);
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");
  /* const sound = useRef();
  const color = useRef();
 */
  const submit = (e) => {
    e.preventDefault();
    /*     const soundVal = sound.current.value;
    const colorVal = color.current.value; */
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("#000000");
    /*     sound.current.value = "";
    color.current.value = ""; */
  };

  return (
    <form onSubmit={submit}>
      <input
        value={sound}
        type="text"
        placeholder="sound..."
        onChange={(e) => setSound(e.target.value)}
      />
      <input
        value={color}
        type="color"
        onChange={(e) => setColor(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
