import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    // padding-right: 0;
    grid-column-gap: 0rem;
    // align-content: center;
  }
  padding: 1rem;
  padding-top: 2rem;
  background: #ffffff;
  box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52) !important;
`;

export const Title = styled.span`
  // grid-area: 1 / 1 / 2 / span 4;

  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: row;
  align-content: center;
  text-align: right;
  font-family: "Futura" !important;
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
    // grid-area: 1 / 1 / 2 / 3;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    align-content: center;
    justify-content: center;git
    text-align: center;
  }

  // background: cyan;
`;

export const Div2 = styled.div`
  // grid-area: span 1 / 5 / 2 / span 5;
  grid-area: 1 / 4 / 2 / span 5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Futura";
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.31em;
  text-transform: uppercase;
  padding: 0rem;
  // background: blue;
  color: #000000;
`;
export const Div3 = styled.div`
  grid-area: 1 / 7 / 2 / span 7;
  // grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;

  // font-family: "Futura";
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.31em;
  text-transform: uppercase;
  padding: 1rem;
  // background: lightgreen;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
  // color: #000000;
`;

export const Div4 = styled.div`
  // grid-area: 1 / 7 / 2 / span 7;
  grid-area: 1 / 4 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // font-family: "Futura";
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 0.31em;
  text-transform: uppercase;
  // background: red;
  // color: #000000;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContactButton = styled.button`
  // box-sizing: border-box;

  // background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);

  // box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);

  background: #ffffff;
  border: 1px solid #000000;
  // box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52);
  border-radius: 11px;

  font-family: "Futura";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  /* identical to box height */

  &:hover {
    opacity: 0.9;
    transform: scale(1.3);
    transition: 0.7s;
    color: #ffffff;
    background-image: linear-gradient(
      to right,
      #f5ce62,
      #e43603,
      #fa7199,
      #e85a19
    );
    border: none;
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.31em;
  text-transform: uppercase;
  width: 100px;
  height: 30px;
`;

export const Button = styled.button`
  font-family: "Futura" !important;
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
  // display: flex;
  // align-items: right;
  text-align: center;
  letter-spacing: 0.31em;
  text-transform: uppercase;
  // background: green;
  width: 150%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    // display: flex;
    // align-items: center;
    text-align: cenrer;
    justify-content: center;
    letter-spacing: 0.29em;
  }
`;
