"use client"

import { useContext, useState } from "react";
import { TodoContext } from "../Providers/TodoProvider";

function Footer() {
  
  const {addTask} = useContext(TodoContext)

  const [inputText, setInputText] = useState("");

  const validateTaskBeforeAdd = () => {
    if (inputText != "") {
      addTask(inputText);
      setInputText("");
    }
  };

    const handleInput = (e: React.SyntheticEvent & {target: HTMLInputElement} ) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      validateTaskBeforeAdd();
    }
  };

  const handleButtonClick = () => {
    validateTaskBeforeAdd();
  };

  return (
    <footer>
      <div className="footer-section">
        <input
          type="text"
          id="inputField"
          value={inputText}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />{" "}
        <button onClick={handleButtonClick}>Add</button>
      </div>
    </footer>
  );
}

export default Footer;
