import React from "react";
import Image from "next/image";
import Bio from "./Bio/Bio.js";
import TutoringBio from "./TutoringBio/TutoringBio.js";
import {
  HeaderContainer,
  HeadShot,
  BioDiv,
  TutoringBioDiv,
} from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeadShot>
        <Image src="/headshotcircle.png" width={305} height={305} />
      </HeadShot>
      <BioDiv>
        <Bio />
      </BioDiv>
      <TutoringBioDiv>
        <TutoringBio />
      </TutoringBioDiv>
    </HeaderContainer>
  );
};

export default Header;
