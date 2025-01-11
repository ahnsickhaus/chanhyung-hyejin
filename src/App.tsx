import './App.css';
import { getApplicationForm } from './api/getApplicationForm';
import Type1 from './components/Type1';
import { useQuery } from '@tanstack/react-query';
import { ApplicationForm } from './types/applicationForm';
import { Couple } from './types/couple';
import { getCouple } from './api/getCouple';
import { Parents } from './types/parents';
import { getParents } from './api/getParents';
import { Directions } from './types/directions';
import { getDirections } from './api/getDirections';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import { useState } from 'react';
import { styled } from 'styled-components';
import thumnailUrl from './assets/images/thumnail.jpg';

interface ContainerProps {
  isIntro: boolean;
}
interface IntroProps {
  isIntro: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100dvw;
  height: ${props => props.isIntro ? '100dvh' : 'auto'};
  overflow-y: ${props => props.isIntro ? 'hidden' : 'auto'};
  position: relative;
`;

const Intro = styled.div<IntroProps>`
  width: 100dvw;
  height: 100dvh;
  overflow-y: hidden;
  position: relative;
  z-index: 1;
  opacity: ${props => props.isIntro ? 1 : 0};
  visibility: ${props => props.isIntro ? 'visible' : 'hidden'};
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
`;

const OPEN = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  padding: 8px 25px;
  color: #fff;
  border: 1px solid #fff;
  font-weight: bold;
`;
const WeddingCard = styled.div`
  position: absolute;
  top: 0;
`;

function App() {
  const path = "chanhyung-hyejin";
  
  const [isIntro, setIsIntro] = useState(true);

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

  return (
    <Container isIntro={isIntro}>
      <Intro isIntro={isIntro}>
        <img style={{width: '100%', height: '100%'}} src={thumnailUrl} alt='mainImage' />
        <OPEN onClick={() => {
          setIsIntro(false);
        }}>
          OPEN 💌
        </OPEN>
      </Intro>
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
      </WeddingCard>
    </Container>
  );
}

export default App;