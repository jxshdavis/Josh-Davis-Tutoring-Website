import styled from "styled-components";

export const HeaderContainer = styled.div`
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
  }
  padding: 1rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  // background: yellow;
  //   box-shadow: 0px 4px 34px -19px rgba(158, 182, 204, 0.52);
`;

export const HeadShot = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  @media only screen and (max-width: 900px) {
    grid-area: 2 / span 2 / 3 / 3;
  }
  // display: flex;
  // flex-direction: row;
  align-content: center;
  //   vertical-align: center;
  //   background: url(3R7A0044.jpg);
  //   border-radius: 152.5px;
  //   border-radius: 400px;
  // background: cyan !important;
`;
export const BioDiv = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  @media only screen and (max-width: 900px) {
    grid-area: 2 / 3 / 3 / 5;
  }
  display: flex;
  flex-direction: row;
  align-content: left // background: red !important;
    padding 1rem;
`;
export const TutoringBioDiv = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  @media only screen and (max-width: 900px) {
    grid-area: 2 / 5 / 3 / span 6;
  }
  display: flex;
  flex-direction: row;
  align-content: left // background-color: green;
    padding 1rem;
`;
