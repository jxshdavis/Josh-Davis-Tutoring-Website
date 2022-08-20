import React from "react";
import { Name, Header2, Content, Header3, Content2 } from "./BioStyles";

const Bio = () => {
  return (
    <div>
      <Name>Josh Davis</Name>
      <Header2>A Bit about me</Header2>
      <Content>
        I am a Junior at Rice University studying mathematics and computer
        science. I’ve been independently tutoring math and science for 3 years.
        I believe that tackling new problems and asking questions are the best
        ways to learn. My goal is to teach all my students how to think
        creatively.{" "}
      </Content>
      <Header2>Education</Header2>
      <Content2>Pursuing Mathematics Major at Rice Univerisity</Content2>
    </div>
  );
};

export default Bio;
