import { useState } from "react";

type FooterProps = {
    addTask: (inputText: string)=> void
}

function Footer({ addTask }: FooterProps) {
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
