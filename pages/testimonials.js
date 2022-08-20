import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ExpandedTestimonials from "../components/ExpandedTestimonials/ExpandedTestimonials";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
  font-family: "Roboto", sans-serif;
  // weight: 800;
`;
const testimonials = () => {
  return (
    <Container>
      <Navbar />
      <ExpandedTestimonials />
    </Container>
  );
};

export default testimonials;
