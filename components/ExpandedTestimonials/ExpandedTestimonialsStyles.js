import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
`;

export const Grid = styled.div`
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
  // color: blue;
  // background: blue;
  padding-bottom: 2rem;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const Card = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const Quote = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 13px;
  line-height: 189.9%;
  align-content: center;
  /* or 38px */
  padding: 2rem;

  text-align: center;
  text-align: center;
  // background-color: blue;
  color: #000000;
`;
export const Signature = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 189.9%;
  align-content: center;
  /* or 38px */
  padding-bottom: 10px;
  text-align: center;
  text-align: center;
  // background-color: blue;
  color: #000000;
`;
