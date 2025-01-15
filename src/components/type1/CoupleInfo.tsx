import { styled } from "styled-components";
import Section from "../common/Section";

const Container = styled.div`
  text-align: center;
  padding-top: 60px;
  font-family: "Noto Sans KR", serif;
  font-size: 14px;
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
          <p>{groomFatherName}<span style={{margin: '0 8px'}}>{groomMotherName}의</span>장남<b style={{marginLeft: '8px'}}>{groomName}</b></p>
        </CoupleItem>
        <CoupleItem>
          {
            brideFatherName && (
              <p>{brideFatherName.slice(0, 1)}<span style={{opacity: 0}}>주</span>{brideFatherName.slice(1, 2)}<span style={{margin: '0 8px'}}>{brideMotherName}의</span>장녀<b style={{marginLeft: '8px'}}>{brideName}</b></p>
            )
          }
        </CoupleItem>
      </Container>
    </Section>
  );
}