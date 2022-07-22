import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 800px) {
    padding-left: 0px;
    padding-right: 0px;
  }
  padding-left: 250px;
  padding-right: 250px;
  padding-top: 2rem;
  padding-bottom: 5rem;
  //   background: yellow;
`;

export const Title = styled.div`
  // font-family: "Roboto";

  font-size: 30px;
  line-height: 35px;
  /* identical to box height */
  padding: 2rem;
  text-transform: capitalize;
  color: #000000;
  //   background: cyan;
`;

export const Information = styled.div`
  // font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 189.9%;
  /* or 23px */
  padding: 2rem;
  // padding-right: 380px;

  text-align: justify;
  letter-spacing: 0.045em;
  // background: lightgreen;
  color: #000000;
`;
