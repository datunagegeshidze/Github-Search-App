import React, { useContext, useEffect, useRef, useState } from "react";
import search from "./images/icon-search.svg";
import "./Search.css";
import Context from "./Context";
import axios from "axios";
export default function Search() {
  const input = useRef();
  const context = useContext(Context);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios.get(`https://api.github.com/users/octocat`).then((res) => {
      context.setData(res.data);
    });
  }, []);
  return (
    <form
      className="search"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        className={context.mode === "light" ? "light" : "dark"}
        ref={input}
        type="text"
        placeholder="Search GitHub username…"
        style={{
          background: context.mode === "light" ? "#fefefe" : "#1E2A47",
          color: context.mode === "light" ? "#4B6A9B" : "#FFFFFF",
        }}
      />
      <img src={search} alt="Shape" />
      <button
        onClick={() => {
          axios
            .get(`https://api.github.com/users/${input.current.value}`)
            .then((res) => {
              context.setData(res.data);
              setError(false)
            })
            .catch((err) => {
              setError(true)
            });
        }}
      >
        Search
      </button>
      {error && <p style={{ color: "red",position:'absolute', top:'25px', right:'140px' }}>No Result</p>}
    </form>
  );
}
