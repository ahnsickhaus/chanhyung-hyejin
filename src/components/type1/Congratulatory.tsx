import styled from "styled-components";
import Section from "../common/Section";
import Title from "../common/Title";
import AccountComponent from "./AccountComponent";
import FadeInAnimation from "../common/FadeInAnimation";

interface CongratulatoryProps {
  groomAccount?: string;
  groomName: string;
  brideAccount?: string;
  brideName: string;
  groomFatherAccount?: string;
  groomFatherName?: string;
  groomMotherAccount?: string;
  groomMotherName?: string;
  brideFatherAccount?: string;
  brideFatherName?: string;
  brideMotherAccount?: string;
  brideMotherName?: string;
}

const SubTitle = styled.p`
  text-align: justify;
  border-bottom: 1px solid black;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 4px;
`

export default function Congratulatory({
  groomAccount,
  groomName,
  brideAccount,
  brideName,
  groomFatherAccount,
  groomFatherName,
  groomMotherAccount,
  groomMotherName,
  brideFatherAccount,
  brideFatherName,
  brideMotherAccount,
  brideMotherName,
}: CongratulatoryProps) {
  return (
    <Section backgroundColor="#FDF7E8">
      <div style={{height: '60px'}}></div>
      <Title>CONGRATULATORY</Title>
      <FadeInAnimation>
        <p style={{textAlign: 'center', fontSize: '12px'}}>축하의 마음을 전해주세요</p>
      </FadeInAnimation>
      {/* 신랑측 */}
      {
        (groomAccount || groomFatherAccount || groomMotherAccount) && (
          <FadeInAnimation>
            <div style={{marginTop: '30px'}}>
              <SubTitle>🤵🏻‍♂️ 신랑측</SubTitle>
              {
                groomAccount && (
                  <AccountComponent
                    name={groomName}
                    account={groomAccount}
                  />
                )
              }
              {
                (groomFatherAccount && groomFatherName) && (
                  <AccountComponent
                    name={groomFatherName}
                    account={groomFatherAccount}
                  />
                )
              }
              {
                (groomMotherAccount && groomMotherName) && (
                  <AccountComponent
                    name={groomMotherName}
                    account={groomMotherAccount}
                  />
                )
              }
            </div>
          </FadeInAnimation>
        )
      }
      
      {/* 신부측 */}
      {
        (brideAccount || brideFatherAccount || brideMotherAccount) && (
          <FadeInAnimation>
            <div style={{ paddingTop: '30px' }}>
              <SubTitle>👰🏻‍♀️ 신부측</SubTitle>
              {
                (brideAccount && brideName) && (
                  <AccountComponent
                    name={brideName}
                    account={brideAccount}
                  />
                )
              }
              {
                (brideFatherAccount && brideFatherName) && (
                  <AccountComponent
                    name={brideFatherName}
                    account={brideFatherAccount}
                  />
                )
              }
              {
                (brideMotherAccount && brideMotherName) && (
                  <AccountComponent
                    name={brideMotherName}
                    account={brideMotherAccount}
                  />
                )
              }
            </div>
          </FadeInAnimation>
        )
      }
    </Section>
  );
}