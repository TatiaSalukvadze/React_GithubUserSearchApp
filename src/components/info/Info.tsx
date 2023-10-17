import React from "react";
import "./Info.css";
import loc from "../../assets/icon-location.svg";
import twit from "../../assets/icon-twitter.svg";
import web from "../../assets/icon-website.svg";
import com from "../../assets/icon-company.svg";

function Info() {
  return (
    <div className="main">
      <div className="p1">
        <div className="img"></div>
        {/* <img id="img" src={require("../../assets/cat.png")} /> */}
        <div className="namejoined">
          <div className="name">
            <h1>The Octocat</h1>
            <p style={{ color: "#0079FF" }}>@Octocat</p>
          </div>
          <span className="joined">Joined 25 Jan 2011</span>
        </div>
      </div>
      <p className="bio">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className="cons">
        <p>
          <span className="what">Repos</span>
          <span className="howmany">8</span>
        </p>
        <p>
          <span className="what">Followers </span>
          <span className="howmany">147</span>
        </p>
        <p>
          <span className="what">following </span>
          <span className="howmany">9</span>
        </p>
      </div>
      <div className="links">
        <span className="link">
          <img src={loc} />
          <a href="">San Francisco</a>
        </span>
        <span className="link">
          <img src={twit} />
          <a href="">Not Available</a>
        </span>
        <span className="link">
          <img src={web} />
          <a href="">https://github.blog</a>
        </span>
        <span className="link">
          <img src={com} />
          <a href="">@github</a>
        </span>
      </div>
      {/* <div className="inl">
        <span className="inl">
          <img id="img" src={require("../../assets/cat.png")} />
          <span>
            <h1>Tatia</h1>
            <p style={{ color: "#0848be" }}>@Octocat</p>
          </span>
        </span>
        <span>Joined 25 Jan 2011</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className="inl">
        <p>
          <span>Repos</span>
          <span>8</span>
        </p>
        <p>
          <span>Followers </span>
          <span>147</span>
        </p>
        <p>
          <span>following </span>
          <span>9</span>
        </p>
      </div> */}
    </div>
  );
}

export default Info;
