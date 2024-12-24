import { styled } from "styled-components";
import Section from "../common/Section";

const Container = styled.div`
  text-align: center;
  padding-top: 60px;
`;

const CoupleItem = styled.div`
  &:first-child {
    margin-bottom: 10px;
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
    <Section backgroundColor="#FDF7E8">
      <Container>
        <CoupleItem>
          <p>{groomFatherName}•{groomMotherName} 의 장남 <b>{groomName}</b></p>
        </CoupleItem>
        <CoupleItem>
          <p>{brideFatherName}•{brideMotherName} 의 장녀 <b>{brideName}</b></p>
        </CoupleItem>
      </Container>
    </Section>
  );
}