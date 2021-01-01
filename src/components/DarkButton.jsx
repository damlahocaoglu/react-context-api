import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function DarkButton(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { toggleTheme } = themeContextAPI;
  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;

  return (
    <button className={`ms-3 me-3 my-2 btn ${btnColor}`} onClick={toggleTheme}>
      Dark Mode
    </button>
  );
}

export default DarkButton;
