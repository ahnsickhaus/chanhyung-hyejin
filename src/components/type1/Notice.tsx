import { styled } from "styled-components";
import Title from "../common/Title";
import Section from "../common/Section";
import FadeInAnimation from "../common/FadeInAnimation";

const Text = styled.p`
  white-space: pre-line;
  text-align: center;
  font-size: 14px;
`;

export default function Notice({
  notice
}: {
  notice: string
}) {
  return (
    <Section>
      <div style={{height: '60px'}}></div>
      <FadeInAnimation>
        <Title>NOTICE</Title>
        <Text>{notice}</Text>
      </FadeInAnimation>
    </Section>
  );
}