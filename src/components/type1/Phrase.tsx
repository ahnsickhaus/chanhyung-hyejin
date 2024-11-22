import styled from "styled-components";
import Section from "../common/Section";

const Text = styled.p`
  white-space: pre-line;
  text-align: center;
`;

export default function Phrase({
  phrase
}: {
  phrase: string
}) {
  return (
    <Section>
      <Text>{phrase}</Text>
    </Section>
  );
}