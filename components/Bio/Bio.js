import React from "react";
import { Name, Header2, Content, Header3, Content2 } from "./BioStyles";

const Bio = () => {
  return (
    <div>
      <Name>Josh Davis</Name>
      <Header2>A Bit about me</Header2>
      <Content>
        I am a Senior at Rice University studying mathematics and statistics. I’ve been independently tutoring math and science for the past 4 years.
        I believe that tackling new problems and asking questions are the best
        ways to learn. My goal is to teach all my students how to think
        creatively and analytically.{" "}
      </Content>
      <Header2>Education</Header2>
      <Content2>Pursuing Mathematics and Statistics BS at Rice Univerisity</Content2>
    </div>
  );
};

export default Bio;
