import React, { useContext } from "react";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import "./Header.css";
import Context from "./Context";
export default function Header() {
  let context = useContext(Context);

  return (
    <div className="header">
      <h1 style={{ color: context.mode === "light" ? "black" : "white" }}>
        devfinder
      </h1>
      <div
        className="moon"
        onClick={() => {
          if (context.mode === "light") {
            context.setMode("dark");
          } else {
            context.setMode("light");
          }
        }}
      >
        <p style={{ color: context.mode === "light" ? "#697C9A" : "white" }}>
          {context.mode === "light" ? "DARK" : "LIGHT"}
        </p>
        <img src={context.mode === "light" ? moon : sun} alt="moon" />
      </div>
    </div>
  );
}
