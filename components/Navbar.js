import React from "react";
import Link from "next/link";

import {
  Container,
  Title,
  Div2,
  Div3,
  Div4,
  ContactButton,
  Button,
} from "./NavbarStyles";
const Navbar = () => {
  return (
    <Container>
      <Title>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link href="/">
              <Button>Josh Davis Tutoring</Button>
            </Link>
          </li>
        </ul>
      </Title>
      {/* <Div4> */}
      <Div2>
        {/* <Button>
          <ul style={{ listStyle: "none", justifyContent: "center" }}>
            <li style={{ justifyContent: "center" }}>
              <Link
                style={{ justifyContent: "center" }}
                href="/studentresources"
              >
                Student Resources
              </Link>
            </li>
          </ul>
        </Button> */}

        <ul style={{ listStyle: "none" }}>
          <li>
            <Link href="/studentresources">
              <Button>Student Resources</Button>
            </Link>
          </li>
        </ul>
      </Div2>

      <Div3>
        <ContactButton
          onClick={() => (window.location = "mailto:josh.a.davis456@gmail.com")}
        >
          Contact
        </ContactButton>
      </Div3>
      {/* </Div4> */}
    </Container>
  );
};

export default Navbar;
