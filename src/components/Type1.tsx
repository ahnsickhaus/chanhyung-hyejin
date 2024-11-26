import CoupleInfo from "./type1/CoupleInfo";
import Gallery from "./type1/Exhibition";
import IntroImage from "./type1/IntroImage";
import MainImage from "./type1/MainImage";
import WeddingDay from "./type1/WeddingDay";
import Location from "./type1/Location";
import Congratulatory from "./type1/Congratulatory";
import Notice from "./type1/Notice";
import { ApplicationForm } from "../types/applicationForm";
import Phrase from "./type1/Phrase";
import { Couple } from "../types/couple";
import { Parents } from "../types/parents";
import { Directions } from "../types/directions";
import styled from "styled-components";

const Type1Container = styled.div`
  font-family: var(--font-pretendard);
  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;
  background-color: #e8e8de;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export default function Type1({
  applicationForm,
  couple,
  parents,
  directions,
}: {
  applicationForm: ApplicationForm;
  couple: Couple;
  parents: Parents;
  directions: Directions;
}) {
  return (
    <Type1Container>
      <IntroImage />
      <Phrase 
        phrase={applicationForm.phrase} 
      />
      <MainImage />
      <CoupleInfo
        groomFatherName={parents.groom_father_name}
        groomMotherName={parents.groom_mother_name}
        groomName={couple.groom_name}
        brideFatherName={parents.bride_father_name}
        brideMotherName={parents.bride_mother_name}
        brideName={couple.bride_name}
      />
      <WeddingDay 
        eventDate={applicationForm.event_date}
        eventTime={applicationForm.event_time}
      />
      <Gallery />
      <Location 
        place={applicationForm.place}
        address={applicationForm.address}
        subway={directions.subway}
        bus={directions.bus}
        car={directions.car}
        taxi={directions.taxi}
      />
      <Congratulatory 
        groomFatherName={parents.groom_father_name}
        groomMotherName={parents.groom_mother_name}
        brideFatherName={parents.bride_father_name}
        brideMotherName={parents.bride_mother_name}
        groomName={couple.groom_name}
        brideName={couple.bride_name}
        groomAccount={parents.groom_father_account}
        groomFatherAccount={parents.groom_father_account}
        groomMotherAccount={parents.groom_mother_account}
        brideAccount={parents.bride_father_account}
        brideFatherAccount={parents.bride_father_account}
        brideMotherAccount={parents.bride_mother_account}
      />
      <Notice
        notice={applicationForm.notice}
      />
    </Type1Container>
  );
}