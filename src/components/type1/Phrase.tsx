import styled from "styled-components";
import Section from "../common/Section";
import chanhyungHeartUrl from "../../assets/images/chanhyung_heart.png";
import hyejinHeartUrl from "../../assets/images/hyejin_heart.png";

const Text = styled.p`
  white-space: pre-line;
  text-align: center;
  padding: 20px 0;
`;

const HeartIcon = styled.img`
  width: 30px;
  margin: 0 auto;
  display: block;

  &:last-child {
    width: 34px;
  }
`;

export default function Phrase({
  phrase
}: {
  phrase: string
}) {
  return (
    <Section backgroundColor="#FDF7E8">
      <HeartIcon src={hyejinHeartUrl} />
      <Text>{phrase}</Text>
      <HeartIcon src={chanhyungHeartUrl} />
    </Section>
  );
}