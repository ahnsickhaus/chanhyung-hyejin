import { styled } from "styled-components";
import Section from "../common/Section";

const Container = styled.div`
  text-align: center;
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
        <div>
          <p>{groomFatherName}•{groomMotherName} 의 아들 {groomName}</p>
        </div>
        <div>
          <p>{brideFatherName}•{brideMotherName} 의 딸 {brideName}</p>
        </div>
      </Container>
    </Section>
  );
}