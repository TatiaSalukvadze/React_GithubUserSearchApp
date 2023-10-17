import React from "react";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import "./Head.css";

function Head({ dark, setdark }: { dark: Boolean; setdark: Function }) {
  return (
    <div id="start">
      <h1>Devfinder</h1>
      <button onClick={() => setdark(!dark)}>
        {!dark ? (
          <>
            <span>Dark</span>
            <img src={moon} />
          </>
        ) : (
          <>
            <span>Light</span>
            <img src={sun} />
          </>
        )}
      </button>
    </div>
  );
}

export default Head;
