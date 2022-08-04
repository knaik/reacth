import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(SetData);
  }, []);

  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => SetData([])}>Remove Data</button>
      </div>
    );
  }

  return <p>No users</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
