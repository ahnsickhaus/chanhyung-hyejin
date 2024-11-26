import styled from "styled-components";
import Section from "../common/Section";
import Title from "../common/Title";
import AccountComponent from "./AccountComponent";

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
    <Section>
      <Title>마음 전하실 곳</Title>
      {/* 신랑측 */}
      {
        (groomAccount || groomFatherAccount || groomMotherAccount) && (
          <div>
            <SubTitle>🩵 신랑측 계좌번호</SubTitle>
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
        )
      }
      
      {/* 신부측 */}
      {
        (brideAccount || brideFatherAccount || brideMotherAccount) && (
          <div style={{ paddingTop: '30px' }}>
            <SubTitle>🩷 신부측 계좌번호</SubTitle>
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
        )
      }
    </Section>
  );
}