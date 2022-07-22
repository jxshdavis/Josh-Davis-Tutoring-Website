import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PracticeProblems from "../components/SRComponents/Practice Problems/PracticeProblems";
import SRFooter from "../components/SRComponents/Footer/SRFooter";
import styled from "styled-components";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
  font-family: "Roboto", sans-serif;
  // weight: 800;
`;

const studentresources = () => {
  return (
    // F7FAFF
    <Container style={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <PracticeProblems />
      <SRFooter />
    </Container>
  );
};

export default studentresources;
