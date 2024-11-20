import { Couple } from "../../types/couple";
import { Parents } from "../../types/parents";
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
      <Title>CONGRATULATORY</Title>
      {/* 신랑측 */}
      {
        (groomAccount || groomFatherAccount || groomMotherAccount) && (
          <div>
            <p style={{ textAlign: 'justify', borderBottom: '1px solid black' }}>신랑측 계좌번호</p>
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
            <p style={{ textAlign: 'justify', borderBottom: '1px solid black' }}>신부측 계좌번호</p>
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