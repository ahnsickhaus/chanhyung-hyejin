import { styled } from "styled-components";
import Section from "../common/Section";

const Container = styled.div`
  text-align: center;
`;

const CoupleItem = styled.div`
  &:first-child {
    margin-bottom: 30px;
  }
`;

export default function CoupleInfo({
  groomName,
  brideName,
  groomFatherName,
  groomMotherName,
  brideFatherName,
  brideMotherName,
}: {
  groomName: string,
  brideName: string,
  groomFatherName?: string,
  groomMotherName?: string,
  brideFatherName?: string,
  brideMotherName?: string,
}) {
  return (
    <Section>
      <Container>
        <CoupleItem>
          <p>{groomFatherName}•{groomMotherName} 의 아들</p>
          <p>{groomName}</p>
        </CoupleItem>
        <CoupleItem>
          <p>{brideFatherName}•{brideMotherName} 의 딸</p>
          <p> {brideName}</p>
        </CoupleItem>
      </Container>
    </Section>
  );
}