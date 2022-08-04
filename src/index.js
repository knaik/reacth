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
        message: "Hey!",
      };
    case "whisper":
      return {
        message: "hi there",
      };
  }
}

function App() {
  const [state, dispactch] = useReducer(reducer, initialState);

  return (
    <>
      <p> Message {state.message} </p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
