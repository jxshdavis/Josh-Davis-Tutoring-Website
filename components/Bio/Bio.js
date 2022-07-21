import React from "react";
import { Name, Header2, Content, Header3, Content2 } from "./BioStyles";

const Bio = () => {
  return (
    <div>
      <Name>Josh Davis</Name>
      <Header2>A Bit about me</Header2>
      <Content>
        About me blurb. I’m currently a Junior at Rice University studying
        mathematics. I’ve been tutoring for _ many years, on topics ranging from
        Trigonometry and Calculus to etc. Some notes on my philosophy with
        teaching and learning.{" "}
      </Content>
      <Header2>Education</Header2>
      <Content2>Mathematics Major at Rice Univerisity</Content2>
    </div>
  );
};

export default Bio;
