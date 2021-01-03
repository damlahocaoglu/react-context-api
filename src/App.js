import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ReadMore from "./components/ReadMore";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Home from "./components/Home";

import { Context, ThemeContext } from "./context/ThemeContext";

export default function App() {
  return (
    <Context>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/readmore">
            <ReadMore />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Context>
  );
}
