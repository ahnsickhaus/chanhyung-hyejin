import { styled } from "styled-components";
import Title from "../common/Title";
import Section from "../common/Section";

const Text = styled.p`
  white-space: pre-line;
  text-align: center;
`;

export default function Notice({
  notice
}: {
  notice: string
}) {
  return (
    <Section>
      <Title>NOTICE</Title>
      <Text>{notice}</Text>
    </Section>
  );
}