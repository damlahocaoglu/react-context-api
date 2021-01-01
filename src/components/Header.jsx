import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import DarkButton from "./DarkButton";

import { Link } from "react-router-dom";

function Header(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;

  return (
    <div className={[bgColor, textColor, ""].join(" ")}>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <h3>DAMLA</h3>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Anasayfa
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-link">
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="nav-link">
                      Ürünler
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-link">
                      İletişim
                    </Link>
                  </li>
                </ul>
                <DarkButton />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
