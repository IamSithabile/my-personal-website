import React from "react";

import {
  About,
  Footer,
  Header,
  Home,
  Skills,
  Testimonial,
  Work,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    {/* <Header /> */}
    <Home />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
