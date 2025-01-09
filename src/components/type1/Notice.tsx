import { styled } from "styled-components";
import Title from "../common/Title";
import Section from "../common/Section";

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
      <div data-aos="fade-up" data-aos-duration="1000">
        <Title>NOTICE</Title>
        <Text>{notice}</Text>
      </div>
    </Section>
  );
}