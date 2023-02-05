import InputShortener from "./InputShortener";
import BackgroundAnimate from "./BackgroundAnimate";
import "./app.css";
import LinkResult from "./LinkResult";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
      <BackgroundAnimate />
    </div>
  );
}

export default App;
