import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const initialState = {
  message: "hi",
};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `Hey! I just said ${state.message}`,
      };
    case "whisper":
      return {
        message: `hi there I just wanted to say  ${state.message}`,
      };
  }
}

function App() {
  const [state, dispactch] = useReducer(reducer, initialState);

  return (
    <>
      <p> Message: {state.message} </p>
      <button onClick={() => dispactch({ type: "yell" })}>Yell</button>
      <button onClick={() => dispactch({ type: "whisper" })}>whisper</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
