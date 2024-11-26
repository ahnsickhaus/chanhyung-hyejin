import { styled } from "styled-components";
import Title from "../common/Title";
import Section from "../common/Section";

const Text = styled.p`
  text-align: center;
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
    </Section>
  );
}