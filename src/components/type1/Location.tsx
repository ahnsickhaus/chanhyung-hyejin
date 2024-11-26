import Map from "./Map";
import { styled } from "styled-components";
import Section from "../common/Section";
import Title from "../common/Title";
import { Directions } from "../../types/directions";

interface LocationProps {
  place: string,
  address: string
}

const Way = styled.p`
  text-align: justify;
  font-weight: bold;
`;

const Description = styled.p`
  text-align: justify;
  white-space: pre-line;
  font-size: 15px;
`;

const LocationBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 15px;
`;

export default function Location({
  place,
  address,
  subway,
  bus,
  car,
  taxi
}: LocationProps & Directions) {
  return (
    <Section>
      <Title>오시는 길</Title>  
      <LocationBox>
        <p>{address}</p>
        <p>{place}</p>
      </LocationBox>
      <Map latitude={37.38237} longitude={127.1014} />
      {
        car && (
          <div style={{  marginBottom: '20px' }}>
            <Way>자가용</Way>
            <Description style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>{car}</Description>
          </div>
        )
      }
      {
        subway && (
          <div style={{  marginBottom: '20px' }}>
            <Way>지하철</Way>
            <Description style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>{subway}</Description>
          </div>
        )
      }
      {
        bus && (
          <div style={{  marginBottom: '20px' }}>
            <Way>버스</Way>
            <Description style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>{bus}</Description>
          </div>
        )
      }
      {
        taxi && (
          <div style={{  marginBottom: '20px' }}>
            <Way>택시</Way>
            <Description style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>{taxi}</Description>
          </div>
        )
      }
    </Section>
  );
}