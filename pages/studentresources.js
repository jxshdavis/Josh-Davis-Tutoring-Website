import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PracticeProblems from "../components/SRComponents/Practice Problems/PracticeProblems";
import SRFooter from "../components/SRComponents/Footer/SRFooter";

const studentresources = () => {
  return (
    // F7FAFF
    <div style={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <PracticeProblems />
      <SRFooter />
    </div>
  );
};

export default studentresources;
