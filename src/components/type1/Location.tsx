import Map from "./Map";
import { styled } from "styled-components";
import Section from "../common/Section";
import Title from "../common/Title";
import { Directions } from "../../types/directions";
import FadeInAnimation from "../common/FadeInAnimation";
import tmapLogoUrl from '../../assets/images/tmapLogo.png';
import navermapLogoUrl from '../../assets/images/navermapLogo.png';
import kakaomapLogoUrl from '../../assets/images/kakaomapLogo.png';
import MapButton from "./MapButton";

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

const MapButtonList = styled.div`
  display: flex;
  border: 1px solid #DEDEDE;
  border-radius: 6px;
  margin-top: 40px;
`;

const Divider = styled.div`
  width: 1px;
  background-color: #DEDEDE;
  height: 48px;
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
      <div style={{padding: '0 10px'}}>
        <div style={{height: '60px'}}></div>
        <div>
          <Title>LOCATION</Title>
          <FadeInAnimation>
            <p style={{textAlign: 'center', fontSize: '12px'}}>오시는 길을 안내해드립니다</p>
          </FadeInAnimation>
          <FadeInAnimation>
            <LocationBox>
              <p>{address}</p>
              <p>{place}</p>
            </LocationBox>
          </FadeInAnimation>
        </div>
        <Map latitude={37.38237} longitude={127.1014} />
        {
          car && (
            <FadeInAnimation>
              <div style={{  marginBottom: '20px' }}>
                <Way>자가용</Way>
                <Description style={{ whiteSpace: 'pre-line' }}>{car}</Description>
              </div>
            </FadeInAnimation>
          )
        }
        {
          subway && (
            <FadeInAnimation>
              <div style={{  marginBottom: '20px' }}>
                <Way>지하철</Way>
                <Description style={{ whiteSpace: 'pre-line' }}>{subway}</Description>
              </div>
            </FadeInAnimation>
          )
        }
        {
          bus && (
            <FadeInAnimation>
              <div style={{  marginBottom: '20px' }}>
                <Way>버스</Way>
                <Description style={{ whiteSpace: 'pre-line' }}>{bus}</Description>
              </div>
            </FadeInAnimation>
          )
        }
        {
          taxi && (
            <FadeInAnimation>
              <div style={{  marginBottom: '20px' }}>
                <Way>택시</Way>
                <Description style={{ whiteSpace: 'pre-line' }}>{taxi}</Description>
              </div>
            </FadeInAnimation>
          )
        }
        <MapButtonList>
          <MapButton iconUrl={tmapLogoUrl} name='TMAP' />
          <Divider></Divider>
          <MapButton iconUrl={navermapLogoUrl} name='네이버' />
          <Divider></Divider>
          <MapButton iconUrl={kakaomapLogoUrl} name='카카오' />
        </MapButtonList>
        <p style={{
          color: '#8B8B8B',
          fontFamily: 'Noto Sans KR',
          fontSize: '12px',
          textAlign: 'center',
          marginTop: '8px'
        }}>버튼을 누르시면 지도 앱으로 연결됩니다.</p>
      </div>
    </Section>
  );
}