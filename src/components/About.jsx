import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function About(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;
  const [more, setMore] = React.useState(false);

  const clickHandler = () => setMore(!more);

  return (
    <div className={[bgColor, textColor, ""].join(" ")}>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Hakkımızda</h1>
            <p className="lead">
              Türkiye'de e-ticaret sektörüne yeni bir bakış açısı getirmek, en
              hızlı ve kolay şekilde ürün gönderimi yapılabilmesini sağlamak
              hedefiyle 2006 yılında kurulan DamlaCicek.com, çiçek ve
              yenilebilir çiçek kategorilerinin yanı sıra bünyesine kattığı
              elektronik, ev&yaşam, kişisel bakım, kozmetik, moda, spor&outdoor,
              hobi, pet shop, takı&aksesuar ve süpermarket gibi farklı
              kategoriler altında da yüzbinlerce ürünü müşterilerine sunuyor.
            </p>

            {more ? (
              <p className="lead">
                Türkiye'de e-ticaret sektörüne yeni bir bakış açısı getirmek, en
                hızlı ve kolay şekilde ürün gönderimi yapılabilmesini sağlamak
                hedefiyle 2006 yılında kurulan DamlaCicek.com, çiçek ve
                yenilebilir çiçek kategorilerinin yanı sıra bünyesine kattığı
                elektronik, ev&yaşam, kişisel bakım, kozmetik, moda,
                spor&outdoor, hobi, pet shop, takı&aksesuar ve süpermarket gibi
                farklı kategoriler altında da yüzbinlerce ürünü müşterilerine
                sunuyor.
              </p>
            ) : (
              ""
            )}

            <span
              className={`ms-3 me-3 btn ${btnColor}`}
              onClick={clickHandler}
            >
              {more ? "Kapat" : "Daha Fazlasini Goster"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
