import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;
  return (
    <div className={[bgColor, textColor, ""].join(" ")}>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light" />
            <p className="lead text-muted">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://i.hizliresim.com/EAsF9B.jpg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i.hizliresim.com/EAsF9B.jpg"
                      className="d-block w-100"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
