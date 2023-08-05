import React from "react";
import Navbar from "./components/Navbar";
import SearchDiv from "./components/SearchDiv";
import JobDiv from "./components/JobDiv";
import ValueDiv from "./components/ValueDiv";
import FooterDiv from "./components/FooterDiv";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <SearchDiv />
      <JobDiv />
      <ValueDiv />
      <FooterDiv />
    </div>
  );
};

export default App;
