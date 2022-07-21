import React from "react";
import Image from "next/image";
import {
  Container,
  Preview,
  Text,
  SubjectTitle,
  WorkSheet,
  Card,
  Button,
} from "./SubjectCardStyles";
const SubjectCard = ({
  subject,
  img_filepath,
  sheet_filepath = "No_Download.pdf",
  download1_name = "No Available Download",
}) => {
  return (
    <Container>
      <Card>
        <Preview>
          {" "}
          <Image src={img_filepath} width={2732} height={2048} />
          {/* <Image src={filepath} layout="fill" /> */}
        </Preview>
        <Text>
          <SubjectTitle>{subject}</SubjectTitle>

          <WorkSheet>
            {" "}
            <Button>
              <a href={sheet_filepath} download>
                {download1_name}
              </a>
            </Button>
          </WorkSheet>
        </Text>
      </Card>
    </Container>
  );
};

export default SubjectCard;
