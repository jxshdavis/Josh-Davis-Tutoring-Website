import styled from "styled-components";

export const Container = styled.div`
  // padding-left: 316px;
  padding-top: 2rem;
  padding-bottom: 5rem;
  // background: lightgreen;
`;

export const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 1000;
  font-size: 30px;
  line-height: 35px;
  /* identical to box height */
  padding: 2rem;
  text-transform: capitalize;
  color: #000000;
  // background: cyan;
`;

export const Information = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 189.9%;
  /* or 23px */
  padding: 3rem;
  // padding-right: 380px;

  text-align: justify;
  letter-spacing: 0.045em;

  // background: pink;
`;

export const Button = styled.button`
  box-sizing: border-box;
  background: #ffffff;
  border: 0px solid #000000;
  // box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52);

  color: #000000;
  /* identical to box height */
  &:hover {
    opacity: 0.9;
    text-color: blue;
    // transform: scale(1.1);
    transition: 0.7s;
    cursor: pointer;
  }
  // display: flex;
  // align-items: right;

  // background: green;
  width: 150%;
`;
