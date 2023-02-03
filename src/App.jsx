import "./Reset.css";
import "./App.css";
import React, { useContext, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Profile from "./Profile";
import Context from "./Context";
export default function App() {
  const [data, setData] = useState("no");
  const [mode, setMode] = useState("light");
  return (
    <Context.Provider value={{ data, setData, mode, setMode }}>
      <div
        className="main"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: mode === "light" ? "#f6f8ff" : "#141D2F",
        }}
      >
        <div className="container">
          <Header />
          <Search />
          <Profile />
        </div>
      </div>
    </Context.Provider>
  );
}
