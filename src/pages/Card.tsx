import { getApplicationForm } from '../api/getApplicationForm';
import Type1 from '../components/Type1';
import { useQuery } from '@tanstack/react-query';
import { ApplicationForm } from '../types/applicationForm';
import { Couple } from '../types/couple';
import { getCouple } from '../api/getCouple';
import { Parents } from '../types/parents';
import { getParents } from '../api/getParents';
import { Directions } from '../types/directions';
import { getDirections } from '../api/getDirections';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import endingImage from '../assets/images/ending.jpg';

const Container = styled.div<{ $isLoaded: boolean }>`
  width: 100dvw;
  height: 100dvh;
  position: relative;
  opacity: ${({$isLoaded}) => ($isLoaded ? 1 : 0)};
  visibility: ${({$isLoaded}) => ($isLoaded ? "visible" : "hidden")};
  transition: opacity 0.6s ease-out, visibility 0.6s ease-out;
`;

const WeddingCard = styled.div`
  position: absolute;
  top: 0;
  @media (min-width: 500px) {
    left: calc(50% - 250px);
  }
`;

const EndingImage = styled.img`
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto;
`;

const Share = styled.button`
  margin: 0 auto 30px;
  padding: 8px 30px;
  font-size: 13px;
  background-color: #333333;
  color: #fff;
  border-radius: 25px;
  cursor: pointer;
  display: block;
`;

declare global {
  interface Window {
    Kakao: any; // Kakao의 타입을 정확하게 알면, any 대신 적절한 타입을 사용합니다.
  }
}

function App() {
  const path = "chanhyung-hyejin";
  const [isLoaded, setIsLoaded] = useState(false); // Fade-in 상태 관리

  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      kakao.Share.createCustomButton({
        container: '#kakaotalk-sharing-btn',
        templateId: 116393,
      });
    }
    
  }

  const { data: applicationForm, isLoading: applicationFormIsLoading } = useQuery<ApplicationForm[] | null>({
    queryKey: ["applicationForm", { path: path }],
    queryFn: () => getApplicationForm(path),
  });

  const coupleId = applicationForm && applicationForm[0].couple_id;
  const parentsId = applicationForm && applicationForm[0].parents_id;
  const directionsId = applicationForm && applicationForm[0].directions_id;

  const { data: couple, isLoading: coupleIsLoading } = useQuery<Couple[] | null>({
    queryKey: ["couple", { id: coupleId }],
    queryFn: () => getCouple(coupleId as number),
    enabled: !!coupleId,
  });

  const { data: parents, isLoading: parentsIsLoading } = useQuery<Parents[] | null>({
    queryKey: ["parents", { id: parentsId }],
    queryFn: () => getParents(parentsId as number),
    enabled: !!parentsId,
  });

  const { data: directions, isLoading: directionsIsLoading } = useQuery<Directions[] | null>({
    queryKey: ["directions", { id: directionsId }],
    queryFn: () => getDirections(directionsId as number),
    enabled: !!directionsId,
  });

  useEffect(() => {
    // 데이터 로드 완료 후 fade-in 활성화
    if (
      !applicationFormIsLoading &&
      !coupleIsLoading &&
      !parentsIsLoading &&
      !directionsIsLoading
    ) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 100); // 약간의 지연을 추가하여 자연스러운 fade-in
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("4c6ee9bf93490c29dc7ea70a7d4b2eba");
    }
    
  }, [applicationFormIsLoading, coupleIsLoading, parentsIsLoading, directionsIsLoading]);

  return (
    <Container $isLoaded={isLoaded}>
      <WeddingCard>
        {
          (applicationFormIsLoading || coupleIsLoading || parentsIsLoading || directionsIsLoading) && (
            <div>Loading...</div>
          )
        }
        {
          (applicationForm && couple && parents && directions) && (
            applicationForm[0].type === 1 && (
              <Type1 
                applicationForm={applicationForm[0]} 
                couple={couple[0]}
                parents={parents[0]}
                directions={directions[0]}
              />
            )
            // applicationForm[0].type === 2 && (
            //   <Type2 applicationForm={applicationForm[0]} />
            // )
          )
        }
        <Share id='kakaotalk-sharing-btn' onClick={shareKakao}>공유하기</Share>
        <EndingImage src={endingImage} alt='ending' />
      </WeddingCard>
    </Container>
  );
}

export default App;