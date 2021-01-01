import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import DarkButton from "./DarkButton";

function Footer(props) {
  const themeContextAPI = React.useContext(ThemeContext);

  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;

  return (
    <div className={[bgColor, textColor, ""].join(" ")}>
      <hr />
      <footer className="text-center">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <h4>GitHub </h4>

          <a href="https://github.com/damlahocaoglu">@damlahocaoglu</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
