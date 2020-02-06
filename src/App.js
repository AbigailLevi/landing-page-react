import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import "../src/styles/App.css";
import Cards from "./components/Cards";
import Card from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
      <div className="card-holder">
        <div className="row card-deck justify-content-md-center">
          <div className="col col-md-4 col-lg-3 col-sm-6">
            <Card />
          </div>
          <div className="col col-md-4 col-lg-3 col-sm-6">
            <Card />
          </div>
          <div className="col col-md-4 col-lg-3 col-sm-6">
            <Card />
          </div>
          <div className="col col-md-4 col-lg-3 col-sm-6">
            <Card />
          </div>
        </div>
      </div>
      <Footer />

    </React.Fragment>
  );
}

export default App;
