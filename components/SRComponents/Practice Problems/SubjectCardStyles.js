import styled from "styled-components";

export const Container = styled.div`
  // display: grid;
  // grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: 1fr;
  // grid-column-gap: 0rem;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    // padding-right: 0;
  }
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 2rem;
  // padding: 5rem;
  // background: red;
  // box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52) !important;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0rem;
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    // padding-right: 0;
  }
  // padding: 1rem;
  // padding-left: 10rem;
  // padding-top: 2rem;
  // padding: 5rem;
  // background: green;
  box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52) !important;
`;

export const Preview = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: row;
  align-content: center;
  font-family: "Roboto";
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.31em;
  text-transform: uppercase;
  color: #000000;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  @media only screen and (max-width: 600px) {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  // background: cyan;
  // box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52) !important;
`;

export const Text = styled.div`
  grid-area: 1 / 3 / 2 / span 5;
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: "Roboto";
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.31em;
  @media only screen and (max-width: 600px) {
    letter-spacing: 0em;
  }

  text-transform: uppercase;
  color: #000000;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  @media only screen and (max-width: 600px) {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  // background: yellow;
  // box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52) !important;
`;
export const WorkSheet = styled.div`
  flex-direction: column;
  align-content: left;
  font-family: "Roboto";
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.31em;
  text-transform: uppercase;
  color: #000000;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  //   background: yellow;
  @media only screen and (max-width: 600px) {
    letter-spacing: 0.1em;
  }
`;

export const SubjectTitle = styled.h3`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 1000;
  line-height: 14px;
  letter-spacing: 0.31em;
  text-transform: uppercase;
  color: #000000;
  //   padding-top: 20px;
  //   padding-right: 20px;
  font-weight: 600;
  //   padding-bottom: 20px;
  //   padding-left: 20px;
  //   background: yellow;
  line-height: 0.9;
  @media only screen and (max-width: 600px) {
    letter-spacing: 0.1em;
  }
`;
export const Button = styled.button`
  font-family: "Roboto";
  font-size: 12px;
  // font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.31em;
  text-transform: uppercase;
  box-sizing: border-box;
  background: #ffffff;
  border: 0px solid #000000;
  // box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52);

  color: #000000;
  /* identical to box height */

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
    transition: 0.7s;
    cursor: pointer;
  }
  display: flex;
  // align-items: right;
  text-align: center;
  letter-spacing: 0.31em;
  text-transform: uppercase;
  // background: green;
  width: 100%;
`;
// export const Container = styled.div`
//   // display: grid;
//   // grid-template-columns: repeat(5, 1fr);
//   // grid-template-rows: 1fr;
//   // grid-column-gap: 2rem;

//   padding: 1rem;
//   padding-left: 10rem;
//   padding-top: 2rem;
//   padding: 5 rem;
//   background: green;
//   flex-direction: row;

//   display: flex;
//   flex-wrap: wrap;
//   /* for horizontal aligning of child divs */
//   justify-content: center;
// `;

// export const Preview = styled.div`
//   // grid-area: 1 / span 2 / 2 / span 3;
//   display: flex;
//   // flex-direction: row;
//   align-content: center;
//   font-family: "Futura" !important;
//   font-size: 12px;
//   line-height: 14px;
//   letter-spacing: 0.31em;
//   text-transform: uppercase;
//   color: #000000;
//   padding-top: 20px;
//   padding-right: 20px;
//   padding-bottom: 20px;
//   padding-left: 200px;
//   background: cyan;
//   box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52) !important;
// `;

// export const Text = styled.div`
//   // grid-area: 1 / 3 / 2 / 5;
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   font-family: "SF Pro" !important;
//   font-size: 12px;
//   line-height: 14px;
//   letter-spacing: 0.31em;
//   text-transform: uppercase;
//   color: #000000;
//   padding-top: 20px;
//   padding-right: 20px;
//   padding-bottom: 20px;
//   padding-left: 20px;
//   // background: yellow;
//   box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52) !important;
// `;
// export const WorkSheet = styled.div`
//   flex-direction: column;
//   align-content: left;
//   font-family: "SF Pro" !important;
//   font-size: 12px;
//   line-height: 14px;
//   letter-spacing: 0.31em;
//   text-transform: uppercase;
//   color: #000000;
//   padding-top: 20px;
//   padding-right: 20px;
//   padding-bottom: 20px;
//   padding-left: 20px;
//   //   background: yellow;
// `;

// export const SubjectTitle = styled.h3`
//   font-family: "SF Pro" !important;
//   font-size: 20px;
//   line-height: 14px;
//   letter-spacing: 0.31em;
//   text-transform: uppercase;
//   color: #000000;
//   //   padding-top: 20px;
//   //   padding-right: 20px;
//   font-weight: 600;
//   //   padding-bottom: 20px;
//   //   padding-left: 20px;
//   //   background: yellow;
// `;
