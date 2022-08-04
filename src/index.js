import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import { useFetch } from "./useFetch";

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1> loading.....</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    /*     <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div> */
    <div>
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

//const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App login="knaik" />
  // document.getElementById("root")
);
