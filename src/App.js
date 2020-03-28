import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  const handleClick = () => {
    axios
      .post("http://localhost:3000/sendData", { value: "peen" })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log("e", e);
      });
  };
  const value = axios.get("http://localhost:3000/sendData").then(data => {
    console.log(data);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Button</button>
      </header>
    </div>
  );
}

export default App;
