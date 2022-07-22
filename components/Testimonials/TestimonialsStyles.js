import styled from "styled-components";

export const Container = styled.div`
  background: rgba(204, 239, 233, 0.16);
`;

export const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: 1000;
  padding: 50px;
  /* identical to box height */
  text-align: center;

  text-transform: capitalize;
  color: #000000;
  //   color: blue;
  backgroud: yellow;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3rem;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    // padding-right: 0;
  }
  // padding: 1rem;
  // padding-top: 6rem;
  // padding-bottom: 6rem;
  // background: yellow;
  //   box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52);
`;

export const Card1 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: "Roboto", sans-serif;
  // line-height: 14px;
  // letter-spacing: 0.31em;
  // text-transform: uppercase;
  color: #000000;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  // background: cyan;
`;
export const Card2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: "Roboto", sans-serif;
  // line-height: 14px;
  // letter-spacing: 0.31em;
  // text-transform: uppercase;
  color: #000000;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  // background: cyan;
`;

export const Card3 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: "Roboto", sans-serif;
  // line-height: 14px;
  // letter-spacing: 0.31em;
  // text-transform: uppercase;
  color: #000000;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  // background: cyan;
`;

export const Quote = styled.div`
  // font-family: "Roboto";
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 189.9%;
  align-content: center;
  /* or 38px */

  text-align: center;
  text-align: center;
  // background-color: blue;
  color: #000000;
`;

export const Signature = styled.div`
  // font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 189.9%;
  align-content: center;
  /* or 38px */

  text-align: center;
  text-align: center;
  // background-color: blue;
  color: #000000;
`;
