import { styled } from "styled-components";
import Title from "../common/Title";
import Section from "../common/Section";

const Text = styled.p`
  text-align: center;
`;

export default function WeddingDay({
  eventDate,
  eventTime,
  place,
  address
}: {
  eventDate: string,
  eventTime: string,
  place: string,
  address: string
}) {
  return (
    <Section>
      <Title>WEDDING DAY</Title>
      <Text>{eventDate} {eventTime}</Text>
      <Text>{place}</Text>
      <Text>{address}</Text>
    </Section>
  );
}