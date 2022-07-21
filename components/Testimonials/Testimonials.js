import React from "react";

import {
  Container,
  Title,
  CardContainer,
  Card1,
  Card2,
  Card3,
  Quote,
  Signature,
} from "./TestimonialsStyles";
const Testimonials = () => {
  return (
    <Container>
      <Title>Testimonials</Title>
      <CardContainer>
        <Card1>
          <Quote>
            “Josh is great. I know math now. it’s prettty darn cool”
          </Quote>
          <Signature>-Student</Signature>
        </Card1>
        <Card2>
          <Quote>
            “Josh is great. I know math now. it’s prettty darn cool”
          </Quote>
          <Signature>-Student</Signature>
        </Card2>
        <Card3>
          <Quote>
            “Josh is great. I know math now. it’s prettty darn cool”
          </Quote>
          <Signature>-Student</Signature>
        </Card3>
      </CardContainer>
    </Container>
  );
};

export default Testimonials;
