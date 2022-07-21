import React from "react";
import { Title } from "./PracticeProblemsStyles";
import SubjectCard from "./SubjectCard";
const PracticeProblems = () => {
  return (
    <div>
      <Title>Practice Problems</Title>
      <SubjectCard
        subject="Algebra I"
        img_filepath="/Algebra I Preview.png"
        sheet_filepath="/Worksheet_Algebra_I__incomplete_.pdf"
        download1_name="Problem Set 1"
      ></SubjectCard>
      <SubjectCard
        subject="Algebra II"
        img_filepath="/Algebra II Preview.png"
        sheet_filepath="/Worksheet_Algebra_II_Incomplete.pdf"
        download1_name="Problem Set 1"
      ></SubjectCard>
      <SubjectCard
        subject="Trigonometry"
        img_filepath="/Trigonometry Preview.png"
      ></SubjectCard>
      <SubjectCard
        subject="Pre Calculus"
        img_filepath="/Pre Calculus Preview.png"
        sheet_filepath="/Worksheet_Precalculus_Unfinished.pdf"
        download1_name="Problem Set 1"
      ></SubjectCard>
      <SubjectCard
        subject="Calculus AB"
        img_filepath="/Calculus AB Preview.png"
        sheet_filepath="/Worksheet_Template_AB:BC_Calc_July2022pdf.pdf"
        download1_name="Problem Set 1"
      ></SubjectCard>
      <SubjectCard
        subject="Calculus BC"
        img_filepath="/Calculus BC Preview.png"
        sheet_filepath="/Worksheet_Template_AB:BC_Calc_July2022pdf.pdf"
        download1_name="Problem Set 1"
      ></SubjectCard>
      <SubjectCard
        subject="Multi-Variable Calculus"
        img_filepath="/Multi Variable Calculus Preview.png"
      ></SubjectCard>
      <SubjectCard
        subject="Python"
        img_filepath="/Multi Variable Calculus Preview.png"
      ></SubjectCard>
    </div>
  );
};

export default PracticeProblems;
