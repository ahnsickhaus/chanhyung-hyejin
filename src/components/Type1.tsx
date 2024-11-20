import CoupleInfo from "./type1/CoupleInfo";
import Gallery from "./type1/Gallery";
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
    <>
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
        place={applicationForm.place}
        address={applicationForm.address}
      />
      <Gallery />
      <Location 
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
    </>
  );
}