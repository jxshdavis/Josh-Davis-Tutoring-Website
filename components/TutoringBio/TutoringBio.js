import React from "react";
import {
  Header2,
  MathCard,
  SubjectHeader,
  Decription,
  CsCard,
  Subject,
  Container,
} from "./TutoringBioStyles";

const TutoringBio = () => {
  return (
    <Container>
      <Header2>What I Tutor</Header2>
      <MathCard>
        <SubjectHeader>Math</SubjectHeader>
        <Decription>
          <Subject>Algebra I / II</Subject>
          <Subject>Trigonometry</Subject>
          <Subject>Precalc</Subject>
          <Subject>Calculus AB/BC</Subject>
          <Subject>Multivar-Calculus</Subject>
          <Subject>Linear Algebra</Subject>
          <Subject>Differential Equations</Subject>
          <Subject>Real Analysis</Subject>
        </Decription>
      </MathCard>

      <div style={{ padding: "10px" }}></div>

      <CsCard>
        <SubjectHeader>CS</SubjectHeader>
        <Decription>Python</Decription>
      </CsCard>
    </Container>
  );
};

export default TutoringBio;
