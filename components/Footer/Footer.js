import React from "react";
import { Container, Title, Information, Button } from "./FooterStyles";
import { ContactButton } from "../NavbarStyles";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <Container>
        <Title>Tutoring / How it Works</Title>
        <Information>
          All tutoring is done remotely. I use my iPad and Apple Pencil to share
          my screen with my student, while talking over Zoom. What most students
          do is send me the worksheet they want to do. I come up with additional
          problems for them to do as I find appropriate. My goal is not to help
          my students finish their homework as quickly as possible: it is to
          help them gain a deep understanding of the mathematics at hand and
          have fun while doing so. I have hand written challenging problem sets
          for students who are even more motivated to gain an even deeper
          understanding of mathematics. These can be downloaded for free in the
          student resources section of my site.
        </Information>
        <div style={{ paddingLeft: "29px" }}>
          <ContactButton
            onClick={() =>
              (window.location = "mailto:joshdavistutoring@gmail.com")
            }
          >
            Contact
          </ContactButton>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
