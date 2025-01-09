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
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;

const Description = styled.p`
  text-align: center;
  white-space: pre-line;
  font-size: 12px;
`;

const LocationBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 40px;
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
      <div style={{height: '60px'}}></div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Title>LOCATION</Title>   
        <p style={{textAlign: 'center', fontSize: '12px'}}>오시는 길을 안내해드립니다.</p>
        <LocationBox>
          <p>{address}</p>
          <p>{place}</p>
        </LocationBox>
      </div>
      <Map latitude={37.38237} longitude={127.1014} />
      {
        car && (
          <div style={{  marginBottom: '20px' }}>
            <Way>자가용</Way>
            <Description style={{ whiteSpace: 'pre-line' }}>{car}</Description>
          </div>
        )
      }
      {
        subway && (
          <div style={{  marginBottom: '20px' }}>
            <Way>지하철</Way>
            <Description style={{ whiteSpace: 'pre-line' }}>{subway}</Description>
          </div>
        )
      }
      {
        bus && (
          <div style={{  marginBottom: '20px' }}>
            <Way>버스</Way>
            <Description style={{ whiteSpace: 'pre-line' }}>{bus}</Description>
          </div>
        )
      }
      {
        taxi && (
          <div style={{  marginBottom: '20px' }}>
            <Way>택시</Way>
            <Description style={{ whiteSpace: 'pre-line' }}>{taxi}</Description>
          </div>
        )
      }
    </Section>
  );
}