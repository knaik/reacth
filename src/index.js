import React, { useState, useEffect, useReducer, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useInput } from "./useInput";

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    /*     const soundVal = sound.current.value;
    const colorVal = color.current.value; */
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
    /*     sound.current.value = "";
    color.current.value = ""; */
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="sound..."
        //onChange={(e) => setSound(e.target.value)}
      />
      <input {...colorProps} type="color" />
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
