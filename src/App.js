import React from "react";
import "./App.css";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
