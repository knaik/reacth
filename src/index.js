import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const trees = [
  { id: "1", type: "maple" },
  { id: "2", type: "cherry" },
  { id: "3", type: "family" },
  { id: "4", type: "component" },
];

export const TreesContext = createContext({ trees });

//const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
  // document.getElementById("root")
);
