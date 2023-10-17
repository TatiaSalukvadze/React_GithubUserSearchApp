import React from "react";

import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/searchbar/SearchBar";
import Info from "./components/info/Info";
import Head from "./components/head/Head";

function App() {
  const [dark, setdark] = useState<Boolean>(false);
  const [show, setshow] = useState<Boolean>(false);
  const name: String = "octocat";

  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [dark]);

  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <Head dark={dark} setdark={setdark} />

      <SearchBar name={name} setshow={setshow} />

      {show ? <Info /> : null}
    </div>
  );
}

export default App;
