import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [name, setName] = useState("Karan");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    /* document.title = `Celebrate ${name}`; */
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}.`);
  }, [admin]);

  return (
    <section>
      <p> Congratulations {name}!</p>
      <button onClick={() => setName("Naik")}>Change Winner</button>
      <p>{admin ? "logged in" : "not logged in"}</p>

      <button onClick={() => setAdmin(!admin)}>Log in</button>
    </section>
  );
}
//test

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
