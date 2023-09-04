import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// la riga seguente si occupa di creare un riferimento chiamato "root"
// una "radice" per il nostro albero di componenti, a partire da un div
// vuoto presente in public/index.html

const root = ReactDOM.createRoot(document.getElementById("root"));
// questo elemento "radice" viene utilizzato per RENDERIZZARE App
root.render(<App />);
// <App /> è un componente React
