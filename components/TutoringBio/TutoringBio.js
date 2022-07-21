import React from "react";
import {
  Header2,
  MathCard,
  SubjectHeader,
  Decription,
  CsCard,
} from "./TutoringBioStyles";

const TutoringBio = () => {
  return (
    <div>
      <Header2>What I Tutor</Header2>
      <MathCard>
        <SubjectHeader>Math</SubjectHeader>
        <Decription>
          Algebra I / II Precalc Trigonometry Calculus AB / BC Multivar-Calculus
          Linear Algebra Diffe-Equations Real Analysis
        </Decription>
      </MathCard>

      <div style={{ padding: "10px" }}></div>

      <CsCard>
        <SubjectHeader>CS</SubjectHeader>
        <Decription>Python</Decription>
      </CsCard>
    </div>
  );
};

export default TutoringBio;
