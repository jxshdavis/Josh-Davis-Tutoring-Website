import React from "react";
import Link from "next/link";
import {
  Container,
  Title,
  CardContainer,
  Card1,
  Card2,
  Card3,
  Quote,
  Signature,
  Expanded_Card,
  Footer,
  Button,
} from "./TestimonialsStyles";

const Testimonials = () => {
  return (
    <Container>
      <Title>Testimonials</Title>
      <CardContainer>
        <Card1>
          <Quote>
            “Josh is a very patient tutor. He always makes sure I understand
            everything before moving on to the next concept...”
          </Quote>
          <Signature>-Luca, Student</Signature>
        </Card1>
        <Card2>
          <Quote>
            “Josh is an incredibly patient and passionate math tutor! Not only
            is he so excited...”
          </Quote>
          <Signature>-Sarah Feng, Student</Signature>
        </Card2>
        <Card3>
          <div style={{ zIndex: 0 }}>
            <Quote>
              “Josh Davis is an exceptional teacher! He has tutored my daughter
              in both Precalculus and Physics..."
            </Quote>
            <Signature> - Jill, Parent</Signature>
          </div>
        </Card3>
      </CardContainer>
      <Footer>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link href="/testimonials">
              <Button>Read More</Button>
            </Link>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default Testimonials;
