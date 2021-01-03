import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function Contact(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;

  return (
    <div className={[bgColor, textColor, ""].join(" ")}>
      <form className="mx-4">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label mt-3">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className={`ms-3 me-3 my-3 btn ${btnColor}`}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
