import React from "react";
import {
  Title,
  GridContainer,
  Card,
  Quote,
  Signature,
  Container,
} from "./ExpandedTestimonialsStyles";

const ExpandedTestimonials = () => {
  return (
    <Container>
      <Title>Testimonials</Title>
      <GridContainer>
        <Card>
          <Quote>
            “Josh is an incredibly patient and passionate math tutor! Not only
            is he so excited to get to talk about a subject that is meaningful
            to him, he paid close attention to questions I had and ensured a
            deep, conceptual understanding of calculus, all in a short amount of
            time. I couldn’t recommend working with Josh enough if you want to
            really grasp math from a deeper level!”
          </Quote>
          <Signature>-Sarah Feng, Student</Signature>
        </Card>
        <Card>
          <Quote>
            “Josh Davis is an exceptional teacher! He has tutored my daughter in
            both Precalculus and Physics. She says Josh explains complicated
            topics in a really clear way, making the them easy for her to
            understand. He patiently goes through problems, shows why the
            solution works and helps her achieve a deeper understanding of the
            material. It’s clear Josh really loves math and science. Beyond
            greater understanding, my daughter has gained a great deal of
            confidence through her work with Josh. She feels prepared to take
            Calculus next year and will work with Josh again. My daughter has
            found Josh to be very easy to work with on zoom while he’s away at
            college. He’s been flexible with scheduling an extra meeting when a
            test is coming up, even when he’s in the middle of his own exams, or
            rescheduling when she’s had a conflict. Josh also provides very
            clear communication about how the sessions are going. In addition to
            being brilliant, Josh is just plain nice. We feel very lucky to work
            with him!”
          </Quote>
          <Signature>- Jill Hugues, Parent</Signature>
        </Card>
        <Card>
          <Quote>
            “Josh is a very patient tutor. He explains my calculus problems
            super well so that I really understand the concept instead of just
            memorizing stuff. I feel like he really gets what I’m saying when I
            ask questions and he always makes sure I understand everything
            before moving on to the next concept. I always get a lot done every
            session with Josh and would definitely recommend him. &quote;
          </Quote>
          <Signature>-Luca, Student</Signature>
        </Card>
      </GridContainer>
    </Container>
  );
};

export default ExpandedTestimonials;
