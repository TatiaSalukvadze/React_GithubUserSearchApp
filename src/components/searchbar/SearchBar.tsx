import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import search from "../../assets/icon-search.svg";
import "./SearchBar.css";

function SearchBar({ name, setshow }: { name: String; setshow: Function }) {
  const [v, setv] = useState<String>("");
  const [res, setres] = useState<Boolean>(true);
  const change = () => {
    if (v === name) {
      setshow(true);
      setres(true);
    } else {
      setshow(false);
      setres(false);
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setv(e.target.value);
  };
  return (
    <div className="inpf">
      <div className="left">
        <img src={search} />
        <input
          type="text"
          placeholder="search for 'octocat', please"
          onChange={onChange}
        ></input>
      </div>
      <div className="right">
        {res ? null : <p className="error">No result</p>}
        <button onClick={() => change()}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
