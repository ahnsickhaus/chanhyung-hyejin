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
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import thumnailUrl from './assets/images/thumnail.jpg';

interface IntroProps {
  $isVisible: boolean;
}
interface WeedingCardProps {
  $isVisible: boolean;
}

const Intro = styled.div<IntroProps>`
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.8s ease-out, visibility 0.8s ease-out;
  position: fixed;
  top: 0;
  left: 0;
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
const WeddingCard = styled.div<WeedingCardProps>`
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.5s ease-in;
  transition-delay: 0.5s;
`;

function App() {
  const path = "chanhyung-hyejin"

  
  useEffect(() => {
    AOS.init();
  },[])
  
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
    <div>
      <Intro $isVisible={isIntro}>
        <img style={{width: '100dvw', height: '100dvh'}} src={thumnailUrl} />
        <OPEN onClick={() => {
          setIsIntro(false);
        }}>
          OPEN 💌
        </OPEN>
      </Intro>

    {
      !isIntro && (
        <WeddingCard $isVisible={!isIntro}>
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
      )
    }
    </div>
  );
}

export default App;