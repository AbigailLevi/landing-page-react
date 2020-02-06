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
      <div className="container">
				<div className="row">
					<div className="card-deck">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
            </div>
            <div className="footer">
                <Footer />
            </div>
    </React.Fragment>
  );
}

export default App;
