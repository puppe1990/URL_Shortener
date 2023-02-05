import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };
  const Enter = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it !"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={Enter}
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
