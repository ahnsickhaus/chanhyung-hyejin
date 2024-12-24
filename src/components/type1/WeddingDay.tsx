import { styled } from "styled-components";
import Title from "../common/Title";
import Section from "../common/Section";
import calendarUrl from "../../assets/images/calendar.png";

const Text = styled.p`
  text-align: center;
`;

const Calendar = styled.img`
  width: 280px;
  margin: 0 auto;
  display: block;
`;

export default function WeddingDay({
  eventDate,
  eventTime,
}: {
  eventDate: string,
  eventTime: string
}) {
  return (
    <Section>
      <Title>WEDDING DAY</Title>
      <Text>{eventDate} {eventTime}</Text>
      <Calendar src={calendarUrl} />
    </Section>
  );
}