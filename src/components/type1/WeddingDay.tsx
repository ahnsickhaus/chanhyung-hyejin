import { styled } from "styled-components";
import Title from "../common/Title";
import Section from "../common/Section";
import calendarUrl from "../../assets/images/calendar.png";

const Text = styled.p`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
`;

const Calendar = styled.img`
  width: 280px;
  margin: 0 auto;
  display: block;
`;

const CalendarTitle = styled.p`
  text-align: center;
  font-family: "Voltaire Frangela";
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 15px;
`;

export default function WeddingDay({
  eventDate,
  eventTime,
  eventPlace,
  eventAddress,
}: {
  eventDate: string,
  eventTime: string,
  eventPlace: string,
  eventAddress: string,
}) {
  return (
    <Section>
      <div style={{height: '60px'}}></div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Title>WEDDING DAY</Title>
        <Text><b>{eventDate} {eventTime}</b></Text>
        <Text>{eventPlace}</Text>
        <Text>{eventAddress}</Text>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <CalendarTitle>3 MARCH</CalendarTitle>
        <Calendar src={calendarUrl} />
      </div>
    </Section>
  );
}