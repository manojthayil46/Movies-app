import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import Request from "./Request";

function App() {
  const [selectedOption, setselectedOption] = useState(Request.fetchTrending);
  return (
    <div className="App">
      <Header />
      <Nav setselectedOption={setselectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
