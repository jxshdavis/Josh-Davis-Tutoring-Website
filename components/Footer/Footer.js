import React from "react";
import { Container, Title, Information } from "./FooterStyles";
import { ContactButton } from "../NavbarStyles";
const Footer = () => {
  return (
    <div>
      <Container>
        <Title>Tutoring / How it Works</Title>
        <Information>
          Info about tutoring sessions: bio second thing for now is that I am
          traveling for the first part of this week and will be posting further
          content once I am back - for now, the syllabus is posted, and I have
          already uploaded some assignments for the course. If you would like to
          get started on i also offer study resources like practice problems and
          video tutorials on my website! Feel free to reach out for ...
        </Information>
        <div style={{ paddingLeft: "29px" }}>
          <ContactButton>Contact</ContactButton>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
