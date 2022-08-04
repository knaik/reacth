import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TreesContext } from "./";

function App() {
  const { trees } = useContext(TreesContext);
  //console.log(result);
  return (
    <div>
      <h1> Trees I've heard of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>trees.type</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
